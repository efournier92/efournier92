import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DocsComponent } from './components/docs/docs.component';
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
      path: 'docs',
      component: DocsComponent,
    },
    {
      path: 'docs/:tagName',
      component: DocsComponent,
    },
    {
      path: 'docs/:tagName/:fileName',
      component: DocsComponent,
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
