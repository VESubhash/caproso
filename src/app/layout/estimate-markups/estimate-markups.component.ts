import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {EstimateService} from '../../services/estimate.service';
import {EstimateMarkupsModel} from '../../model/EstimateMarkupsModel';
import {PaModalService} from '../Shared/pa-modal/pa-modal.service';
import {MarkupDetailComponent} from './markup-detail/markup-detail.component';

@Component({
    selector: 'estimate-markeups',
    templateUrl: './estimate-markups.component.html',
    styleUrls: ['./estimate-markups.component.scss']
})
export class EstimateMarkupsComponent implements OnInit {
    btnName = 'Save';
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;
    parentMarkupId: number;
    estimatemarkups: EstimateMarkupsModel[] = [];
    adjustmentTypeModel = [];
    estimateItemOptions: {};
    dataTablesParameters: any;
    itemTotalCost: number;
    constructionTotal: number;
    markupName: string = '';
    estimateMarkupsModel: EstimateMarkupsModel;
    displayOrder = 0;
    otherRequirementMarkupId = 0;
    otherProjectCostMarkupId = 0;
    otherRequirementDisplayOrder = 0;
    otherProjectCostDisplayOrder = 0;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpEstimateService: EstimateService,
        private modalService: PaModalService,
        private markupDetailComponent: MarkupDetailComponent
    ) {
        this.estimateId = Number(localStorage.getItem('estimateId'));
    }

    ngOnInit() {

        this.estimateMarkupsModel = {
            EstimateId: this.estimateId,
            ParentMarkupId: 0,
            ConstructionTotal: 0,
            MarkupId: 0,
            MarkupName: '',
            AdjustmentTotal: 0,
            AdjustmentValue: 0,
            AdjustmentType: '%',
            MarkupType: '',
            LAdjustmentTypeId : 0,
            DisplayOrder: 0,
            MarkupTotal: 0,
        }

        this.adjustmentTypeModel.push( {AdjustmentType  : '$', LAdjustmentTypeId: 56498});
        this.adjustmentTypeModel.push( {AdjustmentType  : '%' , LAdjustmentTypeId: 56497});

        this.getEstimateMarkups();
        this.getTotalEstimatedCost();


    }

    onAdjustmentTypeChange(estimateMarkup: EstimateMarkupsModel, adjustmentType){
        estimateMarkup.AdjustmentType =  adjustmentType.AdjustmentType;
        this.adjustmentCost(estimateMarkup);
        this.getEscalationYearsCost();
        this.getTotalProjectCost();
    }

    onAmountChange(estimateMarkup: EstimateMarkupsModel){
        this.adjustmentCost(estimateMarkup);
        this.getEscalationYearsCost();
        this.getTotalProjectCost();
    }

    public goToItem() {
        this.router.navigate(['estimate/item']);
    }

    public getEstimateMarkups(){
        let estimateId = localStorage.getItem('estimateId');
        this.estimateId = Number(estimateId);
        this.loading = true;
        this.httpEstimateService.getEstimateMarkup(estimateId)
            .subscribe(
                (data :EstimateMarkupsModel[])=> {
                  this.estimatemarkups = data;
                    this.loading = false;
                   // this.getSubtotalConstruction();
                    this.getOtherRequirementMarkupId();
                    this.getOtherProjectCostMarkupId();
                },
                error => {
                    this.alertService.error(error);

                });
    }

    public  getOtherRequirementMarkupId()
    {

        this.httpEstimateService.getEstimateMarkupByEstimateIdAndMarkUpName(this.estimateId, 'Other Construction')
            .subscribe(
                data => {

                    this.estimateMarkupsModel = data as EstimateMarkupsModel;
                    this.otherRequirementMarkupId = this.estimateMarkupsModel.MarkupId;
                    this.otherRequirementDisplayOrder = this.estimateMarkupsModel.DisplayOrder;
                },
                error => {
                    this.alertService.error(error);

                });

    }

    public  getOtherProjectCostMarkupId()
    {

        this.httpEstimateService.getEstimateMarkupByEstimateIdAndMarkUpName(this.estimateId, 'Other Project Cost')
            .subscribe(
                (data:EstimateMarkupsModel) => {
                    //this.estimateMarkupsModel = data as EstimateMarkupsModel;
                    this.otherProjectCostMarkupId = data.MarkupId;
                    this.otherProjectCostDisplayOrder = data.DisplayOrder;
                },
                error => {
                    this.alertService.error(error);

                });
    }
    public getTotalEstimatedCost() {
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(resp => {
        this.itemTotalCost =  Number(resp[0].Data.reduce((sum, val) => sum + val.TotalCost, 0));
        });
    }

    public async showDetailDialog(markupName): Promise<void> {
        this.markupName = markupName;
        localStorage.removeItem('markupId');
        if(markupName ==='Other Project Cost')
        {
            this.getSubtotalConstruction();
        }

        this.parentMarkupId = markupName ==='Other Construction'? this.otherRequirementMarkupId: this.otherProjectCostMarkupId;
        this.constructionTotal = markupName ==='Other Construction'? this.itemTotalCost : this.constructionTotal;
        this.displayOrder = markupName ==='Other Construction'? this.otherRequirementDisplayOrder: this.otherProjectCostDisplayOrder;

        this.estimateMarkupsModel = {
            EstimateId: this.estimateId,
            ParentMarkupId: this.parentMarkupId,
            ConstructionTotal: this.constructionTotal,
            MarkupId: 0,
            MarkupName: '',
            AdjustmentTotal: 0,
            AdjustmentValue: 0,
            AdjustmentType: '%',
            MarkupType: '',
            LAdjustmentTypeId : 0,
            DisplayOrder: 0,
            MarkupTotal: this.constructionTotal
        }

       localStorage.setItem('markupId','0');
        this.estimateMarkupsModel.MarkupType = markupName;
         await this.saveMarkupsandOpenDialog();


    }

    public async showEditMarkupDetailDialog(markupName, markupId): Promise<void> {
        this.markupName = markupName;
        if(markupName ==='Other Project Cost')
        {
            this.getSubtotalConstruction();
        }

        this.parentMarkupId = markupName ==='Other Construction'? this.otherRequirementMarkupId: this.otherProjectCostMarkupId;
        this.constructionTotal = markupName ==='Other Construction'? this.itemTotalCost : this.constructionTotal;
        this.displayOrder = markupName ==='Other Construction'? this.otherRequirementDisplayOrder: this.otherProjectCostDisplayOrder;

        localStorage.setItem('markupId', markupId);


        this.getMarkupDetailsById(markupId, markupName);

        let searchItem = await this.modalService.showDialog('markupDetailDialog');
        if (searchItem == true) {
            this.getEstimateMarkups();
        }

    }

    private adjustmentCost(estimateMarkup: EstimateMarkupsModel){

        estimateMarkup.ConstructionTotal = this.itemTotalCost;
        if(estimateMarkup.AdjustmentType !== '') {
            if (estimateMarkup.AdjustmentType === '$') {
                estimateMarkup.AdjustmentTotal =  Number(estimateMarkup.AdjustmentValue);
            }
            else {
                let amount = Number(estimateMarkup.ConstructionTotal) * Number(Number(estimateMarkup.AdjustmentValue) / Number(100));
                estimateMarkup.AdjustmentTotal =  Number(amount);
            }
            this.getSubtotalConstruction();

            this.getSubtotalOtherProjectCost();
        }

    }

    private getSubtotalConstruction()
    {
        let otherRequirementTotalCost = 0;
        let estimateId = localStorage.getItem('estimateId');
        let itemTotal =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Item Total')[0];
        let scopeDevelopment =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Scope Development')[0];
        let mobilization =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Mobilization')[0];
        let subtotalConstruction =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Construction')[0];

        // Other Construction
      let otherRequirement =  this.estimatemarkups.filter(w=> w.ParentMarkupId == this.otherRequirementMarkupId);

        otherRequirementTotalCost =  Number(otherRequirement.reduce((sum, val) => sum + val.AdjustmentTotal, 0));

        this.constructionTotal = itemTotal.AdjustmentTotal + scopeDevelopment.AdjustmentTotal + mobilization.AdjustmentTotal + otherRequirementTotalCost;

        let indexSubtotalConstruction = this.estimatemarkups.indexOf(subtotalConstruction);

        this.estimatemarkups[indexSubtotalConstruction].AdjustmentTotal = Math.round(this.constructionTotal * 100) / 100;

    }

    private getSubtotalOtherProjectCost()
    {

        let estimateId = localStorage.getItem('estimateId');

        let subtotalConstructions =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Construction')[0];

        let subtotalOtherProjectCosts =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Other Project Costs')[0];

        // Other Project sub total cost
        let otherProjectCost =  this.estimatemarkups.filter(w=> w.ParentMarkupId == this.otherProjectCostMarkupId);

        let otherProjectTotalCost =  Number(otherProjectCost.reduce((sum, val) => sum + val.AdjustmentTotal, 0));

        let subtotalOtherProjectCostTotal = otherProjectTotalCost;

        let indexSubtotalOtherProjectCosts = this.estimatemarkups.indexOf(subtotalOtherProjectCosts);

        this.estimatemarkups[indexSubtotalOtherProjectCosts].AdjustmentTotal = Math.round(subtotalOtherProjectCostTotal * 100) / 100;

    }

    private getEscalationYearsCost()
    {

        let subtotalConstruction =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Construction')[0];

        let subtotalOtherProjectCosts =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Other Project Costs')[0];

        let estimateId = localStorage.getItem('estimateId');

        let escalation =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Escalation % Compounded')[0];

        let escalationYears =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Years - Midpoint Construction')[0];


        let totalCost =subtotalConstruction.AdjustmentTotal +  subtotalOtherProjectCosts.AdjustmentTotal;

        let percentageValue = (1+escalation.AdjustmentValue/100);

        let compoundValue = Math.pow(percentageValue, escalationYears.AdjustmentValue) -1;

        let escalationYearsCost =  compoundValue * totalCost;

        let indexEscalationYears = this.estimatemarkups.indexOf(escalationYears);

        this.estimatemarkups[indexEscalationYears].AdjustmentTotal = Math.round(escalationYearsCost * 100) / 100;
    }

    private getTotalProjectCost()
    {
        let subtotalConstruction =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Construction')[0];

        let subtotalOtherProjectCosts =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Subtotal Other Project Costs')[0];

        let escalationYears =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Years - Midpoint Construction')[0];

        let totalProjectCost =  this.estimatemarkups.filter(
            markup => markup.MarkupName === 'Total Project Cost')[0];


        let totalProjectCostAmt =subtotalConstruction.AdjustmentTotal +  subtotalOtherProjectCosts.AdjustmentTotal + escalationYears.AdjustmentTotal;


        let indexTotalProjectCost = this.estimatemarkups.indexOf(totalProjectCost);

        this.estimatemarkups[indexTotalProjectCost].AdjustmentTotal =  Math.round(totalProjectCostAmt * 100) / 100;

    }

    public async showDeleteEstimateMarkupConfirmationModal(estimateMarkupId): Promise<void> {

        let isdelete = await this.modalService.showDialog('deleteEstimatedMarkupDialog');
        if (isdelete) {
            this.httpEstimateService.updateEstimateMarkupActive(estimateMarkupId, false)
                .subscribe(
                    data => {
                        this.alertService.success('adjustment deleted successfully', true);
                        this.getEstimateMarkups()
                    },
                    error => {
                        this.alertService.error(error);

                    });

        }

    }

    public  saveMarkups(){

        this.httpEstimateService.saveEstimateMarkups(this.estimatemarkups).subscribe(
            data => {
                this.alertService.success('adjustment save successfully', true);
            },
            error => {
                this.alertService.error(error);

            });
    }

    getMarkupDetailsById(markupId, markupName){

        this.httpEstimateService.getMarkupDetailById(markupId)
            .subscribe(
                (data: EstimateMarkupsModel) => {
                 this.estimateMarkupsModel = data;
                    this.estimateMarkupsModel.MarkupTotal = markupName ==='Other Construction'? this.itemTotalCost : this.constructionTotal;
                },
                error => {
                    this.alertService.error(error);

                });
    }

    public async saveMarkupsandOpenDialog(){
       await this.httpEstimateService.saveEstimateMarkups(this.estimatemarkups)
            .subscribe(
                async data => {
                    let searchItem =  await this.modalService.showDialog('markupDetailDialog');
                    if (searchItem) {

                        this.getEstimateMarkups();
                    }

                },
                error => {
                    this.alertService.error(error);

                });


    }
}
