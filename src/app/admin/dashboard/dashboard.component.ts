import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpCommingProjects: number = 0;
  ProjectConst: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date | undefined;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor(private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.Designation = "Team Leader";
    this.Username = "Maher Ben Rhouma";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpCommingProjects = 0.2;
    this.ProjectConst = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();
    this.Clients = [
      "ABC Infotech Lid.", "DEF Software Solutions.", "GHI Industries"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]
    for (let i = 2023; i >= 2010; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = this.dashboardService.getTeamMembers();
  }
  onProjectChange($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectConst = 2168562;
      this.CurrentExpenditure = 98563;
      this.AvailableFunds = 58963;
    }
    else if ($event.target.innerHTML == "Project B") {
      this.ProjectConst = 8596632;
      this.CurrentExpenditure = 12563;
      this.AvailableFunds = 596329;
    }
    else if ($event.target.innerHTML == "Project C") {
      this.ProjectConst = 292882;
      this.CurrentExpenditure = 94242;
      this.AvailableFunds = 84448;
    }
    else if ($event.target.innerHTML == "Project D") {
      this.ProjectConst = 9989898;
      this.CurrentExpenditure = 33635;
      this.AvailableFunds = 68686;
    }
  }
}
