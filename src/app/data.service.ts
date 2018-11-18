import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get('/matches');
  }

  getTeam(teamId) {
    return this.http.get('/teams/team?id=' + teamId);
  }

  getTeams() {
    return this.http.get('/teams/');
  }
}
