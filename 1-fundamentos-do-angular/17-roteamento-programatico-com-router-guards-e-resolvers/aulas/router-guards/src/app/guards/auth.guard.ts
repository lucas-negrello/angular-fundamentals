import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {catchError, map} from "rxjs";

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.verifyToken().pipe(
    catchError(() => {
      return router.navigate(['login']);
    }),
    map(() => {
      return true;
    })
  );
};
