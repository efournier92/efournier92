import { secrets } from 'src/environments/secrets';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DocsComponent } from './components/docs/docs.component';
import { AboutComponent } from './components/about/about.component';
import { RouteButtonsComponent } from './components/route-buttons/route-buttons.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/projects/project-view/project-view.component';

import { MarkdownModule } from 'ngx-markdown';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FileInputComponent } from './components/file-input/file-input.component';
import { DocDialogComponent } from './components/docs/doc-dialog/doc-dialog.component';

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
} from '@angular/material';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { TagsEditComponent } from './components/docs/tags-edit/tags-edit.component';

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
    CamelCasePipe,
    TagsEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(secrets.angularFire),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MarkdownModule.forRoot({ 'loader': HttpClient }),
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
  ],
  entryComponents: [
    DocDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
