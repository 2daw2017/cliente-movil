import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { MensajeriaPage, TareasPage } from '../export';
import { Tarea } from '../../models/tarea.model';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from '../../providers/location.service';
import { TasksService } from '../../providers/task.service';
import { CompanyService } from '../../providers/company.service';
import { AccountService } from '../../providers/account.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  mapa: boolean = false;
  nombre = 'Rafa';
  apellido = 'Martínez Espartero';
  horario = '09:00-15:00 16:00-18:00';
  tareas: Tarea[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private locationService: LocationService,
    private geolocation: Geolocation,
    public toastCtrl: ToastController,
    private tasksService: TasksService,
    private companyService: CompanyService,
    private accountService: AccountService,
    private platform: Platform,
    private storage: Storage,
  ) {
    this.mandarUbicacion();
    this.getTasks();
  }
  ngOnInit() {
    this.mandarUbicacion();
  }
  verMensajes() {
    this.navCtrl.push(MensajeriaPage);
  }
  verTareas() {
    this.navCtrl.push(TareasPage);
  }
  private getTasks() {
    this.accountService.getAccount().then(details => {
      this.tasksService.getStatustype().then(types => {
        let cont = true;
        let j = 0;
        while (cont) {
          if (types[j]['name'] === 'Asignada') {
            cont = false;
            this.tasksService.getTasks(details['employee_id'], types[j]['id']).then(async tasks => {
              let continuar = true;
              let i = 0;
              while (continuar) {
                if (tasks[i]) {
                  const company = await this.companyService.getCompany(tasks[i]['creator']['company_id']).then(async company => {
                    return await company;
                  });
                  console.log(company);
                  this.tareas.push(new Tarea(company['name'], company['address'], company['phone'], tasks[i]['name'], tasks[i]['id']));

                } else {
                  continuar = false;
                  this.guardarTareas();
                }
                i++;
              }
            });
          };
          j++;
        }
      })
    })
  }

  private mandarUbicacion() {
    setInterval(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.locationService.addLocation(resp.coords.longitude, resp.coords.latitude)
          .then(coords => {
            this.presentToast(coords);
            console.log(coords);
          }, err => this.presentToast(`error ${JSON.stringify(err)}`));
      }).catch((error) => {
        ;
        this.presentToast(`Error perdida de señal: ${error}`)
      });
    }, 10000);
  }

  guardarTareas() {
    if (this.platform.is('cordova')) {
      this.storage.set('tareas', this.tareas).then(validation => {
      });
    }
    else {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }

  private presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
