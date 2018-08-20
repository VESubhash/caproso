import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { EstimateService } from '../../services/estimate.service';
import { TagsService } from '../../services/tag.service';

@Component({
  selector: 'create',
  templateUrl: './estimate-create.component.html',
  styleUrls: ['./estimate-create.component.scss']
})
export class EstimateCreateComponent implements OnInit  {

    btnName = 'Save';
    estimateCreateForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;
    managerModel : any;
    groupsModel : any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpEstimateService: EstimateService,
        private httpTagService: TagsService,

    ) {  }

    ngOnInit() {
     this.buildForm();
     this.estimateId =   Number(localStorage.getItem('estimateId'));
        if (this.estimateId > 0 ) {
            this.btnName='Update and Continue';
            this.getEstimateDetail(this.estimateId);

        }

        this.getManagerList();
        this.getGroupList();
   }

    buildForm(){
        this.estimateCreateForm = this.formBuilder.group({

                EstimateTitle:  ['', [Validators.required, Validators.maxLength(100)]],
                EstimateNumber:  ['', [Validators.required, Validators.maxLength(20)]],
                ProjectScope:  ['', [Validators.required, Validators.maxLength(1000)]],
                Assumptions:  ['', [Validators.required, Validators.maxLength(500)]],
                //ManagerId:  ['', [Validators.required]],
                ManagerName:  [''],
                EstimateGroupId: [''],
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

        estimateCreate.EstimateId = Number(localStorage.getItem('estimateId'));
        estimateCreate.OrganizationId = Number(localStorage.getItem('organizationId'));
        estimateCreate.ModifiedById = Number(localStorage.getItem('userId'));
        this.loading = true;

        this.httpEstimateService.create(estimateCreate)
            .subscribe(
                data => {
                    localStorage.setItem('estimateId', data.toString());
                    localStorage.removeItem('estimator');
                    window.location.reload(true);
                    this.router.navigate(['./estimate/item']);
                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    public  getEstimateDetail(estimateId){
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe((data:any) => {
                localStorage.setItem('cbdTitle', data.CbdTitle);
                this.estimateCreateForm.patchValue({
                    OrganizationId: data.organizationId,
                    EstimateId: data.EstimateId,
                    EstimateTitle: data.EstimateTitle,
                    EstimateNumber: data.EstimateNumber,
                    ProjectScope: data.ProjectScope,
                    Assumptions: data.Assumptions,
                    ManagerId: data.ManagerId,
                    ManagerName: data.ManagerName,
                    EstimateGroupId: data.EstimateGroupId,
                });
            });
    }

    public goToManageEstimates() {
        this.router.navigate(['manage-estimates']);
    }

    private getManagerList() {
        let organizationId =  Number(localStorage.getItem('organizationId'));
        this.httpTagService.getTagByTypeAndOrganizationId('Manager', organizationId, true)
            .subscribe(manager => {
                this.managerModel = manager;
            });
    }

    private getGroupList() {
        let organizationId =  Number(localStorage.getItem('organizationId'));
        this.httpTagService.getTagByTypeAndOrganizationId('Groups',organizationId, true)
            .subscribe(group => {
                this.groupsModel = group;
            });

    }
}

