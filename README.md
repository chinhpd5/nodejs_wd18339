# nodejs_wd18339

## Buổi 1 Tạo Node Server
- Tải và cài đặt Nodejs: https://nodejs.org/en
- Tạo dự án `npm init -y`
- Cài đặt thư viện express `npm i express`
Documet: https://expressjs.com/
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
Document: https://www.npmjs.com/package//nodemon
- Trong file package.json tại key "script" `THÊM` nội dung
```
 "scripts": {
    ... 
    "start": "nodemon src/index.js"
  },
```
- Chạy server sử dụng lệch `npm start`


## Buổi 2

- Cài đặt express-handlebars `npm i express-handlebars`
Document: https://www.npmjs.com/package/express-handlebars
Doc: https://handlebarsjs.com/
- Tạo cấu trúc thư mục bên trong thư mục src
```
src
├── index.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

```
- Thêm vào trong 'src/index.js'
```
...
const { engine } = require('express-handlebars');
const path = require('path');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

...
```
- Sử dụng hàm `res.render('tên view')` để hiển thị giao diện
- Thêm nội dung vào trong các file
+ `src/views/layouts/main.handlebars`
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>WD18339</title>
</head>
<body>
    <div>Header</div>
        {{{body}}}
    <div>Footer</div>
</body>
</html>
```
+ `src/views/home.handlebars`
```
<h1>WD18338</h1>
```
- Thay đổi đuôi file `.hanlebars` thành `hbs`
- Sửa nội dung trong `src/index.js`
```
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
```

### Validate với mongoose:

- Chung:
+ required : boolean 
+ default : any
+ validate: function
+ unique: boolean

- String:
+ lowercase: boolean
+ uppercase: boolean
+ trim: boolean
+ minLength: number
+ maxLength: number

- Number:
+ min: number
+ max: number


## Buổi 9:

### Authentication (Xác thực): 
- Là hành động xác thực kiểm tra người dùng có phải là một người dùng hợp lệ trong hệ thống hay không

### Authorization (Ủy quyền): 
- Là quá trình cấp cho dùng dùng quyền truy cập vào 1 tài nguyên hoặc 1 chức năng cụ thể

### env (environment)
- Cài đặt `npm i dotenv`
- Trong Node.js và các ứng dụng web, "environment" thường được quản lý thông qua các biến môi trường (environment variables). 
- Các biến môi trường là các giá trị có thể được thiết lập và truy cập từ môi trường hoạt động của ứng dụng. 
- Chúng thường được sử dụng để lưu trữ các thông tin nhạy cảm như cấu hình database, API keys, hay các thông tin khác mà không muốn được lưu trữ trực tiếp trong mã nguồn.
- Sử dụng:
+ Tạo 1 file .env
+ Chứa nội dung 
  ```
  PORT=3000
  CONNECTIONSTRING_MONGODB= mongodb://127.0.0.1:27017/DatabaseName
  #...
  ```
+ Cách import: `import 'dotenv/config'`
+ Lấy giá trị: `process.env.KEY`

### Thư viện bcryptjs
- Cài đặt `npm i bcryptjs`
- Dùng để mã hóa mật khẩu người dùng
- Sử dụng:
+ Mã hóa: `bcryptjs.hash(PasswordString, salt)` trả về Password đã mã hóa có kiểu `string`
+ So sánh: `bcryptjs.compare(PasswordString, PaswordHashed)` trả về `true/false`

### Thư viện jsonwebtoken
- Cài đặt `npm i jsonwebtoken`
- Sau khi người dùng đăng nhập thành công (`Authentication`)
- JWT sẽ cung cấp cho người dùng 1 token (`Authorization`) có thời gian nhất định để người dùng có thể truy cập vào tài nguyên của server
- Sử dụng:
+ Tạo token: `jwt.sign({ data }, KEY_SECRET, { expiresIn: "time" })`
+ Kiểm tra: `jwt.verify(token, "123456", function (err, decoded) {})`
+ Lỗi sai token: `err.name == "JsonWebTokenError"`
+ Lỗi hết thời gian: `err.name == "TokenExpiredError"`