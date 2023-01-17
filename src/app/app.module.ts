import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FiltroComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', redirectTo: 'home/todos'},
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home/todos'
      },
      {path: 'home/todos', component: HomeComponent},
      {path: 'home/nao-lidos', component: HomeComponent},
      {path: 'home/lidos', component: HomeComponent},
      {path: 'sobre', component: AboutComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
