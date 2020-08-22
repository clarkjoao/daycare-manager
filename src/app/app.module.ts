import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Environment
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Providers
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      environment.firebaseConfig.projectId
    ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    SharedModule,
    BrowserAnimationsModule,
    DashboardModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
