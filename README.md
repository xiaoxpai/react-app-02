

# 自定义通用组件，卡片组件（2024年11月8日）

- 实现了自定义卡片组件
- 改善了导航栏样式
- 使用卡片组件嵌套Item组件，实现了列表页的效果

![react-card-component.gif](document%2Freact-card-component.gif)


# 自定义特定组件效果演示(2024年11月7日)

## 创建自定义组件，使成为可复用组件

> 场景是：
>  一个列表页，有10条数据，每条数据都有一个详情按钮，点击详情按钮
> 现在创建组件（一个List组件）（每个List组件有一个子组件Item）
> - 案例: AllMeetupsPage>>MeetupsList>>MeetupsItem
> - 父组件AllMeetupsPage传递数据给MeetupsList，MeetupsList传递数据给MeetupsItem


![react-customer-component.gif](document%2Freact-customer-component.gif)


# v6版本的react-router-dom 语法已修改(2024年11月5日)
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






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
