import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { System } from './system';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SystemService {

  private url = 'systems';

  private host = environment.host;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  all(): Observable<System[]> {
    const url = `${this.host}/${this.url}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get(id: string) : Observable<System> {
    const url = `${this.host}/${this.url}/${id}`;
    return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
  }

  save(data: System, update: boolean = false): Observable<System> {
    if(update) {
      const url = `${this.host}/${this.url}/${data.id}`;
      return this.http
            .put(url, JSON.stringify(data), {headers: this.headers})
                .map(this.extractData)
                .catch(this.handleError);
    }else{
      const url = `${this.host}/${this.url}`;
      return this.http
            .post(url, JSON.stringify(data), {headers: this.headers})
                .map(this.extractData)
                .catch(this.handleError);
    }
  }

  delete(data: System) : Observable<System> {
    const url = `${this.host}/${this.url}/${data.id}`;
      return this.http
            .delete(url, {headers: this.headers})
                .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json().data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

    } else {
      errMsg = error.message ? error.message : error.toString();

    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
