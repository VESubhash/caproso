import { Component, OnInit } from '@angular/core';
import { ClientsModal } from './ClientsModal';
import { ActivatedRoute, Router } from '@angular/router';
import { AffiliatesService } from '../../services/affiliates.service';
import { ClientsService } from '../../services/clients.service';
import {ActiveModel} from '../../model/ActiveModel';
import {OrganizationsModal} from '../manage-organizations/OrganizationsModal';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {GroupsService} from '../../services/groups.service';
import {GroupModel, UserGroupsModel} from '../../model/GroupModel';
import {TagsService} from '../../services/tag.service';
import {Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'manage-clients',
    templateUrl: './manage-clients.component.html',
    styleUrls: ['./manage-clients.component.scss']
})


export class ManageClientsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    clients: ClientsModal[];
    userId: number;
    organizationId: number;
    affiliateName: string;
    clientOptions:{};
    groupsModel : GroupModel[] = [];
    activeModel: ActiveModel[];
    ShowFilter = false;
    dropdownSettings = {};
    userGroup: UserGroupsModel;

    constructor(private httpClientService: ClientsService
                , private httpAffiliateService: AffiliatesService
                , private router: Router
                , private route: ActivatedRoute
                , private alertService: AlertService
                , private httpUserService: UserService
                , private httpTagsService: TagsService
                , private httpGroupService: GroupsService
                ) {
    }

    ngOnInit(): void {
        this.route
            .queryParams
            .subscribe(params => {
                this.userId = params['id'] || 0;
            });

        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindUserTable();
        this.loadActiveModel();
        this.getGroupList();

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'LTagId',
            textField: 'TagDescr',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };

    }

    bindUserTable(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.clientOptions = {
                    organizationId: this.organizationId,
                };
                dataTablesParameters.clientOptions = this.clientOptions;
                this.httpClientService.get(dataTablesParameters).subscribe(resp => {
                    this.clients = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{data: 'OrganizationName'}, { data: 'UserName'}, {data: 'FirstName'}, {data: 'LastName'}, {data: 'IsActive'}]
        };
    }

    public onStatusChange(user: ClientsModal, isActive: boolean) {

        this.httpUserService.updateActive(user.UserId, isActive)
            .subscribe(
                 data => {
                    if (data) {
                        user.IsActive = !isActive
                        this.alertService.success(user.IsActive ? 'Client activate successfully' : 'Client deactivate successfully', false);
                    }
                    else {
                        this.alertService.success('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                    // this.loading = false;
                });
    }

    onGroupSelect (group:GroupModel, contactId: number, isActive: boolean) {
        this.addUpdateGroup(group,contactId, isActive);

    }
    onGroupDeSelect (group:GroupModel, contactId: number, isActive: boolean) {
        this.addUpdateGroup(group,contactId, isActive);
    }
    onSelectAll (groups: any, contactId: number, isActive: boolean) {
        this.addUpdateAllGroup(groups,contactId, isActive);

    }

    onDeSelectAll (groups: any, contactId: number, isActive: boolean) {
        this.addUpdateAllGroup(groups,contactId, isActive);
    }
    private  addUpdateGroup(group:GroupModel, contactId: number, isActive: boolean){
        group.IsActive = isActive;
        this.userGroup = {
            UserGroups: [group],
            ContactId: contactId
        };
        this.httpGroupService.SaveUserGroupSingle(this.userGroup)
            .subscribe(
                data => {
                    console.log(this.userGroup);

                },
                error => {
                    this.alertService.error(error);

                });
    }
    private  addUpdateAllGroup(groups:GroupModel[], contactId: number, isActive: boolean){
        for(let group of groups)
        {
            group.IsActive = isActive;
        }

        this.userGroup = {
            UserGroups: groups,
            ContactId: contactId
        };
        this.httpGroupService.SaveUserGroupSingle(this.userGroup)
            .subscribe(
                data => {
                    console.log(this.userGroup);

                },
                error => {
                    this.alertService.error(error);

                });
    }
    public addClient() {
        localStorage.removeItem('userId');
        this.router.navigate(['/clients-detail']);
    }

    public goToClientDetails(id: number) {
        localStorage.setItem('userId',id.toString() );
        this.router.navigate(['clients-detail'], {queryParams: {id: id }});

    }

    private getGroupList() {
        let organizationId =  Number(localStorage.getItem('organizationId'));
        this.httpTagsService.getTagByTypeAndOrganizationId('Groups',organizationId, true)
            .subscribe((group: GroupModel[]) => {

                this.groupsModel = group;
            });

    }

    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }


}


