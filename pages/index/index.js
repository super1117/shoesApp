//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',
      'https://p3.pstatp.com/large/39f600038907bf3b9c96',
      'https://p3.pstatp.com/large/31fa0003ed7228adf421'
    ],
    //标签
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    tabs: ['推荐', '新品', '人气', '球鞋', '冬装', '冬靴','手表'],
    
    gridData: [
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
      'http://img.sccnn.com/bimg/338/12794.jpg',
    ]
  },

  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    // wx.switchTab({
    //   url: this.data.links[this.data.swiperCurrent]
    // })
  },
  //标签点击事件
  tabClickListener: function (e) {
    var cur = e.target.dataset.position;
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  itemClickListener: function(e){
    console.log(e)
    wx.navigateTo({
      url: '../details/details',
    })
  }
})
