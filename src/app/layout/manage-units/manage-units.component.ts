import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TagsModal } from './TagsModal';

import {TagsService} from '../../services/tag.service';
import {ActiveModel} from '../../model/ActiveModel';
import {AlertService} from '../../services/alert.service';


@Component({
  selector: 'manage-units',
  templateUrl: './manage-units.component.html',
  styleUrls: ['./manage-units.component.scss']
})
export class ManageUnitsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    groupOptions:{} ;
    organizationId: number;
    units: TagsModal[];
    organization: string;
    activeModel: ActiveModel[];
    constructor(private httpTagService: TagsService
                , private router: Router
                , private alertService: AlertService
    ) {

    }
    ngOnInit(): void {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId =  Number(localStorage.getItem('organizationId'));
        this.bindTagTables();
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
                    ltagType: 'Unit'
                };
                dataTablesParameters.groupOptions = this.groupOptions;
                this.httpTagService.get(dataTablesParameters).subscribe(resp => {
                        this.units = resp[0].Data;

                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });

                });
            },
            columns: [{ data: 'TagName' }, { data: 'TagDescr' },{ data: 'IsActive' } ]
        };
    }

    public  addUnit() {
        localStorage.removeItem('lTagId');

        this.router.navigate(['/unit-detail']);
    }

    public goToUnitDetails(id: number) {

        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId',this.organizationId.toString());

        this.router.navigate(['unit-detail']);

    }
public goToOrganizationDetails(){
    this.router.navigate(['manage-organizations']);
}
    public onStatusChange(tag: TagsModal, isActive: boolean) {

        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(
                data => {
                    if (data) {
                        tag.IsActive = isActive;
                        this.alertService.success(tag.IsActive ? 'unit activate successfully' : 'unit deactivate successfully' );
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
