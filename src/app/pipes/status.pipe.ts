import { Pipe, PipeTransform } from '@angular/core';
import { StatusEnum } from '../enums/status.enum';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: StatusEnum): any {
    switch (value) {
      case StatusEnum.canceled:
        return 'Anulowany';
      case StatusEnum.waiting:
        return 'Oczekujący';
      case StatusEnum.done:
        return 'Ukończkony';
      default:
        return 'Brak';
    }
  }
}
