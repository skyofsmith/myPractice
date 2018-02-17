requirejs.config({
    baseUrl: 'js/',
    paths: {
        'jquery': ['../lib/jquery', '//cnd.voot.com/jquery']
        // 'jquery': '../lib/jquery'
    },
    shim: {

    },
    map: {
        '*': {
            'jquery': '../lib/jquery'
        },
        'helper': {
            'jquery': '../lib/jquery'
        },
        'helper2': {
            'jquery': '../lib/jquery.min'
        }
    },
    //加载js超时的时长， 单位：s
    waitSeonds: 0,
    urlArgs: '_=' + new Date().getTime()
});

require(['helper'], function (helper) {
    var str = helper.trim('       amd   ');
    console.log(str);
});