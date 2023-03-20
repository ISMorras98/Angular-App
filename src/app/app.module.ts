import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    HeroComponent,
    AboutMeComponent,
    ExperienciaComponent,
    ConocimientosComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
