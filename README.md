
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
