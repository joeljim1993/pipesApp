import { Component, OnInit } from '@angular/core';

import { MenuItem,PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{

 public menuItems: MenuItem[]=[] ;

  ngOnInit() {
      this.menuItems = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items:[
                {
                  label:"Textos y Fechas",
                  icon: "pi pi-aling-left",
                  routerLink: ""
                },
                {
                  label:"Numeros",
                  icon: "pi pi-aling-left",
                  routerLink: "numbers"
                },
                {
                  label:"No Comunes",
                  icon: "pi pi-aling-left",
                  routerLink: "uncommon"
                }
              ]
          },


          {
            label:"Pipes Personalizado",
            icon:"pi pi-cog",
            items:[
              {
                label:"Otro elemento",
                icon:"pi pi-cog",
              }
            ]
          }
      ];
  }



}
