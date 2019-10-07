var express = require('express')
var path = require('path')
var router = require('./router')
var session = require('express-session')
var bodyParser = require('body-parser')

var  app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 配置解析表单 post 请求体插件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置express下的session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// 挂载路由
app.use(router)

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))



app.listen(5000, function () {
	console.log('app is running...')
})