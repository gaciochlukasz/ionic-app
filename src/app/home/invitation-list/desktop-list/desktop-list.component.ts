import { InvitationModel } from './../../../models/invitation.model';
import { StatusEnum } from 'src/app/enums/status.enum';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.scss']
})
export class DesktopListComponent {
  @Input() invitations: InvitationModel[];
  statusEnum = StatusEnum;

  constructor() { }
}
