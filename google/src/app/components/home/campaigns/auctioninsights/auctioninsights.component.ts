import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
@Component({
  selector: 'app-auctioninsights',
  templateUrl: './auctioninsights.component.html',
  styleUrls: ['./auctioninsights.component.scss']
})
export class AuctioninsightsComponent implements OnInit {
  public filter={
      name1:"",
      name2:"",
      name3:"",
      name4:"1"
  }
  
  date=""
  listOfColumn=[
    {
      title:"显示网址域名",
      compare: (a, b) => a.name1 - b.name1
    },
    {
      title:"展示次数份额",
      compare: (a, b) => a.name2 - b.name2
    },
    {
      title:"重叠率",
      compare: (a, b) => a.name3 - b.name3
    },
    {
      title:"排名被超越率",
      compare: (a, b) => a.name4 - b.name4
    },
    {
      title:"首页展示率",
      compare: (a, b) => a.name5 - b.name5
    },
    {
      title:"绝对首页展示率",
      compare: (a, b) => a.name6 - b.name6
    },
    {
      title:"排名胜出率",
      compare: (a, b) => a.name7 - b.name7
    },
  ]
  listOfData=[]
  fullscreen=false
  //报告
  baogao=[
    {
      title:"基本",
      children:[
        {title:"广告系列"},
        {title:"广告组"},
        {title:"广告"},
        {title:"搜索广告关键字"},
        {title:"搜索广告字词"},
        {title:"最终到达网址"},
        {title:"付费和自然搜索"},
        {title:"广告系列详细信息"},
        {title:"广告组详细信息"},
        {title:"受众群体"},
        {title:"着陆页"},
        {title:"扩展最后的着陆页"},
      ]
    },
    {
      title:"时间",
      children:[
        {title:"周几"},
        {title:"天"},
        {title:"周"},
        {title:"月份"},
        {title:"季度"},
        {title:"年份"},
        {title:"时段"}
      ]
    },
    {
      title:"转化次数",
      children:[
        {title:"转化类别"},
        {title:"转化操作名称"},
        {title:"转化来源"},
        {title:"实体店光顾次数"}
      ]
    },
    {
      title:"标签",
      children:[
        {title:"标签-广告系列"},
        {title:"标签-广告组"},
        {title:"标签-广告"},
        {title:"标签-关键字"}
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onChange(item){
    console.log("🚀 ~ file: auctioninsights.component.ts ~ line 52 ~ AuctioninsightsComponent ~ onChange ~ item", item)
  }

   //展开全屏
   getdown(){
    let fullarea = document.getElementById('fulldiv')
    const sf = <Screenfull>screenfull;
    if (sf.isEnabled) {
      this.fullscreen=!this.fullscreen
      sf.toggle(fullarea);
    }
  
  }
}
