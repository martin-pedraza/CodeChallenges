import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit{
  notes: any = [];
  tagId: any;

  constructor(private route: ActivatedRoute, private tagService: TagService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tagId = params.get('id');
      this.getNotesByTag();
    });
  }

  getNotesByTag(): void {
    this.tagService.getNotesByTag(this.tagId).subscribe(
      data => {
        this.notes = data.notes;
      },
    );
  }

  onNoteChanged(): void {
    this.getNotesByTag();
  }
}
