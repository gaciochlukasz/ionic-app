import { Component, Input } from '@angular/core';
import { StatusEnum } from 'src/app/enums/status.enum';
import { InvitationModel } from 'src/app/models/invitation.model';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent {
  @Input() invitations: InvitationModel[];
  statusEnum = StatusEnum;

  constructor() { }
}
