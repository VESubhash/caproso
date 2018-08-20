import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { CookieService } from 'angular2-cookie/core';
import { MyInterceptor } from 'app/custom/my-interceptor';
import { LogInService } from './service/login.service';
import { ApiService } from './services/api/api.service';
import { UserService } from './services/user.service';
import { ManageUserModule } from './layout/manage-user/manage-user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { TagsService } from './services/tag.service';
import { AddressesService } from './services/addresses.service';
import { OrganizationsService } from './services/organizations.service';
import { GroupsService } from './services/groups.service';
import { AffiliatesService } from './services/affiliates.service';
import { ClientsService } from './services/clients.service';
import { AlertConnectService } from './services/alertConnect.service';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ItemsService } from './services/items.service';
import { UploadService } from './services/upload.service';
import { DocumentService } from './services/document.service';
import {EstimateService} from './services/estimate.service';
import {PaModalService} from './layout/Shared/pa-modal/pa-modal.service';
import {ScrollService} from './services/scroll-service';
import { TextMaskModule } from 'angular2-text-mask';
import {PaFullColorBackgroundModalComponent} from './layout/Shared/pa-full-color-background-modal/pa-full-color-background-modal.component';
import {PaModalComponent} from './layout/Shared/pa-modal/pa-modal.component';
import {PaButtonPrimaryComponent} from './layout/Shared/pa-button-primary/pa-button-primary.component';
import {PaDeleteConfirmationModalComponent} from './layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        ManageUserModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
    declarations: [AppComponent,
        CurrencyPipe,
       ],
    providers: [AuthGuard,
        LogInService,
        CookieService,
        ApiService,
        AlertService,
        AlertConnectService,
        UserService,
        TagsService,
        AddressesService,
        OrganizationsService,
        GroupsService,
        AffiliatesService,
        ClientsService,
        ItemsService,
        UploadService,
        DocumentService,
        EstimateService,
        PaModalService,
        ScrollService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyInterceptor,
            multi: true
        }
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}
