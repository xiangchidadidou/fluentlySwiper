# FluentlySwiper 微信小程序项目说明（Wechat）（新上传版本在main2分支）

本项目是一个基于微信小程序开发的演示应用，主要展示了自定义组件、登录鉴权、本地视频播放以及动态内容展示等功能。
浏览视频功能请下载server的node_modules，cmd执行index.js即可

![image](https://github.com/user-attachments/assets/7269ca3f-2c9d-41b8-81b4-6abe41115421)
![image](https://github.com/user-attachments/assets/f11b98c9-d451-4305-b670-7631322bed95)
![image](https://github.com/user-attachments/assets/6854cdc0-5401-418a-a5a9-61a936dbceb6)
![image](https://github.com/user-attachments/assets/25ba6f22-a5f6-4c6c-9ffa-d4e11ba1e215)
![image](https://github.com/user-attachments/assets/196c58e2-77e4-4e26-8b5f-fbb04a4afb90)
![image](https://github.com/user-attachments/assets/076df121-c484-4e84-a046-ae2127fc666f)
![image](https://github.com/user-attachments/assets/501ec56c-14f4-4725-a729-2c7d724ef694)
![image](https://github.com/user-attachments/assets/68383960-9de4-43fd-b2be-5cb3e7feb2d9)


## 1. 功能演示与操作流程

### 1.1 登录/登出模块

*   **功能描述**：用户可以通过“我的”页面进行登录和登出操作。登录成功后，会自动跳转到首页；未登录状态下访问首页，会强制跳转到“我的”页面进行登录。
*   **操作步骤**：
    1.  打开小程序，如果未登录，会自动跳转到“我的”页面。
    2.  在“我的”页面，输入预设的用户名和密码：
        *   用户名：`24055060115`
        *   密码：`24055060115`
    3.  点击“登录”按钮，登录成功后会显示提示并跳转到首页。
    4.  在“我的”页面，如果已登录，会显示“登出”按钮。点击“登出”按钮，会清除登录状态并显示提示。

### 1.2 首页内容展示模块

*   **功能描述**：首页通过自定义的 `scrollView` 组件展示多标签页内容，支持横向标签切换和内容区域的滑动切换。内容可以是图片或视频，并根据数据源动态渲染。
*   **操作步骤**：
    1.  确保已登录并进入首页。
    2.  点击顶部的不同标签（如“视频1”、“图片1”等），内容区域会同步切换到对应的内容。
    3.  在内容区域，可以左右滑动来切换不同的标签页。
    4.  如果当前内容是视频，点击视频区域可以播放/暂停视频，并支持全屏播放。
    5.  如果当前内容是图片，点击图片可以触发 `changeUrl` 事件（当前实现为控制台输出 URL）。

### 1.3 视频播放模块

*   **功能描述**：在“我的”页面和首页的内容展示区域都集成了视频播放功能。视频资源通过本地搭建的 Node.js 服务器提供。
*   **操作步骤**：
    1.  **启动本地服务器**：在项目根目录下的 `server` 文件夹中，打开命令行工具，运行 `node index.js`。确保服务器成功启动并监听 `3000` 端口。
    2.  在“我的”页面，可以直接看到一个视频播放器，点击即可播放。
    3.  在首页，切换到包含视频的标签页（如“视频1”），点击视频区域即可播放。

## 2. 代码片段与关键技术解释

已更新详情请查看代码

### 2.3 本地视频服务器

*   **关键技术**：Node.js, Express 框架。
*   **作用与实现逻辑**：为了在开发环境中模拟视频资源的加载，项目搭建了一个简单的 Node.js 服务器。该服务器使用 Express 框架，将 `htdocs` 目录设置为静态文件服务目录，使得小程序可以通过 `http://127.0.0.1:3000/` 访问其中的视频文件。
*   **代码片段**：
    *   `server/index.js`
    ```javascript
    // server/index.js
    var express = require('express');
    var app = express();

    app.use(express.static('./htdocs')); // 设置静态文件目录

    app.listen(3000, res => {
      console.log('服务器启动成功，访问地址：http://127.0.0.1:3000/文件名');
    });
    ```

## 3. 个性化设计与创新点说明

*   **模块化开发**：项目采用了组件化开发思想，将通用的滑动展示逻辑封装成 `scrollView` 自定义组件，提高了代码的复用性和可维护性。
*   **登录鉴权模拟**：通过本地存储模拟了用户登录状态的鉴权，虽然简单，但展示了小程序中常见的用户状态管理和页面保护机制。
*   **动态内容渲染**：`scrollView` 组件能够根据数据源中的文件类型（通过文件后缀判断）动态渲染视频或图片，这使得内容展示更加灵活和多样化。
*   **本地开发环境优化**：通过 Node.js 搭建本地服务器来提供视频资源，避免了在开发阶段对外部网络资源的依赖，提高了开发效率和稳定性。
*   **用户体验细节**：
    *   导航栏的定制化 (`navigationStyle: "custom"`) 提升了界面的统一性。
    *   标签页的选中效果和滑动动画 (`scroll-with-animation`, `easing-function`) 增强了视觉流畅性。
    *   视频组件的 `enable-play-gesture` 属性提升了视频播放的交互体验。

## 4. 文档质量与格式规范

本文档严格遵循 Markdown 格式规范，结构清晰，包含必要的标题、子标题和代码块。文字表述力求准确无误，旨在为项目的理解和评估提供详尽的参考。

视频参考https://www.bilibili.com/video/BV1194y1k74j/
测试视频https://www.bilibili.com/video/BV1d2o9Y8E8R/
