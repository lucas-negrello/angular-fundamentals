import {CanActivateFn, GuardResult, MaybeAsync, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const scopesGuard = (scope: string): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    const userScopes = authService.getUserScopes();

    if(userScopes.find((userScope => userScope === scope))){
      return true;
    } else {
      return router.navigate(['not-authorized']);
    }
  }
};
