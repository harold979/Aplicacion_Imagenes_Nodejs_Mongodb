const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harold:Pazmundial19@cluster0.iuvk0.mongodb.net/prueba_tecnica?retryWrites=true&w=majority',{
    //mongoose.connect('mongodb+srv://harold:Pazmundial18@cluster0.iuvk0.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
.then(db => console.log(`DB us Connected`))
.catch(err=> console.error(err));



