import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Basic YWRtaW46cG9sbHV4MjM=');

@Injectable({
  providedIn: 'root'
})

export class SupplierService {
 
    //ApiRest = 'http://CUMXVO-TST-protheus.totvscloud.com.br:1059/rest/pedidos'; //Endereço da nossa API responsável por lista os fornecedores
    ApiRest = ''
    constructor(private http: HttpClient) { }
     private dvara = ''  
    //Método responsável por buscar e listar nossos fornecedores
      getSupplierList(): Observable<any> { 
      return this.http.get(this.ApiRest,{ 'headers': headers });
    }
}
