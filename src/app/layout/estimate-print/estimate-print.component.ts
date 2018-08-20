import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {EstimatedItemsModel} from '../../model/EstimatedItemsModel';
import {Router} from '@angular/router';
import {EstimateService} from '../../services/estimate.service';
import {AlertService} from '../../services/alert.service';
import {EstimateModel} from '../../model/EstimateModel';
import {EstimateMarkupsModel} from '../../model/EstimateMarkupsModel';

@Component({
    selector: 'estimate-documents',
    templateUrl: './estimate-print.component.html',
    styleUrls: ['./estimate-print.component.scss']
})
export class EstimatePrintComponent implements OnInit, AfterViewInit {
    estimatedItems: EstimatedItemsModel[] = [];
    estimateItemOptions: {};
    dataTablesParameters: any;
    estimateId: number;
    estimateModel: EstimateModel;
    estimateMarkups: EstimateMarkupsModel[] = [];
    totalCost: number;
    costBreakDown = false;
    costBreakDownHeading = '';
    colSpan="4";
    constructor( private router: Router,
                 private alertService: AlertService,
                 private httpEstimateService: EstimateService,
    ) {
        this.estimateId =   Number(localStorage.getItem('estimateId'));
        this.estimateModel= {
            EstimateTitle:'',
            EstimateNumber:'',
            EstimateId:0,
            ManagerName:'',
            ManagerId:0,
            EstimateGroupName:'',
            Assumptions:'',
            ProjectScope:'',
            CbdTitle:'',
            EstimateGroupId:0,
            IsActive:true,
            ModifiedById:0,
            OrganizationId:0,
            Estimator:'',
            TotalProjectCost:0,



        }
        if (this.estimateId > 0 ) {

            this.getEstimateDetail(this.estimateId);

        }

        this.getEstimatedItem();
        this.getEstimateMarkups();

    }

    ngOnInit() {


    }
    ngAfterViewInit(){

    }
    print(): void {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
         @media print {
               body { font-family: Arial; font-size:14px;}   
               .print-first { page-break-after:always;}
               .table{width:100%;}
               .odd{ background-color:#00b3ee;}
               .bold-text{ font-weight:bold;}
               .adjustment-heading {border:solid #000000!important; border-width:1px 0 0 0 !important; font-size: 16px;}
               .item-description { width:95%;}
               .text-right { text-align:right !important;}
               .text-left{ text-align:left !important;}
               .odd{ -webkit-print-color-adjust:exact; background-color:#f5f5f5 !important;}
               .even{ -webkit-print-color-adjust:exact; background-color: #ffffff; }
               .header-section th{ line-height:1.2em; padding:8px; border:solid #c5c4c4!important; border-width:1px 0 1px 0 !important;}
               .even td,  .odd td{ border:solid #c5c4c4 !important; border-width:0 0 1px 0 !important; line-height:1em; padding:8px;}
               .total-project-cost{-webkit-print-color-adjust:exact; background-color:#f5f5f5!important; font-size:18px;} 
               .total-section td{ line-height:1.5em; padding:8px;}
               .total-section td:nth-last-child(1){ border:solid #000000 !important; border-width:1px 0 0 0 !important;}
  
       
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
        );
        popupWin.document.close();
    }

    public  getEstimateDetail(estimateId){
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe((data:any) => {
                localStorage.setItem('cbdTitle', data.CbdTitle);
                this.estimateModel = data;
                // this.estimateCreateForm.patchValue({
                //     OrganizationId: data.organizationId,
                //     EstimateId: data.EstimateId,
                //     EstimateTitle: data.EstimateTitle,
                //     EstimateNumber: data.EstimateNumber,
                //     ProjectScope: data.ProjectScope,
                //     Assumptions: data.Assumptions,
                //     ManagerId: data.ManagerId,
                //     EstimateGroupId: data.EstimateGroupId,
                // });
            });
    }

    public getEstimatedItem() {
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),

        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(resp => {
            this.estimatedItems = resp[0].Data;
            this.totalCost =  Number(resp[0].Data.reduce((sum, val) => sum + val.TotalCost, 0));
            for(let item of this.estimatedItems){
                if(item.CostBreakDownName.length > 0)
                {
                    this.colSpan = '5';
                    this.costBreakDown = true;
                    this.costBreakDownHeading = item.CostBreakDownHeading;
                }
            }

        });



    }

    public getEstimateMarkups(){
        this.httpEstimateService.getEstimateMarkup(this.estimateId)
            .subscribe(
                (data :EstimateMarkupsModel[])=> {
                    this.estimateMarkups = data;
                    this.print();
                },
                error => {
                    this.alertService.error(error);

                });
    }
}
