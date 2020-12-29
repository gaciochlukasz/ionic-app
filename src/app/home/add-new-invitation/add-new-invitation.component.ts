import { AddGuestComponent } from './add-guest/add-guest.component';
import { StatusEnum } from './../../enums/status.enum';
import { InvitationModel } from './../../models/invitation.model';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/consts/consts';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GuestModel } from 'src/app/models/guest.model';

@Component({
  selector: 'app-add-new-invitation',
  templateUrl: './add-new-invitation.component.html',
  styleUrls: ['./add-new-invitation.component.scss']
})
export class AddNewInvitationComponent implements OnInit {
  actualDate = new Date();
  dateFrom = `${this.actualDate.getFullYear()}-${this.actualDate.getMonth() - 1}-${this.actualDate.getDate()}`;
  dateTo = `${this.actualDate.getFullYear() + 2}-${this.actualDate.getMonth()}-${this.actualDate.getDate()}`;
  monthName = AppConstants.monthName;

  guests: GuestModel[] = [];
  public form: FormGroup;

  constructor(
    private appService: AppService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.form = this.initForm();
  }

  initForm() {
    return this.formBuilder.group({
      companyName: new FormControl(''),
      invitationName: new FormControl(''),
      dateFrom: new FormControl(''),
      dateTo: new FormControl('')
    });
  }

  onSubmit() {
    const dataToSend = this.form.value as InvitationModel;
    dataToSend.quests = this.guests;
    dataToSend.personCount = this.guests.length;
    dataToSend.status = StatusEnum.waiting;

    this.appService.addInvitation(dataToSend).subscribe(() => {
      this.goBack();
      this.appService.refreshInvitationsList();
    });
  }

  addGuest() {
    this.presentModal();
  }

  removeGuest(guest: GuestModel) {
    this.guests = this.guests.filter(x => x !== guest);
  }

  goBack() {
    this.router.navigate(['home/invitations-list']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddGuestComponent,
      cssClass: 'add-guest-modal'
    });

    await modal.present();
    const dataFromModal = await modal.onWillDismiss();
    if (dataFromModal.data) {
      this.guests.push(dataFromModal.data);
    }
    return await modal.dismiss();
  }
}
