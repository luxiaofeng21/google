import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  list=[
    {
      text:"附加链接会在广告中显示更多链接，将用户直接引导至您网站上的具体网页。然后，用户可以点击这些链接，直接跳转到他们想要了解的信息或想要购买的产品所在的网页。",
      test:"显示指向您网站上特定网页的链接 ",
      content:"广告内容描述第一行",
      url:"http://www.baidu.com"
    }
  ]
  date=""
  switch=true
  addList=["附加链接","附加宣传","附加结构化摘要信息","附加电话信息","附加潜在客户表单","附加地址信息","附加关联商户地址信息","附加价格信息","附加应用信息","附加促销信息"]
  constructor() { }
  tabs = [
    {
      name: 'SUMMARY',
      icon: 'layout'
    },
    {
      name: 'TABLE',
      icon: 'appstore'
    }
  ];
  ngOnInit(): void {
  }

}
