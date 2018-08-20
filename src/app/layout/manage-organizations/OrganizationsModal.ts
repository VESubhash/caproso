export class OrganizationsModal {

    UserId: number;
    OrganizationId: number;
    OrganizationName: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    IsActive: boolean;
    UserRoleId: number;
    UserRoleName: string;
    UserGroupName: string;
    StatusId: number;
}

export class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}
