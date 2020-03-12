import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoremService } from './lorem.service';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = 
[
  

      {path : 'home' , component : HomeComponent} ,
      {path : 'contact' , component : ContactComponent},
      {path : 'about' , component : AboutComponent}

  
]

@NgModule({
  imports:[ BrowserModule,HttpClientModule, FormsModule ,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomeComponent, ContactComponent, AboutComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [LoremService]
})
export class AppModule { }
