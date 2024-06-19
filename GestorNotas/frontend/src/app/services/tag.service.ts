import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private httpService: HttpService) { }

  getTags() :Observable<any>{
    return this.httpService.getData('tags');
  }

  getNotesByTag(tagId: string) :Observable<any>{
    return this.httpService.getData(`tags/${tagId}/notes`);
  }
  
}
