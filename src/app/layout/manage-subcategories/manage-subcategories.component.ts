import {Component, OnInit, ViewChild} from '@angular/core';
import {  Router } from '@angular/router';
import { TagsModal } from './TagsModal';

import {TagsService} from '../../services/tag.service';
import {ActiveModel} from '../../model/ActiveModel';
import {AlertService} from '../../services/alert.service';
import {PaModalService} from '../Shared/pa-modal/pa-modal.service';
import {DataTableDirective} from 'angular-datatables';
import {LTagModel} from '../../model/LtagsModel';


@Component({
  selector: 'manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.scss']
})
export class ManageSubcategoriesComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    groupOptions:{} ;
    organizationId: number;
    tags: TagsModal[];
    organization: string;
    parentTagId: number;
    categoryModel : any;
    lTagModel: LTagModel;
    activeModel: ActiveModel[];
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    constructor(
                private httpTagService: TagsService,
                private router: Router,
                private  alertService: AlertService,
                private modalService: PaModalService,
                private httpTagsService: TagsService,
        ) {

    }
    ngOnInit(): void {
        this.organization= localStorage.getItem('organizationName');
        this.organizationId =  Number(localStorage.getItem('organizationId'));

        this.lTagModel = {
            LTagId:0,
            DisplayOrder: 0,
            OrganizationId: 0,
            TagDescr: '',
            TagName:'',
            LTagType:'Sub Category',
            ParentTagId:0
        };
        this.getCategoryList();
        this.bindTagTables();
        this.loadActiveModel();
    }


    bindTagTables(): void {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.groupOptions = {
                    organizationId:  localStorage.getItem('organizationId'),
                    parentTagId: this.parentTagId,
                    ltagType: 'Sub Category'
                };

                dataTablesParameters.groupOptions = this.groupOptions;
                this.httpTagService.get(dataTablesParameters).subscribe(resp => {
                        this.tags = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{ data: 'TagDescr' },{ data: 'DisplayOrder' } ]
        };
    }

    private getCategoryList() {
        this.httpTagService.getTagByTypeAndOrganizationId('Category', this.organizationId ,true)
            .subscribe(categories => {
                this.categoryModel = categories;
            });
    }
    public  addCategory() {
        localStorage.removeItem('lTagId');

        this.router.navigate(['/subcategory-detail']);
    }

    public goToSubCategoryDetails(id: number) {

        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

        this.router.navigate(['subcategory-detail']);

    }

    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }

    public  onCategoryChange(parentTagId){
        this.groupOptions = {
            parentTagId: parentTagId,
        };
        localStorage.setItem('parentTagId', parentTagId);
        this.tags = [];
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.draw();

        });
    }

    public onStatusChange(tag: TagsModal, isActive: boolean) {

        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        tag.IsActive = isActive;
                        this.alertService.success(tag.IsActive ? 'category activate successfully' : 'category deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }

    public  setUp(currentTagId, previousTagId, index)
    {
      this.updateTagDetail(currentTagId, index-1);
        this.updateTagDetail(previousTagId, index);
    }
    public  setDown(currentTagId, nextTagId, index){
      this.updateTagDetail(currentTagId, index+1);
        this.updateTagDetail(nextTagId, index);
    }

    private updateTagDetail(lTagId, index){

        this.httpTagsService.getTagDetailByTagId(lTagId, true)
            .subscribe((data:LTagModel) => {
               this.lTagModel = data;

               this.lTagModel.LTagType= 'Sub Category';
                this.lTagModel.DisplayOrder = index;
                this.httpTagsService.create(this.lTagModel)
                    .subscribe(
                        data => {
                            // this.groupOptions = {
                            //     parentTagId: parentTagId,
                            // };

                            this.tags = [];
                            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                                dtInstance.draw();

                            });
                        },
                        error => {
                            this.alertService.error(error);

                        });
            });


    }

    public async showDeleteSubCategoryConfirmationModal(subCategoryId): Promise<void> {

        let isDelete = await this.modalService.showDialog('deleteSubCategoryDialog');
        if (isDelete) {
            this.httpTagService.updateActive(subCategoryId, false)
                .subscribe(
                    data => {
                        this.alertService.success('Sub Category deleted successfully', true);
                        this.tags = [];
                        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                            //draw the table first
                            dtInstance.draw();

                        });
                    },
                    error => {
                        this.alertService.error(error);

                    });

        }

    }
}
