"use strict";
// baseUrl: "http://rap.taobao.org/mockjsdata/8514",
var obj={};

obj={
    baseUrl: "https://girl.xxingyun.com",
    cdn:'http://cdn.xxingyun.com',
    basePath: ""
};

// baseUrl: "http://123.207.126.102:28080",

// @if NODE_ENV=='development'
    obj={
        baseUrl: "https://dashi.xxingyun.com",
        cdn:'http://dashi-1253107337.file.myqcloud.com',
        basePath: "",
        appId:'wx5b60e70d015fa3af'
    };
// @endif

// @if NODE_ENV=='production'
        obj={
            baseUrl: "https://dashi.xxingyun.com",
            cdn:'http://dashi-1253107337.file.myqcloud.com',
            basePath: "",
            appId:'wx5b60e70d015fa3af'
        };
// @endif



module.exports=obj;