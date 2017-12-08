'use strict';

console.log('Hello world');

var App = {
    destinos: ['http://www.boe.es'],
    path: require('path'),
    express: require('express'),
    exec: require('child_process').exec,
    isWin : /^win/.test(process.platform)
}
App.appPath = App.isWin ? App.path.normalize(App.path.dirname(__filename) + '/bin/win/') : ''
var webapp =App.express();

webapp.get('/*', function (req, res) {
    var url = req.originalUrl
    var type = url.indexOf("?") > -1 ? url.split("?")[1] : null
    

    if (type != null) {
        var url = url.indexOf("/") > -1 ? url.split("?")[0] : null
        if (url != null && url.indexOf("/")>-1) {
            var origin = url.split("/")
            if (origin[1] = "http") {
                var domain = origin[1] + "://" + origin[2] + "." + origin[3] + "." + origin[4]
                origin = origin.slice(5, origin.length)
                var file = domain + '/' + origin.join("/")
                console.log(url, file, type)
                res.send(url + "->" + file + " type->" + type)
                var _command = App.appPath+ ' curl -i -H "fileUrl:"' + file + ' -H "Accept:text/plain" -X PUT http://localhost:9998/tika'

                App.exec(_command, function (err, data) {
                    console.log(data.toString());
                });
            } else {
                res.send('url mal formada falta http o https de destino')
            }
        } else {
            res.send('url mal formada')
        }
    } else {
        res.send('url mal formada')
    }

    //console.log(url)
    //debugger
})

webapp.listen(8080)
