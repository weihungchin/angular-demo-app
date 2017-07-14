import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-song',
  template: `
   <div class="list-group">
            

  <div class="list-group-item"  *ngFor="let item of songList">
  <div class="w-100"  >
    <h5 class="song-title pull-left" style = "cursor:pointer" (click) = "selectSong(item)">{{item.title}}</h5>
    <div class="song-more pull-right" (click) = "toggle()"></div>
  </div>

  <div  class="w-100 clearfix" [ngClass] = "{'hide':!showSongInfo, 'show':showSongInfo}">
    <div class="song-artist pull-left">{{item.artist}}</div>
  </div>
</div>
  
  
  </div>

  `,
  styles: [
    `
.song-title{
    color:#333;
    padding:0 1.25rem;
}
.song-artist{
    color:#777;
    padding:0 1.25rem;
}



.song-info{
    padding:1.25rem 1.25rem 1.25rem 1.25rem;
    color:#777;
}

.hide{
    display:none;
   
}

.show{
    display:block;

}


.list-group-item{
  border-radius:0;
}
  `,
    ".song-more:before {content: \"\\f141\";font-family: FontAwesome;color:black;cursor:pointer;padding:10px;}"

  ]
})
export class SongComponent implements OnInit {

  titleText: string;


  showSongInfo: boolean = false;

  @Input('title')
  set songTitle(input: string) {
    this.titleText = input;
  }

  @Input('artist')
  songArtist: string;

  @Input()
  song: any;

  @Input()
  songList:any[];

  @Output()
  selectedSong: EventEmitter<any> = new EventEmitter<any>();





  constructor() { }

  ngOnInit() {
    console.log(this.songList);
  }

  toggle() {
    this.showSongInfo = !this.showSongInfo;
  }

  selectSong(song) {
    this.selectedSong.emit(song);
    console.log(song);
  }

}
