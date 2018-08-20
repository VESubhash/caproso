export class GroupModel {
    LTagId: number;
    TagDescr: string;
    IsActive: boolean;
    Checked: boolean;
}

export class UserGroupsModel {
    ContactId: number;
    UserGroups: GroupModel[];


}
