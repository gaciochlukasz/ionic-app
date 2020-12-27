import { AppService } from './../../services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.scss']
})
export class InvitationListComponent {
  isMobile$ = this.appService.isMobile;
  invitations$ = this.appService.getInvitations();

  constructor(private appService: AppService) { }
}
