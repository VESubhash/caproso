import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TagsModal } from './TagsModal';

import {TagsService} from '../../services/tag.service';
import {ClientsModal} from '../manage-clients/ClientsModal';
import {AlertService} from '../../services/alert.service';


@Component({
  selector: 'manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    groupOptions:{} ;
    organizationId: number;
    tags: TagsModal[];
    organization: string;
    isCaprosoAdmin = false;
    constructor(private httpGroupService: TagsService
                , private router: Router
                , private alertService: AlertService

    ) {
        this.isCaprosoAdmin = localStorage.getItem('roleName') == 'Admin';
    }
    ngOnInit(): void {

        this.organization = localStorage.getItem('organizationName');
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
                    ltagType: 'Groups'
                };
                dataTablesParameters.groupOptions = this.groupOptions;
                this.httpGroupService.get(dataTablesParameters).subscribe(resp => {
                    if(resp[0] && resp[0].Data)
                    {
                        this.tags = resp[0].Data;
                    }
                    else
                    {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
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

    public  addGroup() {
        localStorage.removeItem('lTagId');

        this.router.navigate(['/group-detail']);
    }

    public goToGroupDetails(id: number) {

        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

        this.router.navigate(['group-detail']);

    }

    public onStatusChange(tag: TagsModal, isActive: boolean) {

        this.httpGroupService.updateActive(tag.LTagsId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        tag.IsActive = isActive;
                        this.alertService.success(tag.IsActive ? 'group activate successfully' : 'group deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }
    private goToClientDetails() {
        this.router.navigate(['organization-detail']);
    }
}
