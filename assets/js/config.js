// var HOST = 'http://localhost:9999' // todo
var HOST = 'https://www.renwuming.cn/jmz'


function getQuery(key) {
    var result = location.search.substr(1).match(new RegExp('(?:^|&)' + key + '=(.+?)(?:$|&)'));
    return result ? result[1] : result;
}

function gotoLogin() {
    window.location = `./login?callback=${encodeURIComponent(window.location)}`
}
