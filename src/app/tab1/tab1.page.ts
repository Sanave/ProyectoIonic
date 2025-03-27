import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { list } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../api/product.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonInput, IonItem, FormsModule, IonButton, HttpClientModule],
})
export class Tab1Page {
  nombre : string = '';
  codigo : string = '';
  precio : number = 0;

  constructor(private productService : ProductService){}

  registrarProducto(){
    if (!this.nombre.trim() || !this.codigo.trim() || this.precio <= 0){
      console.log('Campos vacíos');  
      return;
    }
    
    const producto = {
      nombre : this.nombre,
      codigo : this.codigo,
      precio : this.precio
    };

    this.productService.guardarProducto(producto).subscribe(
      (response) => {
        console.log('Producto registrado correctamente.', response);
      },
      (error) => {
        console.log('Error al registrar el producto: ', error);
      }
    )
  }
  
}
