import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { HeaderComponent } from './header/header.component';
import { CharacterService } from './services/character.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HeaderComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
