import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { SharedModule } from './shared/shared.module';

// configuracion del locale de la app


// funcion que establece en angular todos los locales con que se desea trabajar
import { registerLocaleData } from '@angular/common';

// manera como se importa los locales
import localesEnBZ from '@angular/common/locales/en-BZ'
import localesEsVE from '@angular/common/locales/es-VE'
import localesFrCA from '@angular/common/locales/fr-CA'

// se llama para poder registrar todos los locales
registerLocaleData( localesEnBZ, "en");
registerLocaleData( localesEsVE);
registerLocaleData( localesFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    MenubarModule,
    SharedModule,

  ],
  exports:[

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:"es-VE"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
