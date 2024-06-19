import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  notes: any = [];
  newNote: any = {id:'0', texto:''}

  constructor(private noteService: NoteService){}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(
      data => {
        this.notes = data.notes;
      },
    );
  }

  onNoteChanged(): void {
    this.getNotes();
  }
}
