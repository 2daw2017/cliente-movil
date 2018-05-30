import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Paginas
import { MyApp } from './app.component';
import { SignupPage, MainPage, QrscanPage, MensajeriaPage, TareasPage } from '../pages/export';

// Services
import { AuthService } from '../providers/auth.service';

//Plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

// Mapas
import { AgmCoreModule } from '@agm/core';
// Modulos
import { ComponentsMensajeComponent } from '../components/components-mensaje/components-mensaje';
import { ComponentsTareaComponent } from '../components/components-tarea/components-tarea';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    MainPage,
    QrscanPage,
    MensajeriaPage,
    ComponentsMensajeComponent,
    ComponentsTareaComponent,
    TareasPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxLW7O0ZfmNFbuHl9EwOvcglcjWPUZL28'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    MainPage,
    QrscanPage,
    MensajeriaPage,
    TareasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    LaunchNavigator,
    Geolocation,
    AuthService
  ]
})
export class AppModule { }
