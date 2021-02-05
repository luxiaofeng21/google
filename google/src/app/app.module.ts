import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //动画
//UI组件
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
//引入全部的图标，不推荐 
import * as AllIcons from '@ant-design/icons-angular/icons';
//echarts
import {NgxEchartsModule} from 'ngx-echarts'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './common/header/header.component';
import { OverviewComponent } from './components/home/overview/overview.component';
import { RecommendationsComponent } from './components/home/recommendations/recommendations.component';
import { CampaignsComponent } from './components/home/campaigns/campaigns.component';
import { AuctioninsightsComponent } from './components/home/campaigns/auctioninsights/auctioninsights.component';
import { AdgroupsComponent } from './components/home/adgroups/adgroups.component';
import { AnalyzeComponent } from './components/home/adgroups/analyze/analyze.component';
import { AdextensionsComponent } from './components/home/adextensions/adextensions.component';
import { SummaryComponent } from './components/home/adextensions/summary/summary.component';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    HeaderComponent,
    OverviewComponent,
    RecommendationsComponent,
    CampaignsComponent,
    AuctioninsightsComponent,
    AdgroupsComponent,
    AnalyzeComponent,
    AdextensionsComponent,
    SummaryComponent
  
  ],
  imports: [
    NzCardModule,
    NzSwitchModule,
    NzTabsModule,
    NzInputNumberModule,
    NzPopoverModule,
    FormsModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzModalModule,
    NzAutocompleteModule,
    NzBreadCrumbModule,
    NzBadgeModule,
    NzTableModule,
    NzDropDownModule,
    NgxEchartsModule,
    NzTreeSelectModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
