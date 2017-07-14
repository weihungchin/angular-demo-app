import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { SearchItem } from './../model/searchItem.model';


@Injectable()
export class SearchService implements OnInit{


  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(
    private http: Http,

    ) {
    
      
  }

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=5`;
    return this.http.get(apiURL)
      .map(res => {
        return res.json().results.map(item => {
          console.log(item);
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      });
  }

  ngOnInit(){
    
  }

}
