import rp from 'request-promise';

class indexModel{
    constructor(ctx) {
        this.ctx = ctx;
    }

    updateNum() {
        // 参看npmjs
        const options = {
            method: 'get',
            uri: 'http://localhost/phpweb/praise.php',
        };
        
        return new Promise((resolve, reject) => {
            rp(options)
                .then(function (result) {
                    const info = JSON.parse(result);

                    if(info.seccess) {
                        resolve({
                            data: 1
                        });
                    } else {
                        reject({
                            data: 0
                        });
                    }
                })
                .catch(function (err) {
                    // get failed... 
                });
        })   
    }
}

export default indexModel;