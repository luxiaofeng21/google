
import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
// import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss']
})
export class ExclusionsComponent implements OnInit {
  defaultCheckedKeys = [];
  defaultExpandedKeys = [];

  nodes = [
    {
      title: '他们是谁',
      key: '0-0',
      expanded: true,
      disabled:true,
      children: [
        {
          title: '育儿状况',
          key: '0-0-0',
          disabled:true,
          children: [
            {
              title: '育有未成年子女', key: '0-0-0-0',
              disabled:true,
              children:[
                  {
                    title: '育有0-1岁婴儿', key: '0-0-0-0-0', isLeaf: true,
                  },
                  {
                    title: '育有1-3岁幼儿', key: '0-0-0-0-1', isLeaf: true,
                  },
                  {
                    title: '育有4-5岁学龄前儿童', key: '0-0-0-0-2', isLeaf: true,
                  },
                  {
                    title: '育有6-12岁小学生', key: '0-0-0-0-3', isLeaf: true,
                  },
                  {
                    title: '育有13-17岁青少年', key: '0-0-0-0-4', isLeaf: true,
                  },
              ]
            },
          ]
        },
        {
          title: '婚姻状况',
          key: '0-0-1',
          disabled:true,
          children: [
            { title: '单身', key: '0-0-1-0', isLeaf: true },
            { title: '有交往对象', key: '0-0-1-1', isLeaf: true },
            { title: '已婚', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '教育',
          key: '0-0-2',
          disabled:true,
          children: [
            { title: '在校大学生', key: '0-0-2-0', isLeaf: true },
            { title: '最高教育程度', key: '0-0-2-1', 
              disabled:true,
              children: [
                { title: '高中毕业', key: '0-0-2-1-0', isLeaf: true },
                { title: '学士学位', key: '0-0-2-1-0', isLeaf: true },
                { title: '高等学位', key: '0-0-2-1-0', isLeaf: true },
              ]
            }
          ]
        }
      ]
    },
    {
      title: '他们有哪些兴趣和习惯',
      key: '0-1',
      disabled:true,
      children: [
        { title: '兴趣相似的受众群体', key: '0-1-0-0',
          disabled:true,
          children: [
            { title: '谋体与娱乐', key: '0-1-0-0-0', 
              children:[
                  {title: '不怎么看电视的人', key: '0-1-0-0-0-1', isLeaf:true},
                  {title: '书迷', key: '0-1-0-0-0-2', isLeaf:true},
                  {title: '动漫迷', key: '0-1-0-0-0-3', isLeaf:true},
              ]
            },
            { title: '家居与园艺', key: '0-1-0-1',  },
            { title: '新闻与政治', key: '0-1-0-2', }
          ]
        },
      ]
    }
  ];
  public keyInfo={
    type:"1",
    radio:"1"
  }
  public isVisible1=false
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
      type:"有具体兴趣的受众群体",
      text:"商业服务 > 商业技术 > 网络服务",
      title:"网络设计与开发",
      name1:"广告组1",
      name2: '广告组'
    },
    {
      id:2,
      state:true,
      type:"有具体兴趣的受众群体",
      text:"商业服务 > 商业技术 > 网络服务",
      title:"网络设计与开发",
      name1:"广告系列1",
      name2: '广告系列'
    },
  ];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  listOfCurrentPageData = [];
  //多选
  allChecked = false;
  indeterminate2 = true;
  checkOptionsOne = [
    { label: '网络设计与开发', value: '1', checked: true },
    { label: '商务软件和生产力软件', value: '2', checked: false },
    { label: '媒体与娱乐', value: '3', checked: false },
    { label: '软件', value: '4', checked: false },
    { label: '商业技术', value: '5', checked: false },
    { label: '社交媒体爱好者', value: '6', checked: false },
    { label: '技术爱好者', value: '7', checked: false },
    { label: '商业服务', value: '8', checked: false },
    { label: '科技', value: '9', checked: false },
    { label: '教育', value: '10', checked: false },
    { label: '搜索引擎优化和搜索引擎营销服务', value: '11', checked: false },
    { label: '娱乐新闻爱好者', value: '12', checked: false },
    { label: '交友服务', value: '13', checked: false },
  ];
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
    {
      title:"点击类型"
    },
    {
      title:"转化次数",
      children:[
        {title:"转化操作"},
        {title:"转化类别"},
        {title:"转化来源"},
        {title:"广告事件类型"},
        {title:"转化调整"},
        {title:"转化发生转化所需的天数"},
        {title:"发生转化或调整所需天数"},
      ]
    },
    {title:"设备"},
    {title:"投放网站（含搜索网络合作伙伴）"},
    {title:"是顶部还是其他位置"},
    {title:"广告目标页面"},
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
  public options = ["这是关键词1","这是关键词2","这是关键词3"];
  public panels = [
    {
      title:"广告系列",
      checked:true
    },
    {
      title:"广告组",
      checked:true,
    },
    {
      title:"广告组名称",
      checked:true,
    },
    {
      title:"定位受限",
      checked:true,
      disabled:true
    },
    {
      title:"广告系列名称",
      checked:true,
    },
    {
      title:"层级",
      checked:true,
    },
    {
      title:"类型",
      checked:true,
    }
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
  updateAllChecked(): void {
    this.indeterminate2 = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return {
          ...item,
          checked: false
        };
      });
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate2 = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate2 = false;
    } else {
      this.indeterminate2 = true;
    }
  }
  //树形
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
