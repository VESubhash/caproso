import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {


    btnName = 'Submit';
    itemForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    itemId: number;
    categoryModel : any;
    subCategoryModel : any;
    unitModel : any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private httpItemsService: ItemsService,
        private route: ActivatedRoute

    ) { }

    ngOnInit() {

        this.buildForm();
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.itemId = Number(localStorage.getItem('itemId'));
        this.getCategoryList();
        this.getUnitList();
        if (this.itemId > 0 ) {
            this.btnName='Update';
            this.getItemDetail(this.itemId);

        }
   }


    buildForm(){
        this.itemForm = this.formBuilder.group({
                    OrganizationId:[this.organizationId ],
                    ItemCode:['', [Validators.required, Validators.maxLength(30)]],
                    ItemDescr: ['', [Validators.required, Validators.maxLength(30)]],
                    LCategoryId:['', Validators.required],
                    LSubCategoryId:['', Validators.required],
                    LUnitId: ['', Validators.required],
                    UnitPrice: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
                    Note: ['', [Validators.required, Validators.maxLength(2000)]],
            }
        );
    }


    // convenience getter for easy access to form fields
    get f() { return this.itemForm.controls; }

    onSubmit(itemDetail) {

        this.submitted = true;
        // stop here if form is invalid
        if (this.itemForm.invalid) {
            return;
        }
        itemDetail.OrganizationId = Number(localStorage.getItem('organizationId'));
        if (this.itemId > 0 ) {
            itemDetail.itemId = this.itemId;
        }
        this.loading = true;
        this.httpItemsService.create(itemDetail)
            .subscribe(
                data => {

                    this.router.navigate(['./manage-item']);
                    this.alertService.success(this.itemId > 0 ?'Item updated successfully': 'Item save successfully', true);
                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private getItemDetail(itemId){

        this.httpItemsService.getItemDetail(itemId, true)
            .subscribe((data:any) => {
                this.getSubCategoryList(data.LCategoryId);
                this.itemForm.patchValue({
                    OrganizationId: data.organizationId,
                    ItemCode: data.ItemCode,
                    ItemDescr: data.ItemDescr,
                    LCategoryId: data.LCategoryId,
                    LSubCategoryId: data.LSubCategoryId,
                    LUnitId: data.LUnitId,
                    UnitPrice: data.UnitPrice,
                    Note: data.Note,
                });
            });
    }

    private getCategoryList() {
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', this.organizationId ,true)
            .subscribe(categories => {
                this.categoryModel = categories;
            });
    }

    private getSubCategoryList(categoryId: number) {
        this.httpTagsService.getTagsByTypeAndParentId('Sub Category', categoryId ,true)
            .subscribe(subcategories => {
                this.subCategoryModel = subcategories;
            });
    }

    private getUnitList() {
        this.httpTagsService.getTagByTypeAndOrganizationId('Unit', this.organizationId ,true)
            .subscribe(unit => {
                this.unitModel = unit;
            });
    }


    onCategoryChange(categoryId){

        this.getSubCategoryList(categoryId);
    }

    public  goToDocuments(){
        localStorage.setItem('itemId' , this.itemId.toString());
        this.router.navigate(['./manage-documents'])
    }

    public gotoManageItem(){
        localStorage.removeItem('itemId');
        this.router.navigate(['./manage-items'])
    }

}
