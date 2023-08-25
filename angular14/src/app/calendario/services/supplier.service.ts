import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Basic YWRtaW46IA==');

@Injectable({
  providedIn: 'root'
})

export class SupplierService {
 
   // ApiRest = 'pedidos'; //Endereço da nossa API responsável por lista os fornecedores
   ApiRest = 'http://localhost:8099/reST/pedidos' 
    constructor(private http: HttpClient) { }
      
    //Método responsável por buscar e listar nossos fornecedores
      getSupplierList(): Observable<any> {
      return this.http.get(this.ApiRest,{ 'headers': headers });
    }
}
