import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public user={
    copy:false,
    name:"",
    email:"",
    country:"",
    tell:"",
    address:""
  }
  public info={
      lang:"zh_cn",
      account:""
  }
  public langList=[
    {
      label:"中文",
      value:"zh_cn"
    },
    {
      label:"英文",
      value:"en"
    }
  ]
  public country=[
    {
      label:"中国",
      value:"zh_cn"
    },
    {
      label:"美国",
      value:"en"
    },
  ]

  constructor() { }

  ngOnInit(): void {
      this.info.lang=localStorage.getItem("lang")
      console.log(this.info.lang)
  }
  getlang(value){
      localStorage.setItem('lang',value)
      window.location.reload()
  }
}
