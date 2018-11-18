import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team$: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.team$ = params.id );
  }

  ngOnInit() {
    this.data.getTeam(this.team$).subscribe(
      data => this.team$ = data
    );
  }

}
