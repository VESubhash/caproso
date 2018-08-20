import {Component, Input, OnInit, SkipSelf} from '@angular/core';
import { FormBuilder, FormGroup, ControlContainer } from '@angular/forms';
import {TagsService} from '../../../services/tag.service';

@Component({
    selector: 'cip-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})



export class AddressComponent implements OnInit {
    @Input() public groupName: string;
    @Input() public  submitted: false;
    countriesModel : any;
    statesModel : any;
    constructor(@SkipSelf() public group: ControlContainer, private httpTagsService: TagsService,) {

    }

    ngOnInit(){

        this.getCountryList();
        this.getStateList();
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
}
