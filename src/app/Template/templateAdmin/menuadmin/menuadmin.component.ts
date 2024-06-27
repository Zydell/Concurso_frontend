import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent implements OnInit{

  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
         /* {
              label: 'Admin Test',
              icon: 'pi pi-fw pi-file',
              items: [
                    {
                      label: 'Seccion',
                      icon: 'pi pi-fw pi-pencil',
                      url: './dashadmin/principaladmin'
                  },
                  {
                      label: 'Calificaciones',
                      icon: 'pi pi-fw pi-pencil',
                      url: './dashadmin/principaladmin'
                  }
                  ,
                  {
                      label: 'Disponibilidad',
                      icon: 'pi pi-fw pi-pencil',
                      url: './dashadmin/principaladmin'
                  },
                  {
                      label: 'Situacion Laboral',
                      icon: 'pi pi-fw pi-pencil',
                      url: './dashadmin/principaladmin'
                  },
                  {
                      label: 'Tipos',
                      icon: 'pi pi-fw pi-pencil',
                      url: './dashadmin/principaladmin'
                  }
              ]
          },*/
          {
              label: 'Gestión',
              icon: 'pi pi-fw pi-user',
              url: './dashadmin/principaltest'
              /*items: [
                  {
                      label: 'Solicitudes',
                      icon: 'pi pi-fw pi-align-left',
                      url: './dashadmin/principaladminvoluntario'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]*/
          },
          /*{
            label: 'Simulador',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
          {
              label: 'Donaciones',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filter',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Print',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'List'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Reportes',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'Save',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Delete',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  },
                  {
                      label: 'Archieve',
                      icon: 'pi pi-fw pi-calendar-times',
                      items: [
                          {
                              label: 'Remove',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  }
              ]
          },*/
          {
              separator: true
          },
          {
              label: 'Quit',
              icon: 'pi pi-fw pi-power-off'
          }
      ];
  }
}
