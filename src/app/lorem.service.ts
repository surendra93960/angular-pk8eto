import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from '@angular/rxjs';
import { Post } from './post';

@Injectable()
export class LoremService {

  constructor(private _http : HttpClient) { 
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          };
      const apiUrl = 'http://localhost:3000/api/v1/products';
  }

 
  getPosts() : Observable<HttpResponse<Post[]>>
  {
    return this._http.get<Post[]>('https://picsum.photos/v2/list');
  }

}