import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {TagsService} from '../../services/tag.service';
import {ClientsService} from '../../services/clients.service';
import {ClientsModal} from '../manage-clients/ClientsModal';
import {GroupsService} from '../../services/groups.service';
import {forEach} from '@angular/router/src/utils/collection';
import {GroupModel} from '../../model/GroupModel';

@Component({
    selector: 'user-group',
    templateUrl: './user-group.component.html',
    styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {


    btnName = 'Submit';
    userGroupForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    lTagsId: number;
    groupsModel : GroupModel[] = [];
    userGroupsModel : any;
    userModel:ClientsModal[]=[];
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private httpClientService: ClientsService,
        private httpGroupService: GroupsService

    ) {
    }

    ngOnInit() {

        this.buildForm();
        this.lTagsId = 0;
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagsId = Number(localStorage.getItem('lTagId'));
        this.getGroupList();
        this.getUsersByOrganizationId();
    }


    buildForm() {

        this.userGroupForm = this.formBuilder.group({
                UserGroupIds: this.formBuilder.array([]),
                ContactId: ['', Validators.required]
            }
        );
    }


    // convenience getter for easy access to form fields
    get f() {
        return this.userGroupForm.controls;
    }

    onSubmit(userGroup) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.userGroupForm.invalid) {
            return;
        }

        this.loading = true;
        this.httpGroupService.SaveUserGroup(userGroup)
            .subscribe(
                data => {

                    this.router.navigate(['./user-group']);
                    this.alertService.success( 'Group assign to user successfully', true);
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private getGroupList() {
        let organizationId =  Number(localStorage.getItem('organizationId'));
        this.httpTagsService.getTagByTypeAndOrganizationId('Groups',organizationId, true)
            .subscribe((group: GroupModel[]) => {

                this.groupsModel = group;
            });

    }

    private getUserGroupbyContactId(contactId) {

        this.httpGroupService.getUserGroupByContactId(contactId, true)
            .subscribe(userGroup => {
                this.userGroupsModel = userGroup;
                for(let group of this.groupsModel)
                {
                    let usergroup = this.userGroupsModel.filter(x => x.LGroupId == group.LTagId )[0];
                    group.Checked = usergroup && usergroup.LGroupId == group.LTagId? true: false;
                }
            });
    }

    private getUsersByOrganizationId() {
        let organizationId =  Number(localStorage.getItem('organizationId'));
        this.httpClientService.getUsersByOrganizationId(organizationId)
            .subscribe((data: ClientsModal[]) => {
               this.userModel = data;
            });
    }

    onContactChange(contactId){
        this.getUserGroupbyContactId(contactId);

    }

    onChange(groupId:string, isChecked: boolean) {
        const userGroupIdsArray = <FormArray>this.userGroupForm.controls.UserGroupIds;

        if(isChecked) {
            userGroupIdsArray.push(new FormControl(groupId));
        } else {
            let index = userGroupIdsArray.controls.findIndex(x => x.value == groupId)
            userGroupIdsArray.removeAt(index);
        }
    }

}
