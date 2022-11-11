//Start project: 
npm start

//Run database: 
sequelize db:migrate 

//Update Seed: 
sequelize db:seed:all 

//Delete table in database: 
sequelize db:migrate:undo:all 


Config:
node: v16.17.1 




Branch: not master
master: điều quan trọng nên nhắc nhiều lần, không push lên đây :)))

Ưu tiên 1:
branch-1: register (cần mã hóa password vào db) (quân)                     -----done-----
branch-2: login (phần đăng nhập, sẽ tạo ra một token chứa userType của người dùng) (quân)          -----done-----
branch-3: forgotPassword, changePassword (quân)             -----done-----
branch-4: authentication (sẽ decode token và ném dữ liệu là userType sang cho bên authorization) (quân)          -----done-----
branch-5: authorization (phân quyền cho người dùng, được sử dụng phía routes để cho phép người dùng được sử dụng tính năng nào) (quân)          -----done-----

Ưu tiên 2:
branch-6: CRUD trong Books (quân)
branch-7: CRUD trong CardStudent (quang)
branch-8: CRUD trong Place (lập)

Ưu tiên 3:
branch-9: rechargeCard (nạp thẻ cho sinh viên ngoài trường, nạp nhiều hơn 50k) (quang)
branch-10: payMoney (mỗi tháng sẽ trừ một khoản tiền từ số dư trong thẻ, 10k/tháng và số dư trong thẻ phải luôn lớn hơn 50k để nhỡ user cuỗm sách mà không bắt được thì sẽ còn có một khoản nho nhỏ) (lập)
branch-11: historyBookofStudent (xem lịch sử mượn sách của sinh viên về sách đã giả và chưa giả) (lập)
branch-12: extendBook (gia hạn sách cho sinh viên) (quang)
branch-13: minTime (sinh viên mượn sách nếu sách không được tìm thấy sẽ show ra màn hình thời gian ngắn nhất có thể mượn) (lập)
branch-14: placeUser (tạo chức năng đặt chỗ cho sinh viên trong và ngoài trường, cứ sau 1 ngày sẽ update status của các place về thành 0 hết) (quang)
branch-15: unborrowListBook (liệt kê danh sách các quyển sách chưa được mượn, các quyển sách đó có userId là null) (lập)
branch-16: totalBook (tổng số quyển sách của 1 loại sách, chỉ tính những quyển còn lại chưa được mượn) (lập)
branch-17: listUser (xem danh sách người dùng là sinh viên trong trường hoặc ngoài trường kèm số sách họ đã và đang mượn) (lập)


Chú ý: 
