import { AppService } from './services/app.service';
import { AfterViewInit, Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appService: AppService
  ) {
    this.initializeApp();
  }

  ngAfterViewInit() {
    const isMobile = !!(this.platform.width() < 1024);
    this.appService.setAppVersion(isMobile);
    this.onResize();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onResize() {
    this.platform.resize.subscribe(() => {
      this.appService.setAppVersion(!!(this.platform.width() < 1024));
    });
  }
}
