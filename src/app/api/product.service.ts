import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './productos';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private options;
  private url = 'http://127.0.0.1:5000/api/productos';

  constructor(public http : HttpClient) { 
    let headers = new HttpHeaders({ 'Content-type' : 'application/json'})
    this.options = {headers : headers}
  }

  guardarProducto(producto : Producto){
    let productoJson = JSON.stringify(producto);
    return this.http.post(this.url, producto, this.options)
  }

  obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url, this.options);
  }
}
