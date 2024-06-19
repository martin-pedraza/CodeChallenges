import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService: HttpService) { }

  getNotes() :Observable<any>{
    return this.httpService.getData('notes');
  }

  getTagsByNote(noteId: string) :Observable<any>{
    return this.httpService.getData(`notes/${noteId}/tags`);
  }

  toggleArchived(noteId: string) :Observable<any>{
    return this.httpService.putData(`notes/${noteId}/toggle-archived`, {});
  }

  getArchivedNotes() :Observable<any>{
    return this.httpService.getData('notes/archived');
  }

  putNote(noteId: string, data: any) :Observable<any>{
    return this.httpService.putData(`notes/${noteId}`, data);
  }

  deleteNote(noteId: string) :Observable<any>{
    return this.httpService.deleteData(`notes/${noteId}`);
  }

  postNote(data: any) :Observable<any>{
    return this.httpService.postData(`notes`, data);
  }

  toggleAssociationTag(noteId: string, tagId: string) :Observable<any>{
    return this.httpService.putData(`notes/${noteId}/tags/${tagId}/toggle-association`, {});
  }
}
