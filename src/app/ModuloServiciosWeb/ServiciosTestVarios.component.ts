
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlServicios } from './urlServiciosWeb.component';
@Injectable({
    providedIn: 'root'
  })
export class ServiciviosVarios {
  urlServiciosTest: String="";
  user: any;
  authToken: any;
  constructor(private http: HttpClient, server: UrlServicios, private hpptclient: HttpClient) {
    this.urlServiciosTest = server.urlServicio ;
    
  }

  // DIMENSION
  ListadoDimensionActivos() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
  //   let parametros = opcion + "/" + tipo + "/" + codCarrera + "/" + param;
    return this.hpptclient.get<any>(this.urlServiciosTest + '/wsSimulador/rutadimension/ListadoDimensionActivo')
  }
    ListadoDimension() {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
   //   let parametros = opcion + "/" + tipo + "/" + codCarrera + "/" + param;
      return this.hpptclient.get<any>(this.urlServiciosTest + '/wsSimulador/rutadimension/ListadoDimensionTodos')
  }
  ActualizacionDimension(idDimension:number,intvalor:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let parametros = { int_valor: intvalor } ;
     return this.hpptclient.put<any>(this.urlServiciosTest + '/wsSimulador/rutadimension/ActualizarDimension/'+idDimension, parametros)
  }
  EstadoCambiarDimension(idDimension:number,estado:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let parametros = { bl_estado: estado } ;
     return this.hpptclient.put<any>(this.urlServiciosTest + '/wsSimulador/rutadimension/DesactivarDimension/'+idDimension, parametros)
  }
  NuevaDimension(intvalor:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
     let parametros = { int_valor: intvalor } ;
     return this.hpptclient.post<any>(this.urlServiciosTest + '/wsSimulador/rutadimension/CrearDimension', parametros)
  }

  //TEST
  ListadoTest() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.hpptclient.get<any>(this.urlServiciosTest + '/wsSimulador/rutatest/ListadoTestTodos')
  }
  ListadoTestActivos() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
  //   let parametros = opcion + "/" + tipo + "/" + codCarrera + "/" + param;
    return this.hpptclient.get<any>(this.urlServiciosTest + '/rutatest/ListadoTestActivo')
  }
  ActualizacionTest(idTest:number,strnombre:any,strdescripcion:any, selectedInstrucciones:any, selectedRecomendaciones:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let parametros = { str_nombre: strnombre, str_descripcion: strdescripcion, id_instruccion: selectedInstrucciones, id_recomendacion: selectedRecomendaciones } ;
    console.log("VERIFICA: "+idTest, strnombre, strdescripcion, selectedInstrucciones, selectedRecomendaciones );
    return this.hpptclient.put<any>(this.urlServiciosTest + '/wsSimulador/rutatest/ActualizarTest/'+idTest, parametros)
  }
  EstadoCambiarTest(idTest:number,estado:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let parametros = { bl_estado: estado } ;
     return this.hpptclient.put<any>(this.urlServiciosTest + '/wsSimulador/rutatest/DesactivarTest/'+idTest, parametros)
  }
  NuevoTest(srtnombre:any, strdescripcion:any, selectedInstrucciones:any, selectedRecomendaciones:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
     let parametros = {str_nombre: srtnombre, str_descripcion: strdescripcion, id_recomendacion: selectedRecomendaciones, id_instruccion: selectedInstrucciones} ;
     return this.hpptclient.post<any>(this.urlServiciosTest + '/wsSimulador/rutatest/CrearTest', parametros)
  }

  /*
GenerarSolicitud(contenido:any) {
  return this.hpptclient.post<any>(this.urlServiciosTest + '/rutareportes/pdfSolicitudVoluntarioss', contenido)
}
GenerarpdfTermino(idPersona:any) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let parametros =  "/"+idPersona  ;
  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutareportes/pdfTerminosCondiciones'+parametros)
}
ActualizarEstadoSolicitud(idVoluntario:any,idEstado:any) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let parametros =  "/"+idVoluntario+"/"+ idEstado+"/" ;
  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutavoluntarios/ActualizarestadoVoluntario'+parametros)
}
GenerarpdfCartaAceptacion(idPersona:any,strCedula:any) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
   let parametros =  "/"+idPersona +"/"+strCedula ;
  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutareportes/pdfCartaAceptacion'+parametros)
}
ListadoEstadosCivilActivos() {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');

  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutavoluntarios/EstadoCivilActivos')
}
ListadoParentescoActivos() {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutavoluntarios/ParentezcoActivos')
}
ListadoTipoIngresoActivos() {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
 
  return this.hpptclient.get<any>(this.urlServiciosTest + '/rutavoluntarios/TipoIngresosActivos')
}*/
}
