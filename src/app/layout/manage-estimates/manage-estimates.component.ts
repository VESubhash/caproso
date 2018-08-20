import {Component, OnInit, ViewChild} from '@angular/core';
import {  Router } from '@angular/router';
import {ActiveModel} from '../../model/ActiveModel';
import {EstimateService} from '../../services/estimate.service';
import {EstimateModel} from '../../model/EstimateModel';
import {AlertService} from '../../services/alert.service';
import {DataTableDirective} from 'angular-datatables';
import {PaModalService} from '../Shared/pa-modal/pa-modal.service';


@Component({
  selector: 'manage-estimates',
  templateUrl: './manage-estimates.component.html',
  styleUrls: ['./manage-estimates.component.scss']
})
export class ManageEstimatesComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    estimateOptions:{} ;
    organizationId: number;
    estimates: EstimateModel[];
    organization: string;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    activeModel: ActiveModel[];
    constructor(private httpEstimateService: EstimateService
                , private router: Router
                , private alertService: AlertService
                , private modalService: PaModalService
    ) {

    }
    ngOnInit(): void {
        this.organization= localStorage.getItem('organizationName');
        this.organizationId =  Number(localStorage.getItem('organizationId'));
        this.bindEstimateTables();

    }


    bindEstimateTables(): void {
        let estimateType='';

        estimateType = this.router.url == '/estimate/group-estimates' ? 'group' : 'single';

         let userId= estimateType == 'group' && localStorage.getItem('roleName') =='Client Admin' ? 0 : localStorage.getItem('userId')
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.estimateOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    estimateType: estimateType,
                    userId:  userId
                };
                dataTablesParameters.estimateOptions = this.estimateOptions;
                this.httpEstimateService.get(dataTablesParameters).subscribe(resp => {
                        this.estimates = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{ data: 'EstimateTitle' },{ data: 'EstimateNumber' },{ data: 'EstimateGroupName' },{ data: 'ManagerName' },{data: 'Estimator'}, { data: 'CreatedDate' }, { data: 'TotalProjectCost' }, { data: 'ModifiedDate' } ]
        };
    }

    public onStatusChange(estimate: EstimateModel, isActive: boolean) {

        this.httpEstimateService.updateActive(estimate.EstimateId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        estimate.IsActive = isActive;
                        this.alertService.success(estimate.IsActive ? 'Estimate activate successfully' : 'Estimate deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }

    public  addEstimate() {
        localStorage.removeItem('estimateId');

        this.router.navigate(['estimate/create']);
    }

    public goToEstimateDetail(id: number) {

        localStorage.removeItem('estimator');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        localStorage.removeItem('userEstimator');
        localStorage.setItem('estimateId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

        window.location.href = 'estimate/estimated-item';

    }

    public goToEstimateDetailEdit(id: number) {
        localStorage.removeItem('estimator');
        localStorage.setItem('estimateId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

       this.router.navigate(['estimate/create']);


    }

    public  copyEstimate(estimateId){

    this.httpEstimateService.copyEstimate(estimateId)
        .subscribe(
            data => {
                if (data) {

                    this.alertService.success( 'Estimate copied  successfully', false);
                    this.estimateOptions = {
                        organizationId:  localStorage.getItem('organizationId'),
                    };

                    this.estimates = [];
                    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                        //draw the table first
                        dtInstance.draw();

                    });
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

    public async showDeleteEstimateConfirmationModal(estimateId): Promise<void> {

        let isDelete = await this.modalService.showDialog('deleteEstimatedDialog');
        if (isDelete) {
            this.httpEstimateService.updateActive(estimateId, false)
                .subscribe(
                    data => {
                        this.alertService.success('Estimate deleted successfully', true);
                        this.estimates = [];
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
