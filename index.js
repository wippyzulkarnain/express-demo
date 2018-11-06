const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todoList =[
    {description : "Learn React",
done : false},
{description : "Learn Redux",
done : false}
]
//API Info
app.get("/", (req, res) => {
  res.send("This is API demo");
});
//Read
app.get("/todos", (req, res) => {
  res.send(todoList);
});
//Create
app.post("/todos", (req, res) => {
  todoList.push(req.body)
    res.send(todoList);
});
//search
app.get("/todos/search", (req, res) => {
    const result = todoList.filter((todo,index)=>{
        return todo.description ===  req.query.description 
    })
    res.send(result);
  });
//Read one data
app.get("/todos/:id", (req, res) => {
  res.send(todoList[req.params.id]);
});

//update
app.put("/todos/:id", (req, res) => {
    todoList[req.params.id] = req.body
  res.send(todoList);
});

//delete one
app.delete("/todos/:id", (req, res) => {
    todoList.splice(req.params.id,1)
  res.send(todoList);
});

//delete all
app.delete("/todos", (req, res) => {
  todoList=[]
    res.send(todoList);
});


app.listen(3000, () => console.log("application running on port 3000"));
