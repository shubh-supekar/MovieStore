
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

/*
const httpOptions = {
  headers : new HttpHeaders({'content-type' : 'application/json'})
};
*/
// tslint:disable-next-line: quotemark
//const apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=3369c538bcc82089263d9489e3c851e4";

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})



export class PostService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'ba838cb5';


  constructor(private http: HttpClient) { }


  searchData(title: string, type: SearchType): Observable<any>{

    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => {
        console.log('RAW:', results);
        // tslint:disable-next-line: no-string-literal
        return results['Search'];
      })
    );

  }

  getDetails(id){

    return this.http.get(`${this.url}?i=${id}&plot=full$&apikey=${this.apiKey}`);

  }


/*
  private handleError(error: HttpErrorResponse) {
    // tslint:disable-next-line: whitespace
    if(error.error instanceof ErrorEvent) {
      console.log('Error happener' , error.error.message);
    } else {
      // tslint:disable-next-line: quotemark
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // tslint:disable-next-line: quotemark
    return throwError("Something bad happened");
  }

  private extractData(res: Response){
    // tslint:disable-next-line: prefer-const
    let body = res;
    return body || {};
  }

  getDataUser(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
// tslint:disable-next-line: eofline
*/


}