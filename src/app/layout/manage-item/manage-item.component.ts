import {Component, OnInit, ViewChild} from '@angular/core';
import {OrganizationsModal} from './OrganizationsModal';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizationsService} from '../../services/organizations.service';
import {AffiliatesService} from '../../services/affiliates.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from 'rxjs/index';
import {ActiveModel} from '../../model/ActiveModel';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {ItemsService} from '../../services/items.service';
import {ItemsModal} from '../manage-items/ItemsModal';

@Component({
    selector: 'manage-item',
    templateUrl: './manage-item.component.html',
    styleUrls: ['./manage-item.component.scss']
})


export class ManageItemComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    itemOptions: {};
    organizations: OrganizationsModal[] = [];
    organizationId: number;
    items: ItemsModal[];
    organization: string;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    activeModel: ActiveModel[];

    constructor(private httpItemService: ItemsService
                , private router: Router
                , private route: ActivatedRoute
                , private alertService: AlertService
    ) {
    }

    ngOnInit(): void {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        // if (this.organizationId == 0) {
        //     this.router.navigate(['manage-organizations']);
        // }
        this.bindItemTables();
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

    public addItems() {
        localStorage.removeItem('itemId');

        this.router.navigate(['/item-detail']);
    }

    public goToItemDetail(id: number) {

        localStorage.setItem('itemId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());

        this.router.navigate(['item-detail']);

    }
}


