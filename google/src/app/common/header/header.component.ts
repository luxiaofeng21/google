import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public popver=[
    {
      title:"访问权限和安全",
      path:"accountaccess"
    },
    {
      title:"已关联的账号",
      path:"/productlinks"
    },
    {
      title:"偏好设置",
      path:"preferences"
    },
  ]
  public popver2=[
    {
      title:"摘要",
      path:"/billing/summary"
    },
    {
      title:"凭证",
      path:"/billing/documents"
    },
    {
      title:"交易",
      path:"/billing/transactions"
    },
    {
      title:"设置",
      path:"/billing/settings"
    },
    {
      title:"促销",
      path:"/billing/promotions"
    }
  ]
  constructor( private translate: TranslateService,private router:Router) {
    var lang=localStorage.getItem("lang")
    this.translate.use(lang);
   }

  ngOnInit(): void {
  }

  gethome(){
    this.router.navigate(["/home"])
  }
}
