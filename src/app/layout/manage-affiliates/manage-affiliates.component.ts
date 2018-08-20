import { Component, OnInit } from '@angular/core';
import { AffiliatesModal } from './AffiliatesModal';
import { ActivatedRoute, Router } from '@angular/router';
import { AffiliatesService } from '../../services/affiliates.service';
import {ActiveModel} from '../../model/ActiveModel';
import {UserService} from '../../services/user.service';
import {AlertService} from '../../services/alert.service';
import {ClientsModal} from '../manage-clients/ClientsModal';


@Component({
    selector: 'manage-affiliates',
    templateUrl: './manage-affiliates.component.html',
    styleUrls: ['./manage-affiliates.component.scss']
})


export class ManageAffiliatesComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    affiliates: AffiliatesModal[];
    userId: number;
    activeModel: ActiveModel[];
    editActive: boolean;
    constructor(private httpUserService: UserService
               , private httpService: AffiliatesService
               , private alertService: AlertService
               , private router: Router
               , private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.route
            .queryParams
            .subscribe(params => {
                this.userId = params['id'] || 0;
            });
        this.bindAffiliateTable();
        this.loadActiveModel();
    }

    bindAffiliateTable(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.httpService.get(dataTablesParameters).subscribe(resp => {
                    this.affiliates = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{data: 'AffiliateName'}, { data: 'UserName'}, {data: 'FirstName'}, {data: 'LastName'}, {data: 'IsActive'}, , {data: 'CreatedDate'}]
        };
    }

    public addAffiliate() {
        localStorage.removeItem('affiliateId');
        localStorage.removeItem('affiliateName');
        this.router.navigate(['/affiliate-detail']);
    }

    public goToAffiliateDetail(userId: number, affiliatedId: number, affiliateName: string ) {
        localStorage.setItem('affiliateId', affiliatedId.toString() );
        localStorage.setItem('affiliateName', affiliateName);
        this.router.navigate(['affiliate-detail']);

    }
    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }

    public onStatusChange(affiliate: AffiliatesModal, isActive: boolean) {
        this.httpUserService.updateActive(affiliate.UserId, isActive)
            .subscribe(
                (data) => {

                    if (data) {
                        affiliate.IsActive = !isActive;
                        this.alertService.success(affiliate.IsActive ? 'Affiliate activate successfully' : 'Affiliate deactivate successfully', false);
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


    public  showActive(){
        this.editActive =!this.editActive;
    }
}


