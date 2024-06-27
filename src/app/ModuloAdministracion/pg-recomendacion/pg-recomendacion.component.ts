import { Component,OnInit } from '@angular/core';
import { ServiciosWeb} from '../../ModuloServiciosWeb/ServiciosTest.component';
import { Mensajes } from '../../ModuloHerramientas/Mensajes.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pg-recomendacion',
  templateUrl: './pg-recomendacion.component.html',
  styleUrls: ['./pg-recomendacion.component.css'],
  providers: [MessageService]
})
export class PgRecomendacionComponent implements OnInit{

  lsListado:any=[];
  objSeleccion:any="-1";
  strNombre:any="";
  strDescripcion:any="";
  strEstado:any="";
  //idrecomendacion:any="";
  //idrecomendacion:any="";
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
    this.strDescripcion="";
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
    const data = await new Promise<any>(resolve => this.servicios.ListadoRecomendacion().subscribe(translated => { resolve(translated) }));
    console.log(data)
    if (data.success) {
      this.lsListado=data.datos;
    }
  }
  
  async RegistrarNuevo(){
    if(this.strNombre!="" && this.strDescripcion!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.NuevoRecomendacion(this.strNombre, this.strDescripcion).subscribe(translated => { resolve(translated) }));
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
    if(this.objSeleccion.str_nombre!="" && this.objSeleccion.str_descripcion!=""){
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.ActualizacionRecomendacion(this.objSeleccion.id_recomendacion,this.objSeleccion.str_nombre, this.objSeleccion.str_descripcion).subscribe(translated => { resolve(translated) }));
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
      const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarRecomendacion(this.objSeleccion.id_recomendacion,estado).subscribe(translated => { resolve(translated) }));
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
