

### 前端项目结构规划

```

--- src
	|--- apis // api目录
		|--- somePage
	|--- assets //静态资源文件
		|--- css
		|--- ifonts
		|--- images
		|--- js // 可能需要的js或第三方js
		|--- scss 
	|--- components // 公用组件
		|--- DropdownMenu
			|--- DropdownMenu.jsx
			|--- _DropdownMenu.scss
		|--- footer
			|--- footer.jsx
			|--- _footer.scss
		...
	|--- config
		|--- routers (不在细分目录)
			|--- index.js index业务模块所有的路由都在这
			|--- exam.js exam业务模块所有路由都在这
	|--- mock // 模拟数据(可搭node层)
	|--- container // 页面组件文件夹
		|--- StaffPage // StaffPage 页面文件夹
			|--- StaffPageNav.jsx  // 只有StaffPage用的nav组件
			|--- StaffPageNav.scss
			|--- xxx.jpg
			|--- StaffPageList.jsx // 只有StaffPage用的list组件
			|--- StaffPageList.scss
			|--- StaffPage.jsx  // StaffPage页面	入口jsx
			|--- .scss
			|--- .js
			|--- .{.png,.jpg...}
			|--- .{eot,...}
	App.vue 入口文件
	main.js 入口js文件
	main.scss 全局sass
	router.js 路由文件
index.html 入口页面	

```