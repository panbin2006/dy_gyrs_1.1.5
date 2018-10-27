//var basicUrl='http://39.108.7.251:88/gyrs/';
var basicUrl='http://192.168.101.88/zzjb_tp5/public/index/';

//	读取权限（plus.storage方式）
	function qxcx(){
		var qx_str = localStorage.getItem('qx'); //读取权限string
		qx = JSON.parse(qx_str);
		qx = eval('(' + qx + ')');
//					mui.toast(typeof(qx[0].PPrint));
		//console.log(qx_str);
		//if(qx[0].PPrint=='1'){
		//	mui.toast(1);
		//}else{
		//	mui.toast(0);
		//}
	}
				
				
//获取指定form中的所有的<input>对象
    function getElements(formId) {
        var form = document.getElementById(formId);
        var elements = new Array();
        var tagElements = form.getElementsByTagName('input');
        for (var j = 0; j < tagElements.length; j++){
//          elements.push(tagElements[j]);
            elements[tagElements[j].id]=tagElements[j]; //tagElements[j].id表单id
        }
        return elements;
    }
    //获取单个input中的【name,value】数组
    function inputSelector(element) {
        if (element.checked)
            return [element.name, element.value];
    }
    function input(element) {
        switch (element.type.toLowerCase()) {
            case 'submit':
            case 'hidden':
            case 'password':
            case 'text':
                return [element.name, element.value];
            case 'checkbox':
            case 'radio':
                return inputSelector(element);
        }
        return false;
    }
    //组合URL
    function serializeElement(element) {
        var method = element.tagName.toLowerCase();
        var parameter = input(element);
        if (parameter) {
            var key = encodeURIComponent(parameter[0]);
            if (key.length == 0) return;

            if (parameter[1].constructor != Array)
                parameter[1] = [parameter[1]];
            var values = parameter[1];
            var results = [];
            for (var i=0; i<values.length; i++) {
                results.push(key + '=' + encodeURIComponent(values[i]));
            }
            return results.join('&');
        }
    }
    //调用方法
    function serializeForm(formId) {
        var elements = getElements(formId);
        var queryComponents = new Array();
        for (var i = 0; i < elements.length; i++) {
            var queryComponent = serializeElement(elements[i]);
            if (queryComponent)
                queryComponents.push(queryComponent);
        }
        return queryComponents.join('&');
    }
    function getFormInfo(){
        var params = serializeForm('login');
        alert(params);
    }
    
	//单据代码 生成
	function coding(ModuleID,CoID,IsUpdate,PDate,PType){
		dh = '';
		mui.ajax({
  			url:basicUrl+'scoding/index', //tp5
  			data:{
  				ModuleID:ModuleID,
  				CoID:CoID,
  				IsUpdate:IsUpdate,
  				PDate:PDate,
  				PType:PType
  			},
  			dataType:'json',//服务器返回json格式数据
  			type:'get',//HTTP请求类型
  			async:false,//这里选择异步为false，那么这个程序执行到这里的时候会暂停，等待
                    //数据加载完成后才继续执行
  			timeout:10000,//超时时间设置为10秒；
  			success:function(data){
					var obj=eval('(' + data + ')');
					dh = obj['0'].codeid;
//					console.log(obj['0'].codeid);
  			},
  			error:function(xhr,type,errorThrown){
  				mui.toast('网络连接失败，请联系管理员');
  			}
  		});
  		return dh;
	}
