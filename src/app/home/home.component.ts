import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngForm: FormGroup;
  estatogo: any ;
  estators: any;
  estatosc: any;
  estatopr: any;
  estatomg: any;
  estatorj: any;
  estatoes: any;
  estatoms: any;
  estatoba: any;
  estatoto: any;
  estatose: any;
  estatoal: any;
  estatope: any;
  estatopb: any;
  estatorn: any;
  estatoce: any;
  estatopi: any;
  estatoma: any;
  estatomt: any;
  estatopa: any;
  estatoro: any;
  estatoap: any;
  estatoam: any;
  estatorr: any;
  estatoac: any;
  estatosp: any;
  estatodf: any;
  estado:any;
  casos:any;


  constructor(private fb: FormBuilder, private render: Renderer2) { }

  ngOnInit(): void {


  }


  onclikMap(event: any) {
   this.estado=event;
   if(event==='state-go'){
     this.casos=10;
     this.estatogo=true;
     this.estatosp=false;
     this.estatomt = false;
     this.estators= false;
     this.estatosc= false;
     this.estatopr= false;
     this.estatomg= false;
     this.estatorj= false;
     this.estatoes= false;
     this.estatoms= false;
     this.estatoba= false;
     this.estatoto= false;
     this.estatose= false;
     this.estatoal= false;
     this.estatope= false;
     this.estatopb= false;
     this.estatorn= false;
     this.estatoce= false;
     this.estatopi= false;
     this.estatoma= false;
     this.estatopa= false;
     this.estatoro= false;
     this.estatoap= false;
     this.estatoam= false;
     this.estatorr= false;
     this.estatoac= false;
     this.estatodf= false;
   }else if(event==='state-sp'){
    this.casos=164;
     this.estatosp=true;
     this.estatomt = false;
     this.estatogo= false;
     this.estators= false;
     this.estatosc= false;
     this.estatopr= false;
     this.estatomg= false;
     this.estatorj= false;
     this.estatoes= false;
     this.estatoms= false;
     this.estatoba= false;
     this.estatoto= false;
     this.estatose= false;
     this.estatoal= false;
     this.estatope= false;
     this.estatopb= false;
     this.estatorn= false;
     this.estatoce= false;
     this.estatopi= false;
     this.estatoma= false;
     this.estatopa= false;
     this.estatoro= false;
     this.estatoap= false;
     this.estatoam= false;
     this.estatorr= false;
     this.estatoac= false;
     this.estatodf= false;
   }else if(event==='state-mt'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = true;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }
  else if(event==='state-rs'){
    this.casos=19;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= true;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-sc'){
    this.casos=7;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= true;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-pr'){
    this.casos=12;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= true;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-mg'){
    this.casos=14;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= true;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-rj'){
    this.casos=33;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= true;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-es'){
    this.casos=8;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= true;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ms'){
    this.casos=6;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= true;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ba'){
    this.casos=17;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= true;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-to'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= true;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-se'){
    this.casos=5;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= true;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-al'){
    this.casos=1;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= true;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-pe'){
    this.casos=19;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= true;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-pb'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= true;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-rn'){
    this.casos=1;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= true;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ce'){
    this.casos=11;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= true;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-pi'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= true;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ma'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= true;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-pa'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= true;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ro'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= true;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }
else if(event==='state-ap'){
  this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= true;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-am'){
    this.casos=1;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= true;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-rr'){
    this.casos=0;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= true;
    this.estatoac= false;
    this.estatodf= false;
  }else if(event==='state-ac'){
    this.casos=3;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= true;
    this.estatodf= false;
  }else if(event==='state-df'){
    this.casos=19;
    this.estatosp=false;
    this.estatomt = false;
    this.estatogo= false;
    this.estators= false;
    this.estatosc= false;
    this.estatopr= false;
    this.estatomg= false;
    this.estatorj= false;
    this.estatoes= false;
    this.estatoms= false;
    this.estatoba= false;
    this.estatoto= false;
    this.estatose= false;
    this.estatoal= false;
    this.estatope= false;
    this.estatopb= false;
    this.estatorn= false;
    this.estatoce= false;
    this.estatopi= false;
    this.estatoma= false;
    this.estatopa= false;
    this.estatoro= false;
    this.estatoap= false;
    this.estatoam= false;
    this.estatorr= false;
    this.estatoac= false;
    this.estatodf= true;
  }
  }
}
