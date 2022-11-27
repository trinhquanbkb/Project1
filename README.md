
# Getting Started with Project I 
## Start project: 
npm start

## Run database: 
sequelize db:migrate 

## Update Seed: 
sequelize db:seed:all 

## Delete table in database: 
sequelize db:migrate:undo:all 



# BRANCH: 

## BACKEND
### Ưu tiên 1:
branch-1: register (cần mã hóa password vào db) (quân)                     -----done-----
branch-2: login (phần đăng nhập, sẽ tạo ra một token chứa userType của người dùng) (quân)          -----done-----
branch-3: forgotPassword, changePassword (quân)             -----done-----
branch-4: authentication (sẽ decode token và ném dữ liệu là userType sang cho bên authorization) (quân)          -----done-----
branch-5: authorization (phân quyền cho người dùng, được sử dụng phía routes để cho phép người dùng được sử dụng tính năng nào) (quân)          -----done-----

### Ưu tiên 2:
branch-6: CRUD trong Books (quân)             -----done-----
branch-7: CRUD trong CardStudent (quang)       -----done-----
branch-8: CRUD trong Place (lập)              -----done-----

### Ưu tiên 3:
branch-9: rechargeCard (nạp thẻ cho sinh viên ngoài trường, nạp nhiều hơn 50k) (quang)
branch-10: payMoney (mỗi tháng sẽ trừ một khoản tiền từ số dư trong thẻ, 10k/tháng và số dư trong thẻ phải luôn lớn hơn 50k để nhỡ user cuỗm sách mà không bắt được thì sẽ còn có một khoản nho nhỏ) (lập)
branch-11: historyBookofStudent (xem lịch sử mượn sách của sinh viên về sách đã giả và chưa giả) (lập)
branch-18: registerAdmin (khi admin đăng nhập thì sẽ có phần đăng k


## FRONTEND:

HTML -> CSS -> Boostrap (style của html, css) -> Javascript DOM -> ReactJS
