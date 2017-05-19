window.testviewportfix = function(str, callback) {
    cordova.exec(callback, 
                function(err) {
                    callback('Nothing to echo.');
                }, 
                "viewportfix", 
                "testviewportfix", 
                [str]
    );
};