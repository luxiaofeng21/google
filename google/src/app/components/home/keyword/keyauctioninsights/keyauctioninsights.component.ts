
import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
// import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-keyauctioninsights',
  templateUrl: './keyauctioninsights.component.html',
  styleUrls: ['./keyauctioninsights.component.scss']
})
export class KeyauctioninsightsComponent implements OnInit {

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
  public listOfColumn = [];
  public listOfData = [
    {
      id:1,
      state:true,
      name1:"ww.baidu.com",
      name2: '0.00',
      name3: "0.00%",
      name4: "0.00%",
      name5: "0.00%",
      name6: "0.00%",
      name7: "0.00%",
    },
  ];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  //全屏
  fullscreen = false
  //细分
  detail=[
    {
      title:"无"
    },
    {
      title:"时间",
      children:[
        {title:"一天中的时段"},
        {title:"天"},
        {title:"周"},
        {title:"月份"},
        {title:"季度"},
        {title:"年份"},
        {title:"周几"},
      ]
    },
    {title:"设备"},
  ]
  //搜索输入框
  optionGroups: any[] = [
      {
        icon:"fund",
        title:"Website traffic-Search-1"
      },
      {
        icon:"alert",
        title:"测试推广"
      },
  ];
  //弹出列
  public isVisible=false
  public train=''
  options = [];
  panels = [
    {
      title:"显示网址域名",
      checked:true,
      disabled:true
    },
    {
      title:"展示次数份额",
      checked:true
    },
    {
      title:"重叠率",
      checked:true
    },
    {
      title:"排名被超越率",
      checked:true
    },
    {
      title:"页首展示率",
      checked:true
    },
    {
      title:"搜索网络绝对页首展示率",
      checked:true
    },
    {
      title:"排名胜出率",
      checked:true
    },
  ];

  //筛选
  filters=[]
  info={
    value:"",
    title:"",
    type:">"
  }
  isVisible2=false
  isVisible3=false
  isVisible4=false
  constructor() { }

  ngOnInit(): void {
    this.options=this.panels.map(x=>x.title)
    this.listOfColumn=this.panels.filter(x=>x.checked)
  }

  //点击选中筛选
  getfilter(item){
    this.info.title=item.title
    this.isVisible4=true
    this.isVisible3=false
  }
  //添加筛选
  addfilter():void {
    if(this.info.value==''){
      // this.message.error ( '值不能为空');
        return 
    }
    this.filters.push(Object.assign({},this.info))
    for(var i in this.info){
          this.info[i]=''
    }
    this.info.type=">"
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

  //多选变化
  getchecked(state){
      setTimeout(res=>{
        var info=this.panels.filter(x=>x.checked)
        this.listOfColumn=info
      },100)
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
