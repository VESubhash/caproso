import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsModal } from './DocumentsModal';

import { TagsService } from '../../services/tag.service';
import { ActiveModel } from '../../model/ActiveModel';
import { AlertService } from '../../services/alert.service';
import { DocumentService } from '../../services/document.service';
import {DataTableDirective} from 'angular-datatables';


@Component({
  selector: 'manage-documents',
  templateUrl: './manage-documents.component.html',
  styleUrls: ['./manage-documents.component.scss']
})
export class ManageDocumentsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    documentOptions:{} ;
    organizationId: number;
    documents: DocumentsModal[];
    organization: string;

    activeModel: ActiveModel[];
    constructor(  private router: Router
                , private alertService: AlertService
                , private httpDocumentService: DocumentService
    ) {

    }
    ngOnInit(): void {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId =  Number(localStorage.getItem('organizationId'));
        this.bindDocumentTables();
    }

    bindDocumentTables(): void {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.documentOptions = {
                    organizationId:  localStorage.getItem('organizationId'),
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
            columns: [{ data: 'DocCaption' },{ data: 'DocPath' }, { data: 'IsActive' } ]
        };
    }

    public  addDocument() {
        localStorage.removeItem('documentId');

        this.router.navigate(['/document-detail']);
    }
    public goToManageItems(){
        this.router.navigate(['/manage-items']);
    }

    public goToDocumentDetail(document) {

        localStorage.setItem('documentId', document.DocumentId.toString());
        localStorage.setItem('itemId', document.ItemId.toString());
        this.router.navigate(['document-detail']);

    }


    public onStatusChange(document: DocumentsModal, isActive: boolean) {

        this.httpDocumentService.updateActive(document.DocumentId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        document.IsActive = isActive;
                        this.alertService.success(document.IsActive ? 'document activate successfully' : 'document deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
