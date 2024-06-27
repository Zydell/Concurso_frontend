import { Component, OnInit } from '@angular/core';
import { EjecutarScript } from './../../../Herramientas/EjecutarScript';

@Component({
  selector: 'app-pg-inicioportada',
  templateUrl: './pg-inicioportada.component.html',
  styleUrls: ['./pg-inicioportada.component.css',
'./../../../assets/vendor/aos/aos.css'
,'./../../../assets/vendor/bootstrap-icons/bootstrap-icons.css'
,'./../../../assets/vendor/boxicons/css/boxicons.min.css'
,'./../../../assets/vendor/glightbox/css/glightbox.min.css'
,'./../../../assets/vendor/remixicon/remixicon.css'
,'./../../../assets/vendor/swiper/swiper-bundle.min.css'
,'./../../../assets/css/style.css'
]
})

export class PgInicioportadaComponent implements OnInit {
  constructor(private js:EjecutarScript) { }
  ngOnInit() {
   
    this.js.CargarScriptLogin();
  }
}
