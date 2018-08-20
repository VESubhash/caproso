import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../../services/estimate.service';
import { EstimateModel } from '../../model/EstimateModel';

@Component({
  selector: 'estimate-data',
  templateUrl: './estimate-data.component.html',
  styleUrls: ['./estimate-data.component.scss']
})
export class EstimateDataComponent implements OnInit {

    estimateId: number;
    estimateModel: EstimateModel;
  constructor(
               private httpEstimateService: EstimateService,
              ) { }

    ngOnInit() {

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

    }

    public  getEstimateDetail(estimateId){
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe((data:any) => {
                this.estimateModel = data;
            });
    }

}
