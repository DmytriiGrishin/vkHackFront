import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMatches().subscribe(
      data => this.matches$ = data
    );
  }

}
