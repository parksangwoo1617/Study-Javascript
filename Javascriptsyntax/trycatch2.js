const fs = require('fs');
function readSketchyFile() {
    try{
        fs.readFile('hello.txt', function(err, data) {
            if(err) throw err;
            console.log(data);
        });
    } catch(err) {
        console.log('warning: minor issue occurred, program continuing');
    }
}
readSketchyFile();