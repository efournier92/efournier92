import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GuidesComponent } from './components/guides/guides.component';
import { AboutComponent } from './components/about/about.component';
import { RouteButtonsComponent } from './components/route-buttons/route-buttons.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { secrets } from 'src/environments/secrets';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    LandingPageComponent,
    ProjectsComponent,
    GuidesComponent,
    AboutComponent,
    RouteButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(secrets.angularFire),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
