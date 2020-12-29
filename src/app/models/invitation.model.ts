import { StatusEnum } from './../enums/status.enum';
import { GuestModel } from './guest.model';

export interface InvitationModel {
    id: number;
    companyName: string;
    personCount: number;
    invitationName: string;
    dateFrom: Date;
    dateTo: Date;
    status: StatusEnum;
    quests: GuestModel[];
}
