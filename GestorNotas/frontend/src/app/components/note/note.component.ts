import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit{
  @Input() data!: any;
  @Output() noteChanged: EventEmitter<void> = new EventEmitter<void>();
  modalForm!: FormGroup;
  tags: any = [];

  constructor(private noteService: NoteService){}

  ngOnInit(): void {
    this.modalForm = new FormGroup({
      texto: new FormControl(this.data.texto, [
        Validators.required,
      ]),
    });

    if (this.data.id != 0) {
      this.noteService.getTagsByNote(this.data.id).subscribe(data => {
        this.tags = data.tags;
      });
    }
  }

  onSubmit() :void{
    if (this.modalForm.valid) {
      const data = this.modalForm.value;
      if (this.data.id!='0') {
        this.noteService.putNote(this.data.id, data).subscribe(res => {
          this.noteChanged.emit();
        });
      } else {
        this.noteService.postNote(data).subscribe(res => {
          this.noteChanged.emit();
          this.modalForm.reset();
        });
      }
    }
  }

  toggleArchived(noteId: string) :void{
    this.noteService.toggleArchived(noteId).subscribe(res => {
      this.noteChanged.emit();
    });
  }

  deleteNote(): void{
    this.noteService.deleteNote(this.data.id).subscribe(res => {
      this.noteChanged.emit();
    });
  }

  associateTag(tagId: string): void{
    this.noteService.toggleAssociationTag(this.data.id, tagId).subscribe(res => {
      this.noteChanged.emit();
    });
  }
}
