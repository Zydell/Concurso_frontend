/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-dimension',
  templateUrl: './pg-dimension.component.html',
  styleUrls: ['./pg-dimension.component.css']
})
export class PgDimensionComponent {

}
*/
import { Component,OnInit } from '@angular/core';
import { ServiciviosVarios } from '../../ModuloServiciosWeb/ServiciosTestVarios.component';
import { Mensajes } from '../../ModuloHerramientas/Mensajes.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pg-dimension',
  templateUrl: './pg-dimension.component.html',
  styleUrls: ['./pg-dimension.component.css'],
  providers: [MessageService]
})
export class PgDimensionComponent implements OnInit{

  lsListado:any=[];
  objSeleccion:any="-1";
  intvalor:any="";
  strEstado:any="";
  visibleEditar: boolean=false;
  visibleEstado: boolean=false;
  visibleNuevo: boolean=false;
  selectedSize: any = 'p-datatable-sm';
  constructor
  (
    private servicios: ServiciviosVarios,
    private messageService: MessageService,
    private mensajes:Mensajes
  ) { }
async ngOnInit() {
 await this.ListadoInformacion();
}

ModalNuevoInformacion() {
this.intvalor="";
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

    const data = await new Promise<any>(resolve => this.servicios.ListadoDimension().subscribe(translated => { resolve(translated) }));
   console.log(data)

    if (data.success) {
      this.lsListado=data.datos;
    }
  }
  
  async RegistrarNuevo(){
    if(this.intvalor!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.NuevaDimension(this.intvalor).subscribe(translated => { resolve(translated) }));
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
    if(this.objSeleccion.int_valor!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.ActualizacionDimension(this.objSeleccion.id_dimension,this.objSeleccion.int_valor).subscribe(translated => { resolve(translated) }));
      //const data = await new Promise<any>(resolve => this.servicios.ActualizacionDimension(this.strEstado,this.objSeleccion.ounombre).subscribe(translated => { resolve(translated) }));
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
      //const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarDimension(this.objSeleccion.id_dimension,estado).subscribe(translated => { resolve(translated) }));
      const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarDimension(this.objSeleccion.id_dimension,estado).subscribe(translated => { resolve(translated) }));
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
