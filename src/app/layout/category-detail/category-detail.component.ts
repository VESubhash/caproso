import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {


    btnName = 'Submit';
    groupForm: FormGroup;
    loading = false;
    submitted = false;
    organizationId: number;
    lTagsId: number;
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

        if (this.lTagsId > 0 ) {
            this.btnName='Update';
            this.getTagDetail(this.lTagsId);

        }
   }


    buildForm(){
        this.groupForm = this.formBuilder.group({
                    OrganizationId:[this.organizationId ],
                    LTagsId:[this.lTagsId ],
                    TagDescr: ['', Validators.required],
                    LTagType:['Category']
            }
        );
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

                    this.router.navigate(['./manage-categories']);
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
                });
            });


    }

    public goToManageCategories() {
        this.router.navigate(['manage-categories']);
    }





}