import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { Observable } from 'rxjs/internal/Observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CalendarioComponent } from '../calendario/calendario.component';
import { PedComponent } from './pedi.component';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Basic YWRtaW46IA==');


@Injectable({
  providedIn: 'root'
})

export class pediService {
 
  public oCalendario : CalendarioComponent
  public oPedido : PedComponent
     //Endereço da nossa API responsável por lista os fornecedores
    
    constructor(private http: HttpClient,
      public oPoNotification: PoNotificationService) { }
      
    //Método responsável por buscar e listar nossos fornecedores
      getPedList(): Observable<any> {
        const nini = window.location.href.indexOf('_') - 4 
        //const ApiRest = 'ped/date=' + window.location.href.substring(nini,nini+10);
        const ApiRest = 'http://localhost:8099/rest/PED/date=' + window.location.href.substring(nini,nini+10);
       
        
      return this.http.get(ApiRest,{ 'headers': headers });
    }
        POstNewdata( cid ,ddatas  ){
      
         // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
          const body = { pedido: cid ,date: ddatas };
          console.log(cid);

          this.http.post<any>('PEDPOST', body, { headers }).subscribe(data => {
            data.id;
          });

      return 
    }
      
  }