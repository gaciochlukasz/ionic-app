import { InvitationModel } from './../models/invitation.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isMobile = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  env = environment;

  addInvitation(obj: InvitationModel): Observable<any> {
    return this.http.post(`${this.env.endpoint}invitations`, obj);
  }

  getInvitations(): Observable<InvitationModel[]> {
    return this.http.get<InvitationModel[]>(`${this.env.endpoint}invitations`);
  }

  setAppVersion(isMobile: boolean) {
    this.isMobile.next(isMobile);
  }
}
