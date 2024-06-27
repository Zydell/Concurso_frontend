import { Component,OnInit } from '@angular/core';
import { ServiciosWeb } from '../../ModuloServiciosWeb/ServiciosTest.component';
import { Mensajes } from '../../ModuloHerramientas/Mensajes.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pg-seccion',
  templateUrl: './pg-seccion.component.html',
  styleUrls: ['./pg-seccion.component.css'],
  providers: [MessageService]
})
export class PgSeccionComponent implements OnInit{

  lsListado:any=[];
  objSeleccion:any="-1";
  strNombre:any="";
  strEstado:any="";
  visibleEditar: boolean=false;
  visibleEstado: boolean=false;
  visibleNuevo: boolean=false;
  selectedSize: any = 'p-datatable-sm';
  constructor
  (
    private servicios: ServiciosWeb,
    private messageService: MessageService,
    private mensajes:Mensajes
  ) { }
async ngOnInit() {
 await this.ListadoInformacion();
}

ModalNuevoInformacion() {
this.strNombre="";
    this.visibleNuevo = true;
}

ModalEditarInformacion(seleccion:any) {
  this.objSeleccion=seleccion;
  console.log(this.objSeleccion)
    this.visibleEditar = true;
}

ModalCambiarEstado(seleccion:any) {
  this.objSeleccion=seleccion;
  if(this.objSeleccion.bl_estado){
    this.strEstado="Desactivar";
  }else{
    this.strEstado="Activar";
  }
  console.log(this.objSeleccion)
  this.visibleEstado = true;
}

  async ListadoInformacion() {
    const data = await new Promise<any>(resolve => this.servicios.ListadoSeccion().subscribe(translated => { resolve(translated) }));
    console.log(data)

    if (data.success) {
      this.lsListado=data.datos;
    }
  }

  async RegistrarNuevo(){
    if(this.strNombre!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.NuevoSeccion(this.strNombre).subscribe(translated => { resolve(translated) }));
      console.log(data)
      if(data.success){
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.RegistroExitoso });
        this.visibleNuevo = false;
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.RegistroError });
      }
    }else{
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }

  async RegistrarActualizacion(){
    if(this.objSeleccion.str_nombre!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.ActualizacionSeccion(this.objSeleccion.id_seccion,this.objSeleccion.str_nombre.toUpperCase()).subscribe(translated => { resolve(translated) }));
      
      console.log(data)
      if(data.success){
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
        this.visibleEditar = false;
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
      }
    }else{
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }
  
  async EstadoCambiarActualizacion(){
    var estado:any;
    if(this.objSeleccion.bl_estado){
      estado=false;
    }else{
      estado=true;
    }
      console.log("aqui")
      console.log(this.objSeleccion.id_seccion,estado)
      const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarSeccion(this.objSeleccion.id_seccion,estado).subscribe(translated => { resolve(translated) }));
      console.log(data)
      if(data.success){
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
        this.visibleEstado = false;
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
      }
  }
}
