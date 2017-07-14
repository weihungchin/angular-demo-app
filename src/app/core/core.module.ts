import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
    NavbarComponent,
],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        NavbarComponent,
    ]



})
export class CoreComponentModule{

}