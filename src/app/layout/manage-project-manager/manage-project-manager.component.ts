import {Component, OnInit, ViewChild} from '@angular/core';
import {  Router } from '@angular/router';
import { TagsModal } from './TagsModal';

import { TagsService } from '../../services/tag.service';
import { ActiveModel } from '../../model/ActiveModel';
import { AlertService } from '../../services/alert.service';
import { PaModalService } from '../Shared/pa-modal/pa-modal.service';
import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'manage-project-manager',
  templateUrl: './manage-project-manager.component.html',
  styleUrls: ['./manage-project-manager.component.scss']
})
export class ManageProjectManagerComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    groupOptions:{} ;
    organizationId: number;
    tags: TagsModal[];
    organization: string;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    activeModel: ActiveModel[];
    constructor(private httpTagService: TagsService
                , private router: Router
                , private alertService: AlertService
                , private modalService: PaModalService
                , private modalTagsService: TagsService

    ) { }

    ngOnInit(): void {
        this.organization= localStorage.getItem('organizationName');
        this.organizationId =  Number(localStorage.getItem('organizationId'));
        this.bindTagTables();
    }

    bindTagTables(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.groupOptions = {
                    organizationId:  localStorage.getItem('organizationId'),
                    ltagType: 'Manager'
                };
                dataTablesParameters.groupOptions = this.groupOptions;
                this.httpTagService.get(dataTablesParameters).subscribe(resp => {
                        this.tags = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{ data: 'TagDescr' },{ data: 'IsActive' } ]
        };
    }

    public  addProjectManager() {
        localStorage.removeItem('lTagId');

        this.router.navigate(['/project-manager-detail']);
    }

    public goToProjectManagerDetails(id: number) {

        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

        this.router.navigate(['project-manager-detail']);

    }

     public onStatusChange(tag: TagsModal, isActive: boolean) {

        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        tag.IsActive = isActive;
                        this.alertService.success(tag.IsActive ? 'project manager activate successfully' : 'project manager deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }

    public async showDeleteProjectManagerConfirmationModal(categoryId): Promise<void> {

        let isDelete = await this.modalService.showDialog('deleteProjectManagerDialog');
        if (isDelete) {
            this.modalTagsService.updateActive(categoryId, false)
                .subscribe(
                    data => {
                        this.alertService.success('Project Manager deleted successfully', true);
                        this.tags = [];
                        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                            //draw the table first
                            dtInstance.draw();

                        });
                    },
                    error => {
                        this.alertService.error(error);

                    });

        }

    }
}
