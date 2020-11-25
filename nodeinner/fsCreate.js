const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err){
        if(err.code === 'ENOENT') {
            console.log('폴더 없음');
        }
    }
})