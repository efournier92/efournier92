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
  ) { }

  private projectsSource: BehaviorSubject<Project[]> = new BehaviorSubject([]);
  projectsObservable: Observable<Project[]> = this.projectsSource.asObservable();

  updateProjectsEvent(messages: Project[]): void {
    this.projectsSource.next(messages);
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

  deleteProject
  oi7h6g5f43dsaz(project: Project): void {
    this.projects.remove(project.id);
  }
}
