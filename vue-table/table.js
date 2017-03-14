// 模拟数据
var jsonObject = {
	state: 0,
	status: '成功',
	body: [
		{
			id:2,
			content: '完成sql作业流程',
			document: 'sql-1.txt',
			completeTime:1489392036411,
			time: 10,
			status: '进行中'
		},
		{
			id:1,
			content: '任务进行时--2',
			document: 'sql-2.txt',
			completeTime:1489392207302,
			time: 9,
			status: '完成'
		},
		{
			id:4,
			content: '任务进行时--3',
			document: 'sql-3.txt',
			completeTime:1489392213041,
			time: 10,
			status: '失败'
		},
		{
			id:5,
			content: '任务进行时--4',
			document: 'sql-4txt',
			completeTime:1489392218152,
			time: 7,
			status: '完成'
		},
		{
			id:3,
			content: '任务进行时--5',
			document: 'sql-5.txt',
			completeTime:1489392222912,
			time: 10,
			status: '失败'
		},
		{
			id:6,
			content: '任务进行时--6',
			document: 'sql-6.txt',
			completeTime:1489392228226,
			time: 5,
			status: '进行中'
		}
	]
};

// 全局注册的弹出框组件
Vue.component('myLayer',{
	// prop 接收数据
	props: {
		message: {
			type: Object
		}
	},
	// 组件的模板
	template: '#layer',
	methods: {
		// 关闭弹出框
		closed: function(){
			app.isLayer = false;
		},
		// 下载
		onload: function(){
			alert('下载成功');
			app.isLayer = false;
		},
		// 取消任务
		cancel: function(){
			app.tableData[app.itemIndex]['status'] = '失败';
			app.isLayer = false;
		},
		// 删除任务
		remove: function(){
			app.tableData.splice(app.itemIndex,1);
			app.isLayer = false;
		},
		// 重试任务
		reset: function(){
			app.tableData[app.itemIndex]['status'] = '进行中';
			app.isLayer = false;
		}
	}
});

// 实例化vue对象
var app = new Vue({
	el: '#app',
	data: {
		tableData: [],
		isSetstatus: false,
		layerMessage: {
			btn1: '',
			btn2: '',
			content: ''
		},
		isLayer: false,
		itemIndex: 0,
		isTop: true,
		statusName: '全部'
	},
	created: function(){
		// jsonObject.body 为模拟的数据
		this.tableData = jsonObject.body;
	},
	filters: {
		// 格式化时间
		conTimeFormat: function(v){
			var time = new Date(parseFloat(v));
			var year = time.getFullYear();
			var month = time.getMonth()<10?'0'+time.getMonth():time.getMonth();
			var day = time.getDate();
			var hour = time.getHours();
			var minutes = time.getMinutes();
			var seconds = time.getSeconds();
			var formatTime = year + '年' + month + '月' + day + '日'
							+ '  ' + hour + '时' + minutes + '分' + seconds + '秒';
			return formatTime;
		},
		timeFormat: function(v){
			return v + 's';
		}
	},
	methods: {
		// 打开或关闭状态栏
		setStatus: function(){
			this.isSetstatus = !this.isSetstatus;
		},
		// 状态筛选
		filterComplete: function(statusName){
			var _this = this;
			this.tableData = jsonObject.body;
			var newTableData = [];
			if(statusName!=='全部'){
				this.tableData.forEach(function(v,i){
					if(v.status === statusName){
						newTableData.push(v);
					}
				});
				this.tableData = newTableData;
			}
			this.statusName = statusName;
		},
		// 用户操作 下载 取消 重试
		adminSet: function(value,index) {
			var loadMessage = null;
			switch(value) {
				case 1: 
					loadMessage = {
						btn1: '取消',
						btn2: '下载',
						content: '您确定下载此文件吗？',
						type: 'onload'
					}
				break;
				case 2:
					loadMessage = {
						btn1: '考虑一下',
						btn2: '确定',
						content: '您确定取消该任务吗？',
						type: 'cancel'
					}
					break;
				case 3:
					loadMessage = {
						btn1: '删除',
						btn2: '重试',
						content: '是否重试该任务？',
						type: 'reset'
					}
					break;
			}
			this.isLayer = true;
			this.layerMessage = loadMessage;
			this.itemIndex = index;
		},
		// 任务id排序
		sort: function(){
			var temp;
			var newTableData = [];
			this.tableData.forEach(function(v,i){
				newTableData.push(v);
			});
			if(this.isTop){
				// 从大到小排序
				for(var i=0;i<newTableData.length-1;i++){
					for(var j=i+1;j<newTableData.length;j++){
						if((newTableData[i]['id'] - newTableData[j]['id'])<0){
							temp = newTableData[i];
							newTableData[i] = newTableData[j];
							newTableData[j] = temp;
						}
					}
				}
				this.isTop = false;
			}else {
				// 从小到大排序
				for(var i=0;i<newTableData.length-1;i++){
					for(var j=i+1;j<newTableData.length;j++){
						if((newTableData[i]['id'] - newTableData[j]['id'])>0){
							temp = newTableData[i];
							newTableData[i] = newTableData[j];
							newTableData[j] = temp;
						}
					}
				}
				this.isTop = true;
			}
			this.tableData = newTableData;
		}
	}
});

