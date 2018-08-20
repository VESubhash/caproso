import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {LogInService} from '../service/login.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public user: any;
    public ui: any = {loading: false, text: 'Matching Info...'};
    organizationId = 0;
    form: FormGroup;

    constructor(public router: Router,
                public http: HttpClient,
                public loginService: LogInService,
                public _cookieService: CookieService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            UserName: [null, [Validators.required, Validators.email]],
            PassWord: [null, Validators.required],
        });

    }

    onLoggedin(user) {
        this.ui = {loading: true, text: 'Matching Info...', css: 'text-success'};
        this.loginService.login(user).subscribe(response  => {
                this.user = response;
                this.setLocalStorageValue();

                this._cookieService.put('LM.JWT', response['Token'], {'path': '/'});
                this.router.navigate(['/dashboard']);

                this._cookieService.put('currentUser', JSON.stringify(response), {'path': '/'});
                this.ui.loading = !this.ui.loading;

        }, error => {
            this.ui.text = error.error.Message;
            this.ui.css ='text-danger';
        });
    }

    private setLocalStorageValue() {
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimator');
        localStorage.setItem('roleName', this.user.RoleName);
        localStorage.setItem('userName', `${this.user.FirstName} ${this.user.LastName} (${this.user.RoleName})`);
        localStorage.setItem('isLoggedin', 'true');
        if(this.user.RoleName === 'Affiliate')
        {
            localStorage.setItem('userName', `${this.user.FirstName} ${this.user.LastName} (${this.user.AffiliateName})`);
        }
        if(this.user.RoleName === 'Client Admin' || this.user.RoleName == 'Client')
        {
            localStorage.setItem('userName', `${this.user.FirstName} ${this.user.LastName} (${this.user.OrganizationName})`);
        }
        if(this.user.UserId > 0 )
            localStorage.setItem('userId', this.user.UserId.toString());
        if(this.user.OrganizationId > 0 )
            localStorage.setItem('organizationId', this.user.OrganizationId);
        if(this.user.OrganizationName)
            localStorage.setItem('organizationName', this.user.OrganizationName);
        if(this.user.AffiliateId > 0 )
            localStorage.setItem('affiliateId', this.user.AffiliateId);
        if(this.user.AffiliateName )
            localStorage.setItem('affiliateName', this.user.AffiliateName);
        if(this.user.ContactId > 0 )
        localStorage.setItem('contactId', this.user.ContactId);
    }
}
