import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {LogInService} from '../../../service/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    userName:string ='Guest';
    constructor(private translate: TranslateService, public router: Router,   public loginService: LogInService,) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
            this.userName = localStorage.getItem('userName');
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

    changeLang(language: string) {
        this.translate.use(language);
    }
    goToProfile(){
       let roleName = localStorage.getItem('roleName');
       if(roleName == 'Admin') {
           this.router.navigate(['/user-detail']);
       }
       else if(roleName == 'Affiliate') {
           this.router.navigate(['/affiliate-detail']);
       }
       else if(roleName == 'Client Admin') {
         this.router.navigate(['/organization-detail']);
       }
       else if(roleName == 'Client') {
           this.router.navigate(['/client-detail']);
       }
    }
}
