import { StatusPipe } from './../pipes/status.pipe';
import { AddGuestComponent } from './add-new-invitation/add-guest/add-guest.component';
import { AddNewInvitationComponent } from './add-new-invitation/add-new-invitation.component';
import { MobileListComponent } from './invitation-list/mobile-list/mobile-list.component';
import { DesktopListComponent } from './invitation-list/desktop-list/desktop-list.component';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    InvitationListComponent,
    DesktopListComponent,
    MobileListComponent,
    AddNewInvitationComponent,
    AddGuestComponent,
    StatusPipe
  ]
})
export class HomePageModule { }
