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
import { NotesComponent } from './components/notes/notes.component';
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
import { TagsEditComponent } from './components/notes/tags-edit/tags-edit.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { NoteDialogComponent } from './components/notes/note-dialog/note-dialog.component';
import { TagsDialogComponent } from './components/notes/tags-dialog/tags-dialog.component';
import { MarkdownModule } from 'ngx-markdown';
import { AngularResizedEventModule } from 'angular-resize-event';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
} from '@angular/material';
import { AuthComponent } from './components/auth/auth.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SunburstChartComponent } from './components/resume/sunburst-chart/sunburst-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterComponent,
    LandingPageComponent,
    ProjectsComponent,
    NotesComponent,
    AboutComponent,
    RouteButtonsComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    FileInputComponent,
    NoteDialogComponent,
    TagsDialogComponent,
    TagsEditComponent,
    AuthComponent,
    ResumeComponent,
    SunburstChartComponent,
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
    NvD3Module,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  entryComponents: [
    NoteDialogComponent,
    TagsDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
