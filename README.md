# jfmd-webpack-loader
jfmd-webpack-loader

用于编译定制格式的markdown 文件，方便搭建纯静态的博客。

> 安装 yarn add jfmd-webpack-loader

### 用法：

* webpack.config.js

``` javascript
...
{
  test: /\.md$/,
  loader: 'jfmd-webpack-loader',
  options: {
    split: '--->'
  }
}
...

```

* test.md

``` markdown
  {
    "time": "2018-6-22 09:50:15",
    "notebook": "test"
  }

  --->

  # test article

  > hello, world

```

* abc.js

``` javascript
var a = require('test.md')

// {time: "2018-6-22 09:50:15", notebook:"test", article:"<h1>test article</h1>..."}

```
