



import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public invito={
    email:"",
    type:1
  }
  public addkey={
      value:"1",
      type:1,
      text:""
  }
  public isshow=false
  public keyInfo={}
  public date=""
  public filter={
      name1:"",
      name2:"",
      name3:"",
      name4:""
  }
  public types=["广泛匹配","词组匹配","完全匹配"]
  //表格
  public listOfColumn = [
    {
      title: '用户',
      compare: (a, b) => a.keyword - b.keyword
    },
    {
      title: '上次登录时间',
      compare: (a, b) => a.name1 - b.name1
    },
    {
      title: '访问权限级别',
      compare: (a, b) => a.name2 - b.name2
    },
    {
      title: '身份验证方法',
      compare: (a, b) => a.name3 - b.name3
    },
    {
      title: '邀请人用户',
      compare: (a, b) => a.name3 - b.name3
    },
    {
      title: '添加日期',
      compare: (a, b) => a.name3 - b.name3
    },
    {
      title: '操作'
    },
  ];
  public listOfData:any = [
    {
      id:1,
      state:true,
      name:"",
      name1:"a543787366@gmail.com - 您本人      ",
      name2:"2021年2月25日",
      name3:"管理员",
      name4:"标准",
      name5:"枫果果",
      name6:"2021年2月1日"
    },
   
  ];
  
  //全屏
  fullscreen = false
  //弹出列
  public options = ["这是关键词1","这是关键词2","这是关键词3"];
  public radioValue="1"
  public isVisible=false
  public isVisible2=false
  public isVisible3=false
  public isVisible4=false
  panels = [
    {
      name: '广告系列',
      children:[
        {
          checked:false,
          title:"广告系列1"
        },
        {
          checked:false,
          title:"广告系列2"
        },
        {
          checked:false,
          title:"广告系列3"
        },
      ]
    },
    {
      name: '广告组',
      children:[
        {
          checked:false,
          title:"广告组1"
        },
        {
          checked:false,
          title:"广告组2"
        },
        {
          checked:false,
          title:"广告组3"
        },
      ]
    },
    {
      name: '关键字列表名称'
    },
    {
      name: '广告系列名称'
    },
    {
      name: '关键字文字'
    },
    {
      name: '层级',
      children:[
        {
          checked:false,
          title:"广告系列"
        },
        {
          checked:false,
          title:"广告组"
        }
      ]
    },
    {
      name: '匹配类型'
    }
  ];

  //筛选
  filters=[]
  info={
    children:[],
    value:"",
    title:"",
    type:"包含"
  }

  public checkOptionsOne:any = [
    { label: '广告拒登和政策提醒', value: '1', checked: true },
    { label: '广告系列维护提醒', value: '2' },
    { label: '广告系列效果改进提示', value: '3' },
    { label: '针对具体行业的简报和产品评估参与机会', value: '4' }
  ];
  





  constructor(private notification:NzNotificationService,private message: NzMessageService) { }

  ngOnInit(): void {

  }

  //点击选中筛选
  getfilter(item){
    console.log(this.isshow)
    this.info.title=item.name
    this.info.children=item.children?item.children:[]
    this.isVisible4=true
    this.isVisible3=false
  }
  //添加筛选
  addfilter():void {
    var info=Object.assign({},this.info)
    if(info.children.length>0){
      if(info.children.filter(x=>x.checked).length<=0){
          return 
      }else{
        info.children=info.children.filter(x=>x.checked).map(x=>x.title)
      }
    }else{
      if(info.value==''){
          return 
      }
    }
    console.log(info)
    this.filters.push(info)
    for(var i in this.info){
          this.info[i]=''
    }
    this.info.children=[]
    this.info.type="包含"
    this.isVisible4=false
  }

  onChange(e){
    console.log(e)
  }

  //添加关键字
  getkey():void {
        var info=Object.assign({},this.addkey);
        var ul={keyword:info.text,name1:info.value,name2:info.type,name3:0}
        this.listOfData.push(ul)
        this.listOfData=[...this.listOfData]
        this.message.create('success', `This is a message of success`);
        this.isVisible=false
        this.addkey.text=""
        this.addkey.value="1"
        this.addkey.type=1
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
  //多选
  log(value: object[]): void {
    console.log(value);
  }

  

}
