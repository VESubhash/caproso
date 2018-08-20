import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';
import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {


    btnName = 'Submit';
    addressForm: FormGroup;
    loading = false;
    submitted = false;
    addressId: number;
    countriesModel : any;
    statesModel : any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private addressService: AddressesService,
        private route: ActivatedRoute

    ) { }

    ngOnInit() {

        this.buildForm();
        this.addressId = Number(localStorage.getItem('addressId'));
        if (this.addressId > 0 ) {
            this.btnName='Update';
            this.getAddressDetail(this.addressId);

        }

        this.getCountryList();
        this.getStateList();
   }


    buildForm(){
        this.addressForm = this.formBuilder.group({
                    ContactId:[],
                    AddressId:[],
                    Address1: ['', Validators.required],
                    Address2: ['', Validators.maxLength(100)],
                    CountryId: ['1', Validators.required],
                    StateId: ['', Validators.required],
                    City: ['', Validators.required],
                    PostalCode: ['', Validators.required],
            }
        );
    }


    // convenience getter for easy access to form fields
    get f() { return this.addressForm.controls; }

    onSubmit(addressDetail) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addressForm.invalid) {
            return;
        }

        addressDetail.ContactId = localStorage.getItem('contactId');
        addressDetail.AddressId = localStorage.getItem('addressId');
        this.loading = true;
        this.addressService.create(addressDetail)
            .subscribe(
                data => {

                    this.router.navigate(['./manage-addresses']);
                    this.alertService.success(this.addressId > 0 ?'Address updated successfully': 'Address save successfully', true);
                    this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    private getCountryList() {
        this.httpTagsService.getTagsByType('Countries', true)
            .subscribe(countries => {
                this.countriesModel = countries;
            });
    }
    private getStateList() {
        this.httpTagsService.getTagsByTypeAndParentId('States', 1, true)
            .subscribe(states => {
                this.statesModel = states;
            });

    }
    private getAddressDetail(addressId){

        this.addressService.getAddressByAddressId(addressId, true)
            .subscribe((userData:any) => {
                this.addressForm.patchValue({
                    AddressId: userData.AddressId,
                    Address1: userData.Address1,
                    Address2: userData.Address2,
                    CountryId: userData.CountryId ,
                    StateId: userData.StateId ,
                    City: userData.City,
                    PostalCode: userData.PostalCode,
                });
            });


    }







}
