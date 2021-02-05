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
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
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
          path:"**",
          redirectTo:"overview"
        }
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
