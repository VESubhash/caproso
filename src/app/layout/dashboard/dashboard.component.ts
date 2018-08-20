import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    roleName: string;
    userName:string ='Guest';
    affiliateName: string='';
    organizationName: string = '';
    constructor() {
        this.roleName = localStorage.getItem('roleName');
        this.userName = localStorage.getItem('userName');
        this.affiliateName = localStorage.getItem('affiliateName');
        this.organizationName= localStorage.getItem('organizationName');
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
