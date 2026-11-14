import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly API_URL = 'https://api.github.com';
  private readonly username = environment.github.username;

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.API_URL}/users/${this.username}/repos?sort=updated&per_page=100`);
  }

  getSpecificRepositories(repoNames: string[]): Observable<Project[]> {
    return this.getRepositories().pipe(
      map(repos => repos.filter(repo => repoNames.includes(repo.name)))
    );
  }
}
