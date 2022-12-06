
# Getting Started with Project I 
## `Start project`: 
npm start

## `Run database`: 
sequelize db:migrate 

## `Update Seed`: 
sequelize db:seed:all 

## `Delete table in database`: 
sequelize db:migrate:undo:all 







# BRANCH: 

## `BACKEND`


### `Ưu tiên 1`:


branch-1: register (cần mã hóa password vào db) (quân)                     -----done-----

branch-2: login (phần đăng nhập, sẽ tạo ra một token chứa userType của người dùng) (quân)          -----done-----

branch-3: forgotPassword, changePassword (quân)             -----done-----

branch-4: authentication (sẽ decode token và ném dữ liệu là userType sang cho bên authorization) (quân)          -----done-----

branch-5: authorization (phân quyền cho người dùng, được sử dụng phía routes để cho phép người dùng được sử dụng tính năng nào) (quân)          -----done-----



### `Ưu tiên 2`:


branch-6: CRUD trong Books (quân)             -----done-----

branch-7: CRUD trong CardStudent (quang)       -----done-----

branch-8: CRUD trong Place (lập)              -----done-----



### `Ưu tiên 3`:


branch-9: rechargeCard (nạp thẻ cho sinh viên ngoài trường, nạp nhiều hơn 50k, số tiền nạp vào sẽ cộng với số tiền còn lại trong tài khoản) (quang)    -----done----

branch-10: payMoney (mỗi tháng sẽ trừ một khoản tiền từ số dư trong thẻ, 10k/tháng và số dư trong thẻ phải luôn lớn hơn 50k để nhỡ user cuỗm sách mà không bắt được thì sẽ còn có một khoản nho nhỏ) (quang)

branch-11: historyBookBorrowOfStudent (xem lịch sử mượn sách của sinh viên về sách chưa giả) (lập)   -----done-----

branch-12: extendBook (gia hạn sách cho sinh viên thêm 2 tuần, nếu sinh viên chưa gia hạn với sách bao giờ thì status của sách là 0, nếu đã gia hạn rồi thì status là 1 và nếu sau 2 tuần kể từ khi gia hạn vẫn chưa giả sách sẽ để status là 'time borrow book is expired'. Các trạng thái status này nằm trong đối tượng của constant/index.js) (quang)   -----done-----

branch-13: minTime (sinh viên mượn sách nếu sách không được tìm thấy sẽ show ra màn hình thời gian ngắn nhất có thể mượn) (quang)

branch-14: placeUser (tạo chức năng đặt chỗ cho sinh viên trong và ngoài trường, cứ sau 1 ngày sẽ update status của các place về thành 0 hết) (quang)

branch-15: unborrowListBook (liệt kê danh sách các quyển sách chưa được mượn, các quyển sách đó có userId là null) (quang)   -----done-----

branch-16: totalBook (tổng số quyển sách của 1 loại sách, chỉ tính những quyển còn lại chưa được mượn) (lập)    -----done-----

branch-17: listUser (xem danh sách người dùng là sinh viên trong trường hoặc ngoài trường kèm số sách họ đang mượn-tức là các quyển sách có id của các sinh viên đấy) (lập)   

branch-18: registerAdmin (khi admin đăng nhập thì sẽ có phần đăng ký tài khoản để tạo ra một admin khác) (quân)    -----done-----

branch-19: borrowBook (mượn sách theo id - id của book,cần check dayBorrow với userId có null hay không => cần update dayBorrow là time now và userId là ai, endate là gì) (quang)    -----done-----

branch-20: giveBook (trả sách theo id-id của book, cần update dayBorrow và userId, endDate là null, status về '0') (quang)    -----done-----

branch-21: findPlaceByPositionPlace (tìm kiếm theo positionPlace-vị trí của ghế) (quang)    -----done-----



## `FRONTEND`:

HTML -> CSS -> Boostrap (style của html, css) -> Javascript DOM -> ReactJS
