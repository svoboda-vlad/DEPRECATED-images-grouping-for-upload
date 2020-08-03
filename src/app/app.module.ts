import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGroupingComponent } from './images-grouping/images-grouping.component';
import { NgxPicaModule } from '@digitalascetic/ngx-pica';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGroupingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPicaModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
