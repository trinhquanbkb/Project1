const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { name, mssv, phoneNumber, email, password, userType } = req.body
    try {
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        if(userType == "user" || userType == "userOtherSchool"){
            const newUser = await Users.create({ name, mssv, phoneNumber, email, password: hashPassword , userType})
            res.status(201).send(newUser)
        }
        else{
            res.status(400).send("userType invalid")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { mssv, password } = req.body
    try {
        const results = await Users.findOne({ where: { mssv } })
        if (results) {
            //giải băm mật khẩu và trả về true hoặc false
            const isAuthen = bcrypt.compareSync(password, results.dataValues.password)
            if (isAuthen === true) {
                //đăng nhập sẽ nhận được token
                const token = jwt.sign({ mssv: results.mssv, userType: results.userType }, "trinhhoangquan", { expiresIn: 60 * 60 })
                res.status(200).send({ message: "Login success", token })
            } else {
                res.status(400).send(`Password is not exist`)
            }
        }
    } catch (error) {
        res.status(400).send(`Mssv is not exist`)
    }
}


//có 3 input vào là mssv, số điện thoại, email và mật khẩu mới, điền lại mật khẩu mới
const forgotPassword = async (req, res) => {
    const { mssv, phoneNumber, email, newPassword, refillnewPassword } = req.body
    try {
        const results = await Users.findOne({
            where: {
                phoneNumber: phoneNumber,
                email: email,
                mssv: mssv
            }
        })
        if (results) {
            if (newPassword === refillnewPassword) {
                //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
                const salt = bcrypt.genSaltSync(10)
                //generate password
                const hashPassword = bcrypt.hashSync(newPassword, salt)
                const updatePassword = await Users.update({ password: hashPassword }, {
                    where: {
                        phoneNumber: phoneNumber,
                        email: email,
                        mssv: mssv
                    }
                });
                if (updatePassword) {
                    res.status(200).send("Change password success")
                }
                else {
                    res.status(500).send("Change password failure")
                }
            }
            else {
                throw new Error("new password with re-fill new password unlike")
            }
        } else {
            throw new Error("phoneNumber or email is not exist")
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


//changePassword dùng khi user muốn thay đổi lại mật khẩu, cần nhập mật khẩu cũ và mật khẩu mới vào, tính năng này chỉ được
//sử dụng khi đã login và authentication sẽ decode ra một req.user chứa mssv và userType
const changePassword = async (req, res) => {
    const { oldPassword, newPassword, refillnewPassword } = req.body
    const { mssv } = req.user
    try {
        const user = await Users.findOne({
            where: {
                mssv
            }
        })
        if (user) {
            //kiểm tra oldPassword nhập vào đã đúng chưa
            const isAuthen = bcrypt.compareSync(oldPassword, user.dataValues.password)
            if (isAuthen) {
                if (newPassword === refillnewPassword) {
                    //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
                    const salt = bcrypt.genSaltSync(10)
                    //generate password
                    const hashPassword = bcrypt.hashSync(newPassword, salt)
                    const updatePassword = await Users.update({ password: hashPassword }, {
                        where: {
                            mssv,
                        }
                    })
                    if(updatePassword){
                        res.status(201).send("Change password success")
                    }else{
                        res.status(500).send("Change password failure")
                    }
                } else {
                    throw new Error("New password with re-fill new password unlike")
                }
            } else {
                throw new Error("Entered wrong old password")
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const registerAdmin = async (req, res) => {
    const { name, mssv, phoneNumber, email, password } = req.body
    try {
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await Users.create({ name, mssv, phoneNumber, email, password: hashPassword, userType: "admin" })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register,
    login,
    forgotPassword,
    changePassword,
    registerAdmin,
}

