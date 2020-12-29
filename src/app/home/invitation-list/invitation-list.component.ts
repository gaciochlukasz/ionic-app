import { InvitationModel } from './../../models/invitation.model';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss']
})
export class InvitationListComponent implements OnInit {
  isMobile$ = this.appService.isMobile;
  invitationsList: InvitationModel[];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.refreshList.subscribe(() => {
      this.appService.getInvitations().subscribe(invitations => {
        this.invitationsList = invitations;
      });
    });
  }

  goToNewInvitation() {
    this.router.navigate(['home/new-invitation']);
  }
}
