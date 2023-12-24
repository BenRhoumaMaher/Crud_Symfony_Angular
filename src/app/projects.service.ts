import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>("http://127.0.0.1:8000/api/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[]) => {
          for (let i = 0; i < data.length; i++) {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }
  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>("http://127.0.0.1:8000/api/newproject", newProject, { responseType: "json" });
  }
  updateProject(existingProject: Project): Observable<Project> {
    const url = `http://127.0.0.1:8000/api/projects/${existingProject.projectID}`;
    return this.httpClient.put<Project>(url, existingProject);
  }
  deleteProject(projectID: number): Observable<string> {
    const url = `http://127.0.0.1:8000/api/projects/${projectID}`;
    return this.httpClient.delete<string>(url);
  }
  searchProjects(searchBy: string, searchText: string): Observable<Project[]> {
    const url = `http://127.0.0.1:8000/api/projects/search/${searchBy}/${searchText}`;
    return this.httpClient.get<Project[]>(url);
  }
}
