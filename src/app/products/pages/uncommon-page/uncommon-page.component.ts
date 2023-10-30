import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

// i18n Select
public name :string = "Joel";
public gender: "male" | "female" = "male" 
public invitationMap = {
  male:"invitarlo",
  female:"invitarla",
}


changeClient():void{
 this.name = "Melissa";
 this.gender = "female"
}

// i18nPlural
public clients:string[]=["maria","pedro","fernando","eduardo","melissa","joel"]
public clientMaps={
  "=0": "no tenemos ningun cliente esperando",
  "=1":"tenemos un cliente esperando ",
  "=2": "tenemos 2 clientes esperando ",
  "other": "tenemos # clientes esperando "
}

deleteClient():void{
  this.clients.shift();
}

// key value Pipe

public person = {
  name:"fernando ",
  age:36,
  address:"otawa,Canada"
}

// async pipes

public mybservableTimer = interval(2000);


public promiseValue :Promise<string> = new Promise( (resolve,reject)=>{
  setTimeout(()=>{
    resolve(" Tenemos data en la promesa")
  },3500);
})

}
