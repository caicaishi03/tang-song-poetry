$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    zb1();
    zb2();
    zb3();
    zb4();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 10,
                top: 30,
                height: 140,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'black',
                    fontSize: 10
                },
                orient: 'vertical',
                data: ['五言绝句', '七言古诗', '七言律诗', '乐府类型', '五言律诗', '五言古诗', '七言绝句']
            },
            calculable: true,
            series: [
                {
                    name: ' ',
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262'],
                    type: 'pie',
                    radius: [30, 70],
                    center: ['35%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        },
                        // fontSize: 12
                    },

                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },

                    data: [
                        { value: 29, name: '五言绝句' },
                        { value: 28, name: '七言古诗' },
                        { value: 53, name: '七言律诗' },
                        { value: 44, name: '乐府类型' },
                        { value: 78, name: '五言律诗' },
                        { value: 35, name: '五言古诗' },
                        { value: 49, name: '七言绝句' }
                    ]
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 10,
                top: 30,
                height: 140,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'black',
                    fontSize: 10
                },
                orient: 'vertical',
                data: ['乐府', '五言律诗', '五言古诗', '七言绝句', '五言绝句', '七言古诗', '七言律诗']
            },
            calculable: true,
            series: [
                {
                    name: ' ',
                    color: ['#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262'],
                    type: 'pie',
                    radius: [30, 70],
                    center: ['35%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },

                    lableLine: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },

                    data: [
                        { value: 2.9, name: '七言律诗' },
                        { value: 11.8, name: '七言古诗' },
                        { value: 5.9, name: '五言绝句' },
                        { value: 5.9, name: '七言绝句' },
                        { value: 8.8, name: '五言古诗' },
                        { value: 14.7, name: '五言律诗' },
                        { value: 50, name: '乐府' }
                    ]
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));

        // 原始数据（百分比）
        const emotions = ['悲', '思', '忧', '喜', '惧', '怒', '乐'];
        const percentages = [77.43, 17.22, 3.46, 0.86, 0.52, 0.45, 0.06];

        // 转换为实际数量（四舍五入取整）
        const total = 48900;
        const counts = percentages.map(p => Math.round(total * p / 100));

        option = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    const percent = percentages[params[0].dataIndex];
                    return `${params[0].name}<br>
                            数量：${params[0].value.toLocaleString()} 首<br>
                            占比：${percent}%`;
                },
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            grid: {
                left: '15%',
                top: '12%',
                right: '8%',
                bottom: '20%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "black",
                        fontSize: 14,
                    },
                    interval: 0,
                    rotate: 30  // 标签旋转30度
                },
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                data: emotions
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'black'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "black",
                        fontSize: 14,
                    },
                    formatter: function (value) {
                        return value.toLocaleString();
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                max: 40000,
                interval: 8000,  // 修改此处
                min: 0           // 明确设置最小值
            }],
            series: [{
                name: '出现数量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        color: '#dddc6b',
                        width: 3
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(221, 220, 107, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(221, 220, 107, 0.1)'
                        }], false)
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#dddc6b',
                        borderColor: 'rgba(221, 220, 107, .2)',
                        borderWidth: 8
                    }
                },
                data: counts
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['作品数', '影响力'],
                right: '10%',
                top: '3%',
                textStyle: {
                    color: "black",
                    fontSize: 16
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                top: '20%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['李白', '杜甫', '白居易', '王维', '李商隐', '杜牧', '孟浩然', '王昌龄', '刘禹锡', '岑参'],
                axisLabel: {
                    rotate: 30,
                    fontSize: 14
                }
            }],
            yAxis: [
                { // 左侧作品数轴
                    type: 'value',
                    name: '作品数',
                    axisLabel: {
                        formatter: '{value} 首'
                    },
                    splitLine: { show: false }
                },
                { // 右侧影响力轴
                    type: 'value',
                    name: '影响力',
                    splitLine: { show: false },
                    axisLabel: {
                        formatter: '{value} 分'
                    },
                    offset: 0,
                    position: 'right'
                }
            ],
            series: [
                {
                    name: '作品数',
                    type: 'bar',
                    data: [1100, 1400, 2800, 400, 600, 500, 260, 180, 800, 400],
                    yAxisIndex: 0, // 绑定左侧Y轴
                    itemStyle: {
                        color: '#5470C6',
                        borderRadius: 5
                    },
                    barWidth: '25%'
                },
                {
                    name: '影响力',
                    type: 'line', // 改用折线图
                    data: [95, 98, 88, 85, 82, 80, 78, 85, 80, 75],
                    yAxisIndex: 1, // 绑定右侧Y轴
                    symbolSize: 10,
                    itemStyle: {
                        color: '#91CC75'
                    },
                    lineStyle: {
                        width: 3
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['高频字'],
                align: 'right',
                right: '40%',
                top: '0%',
                textStyle: {
                    color: "black",
                    fontSize: '16',

                },

                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['人', '山', '风', '日', '天', '云', '春', '花', '年', '月', '水', '知'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "black",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "black",
                        fontSize: '16',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "black",
                        fontSize: '16',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "black",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                name: '高频字',
                type: 'line',

                data: [39195, 31014, 30179, 26388, 23618, 23432, 19806, 19209, 18970, 18932, 18845, 17032],

                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,

                        barBorderRadius: 5,
                    }
                }
            }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v1 = 20000//诗歌数量
        var v2 = 55000//诗人总数
        var v3 = 55000//总订单数
        option = {
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#49bcf7',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '较唐朝占比',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 20,
                                color: 'black',
                            }
                        }
                    }
                },
                {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '诗歌较唐朝占比'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 14
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 15000//结算数
        var v2 = 55000//未结算数
        var v3 = 55000//总订单数
        option = {

            //animation: false,
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#49bcf7',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '诗歌较唐朝占比',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 20,
                                color: 'black',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '诗歌较唐朝占比'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 14
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 800//结算金额
        var v2 = 3000//未结算
        var v3 = 3000
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#62c98d',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '诗人较唐朝占比',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 20,
                                color: 'black',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '诗人较唐朝占比'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 14
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 500//结算金额
        var v2 = 3000//未结算
        var v3 = 3000
        option = {
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#29d08a',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '诗人较唐朝占比',
                    label: {
                        normal: {
                            formatter: Math.round(v1 / v3 * 100) + '%',
                            textStyle: {
                                fontSize: 20,
                                color: 'black',
                            }
                        }
                    }
                }, {
                    value: v2,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '诗人较唐朝占比'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 14
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})


















