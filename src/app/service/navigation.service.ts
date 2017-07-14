import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavigationService {

private isLoggedIn:boolean;
private isLoggedInSubject:Subject<any> = new Subject<any>();

constructor() { }

setLoginStatus(status:boolean):void{
    this.isLoggedIn = status;
    this.isLoggedInSubject.next(status);
}

getLoginStatus():Observable<any>{

    return this.isLoggedInSubject.asObservable();
}


}