exports.getDate = function(strFormat) {
    var _curr = new Date();
    var date = _curr.getDate()
    var year = _curr.getFullYear()
    var month = _curr.getMonth()+1
    var hour = _curr.getHours()
    var minute = _curr.getMinutes()
    var second = _curr.getSeconds()
    if(strFormat === 'yyyyMMddHHmmSS') {
        return year + '' + month + ''+ date+ ''+ hour+ ''+ minute+ ''+ second;
    }else if(strFormat === 'yyyy/MM/dd HH:mm:SS') {
        return year + '/' + month + '/'+ date+ ' '+ hour+ ':'+ minute+ ':'+ second;
    }else if(strFormat === 'yyyy-MM-dd HH:mm:SS') {
        return year + '-' + month + '-'+ date+ ' '+ hour+ ':'+ minute+ ':'+ second;
    }else if(strFormat === 'dd/MM/yyyy HH:mm:SS') {
        return date + '/' + month + '/'+ year+ ' '+ hour+ ':'+ minute+ ':'+ second;
    }else if(strFormat === 'dd-MM-yyyy HH:mm:SS') {
        return date + '-' + month + '-'+ year+ ' '+ hour+ ':'+ minute+ ':'+ second;
    }else{
        return _curr
    }
}