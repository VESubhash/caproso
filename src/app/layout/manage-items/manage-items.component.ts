import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsModal } from './ItemsModal';
import { ActiveModel } from '../../model/ActiveModel';
import { ItemsService } from '../../services/items.service';
import { AlertService } from '../../services/alert.service';


@Component({
    selector: 'manage-items',
    templateUrl: './manage-items.component.html',
    styleUrls: ['./manage-items.component.scss']
})

export class ManageItemsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    itemOptions: {};
    organizationId: number;
    items: ItemsModal[];
    organization: string;
    activeModel: ActiveModel[];
    constructor(private httpItemService: ItemsService, private router: Router, private alertService: AlertService) {

    }

    ngOnInit(): void {

        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        // if (this.organizationId == 0) {
        //     this.router.navigate(['manage-organizations']);
        // }
        this.bindItemTables();
        this.loadActiveModel();
    }


    bindItemTables(): void {


        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.itemOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                };
                dataTablesParameters.itemOptions = this.itemOptions;
                this.httpItemService.get(dataTablesParameters).subscribe(resp => {
                    this.items = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{data: 'ItemCode'},{data: 'ItemName'}, {data: 'CategoryName'}, {data: 'SubCategoryName'}, {data: 'UnitName'}, {data: 'UnitPrice'}]
        };
    }

    public addItems() {
        localStorage.removeItem('itemId');

        this.router.navigate(['/item-detail']);
    }

    public goToItemDetail(id: number) {

        localStorage.setItem('itemId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());

        this.router.navigate(['item-detail']);

    }
    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }
    public onStatusChange(item: ItemsModal, isActive: boolean) {

        this.httpItemService.updateActive(item.ItemId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        item.IsActive = isActive;
                        this.alertService.success(item.IsActive ? 'Item activate successfully' : 'item deactivate successfully' );
                    }
                    else {
                        this.alertService.error('Something wrong please contact to administrator.');
                    }
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
