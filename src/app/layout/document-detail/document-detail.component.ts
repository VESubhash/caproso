import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

import { UploadService } from '../../services/upload.service';

import {DocumentService} from '../../services/document.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {


    btnName = 'Submit';
    documentForm: FormGroup;
    loading = false;
    submitted = false;
    itemId: number;
    documentId: number;
    file: string;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpDocumentService: DocumentService,
        private uploadService: UploadService,
    ) { }

    ngOnInit() {

        this.buildForm();
        this.documentId = 0;
        this.itemId = Number(localStorage.getItem('itemId'));
        this.documentId = Number(localStorage.getItem('documentId'));

        if (this.documentId > 0 ) {
            this.btnName='Update';
            this.getDocumentDetail(this.documentId);

        }
   }

    buildForm(){
        this.documentForm = this.formBuilder.group({
                    ItemId: [localStorage.getItem('itemId')],
                    DocumentId: [this.documentId],
                    DocCaption: ['', Validators.required],
                    DocPath: ['', Validators.required],
            }
        );
    }
    private getDocumentDetail(documentId){

        this.httpDocumentService.getDocumentDetail(documentId, true)
            .subscribe((data:any) => {

                this.documentForm.patchValue({
                    ItemId: data.ItemId,
                    DocumentId: data.DocumentId,
                    DocCaption: data.DocCaption,
                    DocPath: data.DocPath
                });
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.documentForm.controls; }

    onSubmit(documentDetail) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.documentForm.invalid) {
            return;
        }

        documentDetail.ItemId = Number(localStorage.getItem('itemId'));
        documentDetail.DocumentId = localStorage.getItem('documentId');
        documentDetail.File = this.file;
        documentDetail.DocPath = this.file;
        this.loading = true;
        this.httpDocumentService.create(documentDetail)
            .subscribe(
                data => {
                    this.router.navigate(['./manage-documents']);
                    this.alertService.success(this.documentId > 0 ?'Document updated successfully': 'Document save successfully', true);
                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }


    public goToManageDocuments() {
        this.router.navigate(['manage-documents']);
    }

    public uploadFile(event) {
        let fileList: FileList = event.target.files;

        if (fileList.length == 0) {
            console.log("No file selected!");
            return

        }

        // if (fileList.length > 0) {
        //     this.file = fileList[0].name;
        //     let file = fileList[0];
        //     this.uploadService.uploadFile("Documents/Upload", file, )
        //         .subscribe(
        //             event => {
        //
        //                 if (event.type == HttpEventType.UploadProgress) {
        //                     const percentDone = Math.round(100 * event.loaded / event.total);
        //                     console.log(`File is ${percentDone}% loaded.`);
        //                 } else if (event instanceof HttpResponse) {
        //                     console.log('File is completely loaded!');
        //                 }
        //             },
        //             (err) => {
        //                 console.log("Upload Error:", err);
        //             }, () => {
        //                 console.log("Upload done");
        //             }
        //         )
        // }
    }

   // public uploadFile(event) {
   //
   //     let fileList: FileList = event.target.files;
   //
   //     if (fileList.length == 0) {
   //         console.log("No file selected!");
   //         return
   //
   //     }
   //
   //     if (fileList.length > 0) {
   //         let file: File = fileList[0];
   //
   //      this.uploadService.uploadFile("Documents/upload", file)
   //          .subscribe(
   //              event => {
   //                  if (event.type == HttpEventType.UploadProgress) {
   //                      const percentDone = Math.round(100 * event.loaded / event.total);
   //                      console.log(`File is ${percentDone}% loaded.`);
   //                  } else if (event instanceof HttpResponse) {
   //                      console.log('File is completely loaded!');
   //                  }
   //              },
   //              (err) => {
   //                  console.log("Upload Error:", err);
   //              }, () => {
   //                  console.log("Upload done");
   //              }
   //          )
   //  }
   //  }

}
