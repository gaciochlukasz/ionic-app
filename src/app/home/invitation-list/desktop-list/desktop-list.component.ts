import { StatusEnum } from 'src/app/enums/status.enum';
import { AppService } from './../../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.scss']
})
export class DesktopListComponent implements OnInit {
  invitations = this.appService.getInvitations();
  statusEnum = StatusEnum;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
