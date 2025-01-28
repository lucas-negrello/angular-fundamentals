import {ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot} from '@angular/router';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const logoutGuard: CanDeactivateFn<DashboardComponent> = (component: DashboardComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

  if(nextState.url === '/login'){
    const authService = inject(AuthService);
    const confirmation = confirm('Deseja realmente sair?');
    if (confirmation) {
      authService.logout();
      return true;
    } else {
      return false;
    }
  }

  return true;

};
