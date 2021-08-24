import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

import {Routes, RouterModule, Router} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { StockComponent } from './stock/stock.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './landing-page/search-bar/search-bar.component';
import { MarketIndexComponent } from './landing-page/market-index/market-index.component';
import { TopGainersLosersComponent } from './landing-page/top-gainers-losers/top-gainers-losers.component';
import { StatusOverviewComponent } from './landing-page/status-overview/status-overview.component';

import {HttpClientModule} from "@angular/common/http";
import * as PlotlyJS from "plotly.js-dist-min";
import { PlotlyModule } from 'angular-plotly.js';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { UserHoldingsComponent } from './profile/user-holdings/user-holdings.component';
import { TradingHistoryComponent } from './profile/trading-history/trading-history.component';
import { TradeStatusComponent } from './profile/trade-status/trade-status.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

PlotlyModule.plotlyjs = PlotlyJS;

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "color-scheme", component: ColorSchemeComponent},
  {path: "profile", component: ProfileComponent},
  {path: "stock/:symbol", component: StockComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ColorSchemeComponent,
    LandingPageComponent,
    ProfileComponent,
    StockComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    MarketIndexComponent,
    TopGainersLosersComponent,
    StatusOverviewComponent,
    CandlestickChartComponent,
    UserHoldingsComponent,
    TradingHistoryComponent,
    TradeStatusComponent,
    UserInfoComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSliderModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,

    RouterModule.forRoot(routes),
    HttpClientModule,
    PlotlyModule,
    NgbModule,
  ],

  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
