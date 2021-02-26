import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  public clientHeight:number=window.innerHeight-64
 
  public menu:any[]=[
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
      title:"付款方式",
      path:"/billing/paymentmethods"
    },
    {
      title:"设置",
      path:"/billing/settings"
    },
    {
      title:"结算转移",
      path:"/billing/billingtrans"
    },
    {
      title:"促销活动",
      path:"/billing/promotions"
    },
  ]
  public title=""
  constructor(private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot;
    const url= Object.values(data)[11].url
    for(var x of this.menu){
      if(x.children){
          for(var l of x.children){
            if(url==l.path){
                x.open=true
            }
          }
      }else{
        if(url==x.path){
            this.title=x.title
        }
      }
    }
    //监听页面大小变化
    window.onresize=()=>{
        this.clientHeight=window.innerHeight-64
    }
  }
  geturl(title){
      console.log("🚀 ~ file: billing.component.ts ~ line 68 ~ BillingComponent ~ geturl ~ title", title)
      this.title=title
  }
}
