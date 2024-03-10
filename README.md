# nodejs_wd18339

## Buổi 1 Tạo Node Server
- Tải và cài đặt Nodejs: https://nodejs.org/en
- Tạo dự án `npm init -y`
- Cài đặt thư viện express `npm i express`
- Tạo file index.js bên trong thư mục src
- Copy nội dung
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
- Cài đặt node-mon: `npm i nodemon --save-dev`
- Trong file package.json tại key "script" `THÊM` nội dung
```
 "scripts": {
    ... 
    "start": "nodemon src/index.js"
  },
```
- Chạy server sử dụng lệch `npm start`


## Buổi 2

- cài đặt 

```
npm i express-handlebars
```

- tạo cấu trúc thư mục
- làm theo Usage https://www.npmjs.com/package/express-handlebars