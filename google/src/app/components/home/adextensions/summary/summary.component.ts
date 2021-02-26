import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  list=[
    {
      label:"附加链接",
      text:"附加链接会在广告中显示更多链接，将用户直接引导至您网站上的具体网页。然后，用户可以点击这些链接，直接跳转到他们想要了解的信息或想要购买的产品所在的网页。",
      test:"显示指向您网站上特定网页的链接 ",
      content:"广告内容描述第一行",
      url:"http://www.baidu.com"
    },
    {
      label:"宣传信息",
      text:"附加宣传信息会在广告中显示附加文字，突出介绍您的商家受欢迎或与众不同的方面。您可以利用此类信息着重宣传促销优惠，例如“免费送货”或“全天候客户支持”。 ",
      test:"显示描述性文字（例如：免费送货）    ",
      content:"广告内容描述第 1 行 宣传信息文字.",
      url:"http://www.baidu.com"
    },
    {
      label:"结构化摘要",
      text:"附加结构化摘要信息能够为您提供更多空间，着重宣传您的产品和服务的特性及种类。您甚至可以指定在哪些日期、星期几或一天中的什么时段展示此信息。       ",
      test:"突出您的产品或服务的具体特点    ",
      content:"广告内容描述第 1 行 标题：第 1 个值、第 2 个值、第 3 个值      ",
      url:"http://www.baidu.com"
    },
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
