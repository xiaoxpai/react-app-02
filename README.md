
# 更新： 2024年11月15日

- 已完成收藏功能的开发
  - 添加到收藏 （update +1)
  - 移除收藏（update -1）
  - 在收藏页面（统计数量）
- 功能的痛点或难点
  - 涉及到很多状态管理，例如：已收藏，取消收藏，点击收藏并变更按钮文字为取消收藏，反之亦然
  - 以上会涉及到多个组件的状态
- 解决方案有其二
  - 其一，React提供了一种全局范围内管理状态机制，并将该状态分配给不同的组件，useContext Hook
  - 其二，使用第三方状态管理依赖，例如Redux

## 效果展示

点击收藏
![favorites-0.png](document%2Ffavorites-0.png)

已点击收藏
![favorites-status-true.png](document%2Ffavorites-status-true.png)

收藏页列表
![favorites-list.png](document%2Ffavorites-list.png)

完整的一次操作效果

![react-favorites.gif](document%2Freact-favorites.gif)

# 更新： 2024年11月12日

- 修复了[BUG] 从后端API接口获取列表数据，导致无限循环请求的问题

# 更新：2024年11月8日
##  自定义通用组件，卡片组件（）

- 实现了自定义卡片组件
- 改善了导航栏样式
- 使用卡片组件嵌套Item组件，实现了列表页的效果

![react-card-component.gif](document%2Freact-card-component.gif)

## 重构了布局组件Layout

> 使用布局组件，包裹整个页面，在App.js替换原有的布局,<div> replace <Layout>

```js
       <Layout>
    {/*<MainNavigation/>*/}
    <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetups" element={<NewMeetupsPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>

</Layout>
```
- 创建了新的布局组件Layout
- 修改了列表样式

最终的效果如下图：
![react-layout.png](document%2Freact-layout.png)


## 完成了子组件传递数据给父组件

![react-sub-to-father.png](document%2Freact-sub-to-father.png)

## 完成了发送Http Request请求

![react-send-http-request.png](document%2Freact-send-http-request.png)

## 使用了V6版本的react-router-dom，useNavigate()代替了useHistory()钩子函数

![react-useNavigate.png](document%2Freact-useNavigate.png)



# 更新：2024年11月7日
##  自定义特定组件效果演示()

## 创建自定义组件，使成为可复用组件

> 场景是：
>  一个列表页，有10条数据，每条数据都有一个详情按钮，点击详情按钮
> 现在创建组件（一个List组件）（每个List组件有一个子组件Item）
> - 案例: AllMeetupsPage>>MeetupsList>>MeetupsItem
> - 父组件AllMeetupsPage传递数据给MeetupsList，MeetupsList传递数据给MeetupsItem


![react-customer-component.gif](document%2Freact-customer-component.gif)

# 更新：2024年11月5日
##  v6版本的react-router-dom 语法已修改()
> 不支持switch，否则报错

```javascript
<div>
    <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetups" element={<NewMeetupsPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
</div>
```

# 新增导航栏页面效果演示

![react-link-navigation.gif](document%2Freact-link-navigation.gif)


---

``js
const people = [{
id: 0,
name: '凯瑟琳·约翰逊',
profession: '数学家',
address: '美国',
}, {
id: 1,
name: '马里奥·莫利纳',
profession: '化学家',
address: '墨西哥',
}, {
id: 2,
name: '穆罕默德·阿卜杜勒·萨拉姆',
profession: '物理学家',
address: '巴基斯坦',
}, {
id: 3,
name: '珀西·莱温·朱利亚',
profession: '化学家',
address: '美国',
}, {
id: 4,
name: '苏布拉马尼扬·钱德拉塞卡',
profession: '天体物理学家',
address: '印度',
}];
``