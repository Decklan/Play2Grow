import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OtComponent } from './components/ot/ot.component';
import { StComponent } from './components/st/st.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { P2gFooterComponent } from './components/p2g-footer/p2g-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtComponent,
    StComponent,
    GettingStartedComponent,
    P2gFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
