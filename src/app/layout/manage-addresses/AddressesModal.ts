export class AddressesModal {

 ContactId :number;
 AddressId :number;
 Address1 :string;
 Address2 :string;
 City :string;
 PostalCode :string;
 StateAbbr :string;
 StateName :string;
 CountryAbbr:string;
    CountryName:string;
 IsActive:boolean;
}

export class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}
