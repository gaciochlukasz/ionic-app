import { MobileListComponent } from './invitation-list/mobile-list/mobile-list.component';
import { DesktopListComponent } from './invitation-list/desktop-list/desktop-list.component';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { ShareModule } from './../share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ShareModule
  ],
  declarations: [HomePage, InvitationListComponent, DesktopListComponent, MobileListComponent]
})
export class HomePageModule {}
