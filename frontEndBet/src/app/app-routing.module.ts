import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmatchComponent } from './addmatch/addmatch.component';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { BankingComponent } from './banking/banking.component';
import { BetlistComponent } from './betlist/betlist.component';
import { BetlistliveComponent } from './betlistlive/betlistlive.component';
import { BlockmarketComponent } from './blockmarket/blockmarket.component';
import { CasinoProfitlossDateComponent } from './casino-profitloss-date/casino-profitloss-date.component';
import { CasinoProfitlossMonthlyComponent } from './casino-profitloss-monthly/casino-profitloss-monthly.component';
import { DownlineProfitlossComponent } from './downline-profitloss/downline-profitloss.component';
import { DownlineReportProfitlossComponent } from './downline-report-profitloss/downline-report-profitloss.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MarketProfitlossComponent } from './market-profitloss/market-profitloss.component';
import { MatchProfitlossComponent } from './match-profitloss/match-profitloss.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ResultComponent } from './result/result.component';
import { RiskmanagementComponent } from './riskmanagement/riskmanagement.component';
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
  {path:"casinoProfitByDate",component:CasinoProfitlossDateComponent},
  {path:"dowlineprofitloss",component:DownlineProfitlossComponent},
  {path:"sportWiseprofitloss",component:SportWiseProfitlossComponent},
  {path:"matchProfitloss",component:MatchProfitlossComponent},
  {path:"casinoProfitByMonth",component:CasinoProfitlossMonthlyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
