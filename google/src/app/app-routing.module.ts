import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/overview/overview.component';
import { RecommendationsComponent } from './components/home/recommendations/recommendations.component';
import { CampaignsComponent } from './components/home/campaigns/campaigns.component';
import { AuctioninsightsComponent } from './components/home/campaigns/auctioninsights/auctioninsights.component';
import { AdgroupsComponent } from './components/home/adgroups/adgroups.component';
import { AnalyzeComponent } from './components/home/adgroups/analyze/analyze.component';
import { AdextensionsComponent } from './components/home/adextensions/adextensions.component';
import { SummaryComponent } from './components/home/adextensions/summary/summary.component';
import { LandingpagesComponent } from './components/home/landingpages/landingpages.component';
import { ExpandedComponent } from './components/home/landingpages/expanded/expanded.component';
import { KeywordComponent } from './components/home/keyword/keyword.component';
import { NegativeComponent } from './components/home/keyword/negative/negative.component';
import { SearchtermsComponent } from './components/home/keyword/searchterms/searchterms.component';
import { KeyauctioninsightsComponent } from './components/home/keyword/keyauctioninsights/keyauctioninsights.component';
import { AudiencesComponent } from './components/home/audiences/audiences.component';
import { ExclusionsComponent } from './components/home/audiences/exclusions/exclusions.component';
import { DemographicsComponent } from './components/home/demographics/demographics.component';
import { GenderComponent } from './components/home/demographics/gender/gender.component';
import { IncomeComponent } from './components/home/demographics/income/income.component';
import { CombinationsComponent } from './components/home/demographics/combinations/combinations.component';
import { ExclusionComponent } from './components/home/demographics/exclusion/exclusion.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { IndexComponent } from './components/preferences/index/index.component';
import { EmailComponent } from './components/preferences/email/email.component';
import { BillingComponent } from './components/billing/billing.component';
import { DocumentsComponent } from './components/billing/documents/documents.component';
import { TransactionsComponent } from './components/billing/transactions/transactions.component';
import { PaymentmethodsComponent } from './components/billing/paymentmethods/paymentmethods.component';
import { SettingsComponent } from './components/billing/settings/settings.component';
import { BillingtransfersComponent } from './components/billing/billingtransfers/billingtransfers.component';
import { PromotionsComponent } from './components/billing/promotions/promotions.component';
import { SummaryBComponent } from './components/billing/summary-b/summary-b.component';
import { ProductlinksComponent } from './components/productlinks/productlinks.component';
import { AccountaccessComponent } from './components/accountaccess/accountaccess.component';
import { UsersComponent } from './components/accountaccess/users/users.component';
import { ManagersComponent } from './components/accountaccess/managers/managers.component';
import { AccountSettingsComponent } from './components/accountaccess/account-settings/account-settings.component';
import { ExpressComponent } from './components/home/express/express.component';



const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
        {
          path:"express",
          component:ExpressComponent
        },
        {
          path:"overview",
          component:OverviewComponent
        },
        {
          path:"recommend",
          component:RecommendationsComponent
        },
        {
          path:"campaigns",
          component:CampaignsComponent
        },
        {
          path:"auctioninsghts",
          component:AuctioninsightsComponent
        },
        {
          path:"adgroups",
          component:AdgroupsComponent
        },
        {
          path:"analyze",
          component:AnalyzeComponent
        },
        {
          path:"adextensions",
          component:AdextensionsComponent
        },
        {
          path:"summary",
          component:SummaryComponent
        },
        {
          path:"landingpages",
          component:LandingpagesComponent
        },
        {
          path:"landingsexpanded",
          component:ExpandedComponent
        },
        {
          path:"keyword",
          children:[
            {
              path:"index",
              component:KeywordComponent
            },
            {
              path:"keyauctioninsights",
              component:KeyauctioninsightsComponent
            },
            {
              path:"negative",
              component:NegativeComponent
            },
            {
              path:"searchterms",
              component:SearchtermsComponent
            },
          ]
        },
        {
          path:"audiences",
          children:[
            {
              path:"index",
              component:AudiencesComponent
            },
            {
              path:"exclusions",
              component:ExclusionsComponent
            }
          ]
        },
        {
          path:"demographics",
          children:[
            {
              path:"index",
              component:DemographicsComponent 
            },
            {
              path:"gender",
              component:GenderComponent
            },
            {
              path:"income",
              component:IncomeComponent
            },
            {
              path:"combinations",
              component:CombinationsComponent
            },
            {
              path:"exclusion",
              component:ExclusionComponent
            }
          ]
        },
        {
          path:"**",
          redirectTo:"overview"
        }
    ]
  },
  {
    path:"preferences",
    component:PreferencesComponent,
    children:[
        {
          path:"index",
          component:IndexComponent
        },
        {
          path:"email",
          component:EmailComponent
        },
        {
          path:"**",
          redirectTo:"index"
        },
        
    ]
  },
  {
    path:"billing",
    component:BillingComponent,
    children:[
        {
          path:"summary",
          component:SummaryBComponent
        },
        {
          path:"documents",
          component:DocumentsComponent
        },
        {
          path:"transactions",
          component:TransactionsComponent
        },
        {
          path:"paymentmethods",
          component:PaymentmethodsComponent
        },
        {
          path:"settings",
          component:SettingsComponent
        },
        {
          path:"billingtrans",
          component:BillingtransfersComponent
        },
        {
          path:"promotions",
          component:PromotionsComponent
        },
        {
          path:"**",
          redirectTo:"summary"
        },
        
    ]
  },
  {
    path:"productlinks",
    component:ProductlinksComponent
  },
  {
    path:"accountaccess",
    component:AccountaccessComponent,
    children:[
        {
          path:"users",
          component:UsersComponent
        },
        {
          path:"managers",
          component:ManagersComponent
        },
        {
          path:"settings",
          component:AccountSettingsComponent
        },
        {
          path:"**",
          redirectTo:"users"
        },
        
    ]
  },
 
  {
    path:"**",
    redirectTo:"home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
