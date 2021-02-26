import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //动画
//UI组件
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzRadioModule } from 'ng-zorro-antd/radio';
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
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
//引入全部的图标，不推荐 
import * as AllIcons from '@ant-design/icons-angular/icons';
//echarts
import {NgxEchartsModule} from 'ngx-echarts'
// 国际化引入模块开始
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');  //国际化文件地址
}
//设置多语言
if(!localStorage.getItem("lang")){
   localStorage.setItem("lang","zh_cn")
}

//页面组件
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
import { EditComponent } from './common/edit/edit.component';
import { ExpressComponent } from './components/home/express/express.component';
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
    SummaryComponent,
    LandingpagesComponent,
    ExpandedComponent,
    KeywordComponent,
    NegativeComponent,
    SearchtermsComponent,
    KeyauctioninsightsComponent,
    AudiencesComponent,
    ExclusionsComponent,
    DemographicsComponent,
    GenderComponent,
    IncomeComponent,
    CombinationsComponent,
    ExclusionComponent,
    PreferencesComponent,
    IndexComponent,
    EmailComponent,
    BillingComponent,
    DocumentsComponent,
    TransactionsComponent,
    PaymentmethodsComponent,
    SettingsComponent,
    BillingtransfersComponent,
    PromotionsComponent,
    SummaryBComponent,
    ProductlinksComponent,
    AccountaccessComponent,
    UsersComponent,
    ManagersComponent,
    AccountSettingsComponent,
    EditComponent,
    ExpressComponent,
    
  
  ],
  imports: [
    HttpClientModule,  //国际化
    TranslateModule.forRoot({ //国际化
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    }),
    NzCascaderModule,
    NzDescriptionsModule,
    NzFormModule,
    NzToolTipModule,
    NzTreeModule,
    NzMessageModule,
    NzNotificationModule,
    NzRadioModule,
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
