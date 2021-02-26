import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public info:any={
      name1:true,
      name2:true,
      name3:true,
      name4:true,
      name5:true,
      name6:"1",
      name7:false,
      name8:"1",
      name9:"1",
  }
  public email:any=1
  public emailList:any=[
    {
        value:1,
        label:"5555@qq.com"
    },
    {
        value:2,
        label:"66666@qq.com"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
