import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingtransfers',
  templateUrl: './billingtransfers.component.html',
  styleUrls: ['./billingtransfers.component.scss']
})
export class BillingtransfersComponent implements OnInit {
  public tableData=[
    {
      name1:"Google Ads 980-713-9776",
      name2:"人工付款",
      name3:"枫果果",
      name4:"3786-5384-0544",
      name5:new Date() ,
      name6:"无结束日期"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
