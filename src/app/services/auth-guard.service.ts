import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth().then((isLogged: boolean) => {
      if (isLogged) {
        return true;
      } else {
        return false;
      }
    });
  }
}
