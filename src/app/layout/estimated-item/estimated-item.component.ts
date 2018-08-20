import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {EstimateService} from '../../services/estimate.service';
import {PaModalService} from '../Shared/pa-modal/pa-modal.service';
import {ItemSearchModal} from './item-detail/ItemSearchModal';
import {TagsService} from '../../services/tag.service';
import {ItemsService} from '../../services/items.service';
import {ItemsModel} from '../../model/ItemsModel';
import {DataTableDirective} from 'angular-datatables';
import {EstimatedItemsModel} from '../../model/EstimatedItemsModel';
import {ItemDetailComponent} from '../estimate-item/item-detail/item-detail.component';

@Component({
    selector: 'estimated-item',
    templateUrl: './estimated-item.component.html',
    styleUrls: ['./estimated-item.component.scss']
})
export class EstimatedItemComponent implements OnInit {

    btnName = 'Continue';
    estimateitemForm: FormGroup;
    dtOptions: DataTables.Settings = {};
    dtEstimateItemOptions: DataTables.Settings = {};
    itemOptions: {};
    estimateItemOptions: {};
    dataTablesParameters: any;
    loading = false;
    submitted = false;
    organizationId: number;
    estimateId: number;
    itemSearchModal: ItemSearchModal;
    categoryModel: any;
    subCategoryModel: any;
    item: EstimatedItemsModel;
    items: ItemsModel[] = [];
    totalCost: Number;
    estimateitems: EstimatedItemsModel[] = [];
    @Input() public isApplicable: boolean = false;
    @Input() public expandAccordion: boolean = true;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpEstimateService: EstimateService,
        private modalService: PaModalService,
        private httpTagsService: TagsService,
        private httpItemService: ItemsService,
        private  itemDetailComponent: ItemDetailComponent
    ) {
    }

    ngOnInit() {

        this.buildForm();

        if (this.estimateId > 0) {
            this.btnName = 'Update and Continue';
        }
        this.getCategoryList();
        this.item = {
            EstimateItemId: Number(localStorage.getItem('estimateItemId')),
            EstimateId: Number(localStorage.getItem('estimateId')),
            OrganizationId: 0,
            OrganizationName: '',
            AdjustedItemName: '',
            AdjustLTypeId: 0,
            AdjustmentType: '',
            AdjustmentValue: 0,
            AdjustedUnitCost: 0,
            Qty: 0,
            TotalCost: 0,
            CostBreakDownId: 0,
            CostBreakDownHeading:'',
            CostBreakDownName: '',
            ItemId: '',
            ItemCode: '',
            Note: '',
            Remarks: '',
            Category: '',
            SubCategory: '',
            Unit: '',
            UnitPrice: ''
        };
        this.itemSearchModal = {OrganizationId: localStorage.getItem('organizationId'), CategoryId: 0, SubCategoryId: 0, ItemName: ''};
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: 0,
            SubCategoryId: 0,
            ItemName: '',
        };
        this.getItem();
        this.getEstimatedItem();
    }

    onSubmit(searchItem) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.estimateitemForm.invalid) {
            return;
        }

        this.itemSearchModal = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: searchItem.CategoryId,
            SubCategoryId: searchItem.SubCategoryId,
            ItemName: searchItem.ItemName
        };
        this.getItem();
        this.reDrawTable();

    }

    public onCategoryChange(categoryId) {
        this.getSubCategoryList(categoryId);
    }

    public onAccordionExpand() {
        this.expandAccordion = !this.expandAccordion;
    }

    public buildForm() {
        this.estimateitemForm = this.formBuilder.group({
            CategoryId: ['', Validators.required],
            SubCategoryId: ['', Validators.required],
            ItemName: ['']
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.estimateitemForm.controls;
    }

    public reDrawTable() {
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: this.itemSearchModal.CategoryId,
            SubCategoryId: this.itemSearchModal.SubCategoryId,
            ItemName: this.itemSearchModal.ItemName,
        };

        this.items = [];
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();
        });
    }

    public getItem() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.itemOptions = {
                    OrganizationId: localStorage.getItem('organizationId'),
                    CategoryId: this.itemSearchModal.CategoryId,
                    SubCategoryId: this.itemSearchModal.SubCategoryId,
                    ItemName: this.itemSearchModal.ItemName,
                };
                dataTablesParameters.itemOptions = this.itemOptions;
                this.httpItemService.searchItem(dataTablesParameters).subscribe(resp => {
                    this.items = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{data: 'ItemCode'}, {data: 'ItemDescr'}, {data: 'CategoryName'}, {data: 'SubCategoryName'}, {data: 'Unit'}, {data: 'UnitPrice'}]
        };



    }

    public getEstimatedItem() {
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),

        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(resp => {
            this.estimateitems = resp[0].Data;
            this.totalCost =  Number(resp[0].Data.reduce((sum, val) => sum + val.TotalCost, 0));
        });


    }

    private getCategoryList() {
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', Number(localStorage.getItem('organizationId')), true)
            .subscribe(categories => {
                this.categoryModel = categories;
            });
    }

    private getSubCategoryList(categoryId) {
        this.httpTagsService.getTagsByTypeAndParentId('Sub Category', categoryId, true)
            .subscribe(subcategories => {
                this.subCategoryModel = subcategories;
            });
    }

    public goToEstimateDocument() {
        this.router.navigate(['estimate/document']);
    }

    public  gotoEstimateMarkups(){
        this.router.navigate(['estimate/markups']);
    }

    public async showItemDetailDialog(item): Promise<void> {

        this.item = {
            EstimateItemId: 0,
        EstimateId: Number(localStorage.getItem('estimateId')),
        OrganizationId: 0,
        OrganizationName: '',
        AdjustedItemName: item.ItemDescr,
        AdjustLTypeId: 0,
        AdjustmentType: '%',
        AdjustmentValue: 0,
        AdjustedUnitCost: 0,
        Qty: 0,
        TotalCost: 0,
        CostBreakDownId: 0,
        CostBreakDownHeading: '',
        CostBreakDownName: '',
        ItemId: item.ItemId,
        ItemCode: item.ItemCode,
        Note: '',
        Remarks: item.Note,
        Category: item.CategoryName,
        SubCategory: item.SubCategoryName,
        Unit: item.Unit,
        UnitPrice: item.UnitPrice
        };

        let searchItem = await this.modalService.showDialog('itemDetailDialog');
        if (searchItem == true) {
            this.getEstimatedItem();
        }
    }

    public async showEstimatedItemDetailDialog(item): Promise<void> {

        this.item = item;
        this.itemDetailComponent.item = item;
        this.itemDetailComponent.buildForm();


        let searchItem = await this.modalService.showDialog('itemDetailDialog');
        if (searchItem == true) {
            this.getEstimatedItem();
        }
    }

    public async showDeleteEstimateItemConfirmationModal(estimateItemId): Promise<void> {

        let isdelete = await this.modalService.showDialog('deleteEstimatedItemDialog');
        if (isdelete) {
            this.httpEstimateService.updateEstimateItemActive(estimateItemId, false)
                .subscribe(
                    data => {
                        this.alertService.success('Item deleted successfully', true);
                        this.getEstimatedItem();
                    },
                    error => {
                        this.alertService.error(error);

                    });

        }

    }

    public  copyEstimatedItem(estimateItemId){

        this.httpEstimateService.copyEstimatedItem(estimateItemId)
            .subscribe(
                data => {
                    if (data) {

                        this.alertService.success( 'Estimate item copied successfully', false);
                        this.getEstimatedItem();
                        // this.estimateOptions = {
                        //     organizationId:  localStorage.getItem('organizationId'),
                        // };
                        // this.estimates = [];
                        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                        //     //draw the table first
                        //     dtInstance.draw();
                        //
                        // });
                    }
                    else {
                        this.alertService.success('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                    // this.loading = false;
                });

    }
}
