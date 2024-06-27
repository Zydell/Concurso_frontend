import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgInicioportadaComponent } from './Template/pg-inicioportada/pg-inicioportada.component';
import { DashboardpublicoComponent } from './Template/templatePublico/dashboardpublico/dashboardpublico.component';
import { DashboardadminComponent } from './Template/templateAdmin/dashboardadmin/dashboardadmin.component';
import { PortadainicialComponent } from './Template/templatePublico/portadainicial/portadainicial.component';
import { PgPrincipaladministracionComponent } from './ModuloAdministracion/pg-principaladministracion/pg-principaladministracion.component';
import { PgPrincipaltestComponent } from './ModuloAdministracion/pg-principaltest/pg-principaltest.component';
const routes: Routes = [
  {
    path: '',
    component: PgInicioportadaComponent
  },
  {
    path: 'dashpublic',
    component: DashboardpublicoComponent,
    children: [
      {
        path: 'inicio',
        component: PortadainicialComponent
      },
     
    ]
    },
    {
      path: 'dashadmin',
      component: DashboardadminComponent,
      children: [
        {
          path: 'inicioadmin',
          component: PortadainicialComponent
        },
        {
          path: 'principaladmin',
          component: PgPrincipaladministracionComponent
        },
        {
          path: 'principaltest',
          component: PgPrincipaltestComponent
        }
      ]
      }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
