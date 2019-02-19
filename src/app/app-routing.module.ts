import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GuidesComponent } from './components/guides/guides.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes =
  [
    {
      path: '',
      component: LandingPageComponent,
    },
    {
      path: 'guides',
      component: GuidesComponent,
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
