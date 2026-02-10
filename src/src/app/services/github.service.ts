import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly API_URL = 'https://api.github.com';
  private username = '';

  constructor(private http: HttpClient) {}

  setUsername(username: string): void {
    this.username = username;
  }

  getRepositories(): Observable<Project[]> {
    if (!this.username) {
      throw new Error('Username not set');
    }
    return this.http.get<Project[]>(`${this.API_URL}/users/${this.username}/repos?sort=updated&per_page=100`);
  }

  getSpecificRepositories(repoNames: string[]): Observable<Project[]> {
    return this.getRepositories().pipe(
      map(repos => repos.filter(repo => repoNames.includes(repo.name)))
    );
  }
}