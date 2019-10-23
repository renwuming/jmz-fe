// var HOST = 'http://www.renwuming.cn/jmz' // TODO
// var ROOT_HOST = 'http://www.renwuming.cn/auth' // TODO
// var CALLBACK = 'http://www.renwuming.cn/jmz-fe' // TODO
var HOST = 'https://www.renwuming.cn/jmz-pc'
var AUTH_HOST = 'https://www.renwuming.cn/auth'
var CALLBACK = 'https://www.renwuming.cn/jmz-fe'

function getQuery(key) {
  var result = location.search
    .substr(1)
    .match(new RegExp('(?:^|&)' + key + '=(.+?)(?:$|&)'))
  return result ? result[1] : result
}

function gotoLogin() {
  $.ajax({
    url: AUTH_HOST + '/user/login/url?redirect=' + CALLBACK,
    type: 'GET',
    success: function(url) {
      window.location = url
    }
  })
}
