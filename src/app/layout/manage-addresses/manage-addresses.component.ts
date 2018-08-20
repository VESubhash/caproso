import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressesService} from '../../services/addresses.service';
import { AddressesModal } from './AddressesModal';
import {ActiveModel} from '../../model/ActiveModel';

@Component({
  selector: 'manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss']
})
export class ManageAddressesComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    addressOptions:{} ;
    contactId: number;
    addresses: AddressesModal[];
    activeModel: ActiveModel[];
    constructor(private httpAddressesService: AddressesService, private router: Router, private route: ActivatedRoute ) {

    }
    ngOnInit(): void {
        this.route
            .queryParams
            .subscribe(params => {
                this.contactId = params['id'] || 0;
            });
        this.bindAddressesTable();
        this.loadActiveModel();
    }

    bindAddressesTable(): void {


        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.addressOptions = {
                    contactId:  localStorage.getItem('contactId'),
                };
                dataTablesParameters.addressOptions = this.addressOptions;
                this.httpAddressesService.get(dataTablesParameters).subscribe(resp => {
                    this.addresses = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'Address1' },{ data: 'Address2' },{ data: 'City' },{ data: 'PostalCode' },{ data: 'StateName' },{ data: 'CountryName' }]
        };
    }

    public  addAddress() {
        localStorage.removeItem('addressId');
        this.router.navigate(['/address-detail']);
    }

    public goToAddressDetails(id: number) {

        localStorage.setItem('addressId', id.toString());
        this.router.navigate(['address-detail']);

    }
    public  loadActiveModel(){
        this.activeModel = [{"value": 'True' ,"name": 'Active'},{"value": 'False' ,"name": 'InActive'}];
    }
}
