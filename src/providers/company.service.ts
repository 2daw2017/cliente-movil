import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../constants/constants';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CompanyService {
  private loggedIn = false;
  private subject = new Subject<string>();

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private storage: Storage) { }

 async getCompany(companyId: string) {
  let token = '';
    if (this.platform.is('cordova')) {
      token = await this.storage.get('token').then((value) => {
        return value;
      });
    } else {
      token = localStorage.getItem('token');
    }
    return this.http.request("get",
      urls.path + `/api/Companies/${companyId}`,
      {
        observe: "response",
        responseType: "json",
        headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json", 'Authorization': 'bearer ' + token  })
      }
    ).toPromise()
      .then(company => {
       return company.body;
      })
      .catch(err => {
        return false;
      });
  }
}
