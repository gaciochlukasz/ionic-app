import { AddNewInvitationComponent } from './add-new-invitation/add-new-invitation.component';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'invitations-list'
      },
      {
        path: 'invitations-list',
        component: InvitationListComponent
      },
      {
        path: 'new-invitation',
        component: AddNewInvitationComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
