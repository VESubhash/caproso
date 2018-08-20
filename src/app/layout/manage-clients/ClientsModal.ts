export class ClientsModal {

    UserId: number;
    ContactId: number;
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
    CreatedDate: Date;
    UserGroups: UserGroupsModel[]
}

export class UserGroupsModel {
    XContactGroupId: number;
    ContactId: number;
    GroupName: string;
    LGroupId: number

}
