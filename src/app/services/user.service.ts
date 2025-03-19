import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../objects/user';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ChangePassword, LoginUser } from '../objects/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{
  user: User = new User();
  behaviorSubject$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient, private router: Router) { 
    this.user.customerId = sessionStorage.getItem('userId') ? Number(sessionStorage.getItem('userId')) : 0;
    if (this.user.customerId !== 0) {
      this.getUser(this.user.customerId).subscribe(
        (response) => {
          this.user = response;
          this.behaviorSubject$.next(this.user);
        }
      )
    }
  }
  getUser(userId: number): Observable<User> {
    return this.http.get<User>('http://localhost:8003/customer/view-profile/' + userId);
  }

  sendUser(user: User) {
    this.behaviorSubject$.next(user);
  }

  canActivate(): boolean {
    if (Number(sessionStorage.getItem('userId')) !== 0) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
