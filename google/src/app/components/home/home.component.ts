import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clientHeight:number=window.innerHeight-64
  public aside:any[]=[
    {
      icon:"share-alt",
      title:"测试推广"
    }
  ]
  public menu:any[]=[
    {
      title:"概览",
      path:"/home/overview"
    },
    {
      title:"建议",
      path:"/home/recommend"
    },
    {
      title:"广告系列",
      children:[
        {
          title:"广告系列",
          path:"/home/campaigns"
        },
        {
          title:"竞价分析",
          path:"/home/auctioninsghts"
        },
      ]
    },
    {
      title:"广告组",
      children:[
        {
          title:"广告组",
          path:"/home/adgroups"
        },
        {
          title:"竞价分析",
          path:"/home/analyze"
        },
      ]
    },
    {
      title:"广告与附加信息",
      children:[
        {
          title:"广告",
          path:"/home/adextensions"
        },
        {
          title:"附加信息",
          path:"/home/summary"
        },
      ]
    },
    {
      title:"着陆页",
      children:[
        {
          title:"着陆页",
          path:"/home/landingpages"
        },
        {
          title:"扩展后的着陆页",
          path:"/home/landingsexpanded"
        },
      ]
    },
    {
      title:"关键字",
      children:[
        {
          title:"搜索广告关键字",
          path:"/home/keyword/index"
        },
        {
          title:"否定广告关键字",
          path:"/home/keyword/negative"
        },
        {
          title:"搜索字词",
          path:"/home/keyword/searchterms"
        },
        {
          title:"竞价分析",
          path:"/home/keyword/keyauctioninsights"
        }
      ]
    },
    {
      title:"受众群体",
      children:[
        {
          title:"受众群体",
          path:"/home/audiences/index"
        },
        {
          title:"排除对象",
          path:"/home/audiences/exclusions"
        }
      ]
    },
    {
      title:"受众特征",
      children:[
        {
          title:"年龄",
          path:"/home/demographics/index"
        },
        {
          title:"性别",
          path:"/home/demographics/gender"
        },
        {
          title:"家庭收入",
          path:"/home/demographics/income"
        },
        {
          title:"组合",
          path:"/home/demographics/combinations"
        },
        {
          title:"排除对象",
          path:"/home/demographics/exclusion"
        },
      ]
    },
  ]
  public show=true
  public url:String=""
  constructor(private activatedRoute:ActivatedRoute,public changeDetectorRef:ChangeDetectorRef,private translate: TranslateService) {
        var lang=localStorage.getItem("lang")
        this.translate.use(lang);
   }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot;
    const url= Object.values(data)[11].url;
   
    for(var x of this.menu){
      if(x.children){
          for(var l of x.children){
            if(url==l.path){
                x.open=true
            }
          }
      }
    }
    //监听页面大小变化
    window.onresize=()=>{
        this.clientHeight=window.innerHeight-64
    }

  }
  ngDoCheck():void{
    const data = this.activatedRoute.snapshot;
    const url= Object.values(data)[11].url;
    var reg=/home\/express/
    if(reg.test(url)){
        this.show=false
    }else{
        this.show=true
    }
  }

}
