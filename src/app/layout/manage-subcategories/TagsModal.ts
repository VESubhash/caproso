export class TagsModal {

 LTagsId :number;
 OrganizationId :number;
 TagDescr :string;
 ParentTagDescr: string;
 SubCategoryName :string;
 IsActive :boolean;
 DisplayOrder: number;
}

export class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}
