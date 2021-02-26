

import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-negative',
  templateUrl: './negative.component.html',
  styleUrls: ['./negative.component.scss']
})
export class NegativeComponent implements OnInit {
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
      title: '关键字',
      compare: (a, b) => a.keyword - b.keyword
    },
    {
      title: '已添加到',
      compare: (a, b) => a.name1 - b.name1
    },
    {
      title: '层级',
      compare: (a, b) => a.name2 - b.name2
    },
    {
      title: '匹配类型',
      compare: (a, b) => a.name3 - b.name3
    }
  ];
  public listOfData:any = [
    {
      id:1,
      state:true,
      keyword:"百度www",
      name:"系列1",
      name1:"广告组1",
      name2:"广告组",
      name3:0
    },
    {
      id:2,
      state:true,
      keyword:"百度www",
      name1:"广告系列1",
      name2:"广告系列",
      name3:0
    },
  ];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
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

  //表格
  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  
  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
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

  

}
