import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.scss']
})
export class ExpressComponent implements OnInit {
  public types=["旅游部落格","服装部落格","室内设计部落格","电影部落格"]
  public date=""
  public gong=[
    {
      icon:"eye",
      color:"#1A73E8",
      num:0,
      title:"展示次数",
      text:"广告展示的频率"
    },
    {
      icon:"pushpin",
      color:"#2FBED1",
      num:0,
      title:"点击次数",
      text:"对广告的执行操作"
    },
    {
      icon:"phone",
      color:"#8430CE",
      num:0,
      title:"点击通话次数",
      text:"致电您的商家"
    },
    {
      icon:"fund",
      color:"#F6AA1B",
      num:0,
      title:"展示次数",
      text:"广告展示的频率"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  Changedate(e){
    console.log(e)
  }
}
