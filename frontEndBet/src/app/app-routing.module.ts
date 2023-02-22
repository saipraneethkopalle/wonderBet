import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AactiveMatchComponent } from './aactive-match/aactive-match.component';
import { AddmatchComponent } from './addmatch/addmatch.component';
import { AdminSettingSearchUserComponent } from './admin-setting-search-user/admin-setting-search-user.component';
import { AdminSettingSurveillanceSettingsComponent } from './admin-setting-surveillance-settings/admin-setting-surveillance-settings.component';
import { AdminSettingWebsiteSettingComponent } from './admin-setting-website-setting/admin-setting-website-setting.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { AsetfancyresultComponent } from './asetfancyresult/asetfancyresult.component';
import { AupdateFancyStatusComponent } from './aupdate-fancy-status/aupdate-fancy-status.component';
import { BankingComponent } from './banking/banking.component';
import { BetlistComponent } from './betlist/betlist.component';
import { BetlistliveComponent } from './betlistlive/betlistlive.component';
import { BlockmarketComponent } from './blockmarket/blockmarket.component';
import { CasinoProfitByDateComponent } from './casino-profit-by-date/casino-profit-by-date.component';
import { CasinoProfitlossDateComponent } from './casino-profitloss-date/casino-profitloss-date.component';
import { CasinoProfitlossMonthlyComponent } from './casino-profitloss-monthly/casino-profitloss-monthly.component';
import { DownlineProfitlossComponent } from './downline-profitloss/downline-profitloss.component';
import { DownlineReportProfitlossComponent } from './downline-report-profitloss/downline-report-profitloss.component';
import { HomeComponent } from './home/home.component';
import { InactiveMatchComponent } from './inactive-match/inactive-match.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MarketProfitlossComponent } from './market-profitloss/market-profitloss.component';
import { MatchProfitlossComponent } from './match-profitloss/match-profitloss.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ResultComponent } from './result/result.component';
import { RiskmanagementComponent } from './riskmanagement/riskmanagement.component';
import { SetmarketresultComponent } from './setmarketresult/setmarketresult.component';
import { SportWiseProfitlossComponent } from './sport-wise-profitloss/sport-wise-profitloss.component';
import { SportsettingComponent } from './sportsetting/sportsetting.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"addMatch",component:AddmatchComponent},
  {path:"login",component:LoginPageComponent},
  {path:"account",component:MyaccountComponent},
  {path:"betlist",component:BetlistComponent},
  {path:"betlistLive",component:BetlistliveComponent},
  {path:"riskmanagement",component:RiskmanagementComponent},
  {path:"banking",component:BankingComponent},
  {path:"blockMarket",component:BlockmarketComponent},
  {path:"sportSetting",component:SportsettingComponent},
  {path:"adminSetting",component:AdminsettingsComponent},
  {path:"result",component:ResultComponent},
  {path:"profitdownline",component:DownlineReportProfitlossComponent},
  {path:"profitmarket",component:MarketProfitlossComponent},
  {path:"casinoProfitByDate",component:CasinoProfitByDateComponent},
  {path:"dowlineprofitloss",component:DownlineProfitlossComponent},
  {path:"sportWiseprofitloss",component:SportWiseProfitlossComponent},
  {path:"matchProfitloss",component:MatchProfitlossComponent},
  {path:"casinoProfitByMonth",component:CasinoProfitlossMonthlyComponent},
  {path:"aSetFancyResult",component:AsetfancyresultComponent},
  {path:"aSetMarketResult",component:SetmarketresultComponent},
  {path:"adminSettingSearchUser",component:AdminSettingSearchUserComponent},
  {path:"adminSettingWebsiteSetting",component:AdminSettingWebsiteSettingComponent},
  {path:"adminSettingSurveillanceSettings",component:AdminSettingSurveillanceSettingsComponent},
  {path:"AactiveMatch",component:AactiveMatchComponent},
  {path:"AinactiveMatch",component:InactiveMatchComponent},
  {path:"AupdateFancyStatus",component:AupdateFancyStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
