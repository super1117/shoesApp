// pages/details/details.js
var action = '';
var moveY = 200;
var animation = wx.createAnimation({
  transformOrigin: "50% 50%",
  duration: 400,
  timingFunction: "ease",
  delay: 0
})
animation.translateY(moveY + 'vh').step();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52'
    ],
    nodes: '<img src="http://www.315fangwei.com/uploadsabcd/allimg/170303/151935J04-0.jpg">',
    //底部弹出层使用
    show: false,
    backgroundVisible: false,
    animation: animation,
    bg: 'background',
  },
  onLoad: function(){
    
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
  /**
   * 选择尺码
   */
  onSizeCheckedListener: function(e){
    moveY = 0;
    action = 'show';
    animationEvents(this, moveY, action);
  },
  //隐藏弹窗浮层
  hidden(e) {
    moveY = 200;
    action = 'hide';
    animationEvents(this, moveY, action);
  },
  //底部弹窗触摸事件
  touchHandler : function(e){
    return
  }
})
//动画事件 底部的弹出，背景层通过切换不同的class，添加一个transition的效果，使之有一个渐变的感觉。
function animationEvents(that, moveY, action) {
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "ease",
    delay: 0
  })
  that.animation.translateY(moveY + 'vh').step()
  if (action == 'show') {
    that.setData({
      animation: that.animation.export(),
      show: true,
      backgroundVisible: true,
      bg: 'bg',
      disableScroll: 'disableScroll'
    });
  } else if (action == 'hide') {
    that.setData({
      animation: that.animation.export(),
      show: false,
      backgroundVisible: false,
      bg: 'background',
      disableScroll: ''
    });
  }
}