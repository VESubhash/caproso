import {Component, OnInit} from '@angular/core';
import {UsersModal} from './UsersModal';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActiveModel} from '../../model/ActiveModel';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.scss']
})


export class ManageUserComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    users: UsersModal[];
    activeModel: ActiveModel[];
    userId: number;

    constructor(private httpUserService: UserService, private router: Router, private route: ActivatedRoute, private alertService: AlertService) {
    }

    ngOnInit(): void {
        this.route
            .queryParams
            .subscribe(params => {
                this.userId = params['id'] || 0;
            });
        this.bindUserTable();
        this.loadActiveModel();
    }

    bindUserTable(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.httpUserService.get(dataTablesParameters).subscribe(resp => {
                    this.users = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{data: 'UserName'}, {data: 'FirstName'}, {data: 'LastName'}, {data: 'UserRoleName'}, {data: 'UserGroupName'}, {data: 'IsActive'}, {data: 'CreatedDate'}]
        };
    }

    public onStatusChange(user: UsersModal, isActive: boolean) {

        // this.loading = true;
        // organizationDetail.AffiliateId = this.affiliateId;
        this.httpUserService.updateActive(user.UserId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        user.IsActive = !isActive;
                        this.alertService.success(user.IsActive ? 'User activate successfully' : 'User deactivate successfully', false);
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

    public addUser() {
        this.router.navigate(['/user-detail']);
    }

    public goToUserDetails(id: number) {
        this.router.navigate(['user-detail'], {queryParams: {id: id}});

    }

    public loadActiveModel() {
        this.activeModel = [{'value': 'True', 'name': 'Active'}, {'value': 'False', 'name': 'InActive'}];
    }
}


