import { InvitationModel } from './../models/invitation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isMobile = new BehaviorSubject<boolean>(false);
  refreshList = new BehaviorSubject(null);

  constructor(private http: HttpClient, private loadingController: LoadingController) { }
  env = environment;

  addInvitation(obj: InvitationModel): Observable<any> {
    return this.http.post('invitations', obj);
  }

  getInvitations(): Observable<InvitationModel[]> {
    return this.http.get<InvitationModel[]>('invitations');
  }

  setAppVersion(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }

  refreshInvitationsList() {
    this.refreshList.next(null);
  }
}
