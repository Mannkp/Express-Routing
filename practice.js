const express = require('express');
const app = express();
const port = 7030;

app.get("/", (req, res)=>{
    try{
        res.status(200).send('<h1 style="color: navy;font-family: Arial, Helvetica, sans-serif;">Welcome to Mann\'s Website</h1>');
    }
    catch(error){
        console.error(error);
    }
})

app.get("/r/:subreddit" , (req, res) => {
    const {subreddit} = req.params;
    console.log('you searched for: ', subreddit);
    res.status(200).send(`<h1 style='color: olive;font-family: Arial, Helvetica, sans-serif;'>You searched for: "${subreddit}"</h1>`);
})

app.get("/r/:subreddit/:category" , (req, res) => {
    const {subreddit, category} = req.params;
    console.log('you searched for: ', subreddit);
    console.log('you selected category: ', category);
    res.status(200).send(`<h1 style='color: olive;font-family: Arial, Helvetica, sans-serif;'>You searched for: "${subreddit}/${category}"</h1>`);
})

app.use("*", (req, res)=>{
    console.log("May be link not found(ERROR)");
    res.status(404).send("<h1 style='color: red;font-family: Arial, Helvetica, sans-serif;'>SORRY! ERROR 404, We cannot find the link you searched for! </h1>");
})

app.listen(port, ()=>{
    console.log(`Server Listening on port number: ${port}`);
})