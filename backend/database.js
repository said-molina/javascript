const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
})

  .then(db => console.log('DB is Conect'))
  .catch(err => console.error(err));