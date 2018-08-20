export interface  IUserDetailModel {

    FirstName: string,
    LastName: string,
    UserName: string,
    UserRoleId: number,
    UserGroupId: number,
    Phone: string,
    Phone2: string,
    Addresses: IAddressesModel

}

export  interface IAddressesModel {

        Address1: string,
        Address2: string,
        CountryId: number,
        StateId: number,
        City: string,
        PostalCode: string,
        Password: string,


}
