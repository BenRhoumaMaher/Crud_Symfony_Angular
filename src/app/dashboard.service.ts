import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getTeamMembersSummary(): any[] {
    var TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMember: 4 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMember: 6 },
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMember: 1 },
      { Region: "North", TeamMembersCount: 19, TemporarilyUnavailableMember: 7 },
    ];
    return TeamMembersSummary;
  }

  getTeamMembers(): any[] {
    var TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Ford", Status: "Available" },
          { ID: 2, Name: "Miller", Status: "Available" },
          { ID: 3, Name: "Jones", Status: "Busy" },
          { ID: 4, Name: "James", Status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { ID: 5, Name: "Ford", Status: "Available" },
          { ID: 6, Name: "Miller", Status: "Available" },
          { ID: 7, Name: "Jones", Status: "Busy" },
          { ID: 8, Name: "James", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 9, Name: "Ford", Status: "Available" },
          { ID: 10, Name: "Miller", Status: "Available" },
          { ID: 11, Name: "Jones", Status: "Busy" },
          { ID: 12, Name: "James", Status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { ID: 13, Name: "Ford", Status: "Available" },
          { ID: 14, Name: "Miller", Status: "Available" },
          { ID: 15, Name: "Jones", Status: "Busy" },
          { ID: 16, Name: "James", Status: "Busy" }
        ]
      }
    ];
    return TeamMembers;
  }
}
