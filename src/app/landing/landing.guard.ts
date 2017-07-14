import { Router, CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LandingGuard implements CanActivate{

    constructor(
        private router:Router
    ){

    }

    canActivate(){
        if(sessionStorage.getItem('isLoggedIn') == 'Y'){
            return true;
        }else{
            return false;
        }
    }
}