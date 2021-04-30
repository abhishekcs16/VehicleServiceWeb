import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './other/home.component';
import { pageNotFoundComponent } from './other/pageNotFound.Component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { JobcardListComponent } from './jobcard-list/jobcard-list.component';
import { ServiceComponent } from './service/service.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { ServiceFaultComponent } from './service-fault/service-fault.component';
import { ServiceFaultListComponent } from './service-fault-list/service-fault-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NevigationComponent } from './nevigation/nevigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThankYouComponent } from './thank-you/thank-you.component';


const appRoutes :Routes=[
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'index',component:IndexComponent},
  {path:'customers',component:CustomerListComponent},
  {path:'addCustomer',component:CustomerComponent},
  {path:'vehicles',component:VehicleListComponent},
  {path:'addVehicle',component:VehicleComponent},
  {path:'mechanics',component:MechanicListComponent},
  {path:'addMechanic',component:MechanicComponent},
  {path:'jobCards',component:JobcardListComponent},
  {path:'addJobCard',component:JobcardComponent},
  {path:'services',component:ServiceListComponent},
  {path:'addService',component:ServiceComponent},
  {path:'addInsurance',component:InsuranceComponent},
  {path:'insurances',component:InsuranceListComponent},
  {path:'addServiceFault',component:ServiceFaultComponent},
  {path:'serviceFaults',component:ServiceFaultListComponent},
  {path:'addInvoice',component:InvoiceComponent},
  {path:'invoices',component:InvoiceListComponent},
  // {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',component:pageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    MechanicListComponent,
    CustomerComponent,
    CustomerListComponent,
    VehicleComponent,
    VehicleListComponent,
    JobcardComponent,
    JobcardListComponent,
    ServiceComponent,
    ServiceListComponent,
    InvoiceComponent,
    InvoiceListComponent,
    InsuranceComponent,
    InsuranceListComponent,
    ServiceFaultComponent,
    ServiceFaultListComponent,
    NevigationComponent,
    SidebarComponent,
    LoginComponent,
    IndexComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
