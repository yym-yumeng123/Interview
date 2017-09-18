/*
接口：'/loadMore'
方式：'get'
数据类型： 'json'
长度： 6
*/
app.get('/news', function (req, res) {
    var pos = req.query.index;
    var len = req.query.length;
    var data = [];
    for(var i=0; i<len; i++)
        data.push('新闻'+(parseInt(pos)+i));
    res.send(data);
});


