
//日期格式化
function myData(date){
    var date= new Date(Date.parse(date));  
    var y = date.getFullYear();  
    var m = date.getMonth()+1; 
    if(m<10){
    	m='0'+m;
    }
    var d = date.getDate(); 
    if(d<10){
    	d='0'+d;
    }
    return y+'-'+m+'-'+d;  
};  

//开始时间
function myDataS(date){
	return myData(date)+' 00:00:01';
}

//截止时间
function myDataE(date){
	return myData(date)+' 23:59:59';
}
