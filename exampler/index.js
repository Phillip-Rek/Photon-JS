const express = require("express");
const app = express();
const fs = require('fs') // this engine requires the fs module
const ft = require("../src/photon")


app.engine('html', ft.engine)
app.set('views', './views') // specify the views directory
app.set('view engine', 'html') // register the template engine

app.get('/', function (req, res) {
    res.render('main', {
        user: "User-1",
        users: [{
                name: "User-1",
                lastname: "Last-N-1"
            },
            {
                name: "User-2",
                lastname: "Last-N-2"
            }
        ],
        complex: [
            [1, 2],
            [6, 7],
            [8, 9]
        ],
        concat: (param = "", param2 = "") => {
            return param + param2;
        },
        isString: (arg) => typeof arg === "string"
    })
})

app.listen(3000, (err) => {
    return err && console.err(err) ||
        console.log("server started on port 3000")
})