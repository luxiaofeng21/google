import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public langList=[{
    label:"中文",
    value:1,
  },{
    label:"英文",
    value:2,
  }]
  public show=false
  public identitys=[
    {
      label:"未登记个人",
      value:1
    },
    {
      label:"已登记个人",
      value:2
    },
  ]
  public user={
    name:"Google Ads 980-713-9776",
    name2:1,
    code:"132465",
    country:"台湾",
    city:"台北市",
    region:"中正区",
    address:"南华二街1号",
    username:"枫果果",
    lang:1
  }
  constructor() { }

  ngOnInit(): void {
  }

  getshow(){
      this.show=!this.show
  }

}
