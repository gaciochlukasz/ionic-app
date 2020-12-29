import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {
  formGuest: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
    this.formGuest = this.initForm();
  }

  initForm() {
    return this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNr: new FormControl(''),
      parkingReservation: new FormControl(false),
      registrationNumber: new FormControl(''),
      parkingPlaceNo: new FormControl('')
    });
  }

  addGuest() {
    if (!this.formGuest.get('parkingReservation').value) {
      this.formGuest.get('registrationNumber').setValue(null);
      this.formGuest.get('parkingPlaceNo').setValue(null);
    }
    this.modalController.dismiss(this.formGuest.value);
  }

  goBack() {
    this.modalController.dismiss();
  }
}
