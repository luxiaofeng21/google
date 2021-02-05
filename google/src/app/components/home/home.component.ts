import { Component, OnInit } from '@angular/core';

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
  ]
  constructor() { }

  ngOnInit(): void {

      window.onresize=()=>{
          this.clientHeight=window.innerHeight-64
      }

  }

}
