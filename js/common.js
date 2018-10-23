//var basicUrl='http://39.108.7.251:88/gyrs/';
var basicUrl='http://192.168.101.88/zzjb_tp5/public/index/';

//				读取权限（plus.storage方式）
				function qxcx(){
					var qx_str = localStorage.getItem('qx'); //读取权限string
					qx = JSON.parse(qx_str);
//					mui.toast(typeof(qx[0].PPrint));
					//console.log(qx_str);
					//if(qx[0].PPrint=='1'){
					//	mui.toast(1);
					//}else{
					//	mui.toast(0);
					//}
				}