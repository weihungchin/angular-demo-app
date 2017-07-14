import { EmitterService } from './../service/emitter.service';
import { SongList } from './../../assets/data/songlist.data.';
import { NavigationService } from './../service/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';


class Song {
  constructor(
    public title: string = '',
    public artist: string = ''
  ) {

  }
}

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styles: [
    `

#floating-button{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #db4437;
  position: fixed;
  top: 180px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 5px #666;
}

#floating-button:hover{
 
  background:#ef1515;
  box-shadow: 0px 2px 5px #db4437;
  
}

.plus{
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 300;
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating{
  position: fixed;
  width: 70px;
  height: 70px;
  top: 180px;
  right: 30px;
  z-index: 50px;
}

#container-floating:hover{
  height: 100px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus{
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
  
}

.edit{
  font-size:25px;
  color:white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 18px;
  display: block;
  right: 0;
  padding: 0;
  opacity: 0;
  margin: auto;
  line-height: 55px;
  transform: rotateZ(-70deg);
  transition: all 0.3s;
  animation: edit-out 0.3s;
}

#container-floating:hover .edit{
  animation: edit-in 0.2s;
   animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

@keyframes edit-in{
    from {opacity: 0; transform: rotateZ(-70deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
}

@keyframes edit-out{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(-70deg);}
}

@keyframes plus-in{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(180deg);}
}

@keyframes plus-out{
    from {opacity: 0; transform: rotateZ(180deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
}`
  ]
})
export class PlaylistComponent {

  songListString:string;

  listOfSong: any[] = SongList;
  isFormShow: boolean = false;

  newSong:Song = new Song();
 

  constructor(
    
  ) { }

  ngOnInit() {
   
    this.songListString = localStorage.getItem('songList');
    this.listOfSong = JSON.parse(this.songListString);

  }

  

  addSong(form) {
    console.log(`form valid ? ${form.valid}`);
    if(form.valid){
        this.listOfSong.unshift(form.value);
        localStorage.setItem('songList', JSON.stringify(this.listOfSong));
        
        
    }
    
  }

  selectedSongTitle:string = '-';

  songSelected(song){
    this.selectedSongTitle = song.title;
   
  }

}

