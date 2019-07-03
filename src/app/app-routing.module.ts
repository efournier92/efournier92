import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotesComponent } from './components/notes/notes.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes =
  [
    {
      path: '',
      component: LandingPageComponent,
    },
    {
      path: 'notes',
      component: NotesComponent,
    },
    {
      path: 'notes/:tagName',
      component: NotesComponent,
    },
    {
      path: 'notes/:tagName/:fileName',
      component: NotesComponent,
    },
    {
      path: 'projects',
      component: ProjectsComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'auth',
      component: AuthComponent,
    },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
