import { StatusEnum } from './../enums/status.enum';

export interface InvitationModel {
    id: number;
    companyName: string;
    personCount: number;
    invitationName: string;
    dateFrom: Date;
    dateTo: Date;
    status: StatusEnum;
}
