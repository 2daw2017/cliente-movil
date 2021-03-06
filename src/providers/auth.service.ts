import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../constants/constants';

@Injectable()

export class AuthService {
  private loggedIn = false;
  private subject = new Subject<string>();

  constructor(
    private http: HttpClient) { }

  public login(credentials): Promise<string> {
    return this.http.post(
      urls.path + '/api/Authorization/LoginWithIdentityDocument',
      JSON.stringify(credentials),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }
    ).toPromise()
      .then(token => {
        return token;
      })
      .catch(err => {
        return err;
      });
  }
}
