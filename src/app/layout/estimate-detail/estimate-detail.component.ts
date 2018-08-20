import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { Golfball } from '../Shared/pa-golfball-checklist/Golfball.model';
import { EstimateService } from '../../services/estimate.service';

@Component({
  selector: 'estimate',
  templateUrl: './estimate-detail.component.html',
  styleUrls: ['./estimate-detail.component.scss']
})
export class EstimateDetailComponent implements OnInit {


    btnName = 'Save and Continue';
    estimateCreateForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;

    public golfballs: Golfball[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpEstimateService: EstimateService,
    ) {

        this.golfballs.push(new Golfball('1', 'Create', false, false));
        this.golfballs.push(new Golfball('2', 'Cost break down (optional)', false, false));
        this.golfballs.push(new Golfball('3', 'Upload Document (optional)', false, false));
        this.golfballs.push(new Golfball('4', 'Items', false, false));
        this.golfballs.push(new Golfball('5', 'Markups and Adjustments', false, false));
    }

    ngOnInit() {

        this.buildForm();

        if (this.estimateId > 0 ) {
            this.btnName='Update and Continue';
            this.getEstimateDetail(this.estimateId);

        }
   }


    buildForm(){
        this.estimateCreateForm = this.formBuilder.group({
                EstimateTitle:  ['', Validators.required],

            });
    }


    // convenience getter for easy access to form fields
    get f() { return this.estimateCreateForm.controls; }

    onSubmit(estimateCreate) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.estimateCreateForm.invalid) {
            return;
        }

        estimateCreate.estimateId = localStorage.getItem('estimateId');
        this.loading = true;
        this.router.navigate(['./estimate-cbd']);
        // this.httpEstimateService.create(estimateCreate)
        //     .subscribe(
        //         data => {
        //
        //             this.router.navigate(['./estimate-cbd']);
        //             this.loading  = false;
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

    public  getEstimateDetail(estimateId){

    }

    public goToManageEstimates() {
        this.router.navigate(['manage-estimates']);
    }
}
