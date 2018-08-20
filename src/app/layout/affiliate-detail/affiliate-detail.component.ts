import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {TagsService} from '../../services/tag.service';
import {AffiliatesService} from '../../services/affiliates.service';

@Component({
    selector: 'affiliate-detail',
    templateUrl: './affiliate-detail.component.html',
    styleUrls: ['./affiliate-detail.component.scss']
})
export class AffiliateDetailComponent implements OnInit {
    rolesModel: any;

    btnName = 'Submit';
    affiliateForm: FormGroup;
    loading = false;
    submitted = false;
    affiliateId = 0;
    contactId: number;

     constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private affiliateService: AffiliatesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.affiliateId = Number(localStorage.getItem('affiliateId'));
        this.buildForm();


        if (this.affiliateId > 0) {
            this.btnName = 'Update';
            this.getAffiliateDetail(this.affiliateId);

        }
        else {

        }
        this.getRoleList();
    }


    buildForm() {
        if(this.affiliateId > 0 )
        {
            this.affiliateForm = this.formBuilder.group({
                UserId:[0],
                AffiliateId:[0],
                FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                LastName: ['', [Validators.required, Validators.maxLength(80)]],
            //    UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
                AffiliateName: ['',  [Validators.required, Validators.maxLength(100)]],
                Phone: ['', Validators.required],
                Phone2: ['', Validators.minLength(12)],
            });
        }
        else
        {
            this.affiliateForm = this.formBuilder.group({
                UserId:[0],
                AffiliateId:[0],
                FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                LastName: ['', [Validators.required, Validators.maxLength(80)]],
                UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
                AffiliateName: ['', [Validators.required, Validators.maxLength(100)]],
                Phone: ['', Validators.required],
                Phone2: ['', Validators.minLength(12)],
                ConfirmPassword: ['',[ Validators.required, Validators.minLength(3)], this.pwdMatchValidator.bind(this)],
                Password: ['', [Validators.required, Validators.minLength(3)]],
            });
        }
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.affiliateForm.controls;
    }

    onSubmit(detail) {
        this.submitted = true;
        this.getFormValidationErrors(this.affiliateForm);
        if (this.affiliateForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            this.affiliateService.create(detail)
                .subscribe(
                    data => {
                        let roleName = localStorage.getItem('roleName');
                        this.alertService.success(this.affiliateId > 0 ? 'affiliate updated successfully' : 'affiliates registered successfully', true);
                        if (roleName == 'Admin') {
                            this.router.navigate(['./manage-affiliates']);
                        }
                        else {
                            this.router.navigate(['./affiliate-detail']);
                        }
                        this.loading = false;
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }

    }

    getFormValidationErrors(fg: FormGroup) {
        Object.keys(fg.controls).forEach(key => {

            const controlErrors: ValidationErrors = fg.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }
        });
    }

    private getAffiliateDetail(userId) {

        this.affiliateService.getAffiliateDetailByUserId(userId, true)
            .subscribe((userData: any) => {
                this.contactId = userData.ContactId;
                this.affiliateForm.patchValue({
                    UserId: userData.UserId,
                    AffiliateId: userData.AffiliateId,
                    AffiliateName: userData.AffiliateName,
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    UserName: userData.UserName,
                    UserRoleId: userData.UserRoleId,
                    Phone: userData.Phone,
                    Phone2: userData.Phone2,
                });
            });


    }

    private getRoleList() {
        this.httpTagsService.getTagsByType('Customer Role', true)
            .subscribe(roles => {
                this.rolesModel = roles;
            });
    }

    public isEmailUnique(control: FormControl) {

        const q = new Promise((resolve) => {
            if (this.affiliateId == 0) {
                setTimeout(() => {
                    this.affiliateService.isEmailRegisterd(control.value).subscribe(data => {
                        if (data == null) {
                            resolve(null);
                        }
                        else {
                            resolve({'isEmailUnique': true});
                        }

                    }, () => {
                        resolve({'isEmailUnique': false});
                    });
                }, 1000);
            }
        });
        return q;


    }

    pwdMatchValidator(control: FormControl) {
        const q = new Promise((resolve) => {
            this.affiliateForm.get('Password').value === control.value
                ? resolve(null) : resolve({'isConfirmPasswordMatch': true});
        });
        return q;
    }


    public goToOrganization(affiliateId) {

        this.router.navigate(['manage-organizations']);

    }
    public  goToManageAffiliates(){
        localStorage.removeItem('organizationId' );
        this.router.navigate(['manage-affiliates']);
    }
}

