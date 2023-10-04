import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    imageWidth:number=50;
    imageMargin:number=2;
    muestraImg:boolean=true;
    listFilter:string='';

    showImage():void{
      this.muestraImg=!this.muestraImg;
    }

    productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"NISSAN",
      "Color":"Amarillo",
      "imagenURL":"https://s1.eestatic.com/2023/01/07/motor/731936916_229990337_1706x960.jpg"

    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 2022",
      "precio":180000,
      "Marca":"Audi",
      "Color":"Rojo",
      "imagenURL":"https://i.blogs.es/326a59/ferrari/450_1000.jpeg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"marzo 2022",
      "precio":200000,
      "Marca":"KIA",
      "Color":"Blanco",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-hb-bn/configura-tu-kia/spack/Configura_tu_kia_RioHB-2-Spack-Snow-white-Pear.png"
    },

  ]
}
