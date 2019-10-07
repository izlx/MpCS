var mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

var Schema = mongoose.Schema

var userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	create_time: {
		type: Date,
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	avater: {
		type: String,
		default: '/public/img/avater-default.png'
	},
	bio: {
		type: String,
		default: ''
	},
	gender: {
		type: Number,
		enum: [1, 0, -1],
		default: -1
	},
	birthday: {
		type: Date,
	},
	status: {
		type: String,
		// 0 没有权限限制
		// 1 不可以平论
		// 2 不可以登录
		enum: [0, 1, 2],
		default: 0
	}
})

module.exports = mongoose.model('User', userSchema)