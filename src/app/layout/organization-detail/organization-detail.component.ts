import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {TagsService} from '../../services/tag.service';
import {OrganizationsService} from '../../services/organizations.service';

@Component({
    selector: 'user-detail',
    templateUrl: './organization-detail.component.html',
    styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent implements OnInit {
    rolesModel: any;
    btnName = 'Register';
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    userId: number;
    contactId: number;
    organizationId: number;
    affiliateId: number;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private organizationService: OrganizationsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {

       this.userId = Number(localStorage.getItem('userId'));
        this.affiliateId = Number(localStorage.getItem('affiliateId'));
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.buildForm();

        if (this.organizationId > 0) {
            this.btnName = 'Update';
            this.getUserDetail(this.userId);

        }
        else {

        }
        this.getRoleList();
    }

    buildForm() {
        if (this.organizationId > 0) {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                LastName: ['', [Validators.required, Validators.maxLength(80)]],
            //    UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
             //   UserRoleId: ['', Validators.required],
                OrganizationName: ['', [Validators.required, Validators.maxLength(100)]],
                Phone: ['', Validators.required],
                Phone2: ['', Validators.minLength(12)],
            });
        }
        else {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                LastName: ['', [Validators.required, Validators.maxLength(80)]],
                UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
              //  UserRoleId: ['', Validators.required],
                OrganizationName: ['', [Validators.required, Validators.maxLength(100)]],
                Phone: ['', Validators.required],
                Phone2: ['', Validators.minLength(12)],
                ConfirmPassword: ['', [Validators.required, Validators.minLength(3)], this.pwdMatchValidator.bind(this)],
                Password: ['', [Validators.required, Validators.minLength(3)]],
            });
        }

    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    onSubmit(organizationDetail) {
        this.submitted = true;

        this.getFormValidationErrors(this.registerForm);
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            organizationDetail.AffiliateId = this.affiliateId;
            this.organizationService.create(organizationDetail)
                .subscribe(
                    data => {
                        this.router.navigate(['./manage-organizations']);
                        if (this.userId > 0)

                            this.alertService.success(this.userId > 0 ? 'Client updated successfully' : 'Client registered successfully', true);
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
                   // fg.controls[key].setErrors({'incorrect': true});
                });

            }
        });
    }

    private getUserDetail(userId) {

        this.organizationService.getOrganizationDetailByUserId(userId, true)
            .subscribe((userData: any) => {
                this.contactId = userData.ContactId;
                this.registerForm.patchValue({
                    UserId: userData.UserId,
                    OrganizationName: userData.OrganizationName,
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

    // private getUserGroupList() {
    //     this.httpTagsService.getTagsByType('User Group', true)
    //         .subscribe(userGrpup => {
    //             this.userGroupsModel = userGrpup;
    //         });
    //
    // }

    public isEmailUnique(control: FormControl) {

        const q = new Promise((resolve) => {
            if (this.userId == 0) {
                setTimeout(() => {
                    this.organizationService.isEmailRegisterd(control.value).subscribe(data => {
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
            this.registerForm.get('Password').value === control.value
                ? resolve(null) : resolve({'isConfirmPasswordMatch': true});
        });
        return q;
    }

    public goToAddresses() {
        localStorage.setItem('contactId', this.contactId.toString());
        this.router.navigate(['manage-addresses'], {queryParams: {id: this.contactId}});

    }

    public goToGroups() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-groups']);

    }

    public goToCategories() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-categories']);

    }

    public goToSubCategories() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-subcategories']);

    }
    public goToUnits() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-units']);

    }


    public goToItems() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-items']);

    }

    public goToClients() {
        localStorage.getItem('organizationId');
        this.router.navigate(['manage-clients']);

    }
    public  goToManageOrganization(){
        localStorage.removeItem('userId');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('organizationName');
        this.router.navigate(['manage-organizations']);
    }

}

