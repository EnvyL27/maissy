import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxCaptureModule } from 'ngx-capture';
import { FilterListPipe } from './filter-list.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AmMUtilengComponent } from './am-m-utileng/am-m-utileng.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DocsComponent } from './docs/docs.component';
import { DatabaseComponent } from './docs/database/database.component';
import { TablesComponent } from './docs/tables/tables.component';
import { CostComponent } from './cost/cost.component';
import { CostOci2Component } from './cost-oci2/cost-oci2.component';
import { CostFsbComponent } from './cost-fsb/cost-fsb.component';
import { CiltComponent } from './cilt/cilt.component';
import { CiltMOci2Component } from './cilt-m-oci2/cilt-m-oci2.component';
import { CiltMFsbComponent } from './cilt-m-fsb/cilt-m-fsb.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    FilterListPipe,
    AmMUtilengComponent,
    DocsComponent,
    DatabaseComponent,
    TablesComponent,
    CostComponent,
    CostOci2Component,
    CostFsbComponent,
    CiltComponent,
    CiltMOci2Component,
    CiltMFsbComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxCaptureModule,
    PdfViewerModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
