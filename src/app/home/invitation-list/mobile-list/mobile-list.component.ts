import { AppService } from './../../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { StatusEnum } from 'src/app/enums/status.enum';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {
  invitations = this.appService.getInvitations();
  statusEnum = StatusEnum;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
