export class  EstimateModel {
 EstimateId: number;
 OrganizationId : number;
 EstimateNumber: string;
 EstimateGroupId?: number;
 EstimateGroupName: string;
 EstimateTitle: string;
 ProjectScope: string;
 CbdTitle: string;
 Assumptions: string;
 ManagerId: number;
 ManagerName: string;
 IsActive: boolean;
 ModifiedById: number;
    Estimator: string;
    CreatedDate?: Date;
    TotalProjectCost: number;
    ModifiedDate?:Date;

}

