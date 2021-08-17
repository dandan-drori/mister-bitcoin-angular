import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactPageComponent,
    HeaderComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    ContactEditComponent,
    StatisticsComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
