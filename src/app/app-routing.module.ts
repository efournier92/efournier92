import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DocsComponent } from './components/docs/docs.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

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
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
