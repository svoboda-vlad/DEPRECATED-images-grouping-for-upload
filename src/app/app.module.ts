import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGroupingComponent } from './images-grouping/images-grouping.component';
import { NgxPicaModule } from '@digitalascetic/ngx-pica';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGroupingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
