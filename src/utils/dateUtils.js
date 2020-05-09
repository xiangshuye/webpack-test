
Date.prototype.Format = function (tmpFmt) {  /// "yyyy.MM.dd hh:mm:ss"
    var fmt = tmpFmt;
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1
        .length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
            (o[k]) : (("00" +
                o[k]).substr(("" + o[k]).length)));
    return fmt;
}



/**
 *
 * @param {*} str
 * @return yyyy/MM/dd hh:mm:ss
 */
export function datetimeformatFromString(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy/MM/dd hh:mm:ss")
}
/**
 *
 * @param {*} str
 * @return yyyy/MM/dd
 */
export function datetimeformatFromString1(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy/MM/dd")
}

/**
 *
 * @param {*} d
 * @return yyyy-MM-dd hh:mm:ss
 */
export function timetrans(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy-MM-dd hh:mm:ss")
}

/**
 *
 * @param {*} str
 * @return yyyy-MM-dd
 */
export function dateFormatFromString(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy-MM-dd")
}


/**
 *
 * @param {*} str
 * @return yyyy-MM-dd hh:mm
 */
export function stringFromDate1(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy-MM-dd hh:mm")
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDate2(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy年MM月dd日 hh:mm")
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDate3(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("yyyy年MM月dd日")
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDateToNormal(str) {
    if (!str) {
        return '';
    }
    return new Date(str).Format("MM月dd日 hh:mm")
}


/**
 *
 * @param {*} time1
 * @param {*} time2
 * @return 两个时间相隔天数
 */
export function apartDays(time1, time2) {
    let t1 = new Date(time1).getTime();
    let t2 = new Date(time2).getTime();
    return Math.ceil((t1 - t2) / 24 / 60 / 60 / 1000);
}

