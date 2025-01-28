import { ResolveFn } from '@angular/router';
import {GeneralInfosService} from "../services/general-infos.service";
import {inject} from "@angular/core";
import {firstValueFrom} from "rxjs";

export const generalInfosResolver: ResolveFn<any> = () => {
  const generalInfoService: GeneralInfosService = inject(GeneralInfosService);
  return Promise.all([
    firstValueFrom(generalInfoService.getIncidents()),
    firstValueFrom(generalInfoService.getPendingPayments()),
    firstValueFrom(generalInfoService.getNewAccounts()),
    firstValueFrom(generalInfoService.getActiveUsers()),
  ]).then(([incidents, pendingPayments, newAccounts, activeUsers]) =>
  {
    return {
      incidents,
      pendingPayments,
      newAccounts,
      activeUsers,
    }
  })
};
