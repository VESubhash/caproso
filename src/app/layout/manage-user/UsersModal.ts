export class UsersModal {

    UserId: number;
    UserName: string;
    FirstName: string;
    MiddleInitial: string;
    LastName: string;
    IsActive: boolean;
    UserRoleId: number;
    UserRoleName: string;
    UserGroupName: string;
}

export class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}
