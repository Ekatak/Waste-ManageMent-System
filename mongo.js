const mongoose=require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/registration",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>
{
    console.log('error');
})

const tutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const collection = mongoose.model('Tut', tutSchema);

// Data to be inserted into the MongoDB collection
const data = [
    {
        name: "Ayushman",
        email: "Ayushman123@gmail.com",
        password: "12345678", // It's good practice to use `password` instead of `Password`
    },
    {
        name: "Priya",
        email: "Priya123@gmail.com",
        password: "12345",
    },
    {
        name: "Avinash",
        email: "Avinash@gmail.com",
        password: "123456781",
    },
    {
        name: "Sakshi",
        email: "Sakshi@gmail.com",
        password: "1234567t1",
    },
];

// Insert multiple documents into the MongoDB collection
collection.insertMany(data)
    .then(() => {
        console.log('Data inserted successfully');
    })
    .catch((err) => {
        console.error('Insert error:', err);
    });