import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {DocumentService} from '../../services/document.service';
import {UploadService} from '../../services/upload.service';
import {DocumentsModal} from '../manage-documents/DocumentsModal';
import {DataTableDirective} from 'angular-datatables';
import {PaModalService} from '../Shared/pa-modal/pa-modal.service';

@Component({
    selector: 'estimate-documents',
    templateUrl: './estimate-document.component.html',
    styleUrls: ['./estimate-document.component.scss']
})
export class EstimateDocumentComponent implements OnInit {


    btnName = 'Upload document';
    documentForm: FormGroup;
    loading = false;
    submitted = false;
    itemId: number;
    documentId: number;
    fileName: string;
    fileList: FileList;
    dtOptions: DataTables.Settings = {};
    documentOptions: {};
    organizationId: number;
    documents: DocumentsModal[];
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    errors: Array<string> = [];
    fileExt: string = 'PDF, JPG, GIF, PNG';
    maxFiles: number = 5;
    maxSize: number = 5; // 5MB
    uploadStatus = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpDocumentService: DocumentService,
        private uploadService: UploadService,
        private modalService: PaModalService,
    ) {
    }

    ngOnInit() {

        this.buildForm();
        this.documentId = 0;
        this.itemId = Number(localStorage.getItem('itemId'));
        this.documentId = Number(localStorage.getItem('documentId'));

        if (this.documentId > 0) {
            this.btnName = 'Update';
            this.getDocumentDetail(this.documentId);

        }
        this.bindDocumentTables();
    }

    buildForm() {
        this.documentForm = this.formBuilder.group({
                ItemId: [localStorage.getItem('itemId')],
                DocumentId: [this.documentId],
                DocCaption: ['', Validators.required],
                DocPath: ['', Validators.required],
            }
        );
    }

    bindDocumentTables(): void {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.documentOptions = {
                    estimateId: localStorage.getItem('estimateId'),
                };
                dataTablesParameters.documentOptions = this.documentOptions;
                this.httpDocumentService.get(dataTablesParameters).subscribe(resp => {
                    this.documents = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{data: 'DocCaption'}, {data: 'DocPath'}, {data: 'IsActive'}]
        };
    }

    private getDocumentDetail(documentId) {

        this.httpDocumentService.getDocumentDetail(documentId, true)
            .subscribe((data: any) => {

                this.documentForm.patchValue({
                    ItemId: data.ItemId,
                    DocumentId: data.DocumentId,
                    DocCaption: data.DocCaption,
                    DocPath: data.DocPath
                });
            });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.documentForm.controls;
    }

    onSubmit(documentDetail) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.documentForm.invalid || this.errors.length > 0 ) {
            return;
        }
        else {

          //  this.loading = true;
            this.SaveFileOnServer(this.fileList, documentDetail);

           // this.loading = false;
        }
        // documentDetail.EstimateId = localStorage.getItem('estimateId');
        // documentDetail.DocumentId = localStorage.getItem('documentId');
        // documentDetail.File = this.fileName;
        // documentDetail.DocPath = this.fileName;
        // this.loading = true;
        // this.httpDocumentService.create(documentDetail)
        //     .subscribe(
        //         data => {
        //             this.reBindDocumentTable();
        //             this.alertService.success(this.documentId > 0 ?'Document updated successfully': 'Document save successfully', true);
        //             this.loading  = false;
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

    public uploadFile(event) {
        this.errors = []; // Clear error
        this.fileList = event.target.files;
        this.isValidFileExtension(this.fileList);
        //this.file =  event.target.files;
        //   this.SaveFileOnServer(fileList);

    }

    public SaveFileOnServer(fileList, documentDetail) {

        if (fileList.length == 0) {
            console.log('No file selected!');
            return;

        }

        if (fileList.length > 0) {
            this.fileName = fileList[0].name;
            let file = fileList[0];

            var parameters = {
                estimateId: Number(localStorage.getItem('estimateId')),
                documentId: Number(localStorage.getItem('documentId')),
                fileName: this.fileName,
                docCaption: documentDetail.DocCaption,
            };
            this.uploadService.uploadFile('Documents/Upload', file, parameters)
                .subscribe(
                    event => {

                        // if (event.type == HttpEventType.UploadProgress) {
                        //     const percentDone = Math.round(100 * event.loaded / event.total);
                        //     console.log(`File is ${percentDone}% loaded.`);
                        // } else if (event instanceof HttpResponse) {
                        //     console.log('File is completely loaded!');
                        // }
                    },
                    (err) => {
                        console.log('Upload Error:', err);
                    }, () => {
                        this.reBindDocumentTable();
                        this.alertService.success(this.documentId > 0 ? 'Document updated successfully' : 'Document save successfully', true);
                    }
                );
        }
    }

    public goToEstimateCbd() {
        this.router.navigate(['estimate/cbd']);
    }

    public goToEstimateItem() {

        this.router.navigate(['estimate/item']);
    }

    public async showDeleteDocumentConfirmationModal(doumentId): Promise<void> {

        let isdelete = await this.modalService.showDialog('deleteDocumentDialog');
        if (isdelete) {
            this.loading = true;
            this.httpDocumentService.updateActive(doumentId, false)
                .subscribe(
                    data => {
                        this.reBindDocumentTable();
                        this.alertService.success('Document deleted successfully', true);
                        this.loading = false;
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }

    }

    private isValidFileExtension(files) {

        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) {
                return x.toLocaleUpperCase().trim();
            });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push('Error (Extension): ' + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    }

    private isValidFileSize(file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
    }

    private reBindDocumentTable() {
        this.documentOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.documents = [];
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            //draw the table first
            dtInstance.draw();
        });
    }
}
