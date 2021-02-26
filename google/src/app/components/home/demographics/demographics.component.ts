

import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
// import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {
  public treeList:any = [
    {
      value: 1,
      label: '点击次数',
      isLeaf:true
    },
    {
      value: 2,
      label: '展示次数',
      isLeaf:true
    },
    {
      value: 3,
      label: '点击率',
      isLeaf:true
    },
    {
      value: 4,
      label: '平均每天点击费用',
      isLeaf:true
    },
    {
      value: 5,
      label: '费用',
      isLeaf:true
    },
    {
      value: 6,
      label: '转化次数',
      children:[
        {
          label:"所有",
          value:601,
          isLeaf:true
        },
        {
          label:"购买/销售",
          value:602,
          isLeaf:true
        },
        {
          label:"注册",
          value:603,
          isLeaf:true
        },{
          label:"关键网页浏览",
          value:62,
          isLeaf:true
        }
      ]
    },
  ];
  public tree={
    name1:1,
    name2:1
  }
  public chartOption={}
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
      active: true,
      name: '推荐列',
      children:[
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
          title:"平均每次点击费用",
          checked:true
        },{
          title:"平均费用",
          checked:true
        }
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
      name: '归因',
      children:[
        {
          title:"转化次数（当前模型）",
          checked:false
        },
        {
          title:"每次转化费用（当前模型）",
          checked:false
        },
        {
          title:"转化率（当前模型）",
          checked:false
        },
        {
          title:"转化价值（当前模型）",
          checked:false
        },
        {
          title:"转化价值/费用（当前模型）",
          checked:false
        },
        {
          title:"每次点击的转化价值（当前模型）",
          checked:false
        },
        {
          title:"每次的转化价值（当前模型）",
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
          title:"广告系列ID",
          checked:false
        },
        {
          title:"广告系列类型",
          checked:false
        },
        {
          title:"广告系列子类型",
          checked:false
        },
        {
          title:"出价策略",
          checked:false
        },
        {
          title:"出价策略类型",
          checked:false
        },
        {
          title:"转化设置",
          checked:false
        },
        {
          title:"广告系列组",
          checked:false
        },
        {
          title:"标签",
          checked:false
        },
        {
          title:"目标展示次数份额出价策略的每次点击费用出价上限",
          checked:false
        },
        {
          title:"目标展示次数份额",
          checked:false
        },
        {
          title:"目标展示次数份额出价策略的页面位置目标",
          checked:false
        },
        {
          title:"目标广告支出回报率",
          checked:false
        },
        {
          title:"目标每次转化费用",
          checked:false
        },
        {
          title:"优化得分",
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
          title:"在搜索网络上获得的绝对页首展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因排名而错失的展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因评级而错失的页首展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因评级而错失的绝对页首展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因预算而错失的展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因预算而错失的页首展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中因预算而错失的绝对页首展示次数份额",
          checked:false
        },
        {
          title:"目标展示次数份额",
          checked:false
        },
        {
          title:"在搜索网络中获得的完全匹配展示次数份额",
          checked:false
        },
        {
          title:"点击次数份额",
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

  //多选变化
  getchecked(state){
      setTimeout(res=>{
        var ul=[]
        this.panels.map(x=>{
            ul.push(...x.children)
        })
        var info=ul.filter(x=>x.checked)
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
