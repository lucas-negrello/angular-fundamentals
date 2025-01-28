import {CanActivateFn, GuardResult, MaybeAsync, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {catchError, map} from "rxjs";

export const authWithScopesGuard = (scope: string): CanActivateFn => {
  return (): MaybeAsync<GuardResult> => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    return authService.verifyToken().pipe(
      catchError(() => {
        return router.navigate(['login']);
      }),
      map(() => {
        const hasRouteScope = authService.getUserScopes().find(
          userScope => userScope === scope
        );
        if(hasRouteScope){
          return true;
        }
        else {
          router.navigate(['not-authorized']);
          return false;
        }
      })
    );
  }
};
