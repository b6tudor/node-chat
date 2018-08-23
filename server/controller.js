const path = require('path');
const publicPath = path.join(__dirname, '../public');


module.exports = {

    greetings(req,res){
        res.render(`${publicPath}\\index.html`);
    }


}

