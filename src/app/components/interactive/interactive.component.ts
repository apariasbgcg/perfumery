import { Component, OnInit } from '@angular/core';
declare var alertify:any;

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {
  section:number = 1;
  gender:string='';
  hour:string='';
  constructor() { }

  ngOnInit(): void {
  }
  nextOption(){
    if (this.section === 0 && this.gender==='') {
      alertify.error('Debe seleccionar un genero.');
    }else{
      this.section= this.section+1;
      if (this.section === 1 && this.hour==='') {
        alertify.error('Debe seleccionar un horario.');

      }else{
        this.section= this.section+1;
        console.log(this.gender,this.hour);
        

      }
      
    }

    
  }
}
