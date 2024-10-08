import express from "express";
import { MongoClient } from "mongodb";
const uri =
	"mongodb+srv://<username>:<password>@cluster0.rcs5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
await client.connect();

// 建立一個 Express 應用程式
const app = express();

// 首頁路由
app.get("/", (req, res) => {
	res.send("歡迎來到首頁！");
});

// 關於頁面路由
app.get("/about", (req, res) => {
	res.send("這裡是「關於我們」的頁面");
});

// 監聽指定的埠號
app.listen(3000, () => {
	console.log("伺服器已啟動，監聽埠號 3000");
});
