import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class FuncionesGenerales {

    converBase64toBlob(content:any, contentType:any) {
        content = content.replace("data:application/pdf;base64,", "");
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = window.atob(content);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);
          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          var byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, {
          type: contentType
        });    
        return blob;
      }

      validarCedula(cedula: string): boolean {
        // Eliminar espacios en blanco y guiones
        cedula = cedula.replace(/\s/g, '').replace(/-/g, '');
    
        // Verificar longitud
        if (cedula.length !== 10) {
            return false;
        }
    
        // Verificar que solo contenga números
        if (!/^\d+$/.test(cedula)) {
            return false;
        }
    
        // Verificar que los dos primeros dígitos representen un código de provincia válido
        const provincia = Number(cedula.substring(0, 2));
        if (provincia < 0 || provincia > 24) {
            return false;
        }
    
        // Verificar el último dígito (dígito verificador)
        const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let suma = 0;
        let dverificador = Number(cedula.charAt(9));
    
        for (let i = 0; i < 9; i++) {
            let valor = Number(cedula.charAt(i)) * coeficientes[i];
            suma += (valor > 9) ? valor - 9 : valor;
        }
    
        let residuo = suma % 10;
        let verificador = residuo ? 10 - residuo : residuo;
    
        return verificador === dverificador;
    }

}

