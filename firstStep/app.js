// step:1 npm init -y 

// importing express
const express=require("express");
//creating express instance
const app=express();

//activating server
app.listen(4000,()=>{
    console.log(`server is running at 4000 port`);
})

//allow parsing data 
app.use(express.json())

//data fetching request route
app.get("/",(req,res)=>{
    res.send("Hello aman ")
})

app.get("/user/brand",(req,res)=>{
    res.send("Aman your car is yolo")
})


const apna=(req,res)=>{
    try {
        res.send("Hello i am in")
    } catch (error) {
        console.log(error);
    }
}
//sending data route
app.post("/aman",(req,res)=>{
    try {
        const {name,age}=req.body;
        return res.json({
            success:true,
          data:{name,age}
        })
    } catch (error) {
        return res.json({
            message:"failed",
            error:error
        })
    }
})

app.get("/aman",apna)


