// components/scrollView/scollView.js
import {
  tabs
} from '../../images/tabs/data'
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: tabs,//数据列表
    currentTab: 0,//当前选中的标签
    sleft: "",//距离左边的距离
  },

  methods: {
    /**
     * 标签切换事件
     * @param {*} e 获取catchtap传过来的current
     * @returns 
     */
    handleTabChange(e) {
      let {
        current
      } = e.currentTarget.dataset;
      if (this.data.currentTab == current || current === undefined) return;//如果当前选中的标签和之前选中的标签相同则返回
      this.setData({
        currentTab: current,
      })
    },

    /**
     * 滑块切换事件
     * @param {*} e 通过data-current获取当前选中的标签
     * @returns
     */
    handleSwiperChange(e) {
      this.setData({
        currentTab: e.detail.current
      });
      this.getScrollLeft();
    },

    /**
     * 计算滑块距离左边的距离
     * 
     * @createSelectorQuery() 创建一个查询器，用于查询节点信息
     * @in() 将选择器的选取范围更改为自定义组件component内
     * @selectAll() 选择所有匹配选择器的节点
     * @boundingClientRect() 获取节点的位置和尺寸信息
     * @exec() 执行查询操作
     * @returns 无返回值
     */
    getScrollLeft() {
      const query = wx.createSelectorQuery().in(this);
      query.selectAll('.item').boundingClientRect();//获取节点的大小及其相对于视口的位置
      query.exec((res) => {
        let left = 0;
        for (let i = 0; i < this.data.currentTab; i++) {
          left += res[0][i].width;
        }
        this.setData({
          sleft: Math.ceil(left),
        });
      });
    },

    changeUrl(e) {
      let {
        url
      } = e.currentTarget.dataset;
      console.log(url);
      wx.navigateTo({
        url: url,
      })
    }

  }
})