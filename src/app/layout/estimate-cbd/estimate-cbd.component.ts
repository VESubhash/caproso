import {Component, DoCheck, IterableDiffers, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { EstimateService } from '../../services/estimate.service';
import {CostBreakDownModel} from '../../model/CostBreakDownModel';
import { PaModalService } from '../Shared/pa-modal/pa-modal.service';
@Component({

  selector: 'estimate-cbd',
  templateUrl: './estimate-cbd.component.html',
  styleUrls: ['./estimate-cbd.component.scss']
})
export class EstimateCbdComponent implements OnInit {
    btnName = 'Save';
    estimatecbdForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;
    costbreakdowns: CostBreakDownModel[] = [];
    noofbreakdown: number = 0;
    iterableDiffer:any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpEstimateService: EstimateService,
        private modalService: PaModalService,
        private _iterableDiffers: IterableDiffers
    ) {
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }


    ngOnInit() {

        this.buildForm();
        this.estimateId = Number(localStorage.getItem('estimateId'));
        if (this.estimateId > 0 ) {
            this.btnName='Save';

            this.getEstimateCbd(this.estimateId);
            this.getEstimateDetail(this.estimateId);

        }
    }


    buildForm(){
        this.estimatecbdForm = this.formBuilder.group({
            CbdTitle:  [localStorage.getItem('cbdTitle'), Validators.required],
            CostBreakDownName: ['', Validators.required],
            CostBreakDownId:[]
        });
    }


    // convenience getter for easy access to form fields
    get f() { return this.estimatecbdForm.controls; }

    onSubmit(estimateCbd) {

        this.submitted = true;
        // stop here if form is invalid
        if (this.estimatecbdForm.invalid) {
            return;
        }

        estimateCbd.EstimateId = localStorage.getItem('estimateId');
        estimateCbd.OrganizationId = localStorage.getItem('organizationId');
        estimateCbd.CostBreakDownModel = this.costbreakdowns;
        estimateCbd.IsActive = true;
        this.loading = true;
        this.httpEstimateService.SaveEstimateCbd(estimateCbd)
            .subscribe(
                data => {
                    this.alertService.success( 'Cost break down save successfully', true);
                   // this.router.navigate(['./estimate/document']);

                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

        window.location.href='/estimate/cbd';
        //this.getEstimateCbd(localStorage.getItem('estimateId'));
    }

    // public addBreakDown(){
    //     this.costbreakdowns = [];
    //
    //     if(this.noofbreakdown > 0) {
    //         for (let i = 1; i <= this.noofbreakdown; i++) {
    //             let costBreakDown = new CostBreakDownModel();
    //             costBreakDown.SlNo = i;
    //             costBreakDown.CostBreakDownId = 0 ;
    //             costBreakDown.CostBreakDownName = '';
    //             this.costbreakdowns.push(costBreakDown);
    //         }
    //     }
    //
    // }

    public  getEstimateDetail(estimateId){
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe((data:any) => {
                localStorage.setItem('cbdTitle', data.CbdTitle);
                this.estimatecbdForm.patchValue({
                    CbdTitle: data.CbdTitle,

                });
            });
    }

    public  getEstimateCbd(estimateId){
        this.httpEstimateService.getEstimateCbdList(estimateId)
            .subscribe((data:CostBreakDownModel[]) => {
                this.costbreakdowns = [];

                for (let i = 0; i < data.length; i++) {

                    let costBreakDown = new CostBreakDownModel();
                    costBreakDown.SlNo = i + 1;
                    costBreakDown.CostBreakDownId = data[i].CostBreakDownId ;
                    costBreakDown.CostBreakDownName = data[i].CostBreakDownName;
                    this.costbreakdowns.push(costBreakDown);
                }
            });

        this.getEstimateDetail(this.estimateId);

    }

    public  editCostBreakDown(estimateCbd){


        this.estimatecbdForm.patchValue({
            CostBreakDownName: estimateCbd.CostBreakDownName,
            CostBreakDownId: estimateCbd.CostBreakDownId,
        });

    }
    public async showDeleteCostBreakDownConfirmationModal(estimateCbd): Promise<void> {

        let isdelete = await this.modalService.showDialog('deleteObservationDialog');

        if (isdelete)
        {
            estimateCbd.EstimateId = localStorage.getItem('estimateId');
            estimateCbd.OrganizationId = localStorage.getItem('organizationId');
            estimateCbd.CostBreakDownId  = estimateCbd.CostBreakDownId;
            estimateCbd.IsActive = false;

            this.httpEstimateService.UpdateEstimateCbd(estimateCbd)
                .subscribe(
                    data => {
                       this.getEstimateCbd(localStorage.getItem('estimateId'));

                    },
                    error => {
                        this.alertService.error(error);

                    });
        }

    }

    public  onCostBreakDownValueChange(textValue, slno){

        this.costbreakdowns[slno - 1].CostBreakDownName = textValue;

    }
    public goToEstimateCreate() {
        this.router.navigate(['estimate/create']);
    }
    public goToDocument() {
        this.router.navigate(['estimate/document']);
    }

}
