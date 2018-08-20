import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';
import { ClientsService } from '../../services/clients.service';
import {UserService} from '../../services/user.service';
import {AppConstant} from '../../app-constant/app-constant';

@Component({
    selector: 'clients-detail',
    templateUrl: './clients-detail.component.html',
    styleUrls: ['./clients-detail.component.scss']
})
export class ClientsDetailComponent implements OnInit {
    rolesModel: any;
    btnName = 'Register';
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    userId: number;
    contactId: number;
    organizationId: number;
    affiliateId: number;
    phoneMask= AppConstant.phoneMask;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private httpClientsService: ClientsService,
        private httpUserService: UserService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {

       this.userId = Number(localStorage.getItem('userId'));
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.buildForm();

        if (this.userId > 0) {
            this.btnName = 'Update';
            this.getUserDetail(this.userId);

        }

        this.getRoleList();
    }

    buildForm() {
        if (this.userId > 0) {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                LastName: ['', [Validators.required, Validators.maxLength(80)]],
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

    onSubmit(clientDetail) {
        this.submitted = true;
        this.getFormValidationErrors(this.registerForm);
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            clientDetail.OrganizationId = this.organizationId;
            this.httpClientsService.create(clientDetail)
                .subscribe(
                    data => {
                        this.router.navigate(['./manage-clients']);
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
                });
            }
        });
    }

    private getUserDetail(userId) {

        this.httpClientsService.getClientDetailByUserId(userId, true)
            .subscribe((userData: any) => {
                this.contactId = userData.ContactId;
                this.registerForm.patchValue({
                    UserId: userData.UserId,
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    UserName: userData.UserName,
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
            if (this.userId == 0) {
                setTimeout(() => {
                    this.httpUserService.isEmailRegisterd(control.value).subscribe(data => {
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



}

