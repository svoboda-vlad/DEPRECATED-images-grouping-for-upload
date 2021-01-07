import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGroupingComponent } from './images-grouping/images-grouping.component';
import { NgxPicaModule } from '@digitalascetic/ngx-pica';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    ReactiveFormsModule,
    SocialLoginModule,
    NgbModule
  ],
  providers: [    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.GOOGLE_CLIENT_ID
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
