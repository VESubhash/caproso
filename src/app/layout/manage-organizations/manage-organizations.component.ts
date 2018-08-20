import {Component, OnInit, ViewChild} from '@angular/core';
import {OrganizationsModal} from './OrganizationsModal';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizationsService} from '../../services/organizations.service';
import {AffiliatesService} from '../../services/affiliates.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from 'rxjs/index';
import {ActiveModel} from '../../model/ActiveModel';
import {UsersModal} from '../manage-user/UsersModal';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'manage-organizations',
    templateUrl: './manage-organizations.component.html',
    styleUrls: ['./manage-organizations.component.scss']
})


export class ManageOrganizationsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    organizations: OrganizationsModal[] = [];
    userId: number;
    affiliateId: number;
    affiliateName: string;
    affiliateOptions:{} ;
    affiliateModel:any;
    isCaprosoAdmin = false;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    activeModel: ActiveModel[];
    constructor(private httpOrganizationService: OrganizationsService
                , private httpAffiliateService: AffiliatesService
                , private router: Router
                , private route: ActivatedRoute
                , private alertService: AlertService
                , private httpUserService: UserService
    ) {
    }

    ngOnInit(): void {
        this.route
            .queryParams
            .subscribe(params => {
                this.userId = params['id'] || 0;
            });
        this.bindUserTable();

     this.affiliateId = Number(localStorage.getItem('affiliateId'));
     this.affiliateName = localStorage.getItem('affiliateName');
     this.getAffiliatesList();
     this.isCaprosoAdmin = localStorage.getItem('roleName') == 'Admin';
     this.loadActiveModel();
    }

    bindUserTable(): void {

        this.dtOptions =  {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.affiliateOptions = {
                    affiliateId: this.affiliateId,
                };
                dataTablesParameters.affiliateOptions = this.affiliateOptions;
                this.httpOrganizationService.get(dataTablesParameters).subscribe(resp => {
                    this.organizations = resp[0].Data;
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

    private getAffiliatesList() {
        this.httpAffiliateService.getAllAffiliates(true)
            .subscribe(affiliate => {
                this.affiliateModel = affiliate;
            });
    }
    public addOrganization() {
        localStorage.removeItem('userId');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('organizationName');
        this.router.navigate(['/organization-detail']);
    }

    public goToOrganizationDetails(id: number, organizationId: number, organization: string ) {
        localStorage.setItem('userId',id.toString() );
        localStorage.setItem('organizationId',organizationId.toString() );
        localStorage.setItem('organizationName',organization);
        this.router.navigate(['organization-detail'], {queryParams: {id: id }});

    }
    public  onChange(affiliateId){

        this.affiliateOptions = {
            affiliateId: affiliateId,
        };

        this.organizations = [];
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            //dtInstance.destroy();

            //draw the table first
            dtInstance.draw();
            // Call the dtTrigger to rerender again

            // this.httpOrganizationService.get(this.affiliateOptions)
            //   .subscribe(providers => {
            //
            //     this.organizations = providers;
            //     // Calling the DT trigger to manually render the table
            //    this.dtTrigger.next();
            //   });
        });
    }

    public onStatusChange(user: OrganizationsModal, isActive: boolean) {
        this.httpUserService.updateActive(user.UserId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        user.IsActive = !isActive;
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
    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }
}


