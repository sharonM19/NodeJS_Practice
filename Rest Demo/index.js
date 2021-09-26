const express = require("express");
const app = express();
var methodOverride = require("method-override");
const path = require("path");
const { v4: uuid } = require('uuid');
        uuid();


app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set("views" , path.join(__dirname ,"views"))
app.set('view engine' ,'ejs')


let comments = [

    {
        id : uuid(),
        username: 'Todd',
        comment : 'hello , that was funny'
    },
    {
        id : uuid(),
        username: 'Rex',
        comment : 'No comments please '
    },
    {
        id: uuid(),
        username: 'Dan',
        comment : 'Give more details on the issue'
    },
    {
        id: uuid(),
        username: 'Mike',
        comment : 'Any other solution'
    }

]

app.get('/comments' , (req,res) => {
    res.render('comments/index' , { comments })
})

// we need to create a new comment but we need to get the form  itself
app.get('/comments/new' , (req,res) => {
    res.render('comments/new')
})

app.post('/comments' ,(req,res) => {
    //console.log(req.body);
    const {username , comment} = req.body;
    comments.push({username ,comment ,id : uuid()})
    //res.send("IT WORKS YA")
    res.redirect('comments')
})

app.delete('/comments/:id' ,(req,res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

// to retrieve single comment
app.get('/comments/:id' , (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show' , { comment })
})

app.get('/comments/:id/edit' ,(req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit' , { comment })
})


// to update partial data
app.patch('/comments/:id',(req,res) => {
    const { id } = req.params;
    const newValue = req.body.comment;
    const foundValue = comments.find(c => c.id === id);
    foundValue.comment = newValue;
    res.redirect('/comments')

})


app.get("/tacos" , (req,res) => {
    res.send(" GET request for tacos");
})

app.post("/tacos" , (req,res) => {
    const { meat ,qty } = req.body;
    res.send(" POST request for tacos");
})

app.listen(3000, () => {
    console.log("Listening to the port 3000");
})