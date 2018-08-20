import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AlertService} from '../../../services/alert.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaModalComponent} from '../../Shared/pa-modal/pa-modal.component';
import {ItemsService} from '../../../services/items.service';
import {EstimateService} from '../../../services/estimate.service';
import {EstimatedItemsModel} from '../../../model/EstimatedItemsModel';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    dataTablesParameters:any;
    btnName = 'Add';
    itemDetailForm: FormGroup;
    @Input() public  dialogName: string ;
    @ViewChild('modal') public modal: PaModalComponent;
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;
    @Input()public item: EstimatedItemsModel ;
    costBreakDownItemModel : any;
    subCategoryModel: any;
    adjustmentTypeModel = [];
    estimateItemId = 0;
    costBreakDown: string = 'disabled';
  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private alertService: AlertService,
               private httpItemService: ItemsService,
               private httpEstimateService: EstimateService,
              ) { }

    ngOnInit() {

        this.estimateItemId = Number(localStorage.getItem('estimateItemId'));
        this.buildForm();

        this.adjustmentTypeModel.push( {AdjustmentType  : '$', Checked: 'checked'});
        this.adjustmentTypeModel.push( {AdjustmentType  : '%' , Checked: ''});
        this.getCostBreakDownItemList();

    }

   public buildForm(){

        this.itemDetailForm = this.formBuilder.group({
            EstimateItemId: [''],
            AdjustmentType:  ['', Validators.required],
            AdjustedItemName:['' ,  [Validators.required, Validators.maxLength(100)]],
            AdjustmentValue:  ['', [ Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
            AdjustedUnitCost:  ['', Validators.required],
            Qty: ['', [Validators.required, Validators.pattern('^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$')]],
            Remarks:  ['', [Validators.maxLength(500)]],
            CostBreakDownId:  ['', Validators.required],
        });

        this.itemDetailForm.patchValue({
            EstimateItemId: this.item.EstimateItemId,
            AdjustmentType: this.item.AdjustmentType,
            AdjustedItemName: this.item.AdjustedItemName,
            AdjustmentValue: this.item.AdjustmentValue,
            AdjustedUnitCost: this.item.AdjustedUnitCost,
            Qty: this.item.Qty,
            Remarks: '',
            CostBreakDownId: this.item.CostBreakDownId
        });


    }

    // convenience getter for easy access to form fields
    get f() { return this.itemDetailForm.controls; }

    onSubmit(itemDetailForm) {

        this.submitted = true;
        // stop here if form is invalid
        if (this.itemDetailForm.invalid) {
            return;
        }
        if (this.estimateItemId > 0 ) {
            itemDetailForm.EstimateItemId = this.estimateItemId;
        }
        itemDetailForm.ItemId = this.item.ItemId;
        itemDetailForm.EstimateId = Number(localStorage.getItem('estimateId'));
        itemDetailForm.EstimateItemId = this.item.EstimateItemId;
        itemDetailForm.AdjustedUnitCost = this.item.AdjustedUnitCost;
        itemDetailForm.UnitPrice = this.item.UnitPrice;
        itemDetailForm.TotalCost = this.item.TotalCost;


        this.loading = true;
        this.httpEstimateService.createEstimateItem(itemDetailForm)
            .subscribe(
                data => {
                    this.alertService.success(this.estimateItemId > 0 ?'Item updated successfully': 'Item save successfully', true);
                    this.loading  = false;
                    this.modal.resolve(true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


    }

    private getCostBreakDownItemList() {
        this.httpEstimateService.getEstimateCbdList( Number(localStorage.getItem('estimateId')))
            .subscribe(cbdItem => {
                this.costBreakDownItemModel = cbdItem;
                if (this.costBreakDownItemModel.length >  0 )
                {
                    this.costBreakDown = '';
                }
            });

    }

    public gotoEstimateItem() {
       this.buildForm();
        this.modal.resolve(false);

    }

    onAdjustmentTypeChange(){

        this.adjustmentCost();
    }

    onAmountChange(){

      this.adjustmentCost();
    }

    onQtyChange(){

        this.calculateCost();
    }

  private adjustmentCost(){
      let adjustmentType =  this.f.AdjustmentType.value;
      let adjustmentValue =  this.f.AdjustmentValue.value;
      if(adjustmentType === '$')
      {
          this.item.AdjustedUnitCost = Number(this.item.UnitPrice) + Number(adjustmentValue);
      }
      else {
          let amount = Number(this.item.UnitPrice) * Number(Number(adjustmentValue)/Number(100));
          this.item.AdjustedUnitCost = Number(this.item.UnitPrice) + Number(amount);
      }
      this.calculateCost();
  }

  private  calculateCost(){

      let qty =  this.f.Qty.value;
     let adjustedUnitCost  =  this.item.AdjustedUnitCost;
      if(adjustedUnitCost > 0)
      this.item.TotalCost  = Number(qty) * Number(adjustedUnitCost);
      else
      {
          this.item.TotalCost = Number(qty) * Number(this.item.UnitPrice);
      }
  }
}
