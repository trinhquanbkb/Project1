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
master: điều quan trọng nên nhắc nhiều lần, không push lên đây )))

branch-1: login (phần đăng nhập, sẽ tạo ra một token chứa userType của người dùng) (quân)
branch-2: register (quân)
branch-3: forgotPassword(quân)
branch-4: authentication (sẽ decode token và ném dữ liệu là userType sang cho bên authorization) (quân)
branch-5: authorization (phân quyền cho người dùng, được sử dụng phía routes để cho phép người dùng được sử dụng tính năng nào)
branch-6: CRUD trong Books (quân)
branch-7: CRUD trong cardStudent (quân)

branch-8: rechargeCard (nạp thẻ cho sinh viên ngoài trường), payMoney (mỗi tháng sẽ trừ một khoản tiền từ số dư trong thẻ, 10k/tháng) (quang)
branch-9: totalBook (tổng số quyển sách của 1 loại sách) (quang)
branch-10: CRUD trong place (quang)
branch-11: historyBookofStudent (xem lịch sử mượn sách của sinh viên về sách đã giả và chưa giả) (quang)
branch-12: extendBook (gia hạn sách cho sinh viên) (quang)
branch-13: minTime (sinh viên mượn sách nếu sách không được tìm thấy sẽ show ra màn hình thời gian ngắn nhất có thể mượn) (quang)
....
