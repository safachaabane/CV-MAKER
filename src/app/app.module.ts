import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { ListeComponentComponent } from './liste-component/liste-component.component';
import { CvComponentComponent } from './cv-component/cv-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponentComponent,
    ItemComponentComponent,
    ListeComponentComponent,
    CvComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
