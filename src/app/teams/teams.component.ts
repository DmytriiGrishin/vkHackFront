import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTeams().subscribe(data => this.teams$ = data);
  }

}
