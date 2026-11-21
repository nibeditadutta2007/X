import express from "express";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//test route
app.get("/",(req, res)=> {
    res.status(200).json({
        messsage: "X backend id running!"
    });
});

export default app;