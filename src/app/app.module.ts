import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpModule, JsonpModule, XHRBackend, RequestOptions } from '@angular/http';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { SidebarService } from './services/sidebar.service';
import { NeutrinoApiService } from './services/neutrino-api.service';

import { AppComponent } from './app.component';

import { HomePage } from './pages/home/home.page';
import { NodesPage } from './pages/nodes/nodes.page';
import { ServicesPage } from './pages/services/services.page';
import { KvpropertiesPage} from './pages/kvproperties/kvproperties.page';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NodesPage,
    ServicesPage,
    KvpropertiesPage,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToasterModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomePage },
        { path: 'nodes', component: NodesPage },
        { path: 'services', component: ServicesPage },
        { path: 'kvproperties', component: KvpropertiesPage }
    ]) 
  ],
  providers: [
    SidebarService,
    NeutrinoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
