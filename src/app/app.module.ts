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
import { NodeDetailsPage } from './pages/node-details/node-details.page';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NodeStateComponent } from './components/node-state/node-state.component';

import { KeysPipe } from './pipes/keys.pipe';

import { ServiceSmallTableComponent } from './components/service-small-table/service-small-table.component';
import { KvpropertiesSmallTableComponent } from './components/kvproperties-small-table/kvproperties-small-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NodesPage,
    ServicesPage,
    KvpropertiesPage,
    NodeDetailsPage,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NodeStateComponent,
    KeysPipe,
    ServiceSmallTableComponent,
    KvpropertiesSmallTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToasterModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomePage },
        { path: 'nodes', component: NodesPage },
        { path: 'nodes/:id', component: NodeDetailsPage },
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
