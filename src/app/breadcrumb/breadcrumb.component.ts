import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item active" href="#">Search</a>
  </nav>
  `,
  styles:[
    `a{
    color:darkblue;
  }
  `
  ]


})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent() {
    return 'A content';
  }

}
