import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { ProductService } from '../api/product.service';
import { Producto } from '../api/productos';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, NgIf, CommonModule]
})
export class Tab2Page implements OnInit {
  productos : Producto[] = [];

  constructor(private productServie : ProductService){}

  ngOnInit(){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productServie.obtenerProductos().subscribe(
      (productos) => {
        this.productos = productos;
        console.log('productos obtenidos: ', this.productos);
      },
      (error) => {
        console.error('Error al obtener productos: ', error);
      }
    )
  }

}
