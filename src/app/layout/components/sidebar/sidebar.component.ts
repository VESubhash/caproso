import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {LogInService} from '../../../service/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    roleName: string ='';
    estimateId: number = 0;
    estimator: number = 0;
    estimatorAdmin: number = 0;
    userEstimator: number = 0;
    estimatorClientAdmin: number = 0;
    estimatorClientAdminMainMenu : number = 0;
    constructor(private translate: TranslateService
                , public router: Router
                , public loginService: LogInService
    ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.estimator = Number(localStorage.getItem('estimator'));
        this.userEstimator = Number(localStorage.getItem('userEstimator'));
        this.roleName = localStorage.getItem('roleName');
        this.estimateId = Number(localStorage.getItem('estimateId'));
        this.estimatorAdmin = Number(localStorage.getItem('estimatorAdmin'));
        this.estimatorClientAdmin = Number(localStorage.getItem('estimatorClientAdmin'));
        this.estimatorClientAdminMainMenu = Number(localStorage.getItem('estimatorClientAdminMainMenu'));
    }

    returnMain(){
       localStorage.removeItem('estimator');
        localStorage.removeItem('estimateId');
        window.location.reload(true);
        this.router.navigate(["/dashboard"]);
    }
    returnDashboard(){
        localStorage.removeItem('estimateId');
        window.location.href = 'dashboard';
        //window.location.reload(true);



    }

    onLoggedout() {
        //[routerLink]="['/login']"
        this.loginService.logout();
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('organizationName');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('affiliateId');
        localStorage.removeItem('affiliateName');
        localStorage.removeItem('lTagId');
        localStorage.removeItem('contactId');
        localStorage.removeItem('roleName');
        localStorage.removeItem('userName');
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimatorAdmin');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        this.router.navigate(['/login'])
    }

    myEstimate(){
        localStorage.setItem('estimator',"1");
       window.location.href='estimate/manage-estimates';
        //window.location.reload(true);
    }

    gotoEarlyEstimatorHome(){
        localStorage.removeItem('estimateId');
        localStorage.setItem('estimator',"1");
        localStorage.setItem('estimatorClientAdmin',"1");
        window.location.reload(true);
    }
    gotoEarlyEstimatorHomeClientAdmin(){
        localStorage.removeItem('estimateId');
        localStorage.setItem('estimatorClientAdmin',"1");
        window.location.reload(true);
    }
    gotoEarlyEstimatorClientAdmin(){
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.setItem('estimatorClientAdminMainMenu',"1");
        window.location.reload(true);
    }
    gotoClientAdminDashboard(){
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        window.location.reload(true);
    }
    gotoUserDashboard(){
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimateId');
        window.location.reload(true);
        this.router.navigate(["/dashboard"]);
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }


}
