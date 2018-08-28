const Home = r => require.ensure([], () => r(require('../page/home/home1')), 'home1')
const LauchPage = r => require.ensure([], () => r(require('../page/launch/launchPage')), 'launchPage')
const RegistPage = r => require.ensure([], () => r(require('../page/launch/registPage')), 'registPage')
const ResetPwPage = r => require.ensure([], () => r(require('../page/launch/resetPwPage')), 'resetPwPage')
const UserInfoPage = r => require.ensure([], () => r(require('../page/userinfo/userInfoPage')), 'userInfoPage')
const ChatWindowPage = r => require.ensure([], () => r(require('../page/chatWindow/chatWindowPage')), 'chatWindowPage')

export default [
	{
		path: '',
		redirect: '/launchPage'
	},
	{
		path: '/launchPage',
		component: LauchPage,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/registPage',
		component: RegistPage,
		meta: {
			title: '注册'
		}
	},
	{
		path: '/resetPwPage',
		component: ResetPwPage,
		meta: {
			title: '重置密码'
		}
	},
	{
		path: '/userInfoPage',
		component: UserInfoPage,
		meta: {
			title: '用户信息'
		}
	},
	{
		path: '/chatWindowPage',
		component: ChatWindowPage,
		meta: {
			title: '聊天窗口'
		}
	},
	{
		path: '/home1',
		component: Home
	}
]
