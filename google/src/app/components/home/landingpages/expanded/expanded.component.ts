

import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
// import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-expanded',
  templateUrl: './expanded.component.html',
  styleUrls: ['./expanded.component.scss']
})
export class ExpandedComponent implements OnInit {

  public date=""
  public chartOption={}
  public filter={
      name1:"",
      name2:"",
      name3:"",
      name4:""
  }
  //表格
  public listOfColumn = [
    {
      title: '着陆页',
      compare: (a, b) => a.name2 - b.name2
    },
    {
      title: '扩展后的着陆页',
      compare: (a, b) => a.name2 - b.name2
    },
    {
      title: '移动设备加载速度慢',
      compare: (a, b) => a.name3 - b.name3
    },
    {
      title: '适合移动设备点击率',
      compare: (a, b) => a.name4 - b.name4
    },
    {
      title: '有效AMP网页点击占比',
      compare: (a, b) => a.name5 - b.name5
    },
    {
      title: '转化跟踪兼容',
      compare: (a, b) => a.name6 - b.name6
    },
    {
      title: '点击次数',
      compare: (a, b) => a.name7 - b.name7
    },
    {
      title: '显示次数',
      compare: (a, b) => a.name8 - b.name8
    },
    {
      title: '点击率',
      compare: (a, b) => a.name9 - b.name9
    },
    {
      title: '平均每次点击费用',
      compare: (a, b) => a.name15 - b.name15
    },
    {
      title: '费用',
      compare: (a, b) => a.name16 - b.name16
    },
  ];
  public listOfData = [
    
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
  options = ["这是关键词1","这是关键词2","这是关键词3"];
  panels = [
    {
      active: true,
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
      name: '可见度',
      children:[
        {
          title:"可见展示次数",
          checked:false
        },
        {
          title:"不可见展示次数",
          checked:false
        },
        {
          title:"可衡量展示次数",
          checked:false
        },
        {
          title:"不可衡量展示次数",
          checked:false
        },
        {
          title:"可衡量展示费用",
          checked:false
        },
        {
          title:"可衡量率",
          checked:false
        },

        {
          title:"平均每千次可见展示费用",
          checked:false
        },
        {
          title:"可见展示的点击率",
          checked:false
        },
        {
          title:"可见展示次数占比",
          checked:false
        },
        {
          title:"不可见展示次数占比",
          checked:false
        },
        {
          title:"不可衡量展示次数占比",
          checked:false
        },
        {
          title:"可见率",
          checked:false
        },
      ]
    },
    {
      active: false,
      disabled: false,
      name: '转化次数',
      children:[
        {
          title:"转化次数",
          checked:false
        },
        {
          title:"每次转化费用",
          checked:false
        },
        {
          title:"转化率",
          checked:false
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
          title:"转化（按转化时间）",
          checked:false
        },
        {
          title:"每次转化价值（按转化时间）",
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
          title:"广告组",
          checked:false
        },
        {
          title:"广告系列",
          checked:false
        },
      ]
    },
    {
      active: false,
      disabled: false,
      name: '扩展后的着陆页'
    },
    {
      active: false,
      disabled: false,
      name: '着陆页'
    },
  ];

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
  getfilter(title){
    this.info.title=title
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

  

}
