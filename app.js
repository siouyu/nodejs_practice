// 引入 Express 模組
import express from "express";

// 建立一個 Express 應用程式
const app = express();

// 設定一個路由
app.get("/", (req, res) => {
	res.send("成功跑起來了");
});

// 監聽指定的埠號
app.listen(3000, () => {
	console.log("伺服器已啟動，監聽埠號 3000");
});
