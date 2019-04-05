import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: AngularFireList<Project>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.getProjects().valueChanges().subscribe(
      (projects: Project[]) => {
        this.updateProjectsEvent(projects);
      }
    );
  }

  private projectsSource: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  projectsObservable: Observable<Project[]> = this.projectsSource.asObservable();

  updateProjectsEvent(projects: Project[]): void {
    this.projectsSource.next(projects);
  }

  getProjects(): AngularFireList<Project> {
    this.projects = this.db.list('projects');
    return this.projects;
  }

  // updateProjects(projects: Array<Project>) {
  //   this.projects = projects;
  // }

  createProject(project: Project): void {
    project.id = this.db.createPushId();
    this.projects.update(project.id, project);
  }

  updateProject(project: Project): void {
    this.projects.update(project.id, project);
  }

  deleteProject(project: Project): void {
    this.projects.remove(project.id);
  }
}
