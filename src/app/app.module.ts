import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NavLinksComponent } from './core/components/nav-links/nav-links.component';
import { ApiInterceptorService } from './core/interceptor/api-interceptor/api-interceptor.service';
import { ComicsModule } from './features/comics/comics.module';
import { CacheInterceptor } from './core/interceptor/cache-interceptor/cache.interceptor';
import { CharactersModule } from './features/characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComicsModule,
    CharactersModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
