import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import { Show } from './show';
// import { SHOWS } from './mock-shows';
import { Show } from './show';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShowService {

  private heroesUrl = 'http://localhost:3000/api/show/'
  
  // getShows(): Observable<Show[]> {
  //   return of (SHOWS);
  // }
  

  constructor(private http: Http ) { }

      getShows(): Observable<Show[]> {
        return this.http.get('http://localhost:3000/api/showlist')
                .map((response: Response) => <Show[]>response.json())
      }

    addShow(newShow)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/show', newShow,{headers:headers})
          .map(res => res.json());
    }

    // deleteShow(id) {
    //   return this.http.delete('http://localhost:3000/api/show/'+id)
    //     .map(res => res.json());
    // }
// }
    getShow(_id): Observable<Show> {
      // const url = `${this.heroesUrl}/${_id}`;
      return this.http.get('http://localhost:3000/api/show/'+_id)
        .map(res => <Show>res.json())
    }
  }