import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgInicioportadaComponent } from './Template/pg-inicioportada/pg-inicioportada.component';
import { HeaderpublicoComponent } from './Template/templatePublico/headerpublico/headerpublico.component';
import { FooterpublicoComponent } from './Template/templatePublico/footerpublico/footerpublico.component';
import { DashboardpublicoComponent } from './Template/templatePublico/dashboardpublico/dashboardpublico.component';
import { PortadainicialComponent } from './Template/templatePublico/portadainicial/portadainicial.component';
import { SpinnerService } from './ModuloServiciosWeb/spinner.service';
import { SpinnerInterceptor } from './ModuloServiciosWeb/InterceptorServicios.service';
import {  SpinnerComponent } from './ModuloServiciosWeb/spinner.component';

import { FooteradminComponent } from './Template/templateAdmin/footeradmin/footeradmin.component';
import { HeaderadminComponent } from './Template/templateAdmin/headeradmin/headeradmin.component';
import { MenuadminComponent } from './Template/templateAdmin/menuadmin/menuadmin.component';
import { DashboardadminComponent } from './Template/templateAdmin/dashboardadmin/dashboardadmin.component';


import { AvatarModule } from 'primeng/avatar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';
import { MegaMenuModule } from 'primeng/megamenu';
import { SpinnerModule } from 'primeng/spinner';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { PgPrincipaladministracionComponent } from './ModuloAdministracion/pg-principaladministracion/pg-principaladministracion.component';
import { PgSeccionComponent } from './ModuloAdministracion/pg-seccion/pg-seccion.component';
import { PgDimensionComponent } from './ModuloAdministracion/pg-dimension/pg-dimension.component';
import { PgPrincipaltestComponent } from './ModuloAdministracion/pg-principaltest/pg-principaltest.component';
import { PgTestComponent } from './ModuloAdministracion/pg-test/pg-test.component';
import { PgInstruccionComponent } from './ModuloAdministracion/pg-instruccion/pg-instruccion.component';
import { PgRecomendacionComponent } from './ModuloAdministracion/pg-recomendacion/pg-recomendacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    PgInicioportadaComponent,
    HeaderpublicoComponent,
    FooterpublicoComponent,
    DashboardpublicoComponent,
    PortadainicialComponent,
    FooteradminComponent,
    HeaderadminComponent,
    MenuadminComponent,
    DashboardadminComponent,
    PgPrincipaladministracionComponent,
    PgSeccionComponent,
    PgDimensionComponent,
    PgPrincipaltestComponent,
    PgTestComponent,
    PgInstruccionComponent,
    PgRecomendacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,ReactiveFormsModule,MultiSelectModule,
    FormsModule,SpinnerModule,MegaMenuModule,AvatarModule,MenuModule,
    CardModule,PanelMenuModule,TabViewModule,TableModule,ProgressSpinnerModule,AccordionModule,TagModule,ImageModule,
    InputTextModule,ToolbarModule,ButtonModule,MenubarModule,SlideMenuModule,DialogModule,DividerModule,ToastModule,FileUploadModule
  ],
  providers: [SpinnerService,{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true } ],// Agrega el interceptor HTTP],
  bootstrap: [AppComponent]
})
export class AppModule { }
