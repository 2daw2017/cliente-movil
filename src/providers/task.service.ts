import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../constants/constants';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TasksService {
  private loggedIn = false;
  private subject = new Subject<string>();

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private storage: Storage) { }

  async getTasks(employeeId: string, statudId: string) {
    let token = '';
    if (this.platform.is('cordova')) {
      token = await this.storage.get('token').then((value) => {
        return value;
      });
    } else {
      token = localStorage.getItem('token');
    }
    return this.http.request("get",
      urls.path + `/api/Employees/${employeeId}/tasks?statusId=${statudId}`,
      {
        observe: "response",
        responseType: "json",
        headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json", 'Authorization': 'bearer ' + token })
      }
    ).toPromise()
      .then(tasks => {
        return tasks.body;
      })
      .catch(err => {
        return '';
      });
  }
  async getStatustype() {
    let token = '';
    if (this.platform.is('cordova')) {
      token = await this.storage.get('token').then((value) => {
        return value;
      });
    } else {
      token = localStorage.getItem('token');
    }
    return this.http.request("get",
      urls.path + `/api/TaskStatus`,
      {
        observe: "response",
        responseType: "json",
        headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json", 'Authorization': 'bearer ' + token })
      }
    ).toPromise()
      .then(response => {
        return response.body;
      })
      .catch(err => {
        return '';
      });
  }
  async setTaskStatus(taskId: string, statusId: string) {
    let token = '';
    if (this.platform.is('cordova')) {
      token = await this.storage.get('token').then((value) => {
        return value;
      });
    } else {
      token = localStorage.getItem('token');
    }
    return this.http.request("put",
      urls.path + `/api/Task/${taskId}/status`,
      {
        body: JSON.stringify(statusId),
        observe: "response",
        responseType: "json",
        headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json", 'Authorization': 'bearer ' + token })
      }
    ).toPromise()
      .then(tasks => {
        return tasks.body;
      })
      .catch(err => {
        return '';
      });
  }
}
