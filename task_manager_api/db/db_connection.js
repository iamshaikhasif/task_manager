const mongoose = require('mongoose');

const startDb = (url)=>{
mongoose
.connect(url)
.then(() => console.log(`db connection successful`))
.catch((err) => console.log(`db connection failed ${err}`));
}

module.exports = startDb
