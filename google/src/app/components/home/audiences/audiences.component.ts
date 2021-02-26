import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
// import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-audiences',
  templateUrl: './audiences.component.html',
  styleUrls: ['./audiences.component.scss']
})
export class AudiencesComponent implements OnInit {
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
  public chartOption={}
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
      name2: '测试推广',
      name3: "符合条件",
      name4: "1",
      name5:"ww.baidu.com",
      name6:0,
      name7:0,
      name8:"0.00%",
      name9:"0.00",
      name10:"0.00",
      name11:0,
      name12:0,
      name13:"0.00%",
      name14:0,
      name15:0.00,
      name16:0.00
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
      active: false,
      name: '推荐列',
      children:[
        {
          title:"类型",
          checked:true,
          disabled:true
        },
        {
          title:"广告系列",
          checked:true,
          disabled:true
        },
        {
          title:"广告组",
          checked:true,
          disabled:true
        },
        {
          title:"状态",
          checked:true,
          disabled:true
        },
        {
          title:"每次转化费用",
          checked:true
        },
        {
          title:"每次转化费用",
          checked:true
        },
        {
          title:"转化率",
          checked:true
        },
        {
          title:"转化次数",
          checked:true
        }
      ],
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: '效果',
      children:[
        {
          title:"点击次数",
          checked:true
        },
        {
          title:"费用",
          checked:true
        },
        {
          title:"展示次数",
          checked:true
        },
        {
          title:"点击率",
          checked:true
        },
        {
          title:"互动次数",
          checked:true
        },
        {
          title:"互动率",
          checked:true
        },
        {
          title:"无效点击次数",
          checked:true
        },
        {
          title:"无效点击比例",
          checked:true
        },{
          title:"无效互动次数",
          checked:true
        },{
          title:"无效互动率",
          checked:true
        },{
          title:"平均每次点击费用",
          checked:true
        },{
          title:"平均费用",
          checked:true
        },{
          title:"平均目标每次转化费用",
          checked:true
        },{
          title:"平均目标广告支出回报率",
          checked:true
        },
        {
          title:"绝对页首展示次数百分比",
          checked:false
        },
        {
          title:"页首展示次数百分比",
          checked:false
        },
      ],
    },
    {
      active: false,
      disabled: false,
      name: '转化次数',
      children:[
        {
          title:"转化次数",
          checked:true
        },
        {
          title:"每次转化费用",
          checked:true
        },
        {
          title:"转化率",
          checked:true
        },
        {
          title:"转化价值",
          checked:false
        },
        {
          title:"转化价值/费用",
          checked:false
        },
        {
          title:"每次点击的转化价值",
          checked:false
        },
        {
          title:"每次的转化价值",
          checked:false
        },
        {
          title:"所有转化次数",
          checked:false
        },
        {
          title:"费用/所有转化次数",
          checked:false
        },
        {
          title:"所有转化率",
          checked:false
        },
        {
          title:"所有转化价值",
          checked:false
        },
        {
          title:"所有转化价值/费用",
          checked:false
        },
        {
          title:"每次点击次数所有转化价值",
          checked:false
        },
        {
          title:"价值/所有转化次数",
          checked:false
        },
        {
          title:"跨设备转化",
          checked:false
        },
        {
          title:"浏览型转化",
          checked:false
        }
      ]
    },
    {
      active: false,
      disabled: false,
      name: '属性',
      children:[
        {
          title:"广告系列类型",
          checked:false
        },
        {
          title:"出价策略类型",
          checked:false
        },
        {
          title:"出价调整",
          checked:false
        },
        {
          title:"定位设置",
          checked:false
        },
        {
          title:"层级",
          checked:false
        },
        {
          title:"条件ID",
          checked:false
        }
      ]
    },
    {
      active: false,
      disabled: false,
      name: '竞争指标',
      children:[
        {
          title:"在搜索网络中获得的展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中获得的页首展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中获得的完全匹配展示次数份额",
          checked:false
        }
      ]
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
    var ul=[]
    this.panels.map(x=>{
        ul.push(...x.children)
    })
    this.listOfColumn=ul.filter(x=>x.checked)
    const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
    const xData = ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾']
    this.chartOption = {
        backgroundColor: '#fff',
        legend: {
            icon: 'circle',
            top: '4%',
            left: '5%',
            itemWidth: 6,
            itemGap: 20,
            textStyle: {
                color: '#556677'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                label: {
                    show: true,
                    backgroundColor: '#fff',
                    color: '#556677',
                    borderColor: 'rgba(0,0,0,0)',
                    shadowColor: 'rgba(0,0,0,0)',
                    shadowOffsetY: 0
                },
                lineStyle: {
                    width: 0
                }
            },
            backgroundColor: '#fff',
            textStyle: {
                color: '#5c6c7c'
            },
            padding: [10, 10],
            extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisLine: {
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)', //x轴颜色
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#999' //坐标轴字颜色
                },
                margin: 15
            },
            boundaryGap: false
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(107,107,107,0.37)', //y轴颜色
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: 'Adidas',
            type: 'line',
            data: [10, 10, 30, 12, 15, 3, 7],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0]
                }
            }
        }, {
            name: 'Nike',
            type: 'line',
            data: [5, 12, 11, 14, 25, 16, 10],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                shadowColor: 'rgba(115,221,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1]
                }
            }
        }]
    };
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
