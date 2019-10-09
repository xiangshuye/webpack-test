export function dateFormatFromString(str) {
    return datetimeformatFromString(str).substr(0, 10)
}

export function stringFromDate(date) {
    return datetimeformatFromString(date).substr(0, 16);
}

export function stringFromnDate(date) {
    let t;
    if (date) {
        t = new Date(date);
    } else {
        t = new Date();
    }
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = t.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let hour = t.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    let minute = t.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }

    return year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
}

export function stringFromnDateToNormal(date) {
    let t;
    if (date) {
        t = new Date(date);
    } else {
        t = new Date();
    }
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = t.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let hour = t.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    let minute = t.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }

    return month + '月' + day + '日 ' + hour + ':' + minute;
}

export function twoDateTime() {
    let t = new Date();
    let y = t.getFullYear();
    let m = t.getMonth() + 1;
    if (m < 10) {
        m = '0' + m;
    }
    let date1 = y + '/' + m + '/01';
    let date2 = null;
    switch (m) {
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
            date2 = y + '/' + m + '/31';
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            date2 = y + '/' + m + '/30';
            break;
        case '02':
            if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
                date2 = y + '/' + m + '/29';
            } else {
                date2 = y + '/' + m + '/28';
            }
            break;
    }

    return [new Date(date1 + ' 00:00'), new Date(date2 + ' 23:59')];
}


export function datetimeformatFromString(str) {
    let t;
    if (str) {
        t = new Date(str);
    } else {
        t = new Date();
    }
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = t.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let hour = t.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    let minute = t.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    let second = t.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }

    return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
}


export function timetrans(d) {
    // let date = new Date(d);//如果date为10位不需要乘1000
    return datetimeformatFromString(d).replace(/\//g, '-');
}


export function getDay(time1, time2) {
    let t1 = new Date(time1).getTime();
    let t2 = new Date(time2).getTime();
    return Math.ceil((t1 - t2) / 24 / 60 / 60 / 1000);
}

export function yearLists() {
    let start = 2018;
    let today = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    // 发布去除注释
    // if (month <= 8) {
    //     today = today - 1;
    // }
    let m = today - start;
    let temp = [];
    for (let i = 0; i <= m; i++) {
        temp.push({
            value: `${start + i}`,
            name: `${start + i}-${start + i + 1}`
        });
    }
    return temp;
}

export function todayYear() {
    let today = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    if (month <= 8) {
        today = today - 1;
    }
    return today + ''
}

export function todayTerm() {
    let month = new Date().getMonth() + 1;
    if (month <= 8) {
        return 2
    }
    return 1
}
