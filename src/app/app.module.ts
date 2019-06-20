import { FireConfig, FireAuthConfig } from 'src/environments/app-configs.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DocsComponent } from './components/docs/docs.component';
import { AboutComponent } from './components/about/about.component';
import { RouteButtonsComponent } from './components/route-buttons/route-buttons.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseUIModule } from 'firebaseui-angular';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/projects/project-view/project-view.component';
import { TagsEditComponent } from './components/docs/tags-edit/tags-edit.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { DocDialogComponent } from './components/docs/doc-dialog/doc-dialog.component';
import { MarkdownModule } from 'ngx-markdown';
import { AngularResizedEventModule } from 'angular-resize-event';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatMenuModule,
} from '@angular/material';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    LandingPageComponent,
    ProjectsComponent,
    DocsComponent,
    AboutComponent,
    RouteButtonsComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    FileInputComponent,
    DocDialogComponent,
    TagsEditComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(FireAuthConfig),
    AngularFireModule.initializeApp(FireConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    StorageServiceModule,
    MarkdownModule.forRoot({ 'loader': HttpClient }),
    AngularResizedEventModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  entryComponents: [
    DocDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
