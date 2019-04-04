import { secrets } from 'src/environments/secrets';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/projects/project-view/project-view.component';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    LandingPageComponent,
    ProjectsComponent,
    GuidesComponent,
    AboutComponent,
    RouteButtonsComponent,
    ProjectEditComponent,
    ProjectViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(secrets.angularFire),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
