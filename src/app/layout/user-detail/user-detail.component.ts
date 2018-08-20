import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { TagsService } from '../../services/tag.service';
import { UserService } from '../../services/user.service';
import { IUserDetailModel } from '../../model/UserDetailModel';
import {AppConstant} from '../../app-constant/app-constant';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    rolesModel : any;
    userGroupsModel : any;
    btnName = 'Register';
    showOrganization = false;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    userId: number;
    contactId: number;
    phoneMask= AppConstant.phoneMask;
     constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService,
        private httpTagsService: TagsService,
        private userService: UserService,
        private route: ActivatedRoute
        ) { }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                this.userId = params['id'] || 0;
            });
        this.buildForm();

        if (this.userId > 0 ) {
             this.btnName='Update';
             this.getUserDetail(this.userId);

        }
        else {

        }

        this.getRoleList();
        // this.getUserGroupList();
        // this.registerForm.get('UserRoleId').valueChanges
        //     .subscribe(value => this.setNotification(value));

    }


   buildForm(){
       if (this.userId > 0) {
           this.registerForm = this.formBuilder.group({
                   UserId:[0],
                   FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                   LastName: ['', [Validators.required, Validators.maxLength(80)]],
                   UserRoleId: ['', Validators.required],
                   Phone: ['', Validators.required],
                   Phone2: ['', Validators.minLength(12)],
                  // ConfirmPassword: ['',[ Validators.required, Validators.minLength(3)], this.pwdMatchValidator.bind(this)],
                  // Password: ['', [Validators.required, Validators.minLength(3)]],
               }
           );
       }
       else {
           this.registerForm = this.formBuilder.group({
                   UserId:[0],
                   FirstName: ['', [Validators.required, Validators.maxLength(30)]],
                   LastName: ['', [Validators.required, Validators.maxLength(80)]],
                   UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
                   UserRoleId: ['', Validators.required],
                   Phone: ['', Validators.required],
                   Phone2: ['', Validators.minLength(12)],
                   ConfirmPassword: ['',[ Validators.required, Validators.minLength(3)], this.pwdMatchValidator.bind(this)],
                   Password: ['', [Validators.required, Validators.minLength(3)]],
               }
           );
       }

   }

    // setNotification(notifyVia): void {
    //
    //     const organizationNameControl = this.registerForm.get('OrganizationName');
    //     if (notifyVia === 56341) {
    //         organizationNameControl.setValidators(Validators.required);
    //     } else {
    //         organizationNameControl.clearValidators();
    //     }
    //     organizationNameControl.updateValueAndValidity();
    // }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(userDetail) {
        this.submitted = true;
        // stop here if form is invalid
       // var preImplementationGroup = <FormGroup>this.registerForm.get('Addresses');
       // this.getFormValidationErrors(preImplementationGroup);
        if (this.registerForm.invalid) {
            return;
        }
        if(this.userId >0 )
        {

        }
        this.loading = true;
        this.userService.create(userDetail)
           // .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['./manage-users']);
                     if(this.userId > 0)

                    this.alertService.success(this.userId > 0 ?'User updated successfully': 'User registered successfully', true);
                 this.loading  = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private getUserDetail(userId){

        this.userService.getUserDetailByUserId(userId, true)
            .subscribe((userData:any) => {
               this.contactId = userData.ContactId;
                this.registerForm.patchValue({
                    UserId: userData.UserId,
                    FirstName: userData.FirstName,
                    LastName: userData.LastName ,
                  UserName: userData.UserName ,
                   UserRoleId: userData.UserRoleId,
                    Phone: userData.Phone,
                   Phone2: userData.Phone2,
                    //ConfirmPassword: userData.Password,
                   // Password: userData.Password,
                });
            });


    }
    private getRoleList() {
        this.httpTagsService.getTagsByType('Admin Role', true)
            .subscribe(roles => {
                this.rolesModel = roles;
            });
    }

    private getUserGroupList() {
        this.httpTagsService.getTagsByType('User Group', true)
            .subscribe(userGrpup => {
                this.userGroupsModel = userGrpup;
            });

    }

    // getFormValidationErrors(fg: FormGroup) {
    //     Object.keys(fg.controls).forEach(key => {
    //
    //         const controlErrors: ValidationErrors = fg.get(key).errors;
    //         if (controlErrors != null) {
    //             Object.keys(controlErrors).forEach(keyError => {
    //                 console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
    //             });
    //         }
    //     });
    // }


    public  onRoleChange(newRoleId) {

         if (newRoleId === 56341) {
             this.showOrganization = true;
         }
         else {
             this.showOrganization = false;
         }
    }

    public isEmailUnique(control: FormControl) {

    const q = new Promise((resolve) => {
        if(this.userId == 0) {
            setTimeout(() => {
                this.userService.isEmailRegisterd(control.value).subscribe(data => {
                    if (data == null) {
                        resolve(null);
                        // this.emailFound = (data == null? false: true);
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
                    ? resolve(null) : resolve({ 'isConfirmPasswordMatch': true });
        });
        return q;
    }

    public goToAddresses() {
        localStorage.setItem('contactId', this.contactId.toString());
        this.router.navigate(['manage-addresses'], { queryParams: { id: this.contactId} });

    }
}

