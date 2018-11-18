import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
    path: 'details/:id',
    component: MatchComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
