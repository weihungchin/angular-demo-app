import { SearchItem } from './../model/searchItem.model';
import { SearchService } from './../service/search.service';
import { FormsModule, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';




@Component({
  selector: 'app-search',
  templateUrl:"./search.component.html",
  styles:[`
    .gray-faded{
    color:#999;
    font-size:0.9rem;
}

.list-group-item:hover{
    cursor:pointer;
    
}
  `]
})
export class SearchComponent implements OnInit {

  loading: boolean = false;
  results: Observable<SearchItem[]>;
  searchField: FormControl;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
        .debounceTime(300)
        .distinctUntilChanged()
        .do( () => this.loading = true)
        .switchMap(term => {
          
          return this.searchService.search(term);
        })
        .do(()=> this.loading = false)
  }

  doSearch(term: string) {
    this.searchService.search(term)
  }
}
