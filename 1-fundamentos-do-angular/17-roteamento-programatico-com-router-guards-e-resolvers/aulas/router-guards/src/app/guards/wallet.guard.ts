import {CanActivateFn, GuardResult, MaybeAsync} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const walletGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  if(authService.getUserWalletStatus() === 'active') {
    return true;
  }
  else {
    return false;
  }
};
