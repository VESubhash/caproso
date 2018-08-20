import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PaModalComponent } from '../../Shared/pa-modal/pa-modal.component';
import { Router } from '@angular/router';
import { ItemsService } from '../../../services/items.service';
import { AlertService } from '../../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstimateService } from '../../../services/estimate.service';
import { EstimateMarkupsModel } from '../../../model/EstimateMarkupsModel';

@Component({
  selector: 'markup-detail',
  templateUrl: './markup-detail.component.html',
  styleUrls: ['./markup-detail.component.scss']
})
export class MarkupDetailComponent implements OnInit {
 @Input() estimateId:number;
 @Input() markupId:number;
 @Input() public markupName: string;
 @Input() public parentMarkupId: number;
 @Input() public displayOrder: number;
 @Input() markupSubTotal: number = 0.00;
 @Input() dialogName: string ='';
 @Input() estimateMarkupsModel: EstimateMarkupsModel;
    adjustmentTypeModel = [];
    itemMarkupDetailForm: FormGroup;
    loading = false;
    submitted = false;
    mode='Add';
    @ViewChild('modal') public modal: PaModalComponent;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private httpItemService: ItemsService,
              private httpEstimateService: EstimateService,) { }

  ngOnInit() {

      this.estimateId = Number(localStorage.getItem('estimateId'));
      this.markupId = Number(localStorage.getItem('markupId'));
      this.adjustmentTypeModel.push( {AdjustmentType  : '$', Checked: 'checked'});
      this.adjustmentTypeModel.push( {AdjustmentType  : '%' , Checked: ''});
      this.buildForm();

      if(this.markupId > 0)
      {
          this.mode='Edit';
          this.getMarkupDetailsById(this.markupId);
      }

      this.estimateMarkupsModel ={

          EstimateId: this.estimateId,
          ParentMarkupId: 0,
          ConstructionTotal: 0,
          MarkupId: 0,
          MarkupName: '',
          AdjustmentTotal: 0,
          AdjustmentValue: 0,
          AdjustmentType: '',
          MarkupType: '',
          LAdjustmentTypeId: 0,
          DisplayOrder: 0,
          MarkupTotal:0

      }
  }

    get f() { return this.itemMarkupDetailForm.controls; }

    public buildForm(){

        this.itemMarkupDetailForm = this.formBuilder.group({
            EstimateId: [this.estimateId],
            MarkupName:  ['', Validators.required],
            AdjustmentType:['%', [Validators.required, Validators.maxLength(100)]],
            AdjustmentValue:  ['0', [ Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
        });

    }

    onSubmit(markupDetailForm) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.itemMarkupDetailForm.invalid) {
            return;
        }
        if (this.markupId > 0 ) {
            markupDetailForm.MarkupId = this.markupId;
        }
        markupDetailForm.MarkupId =this.estimateMarkupsModel.MarkupId;
        markupDetailForm.AdjustmentTotal = this.estimateMarkupsModel.AdjustmentTotal;
        markupDetailForm.MarkupType = this.markupName;
        markupDetailForm.DisplayOrder = this.displayOrder;
        markupDetailForm.ParentMarkupId = this.parentMarkupId;
        this.loading = true;
        this.httpEstimateService.saveEstimateMarkup(markupDetailForm)
            .subscribe(
                data => {
                    this.alertService.success(this.markupId > 0 ?'markup updated successfully': 'markup save successfully', true);
                    this.loading  = false;
                    this.modal.resolve(true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

        this.itemMarkupDetailForm.patchValue({
            MarkupName:  '',
            AdjustmentType:'%',
            AdjustmentValue: 0
        });

    }

    onAdjustmentTypeChange(){

        this.adjustmentCost();
    }

    onAmountChange(){

        this.adjustmentCost();

    }

    private adjustmentCost(){

        let adjustmentType =  this.f.AdjustmentType.value;
        let adjustmentValue =  this.f.AdjustmentValue.value;
        let totalCost =0;
        this.estimateMarkupsModel.AdjustmentType =adjustmentType;
        if(adjustmentType === '$')
        {
            //this.estimateMarkupsModel.AdjustmentTotal  = Number(this.markupSubTotal) + Number(adjustmentValue);
            this.estimateMarkupsModel.AdjustmentTotal  =  Number(adjustmentValue);
        }
        else {
            let amount = Number(this.markupSubTotal) * Number(Number(adjustmentValue)/Number(100));
            //this.estimateMarkupsModel.AdjustmentTotal  = Number(this.markupSubTotal) + Number(amount);
            this.estimateMarkupsModel.AdjustmentTotal  =  Number(amount);
        }

    }

    getMarkupDetailsById(markupId){

        this.httpEstimateService.getMarkupDetailById(markupId)
            .subscribe(
                (data: EstimateMarkupsModel) => {
                    this.itemMarkupDetailForm.patchValue({
                        MarkupName:  data.MarkupName,
                        AdjustmentType: data.AdjustmentType,
                        AdjustmentValue: data.AdjustmentValue,
                        AdjustmentTotal: data.AdjustmentTotal
                    });
                    this.parentMarkupId = data.ParentMarkupId;
                    this.displayOrder = data.DisplayOrder;
                    this.estimateMarkupsModel.AdjustmentTotal= data.AdjustmentTotal;
                    this.estimateMarkupsModel.MarkupName = data.MarkupName;

                },
                error => {
                    this.alertService.error(error);

                });
    }

    gotoEstimateMarkup() {
        this.modal.resolve(false);
    }


}

