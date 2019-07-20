var express =require ("express")
var path =require("path");

var port = process.env.port || 9000;

var app =express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname + "/home.html"))
})

app.get("/reserve", function(req,res) {
    res.sendFile(path.join(__dirname + "/reserve.html"))
})

app.get("/tables", function(req,res) {
    res.sendFile(path.join(__dirname + "/tables.html"))
})


app.listen(port, function(){
    console.log("Listening on port " + port)
});

var tableData = [{
    name: "Jon Smith",
    phoneNumber: "5555555555",
    email: "mail@mail.com",
    uniqueId: "000"
}]

var waitListData = [{
    name: "Jon Smith",
    phoneNumber: "5555555555",
    email: "mail@mail.com",
    uniqueId: "000"

}]

