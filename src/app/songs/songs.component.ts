import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: any[] = []; // Array to hold the song data

  constructor(private http: HttpClient) { } // Inject HttpClient

  ngOnInit(): void {
    // Fetch song data from the JSON file [cite: 100-103]
    this.http.get('assets/songs.json').subscribe(data => {
      this.songs = data as any[];
    });
  }

}