import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';

@Component({
  selector: 'subcategory-detail',
  templateUrl: './subcategory-detail.component.html',
  styleUrls: ['./subcategory-detail.component.scss']
})
export class SubcategoryDetailComponent implements OnInit {


    btnName = 'Submit';
    groupForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    lTagsId: number;
    parentTagId: number;
    categoryModel : any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private route: ActivatedRoute

    ) { }

    ngOnInit() {

        this.buildForm();
        this.lTagsId = 0;
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagsId = Number(localStorage.getItem('lTagId'));
        this.getCategoryList();
        if (this.lTagsId > 0 ) {
            this.btnName='Update';
            this.getTagDetail(this.lTagsId);

        }

   }


    buildForm(){
        this.groupForm = this.formBuilder.group({
                    OrganizationId:[this.organizationId ],
                    LTagsId:[this.lTagsId ],
                    ParentTagId:['', Validators.required],
                    TagDescr: ['', Validators.required],
                    LTagType:['Sub Category']
            }
        );

     // let parentTagId= localStorage.getItem('parentTagId');
     //    this.groupForm.patchValue({
     //        ParentTagId: parentTagId,
     //    });
    }


    // convenience getter for easy access to form fields
    get f() { return this.groupForm.controls; }

    onSubmit(tagDetail) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.groupForm.invalid) {
            return;
        }
        tagDetail.OrganizationId = Number(localStorage.getItem('organizationId'));
        tagDetail.LTagId = localStorage.getItem('lTagId');
        this.loading = true;
        this.httpTagsService.create(tagDetail)
            .subscribe(
                data => {

                    this.router.navigate(['./manage-subcategories']);
                    this.alertService.success(this.lTagsId > 0 ?'Category updated successfully': 'Category save successfully', true);
                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private getTagDetail(ltagId){

        this.httpTagsService.getTagDetailByTagId(ltagId, true)
            .subscribe((data:any) => {
                this.groupForm.patchValue({
                    LTagId:data.LTagId,
                    OrganizationId: data.OrganizationId,
                    TagDescr: data.TagDescr,
                    ParentTagId: data.ParentTagId,
                });
            });


    }

    private getCategoryList() {
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', this.organizationId ,true)
            .subscribe(categories => {
                this.categoryModel = categories;
            });
    }

    public goToManageSubCategories() {
        this.router.navigate(['manage-subcategories']);
    }




}
