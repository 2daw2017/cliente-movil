import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()

export class LocationService {
  private loggedIn = false;
  private subject = new Subject<string>();

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private storage: Storage
  ) { }

  async addLocation(lng: number, lat: number): Promise<string | null> {
    let url_ = 'http://productivity-fabric.azurewebsites.net' + "/api/Locations?";
    let token = '';
    let coords = {lat: lat, lng: lng};
    if (this.platform.is('cordova')) {
      token = await this.storage.get('token').then((value) => {
        return value;
      });
    } else {
      token = localStorage.getItem('token');
    }
    return this.http.post(
      url_, JSON.stringify(location),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token }),
        responseType: 'text'
      }
    ).toPromise()
      .then(token => {
        console.log(token)
        return token;
      })
      .catch(err => {
        console.log(err)
        return err;
      });
  }
}
