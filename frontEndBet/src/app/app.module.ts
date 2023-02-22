import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddmatchComponent } from './addmatch/addmatch.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { BetlistComponent } from './betlist/betlist.component';
import { BetlistliveComponent } from './betlistlive/betlistlive.component';
import { RiskmanagementComponent } from './riskmanagement/riskmanagement.component';
import { BankingComponent } from './banking/banking.component';
import { BlockmarketComponent } from './blockmarket/blockmarket.component';
import { SportsettingComponent } from './sportsetting/sportsetting.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { ResultComponent } from './result/result.component';
import { DownlineProfitlossComponent } from './downline-profitloss/downline-profitloss.component';
import { MarketProfitlossComponent } from './market-profitloss/market-profitloss.component';
import { CasinoProfitlossDateComponent } from './casino-profitloss-date/casino-profitloss-date.component';
import { DownlineReportProfitlossComponent } from './downline-report-profitloss/downline-report-profitloss.component';
import { SportWiseProfitlossComponent } from './sport-wise-profitloss/sport-wise-profitloss.component';
import { MatchProfitlossComponent } from './match-profitloss/match-profitloss.component';
import { CasinoProfitlossMonthlyComponent } from './casino-profitloss-monthly/casino-profitloss-monthly.component';
import { AsetfancyresultComponent } from './asetfancyresult/asetfancyresult.component';
import { SetmarketresultComponent } from './setmarketresult/setmarketresult.component';
import { AdminSettingSearchUserComponent } from './admin-setting-search-user/admin-setting-search-user.component';
import { AdminSettingWebsiteSettingComponent } from './admin-setting-website-setting/admin-setting-website-setting.component';
import { AdminSettingSurveillanceSettingsComponent } from './admin-setting-surveillance-settings/admin-setting-surveillance-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CasinoProfitByDateComponent } from './casino-profit-by-date/casino-profit-by-date.component';
import { AactiveMatchComponent } from './aactive-match/aactive-match.component';
import { InactiveMatchComponent } from './inactive-match/inactive-match.component';
import { AupdateFancyStatusComponent } from './aupdate-fancy-status/aupdate-fancy-status.component';
import { UsermessageComponent } from './usermessage/usermessage.component';
import { HypermessageComponent } from './hypermessage/hypermessage.component';
import { ImportantmessageComponent } from './importantmessage/importantmessage.component';
import { RejectedBetsComponent } from './rejected-bets/rejected-bets.component';
import { SuspendedResultsComponent } from './suspended-results/suspended-results.component';
import { SuspendedfancyResultComponent } from './suspendedfancy-result/suspendedfancy-result.component';
import { SuspendedmarketResultComponent } from './suspendedmarket-result/suspendedmarket-result.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddmatchComponent,
    HomeComponent,
    LoginPageComponent,
    MyaccountComponent,
    BetlistComponent,
    BetlistliveComponent,
    RiskmanagementComponent,
    BankingComponent,
    BlockmarketComponent,
    SportsettingComponent,
    AdminsettingsComponent,
    ResultComponent,
    DownlineProfitlossComponent,
    MarketProfitlossComponent,
    CasinoProfitlossDateComponent,
    DownlineReportProfitlossComponent,
    SportWiseProfitlossComponent,
    MatchProfitlossComponent,
    CasinoProfitlossMonthlyComponent,
    AsetfancyresultComponent,
    SetmarketresultComponent,
    AdminSettingSearchUserComponent,
    AdminSettingWebsiteSettingComponent,
    AdminSettingSurveillanceSettingsComponent,
    CasinoProfitByDateComponent,
    AactiveMatchComponent,
    InactiveMatchComponent,
    AupdateFancyStatusComponent,
    UsermessageComponent,
    HypermessageComponent,
    ImportantmessageComponent,
    RejectedBetsComponent,
    SuspendedResultsComponent,
    SuspendedfancyResultComponent,
    SuspendedmarketResultComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
