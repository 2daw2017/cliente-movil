import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../constants/constants';

@Injectable()

export class HandshakeService {

  constructor(
    private http: HttpClient) { }

  public handshake(): Promise<boolean> {
    return this.http.request("get",
      urls.path + '/api/Authorization/Handshake',
      {
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json" })
      }
    ).toPromise()
      .then(token => {
        return true;
      })
      .catch(err => {
        return false;
      });
  }
}
