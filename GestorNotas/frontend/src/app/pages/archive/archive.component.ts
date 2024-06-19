import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent implements OnInit{
  notes: any = [];

  constructor(private noteService: NoteService){}

  ngOnInit(): void {
    this.getArchivedNotes();
  }

  getArchivedNotes(): void {
    this.noteService.getArchivedNotes().subscribe(
      data => {
        this.notes = data.notes;
      },
    );
  }

  onNoteChanged(): void {
    this.getArchivedNotes();
  }
}