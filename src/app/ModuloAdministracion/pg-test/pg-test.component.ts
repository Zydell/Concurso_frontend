/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiciviosVarios } from '../../ModuloServiciosWeb/ServiciosTestVarios.component';
import { Mensajes } from '../../ModuloHerramientas/Mensajes.component';
import { MessageService } from 'primeng/api';
import { ServiciosWeb} from '../../ModuloServiciosWeb/ServiciosTest.component';

@Component({
  selector: 'app-pg-test',
  templateUrl: './pg-test.component.html',
  styleUrls: ['./pg-test.component.css'],
  providers: [MessageService]
})
export class PgTestComponent implements OnInit {
  //formGroup!: FormGroup;  
  formGroup: FormGroup;
  lsListado: any[] = [];
  objSeleccion: any = "-1";
  strnombre: string = "";
  strdescripcion: string = "";
  strEstado: string = "";
  idinstruccion: any = "";
  idrecomendacion: any = "";
  visibleEditar: boolean = false;
  visibleEstado: boolean = false;
  visibleNuevo: boolean = false;
  selectedSize: any = 'p-datatable-sm';
  instrucciones: any[] = [];
  recomendaciones: any[] = [];

  constructor(
    private servicios: ServiciviosVarios,
    private servicios_ir: ServiciosWeb,
    private messageService: MessageService,
    private mensajes: Mensajes,
    private fb: FormBuilder
  ) { 
    this.formGroup = this.fb.group({
    selectedInstrucciones: [[]],
    selectedRecomendaciones: [[]]
  });
  }

  async ngOnInit() {
    await this.ListadoInformacion();
  }

  ModalNuevoInformacion() {
    this.strnombre = "";
    this.strdescripcion = "";
    this.ObtenerInstr_Reco_Activos();
    this.formGroup.reset({ selectedInstrucciones: [], selectedRecomendaciones: [] }); 
    this.visibleNuevo = true;
  }

  ModalEditarInformacion(seleccion: any) {
    this.ObtenerInstr_Reco_Activos();
    this.strnombre = "";
    this.strdescripcion = "";
    this.formGroup.reset({ selectedInstrucciones: [], selectedRecomendaciones: [] }); 
    this.objSeleccion = seleccion;
    console.log(this.objSeleccion)
    this.visibleEditar = true;
  }
/*
ObtenerInstr_Reco_Activos(){
    this.servicios_ir.ListadoInstruccionActivos().subscribe(
      (response: any) => {
        if (response.success) {
          this.instrucciones = response.datos.map((instr: any) => ({
            name: instr.str_nombre,
            code: instr.id_instruccion
          })); 
        }
      },
      (error) => {
        console.error('Error al obtener las instrucciones', error);
      }
    );
    this.servicios_ir.ListadoRecomendacionActivos().subscribe(
      (response: any) => {
        if (response.success) {
          this.recomendaciones = response.datos.map((rec: any) => ({
            name: rec.str_nombre,
            code: rec.id_recomendacion
          })); 
        }
      },
      (error) => {
        console.error('Error al obtener las recomendaciones', error);
      }
    );
  }
*/
/*
async ObtenerInstr_Reco_Activos(): Promise<void> {
    const instruccionesResponse: any = await new Promise<any>((resolve, reject) => {
      this.servicios_ir.ListadoInstruccionActivos().subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });

    if (instruccionesResponse.success) {
      this.instrucciones = instruccionesResponse.datos.map((instr: any) => ({
        name: instr.str_nombre,
        code: instr.id_instruccion
      }));
    }

    const recomendacionesResponse: any = await new Promise<any>((resolve, reject) => {
      this.servicios_ir.ListadoRecomendacionActivos().subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });

    if (recomendacionesResponse.success) {
      this.recomendaciones = recomendacionesResponse.datos.map((rec: any) => ({
        name: rec.str_nombre,
        code: rec.id_recomendacion
      }));
    }
}

  ModalCambiarEstado(seleccion: any) {
    this.objSeleccion = seleccion;
    this.strEstado = this.objSeleccion.bl_estado ? "Desactivar" : "Activar";
    console.log(this.objSeleccion)
    this.visibleEstado = true;
  }

  async ListadoInformacion() {
    const data = await new Promise<any>(resolve => this.servicios.ListadoTest().subscribe(translated => { resolve(translated) }));
    console.log(data)

    if (data.success) {
      this.lsListado = data.datos;
    }
  }

  async RegistrarNuevo() {
    const selectedInstrucciones = this.formGroup.get('selectedInstrucciones')?.value.map((instr: any) => instr.code);
    const selectedRecomendaciones = this.formGroup.get('selectedRecomendaciones')?.value.map((rec: any) => rec.code);

    if (this.strnombre!="" && this.strdescripcion!="" && selectedInstrucciones.length !== 0 && selectedRecomendaciones.length !== 0) {
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.NuevoTest(this.strnombre, this.strdescripcion, selectedInstrucciones, selectedRecomendaciones).subscribe(translated => { resolve(translated) }));
      console.log(data)
      if (data.success) {
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.RegistroExitoso });
        this.visibleNuevo = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.RegistroError });
      }
    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }

  async RegistrarActualizacion() {
    const selectedInstrucciones = this.formGroup.get('selectedInstrucciones')?.value.map((instr: any) => instr.code);
    const selectedRecomendaciones = this.formGroup.get('selectedRecomendaciones')?.value.map((rec: any) => rec.code);
    if (this.objSeleccion.str_nombre!="" && this.objSeleccion.str_descripcion!="" && selectedInstrucciones.length !== 0 && selectedRecomendaciones.length !== 0) {
      console.log("aqui")
      const data = await new Promise<any>(resolve => this.servicios.ActualizacionTest(this.objSeleccion.id_test, this.objSeleccion.str_nombre, this.objSeleccion.str_descripcion, selectedInstrucciones, selectedRecomendaciones).subscribe(translated => { resolve(translated) }));
      console.log(data)
      if (data.success) {
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
        this.visibleEditar = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
      }
    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }

  async EstadoCambiarActualizacion() {
    const estado = !this.objSeleccion.bl_estado;
    console.log("aqui")
    const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarTest(this.objSeleccion.id_test, estado).subscribe(translated => { resolve(translated) }));
    console.log(data)
    if (data.success) {
      await this.ListadoInformacion();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
      this.visibleEstado = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
    }
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiciviosVarios } from '../../ModuloServiciosWeb/ServiciosTestVarios.component';
import { Mensajes } from '../../ModuloHerramientas/Mensajes.component';
import { MessageService } from 'primeng/api';
import { ServiciosWeb } from '../../ModuloServiciosWeb/ServiciosTest.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-pg-test',
  templateUrl: './pg-test.component.html',
  styleUrls: ['./pg-test.component.css'],
  providers: [MessageService]
})
export class PgTestComponent implements OnInit {
  formGroup: FormGroup;
  lsListado: any[] = [];
  objSeleccion: any = "-1";
  strnombre: string = "";
  strdescripcion: string = "";
  strEstado: string = "";
  idinstruccion: any = "";
  idrecomendacion: any = "";
  visibleEditar: boolean = false;
  visibleEstado: boolean = false;
  visibleNuevo: boolean = false;
  selectedSize: any = 'p-datatable-sm';
  instrucciones: any[] = [];
  recomendaciones: any[] = [];

  constructor(
    private servicios: ServiciviosVarios,
    private servicios_ir: ServiciosWeb,
    private messageService: MessageService,
    private mensajes: Mensajes,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.formGroup = this.fb.group({
      selectedInstrucciones: [[]],
      selectedRecomendaciones: [[]]
    });
  }

  async ngOnInit() {
    await this.ListadoInformacion();
  }

  ModalNuevoInformacion() {
    this.strnombre = "";
    this.strdescripcion = "";
    this.ObtenerInstr_Reco_Activos();
    this.formGroup.reset({ selectedInstrucciones: [], selectedRecomendaciones: [] });
    this.visibleNuevo = true;
  }
/*
  async ModalEditarInformacion(seleccion: any) {
    this.strnombre = seleccion.str_nombre;
    this.strdescripcion = seleccion.str_descripcion;
    this.objSeleccion = seleccion;

    await this.ObtenerInstr_Reco_Activos();

    const selectedInstrucciones = await this.instrucciones.filter(instr => seleccion.instrucciones.includes(instr.code));
    const selectedRecomendaciones = await this.recomendaciones.filter(rec => seleccion.recomendaciones.includes(rec.code));

    await this.formGroup.setValue({
      selectedInstrucciones: selectedInstrucciones,
      selectedRecomendaciones: selectedRecomendaciones
    });

    this.visibleEditar = true;

  }*/

    async ModalEditarInformacion(seleccion: any) {
      this.strnombre = seleccion.str_nombre;
      this.strdescripcion = seleccion.str_descripcion;
      this.objSeleccion = seleccion;
    
      await this.ObtenerInstr_Reco_Activos();
    
      const selectedInstrucciones = await this.instrucciones.filter(instr => seleccion.instrucciones.includes(instr.code));
      const selectedRecomendaciones = await this.recomendaciones.filter(rec => seleccion.recomendaciones.includes(rec.code));
      
      await this.formGroup.setValue({
        selectedInstrucciones: selectedInstrucciones,
        selectedRecomendaciones: selectedRecomendaciones
      });
    
      // Establece la visibilidad del modal y forzar la detección de cambios
      this.visibleEditar = true;
      this.cdr.detectChanges();
    }
    

  async ObtenerInstr_Reco_Activos(): Promise<void> {
    const instruccionesResponse: any = await new Promise<any>((resolve, reject) => {
      this.servicios_ir.ListadoInstruccionActivos().subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });

    if (instruccionesResponse.success) {
      this.instrucciones = instruccionesResponse.datos.map((instr: any) => ({
        name: instr.str_nombre,
        code: instr.id_instruccion
      }));
    }

    const recomendacionesResponse: any = await new Promise<any>((resolve, reject) => {
      this.servicios_ir.ListadoRecomendacionActivos().subscribe(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });

    if (recomendacionesResponse.success) {
      this.recomendaciones = recomendacionesResponse.datos.map((rec: any) => ({
        name: rec.str_nombre,
        code: rec.id_recomendacion
      }));
    }
  }

  ModalCambiarEstado(seleccion: any) {
    this.objSeleccion = seleccion;
    this.strEstado = this.objSeleccion.bl_estado ? "Desactivar" : "Activar";
    this.visibleEstado = true;
  }

  async ListadoInformacion() {
    const data = await new Promise<any>(resolve => this.servicios.ListadoTest().subscribe(translated => { resolve(translated) }));
    if (data.success) {
      this.lsListado = data.datos;
    }
  }

  async RegistrarNuevo() {
    const selectedInstrucciones = this.formGroup.get('selectedInstrucciones')?.value.map((instr: any) => instr.code);
    const selectedRecomendaciones = this.formGroup.get('selectedRecomendaciones')?.value.map((rec: any) => rec.code);

    if (this.strnombre !== "" && this.strdescripcion !== "" && selectedInstrucciones.length !== 0 && selectedRecomendaciones.length !== 0) {
      const data = await new Promise<any>(resolve => this.servicios.NuevoTest(this.strnombre, this.strdescripcion, selectedInstrucciones, selectedRecomendaciones).subscribe(translated => { resolve(translated) }));
      if (data.success) {
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.RegistroExitoso });
        this.visibleNuevo = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.RegistroError });
      }
    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }

  async RegistrarActualizacion() {
    const selectedInstrucciones = this.formGroup.get('selectedInstrucciones')?.value.map((instr: any) => instr.code);
    const selectedRecomendaciones = this.formGroup.get('selectedRecomendaciones')?.value.map((rec: any) => rec.code);
    if (this.objSeleccion.str_nombre !== "" && this.objSeleccion.str_descripcion !== "" && selectedInstrucciones.length !== 0 && selectedRecomendaciones.length !== 0) {
      const data = await new Promise<any>(resolve => this.servicios.ActualizacionTest(this.objSeleccion.id_test, this.objSeleccion.str_nombre, this.objSeleccion.str_descripcion, selectedInstrucciones, selectedRecomendaciones).subscribe(translated => { resolve(translated) }));
      if (data.success) {
        await this.ListadoInformacion();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
        this.visibleEditar = false;
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
      }
    } else {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: this.mensajes.IngreseNombre });
    }
  }

  async EstadoCambiarActualizacion() {
    const estado = !this.objSeleccion.bl_estado;
    const data = await new Promise<any>(resolve => this.servicios.EstadoCambiarTest(this.objSeleccion.id_test, estado).subscribe(translated => { resolve(translated) }));
    if (data.success) {
      await this.ListadoInformacion();
      this.messageService.add({ severity: 'success', summary: 'Success', detail: this.mensajes.ActualizacionExitosa });
      this.visibleEstado = false;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.mensajes.ActualizacionError });
    }
  }
}
