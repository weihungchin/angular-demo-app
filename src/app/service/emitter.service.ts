import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

storedUserName:EventEmitter<any> = new EventEmitter<any>();

constructor() { }

setUserName(username:string){
    this.storedUserName.emit(username);
}

getUserName(){
    return this.storedUserName;
}

}