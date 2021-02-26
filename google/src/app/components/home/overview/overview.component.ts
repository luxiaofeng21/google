import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public date  = "";
  public filter={
      name1:"",
      name2:"",
      name3:""
  }
  public expandKeys = ['100', '1001'];
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
  public tree=[
    {
      value:[1],
      num:"NT$0.0.0"
    },
    {
      value:[2],
      num:"0.00%"
    },
    {
      value:[3],
      num:"0.00"
    },
    {
      value:[4],
      num:"0.00"
    },
    
  ]
  public chartOption={}
  
  public listOfColumn = [
    {
      title: '点击次数',
      compare: (a, b) => a.name2 - b.name2,
      priority: 3
    },
    {
      title: '点击率',
      compare: (a, b) => a.name3 - b.name3,
      priority: 2
    },
    {
      title: '费用',
      compare: (a, b) => a.name4 - b.name4,
      priority: 1
    }
  ];
  
  public listOfData = [
    {
      name1: '测试推广',
      name2: 32,
      name3: '0.00%',
      name4:"0.00%"
    },
    {
      name1: '测试推广',
      name2: 33,
      name3: '0.00%',
      name4:"1.00%"
    },
    {
      name1: '测试推广',
      name2: 32,
      name3: '10.00%',
      name4:"0.00%",
      
    },
  ];
  public listOfData2 = [
    {
      name1: '已拒登',
      name2: 32,
      name3: '0.00%',
      name4:"0.00%"
    }
  ];
  public tabletool=[
    {
      text:"点击次数",
      value:1
    },
    {
      text:"展示次数",
      value:2
    },
    {
      text:"点击率",
      value:3
    },
    {
      text:"平均每次点击花费",
      value:4
    },
    {
      text:"费用",
      value:5
    },
    {
      text:"转化次数",
      value:6
    },
    {
      text:"转化价值",
      value:7
    },
    {
      text:"每次转化费用",
      value:8
    },
    {
      text:"转化率",
      value:9
    },
    {
      text:"转化价值/费用",
      value:10
    },
    {
      text:"在搜索网络中获得的展示次数份额",
      value:11
    },
    {
      text:"展示次数份额",
      value:12
    },
    {
      text:"来电次数",
      value:13
    },
    {
      text:"互动率",
      value:14
    },
    {
      text:"互动次数",
      value:15
    },
  ]
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
  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  treeChange($event: string): void {
    console.log($event);
  }


}
