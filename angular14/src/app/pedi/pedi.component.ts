import { Component, NgModule, ViewChild } from '@angular/core';
import { pediService } from './pedi.service';
import { CalendarioComponent } from '../calendario/calendario.component';
import { Name } from '@totvs/protheus-lib-core';
import { Custom } from './pedi.layut';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { PoModalComponent,   PoNotificationService  } from '@po-ui/ng-components';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'pedi.component',
  templateUrl: './pedi.component.html'
})
export class PedComponent {
  

  public cidpedido : string
  novadata : string | Date;
  
  extraInformation: any;
  columns = [
    
    { property: 'id', label: 'Código' ,type: 'link',color : 'color-10',action: (value ,row) => {
      this.details(value , row );
    },},
    { property: 'name', label: 'Nome' },
    
    { property: 'emissao', label: 'Emissao' },
    
    { property: 'TIPO', label: 'E-mail' }
  ];
  
  colunas = []
  data:  Array<any> = [];
  items: Array<any>;
  title: any;
  
  oservice: pediService
  ocalendario: CalendarioComponent
  status: any;

  constructor(
    private oServices: pediService,
    private oRouter: Router,
    public oPo :PoNotificationService,
    
  ) {}

 
  
  ngOnInit(): void {
    
   this.addpedido(this);  
  }
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

 
  details(cvaleu ,crow ) {
    this.cidpedido = cvaleu
    
    this.poModal.open();
    
  }
  confirmFruits( ) {
   
    this.oServices.POstNewdata(this.cidpedido,this.novadata);
    this.poModal.close();
    this.oRouter.navigateByUrl('pedidos');
  }
  closeModal(){
    this.poModal.close();
  }
  
  addpedido(apedido) {
    this.data = [];
    let aData = [];
    
    this.oServices.getPedList().subscribe(
   
      (res) => {
        
        res.forEach((item) => {
          aData.push(item);
      
          
        });
      },
      (error) => {
        console.log(error);
        this.oPo.error(error);
      },
      () => {
        this.data = aData;
      }
    );
  }
}



