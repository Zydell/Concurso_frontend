import { Component, OnInit } from '@angular/core';
import { EjecutarScript } from './../../../../Herramientas/EjecutarScript';

@Component({
  selector: 'app-dashboardpublico',
  templateUrl: './dashboardpublico.component.html',
  styleUrls: ['./dashboardpublico.component.css']
})
export class DashboardpublicoComponent implements OnInit {

  constructor(private js:EjecutarScript) { }
  ngOnInit() {
    this.js.CargarScriptLogin();
  }

}
