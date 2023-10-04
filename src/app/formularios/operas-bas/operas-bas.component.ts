import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1='';
  num2='';
  resultado: number|undefined;
  operacion: string = ' ';

  operaciones(operacion: string, num1: string, num2: string) {
    // Convierte los números ingresados de string a number
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    switch (operacion) { 
      case "suma":
        this.resultado = numero1 + numero2;
        break;
      
      case "resta":
        this.resultado = numero1 - numero2;
        break;

      case "multiplicacion":
          this.resultado = numero1 * numero2;
      break;

      case "division":
          this.resultado = numero1 / numero2;
      break;

      default:
        "no se puede:("; 
    }
  
}
}
