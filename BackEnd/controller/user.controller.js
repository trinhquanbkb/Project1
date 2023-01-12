const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Op } = require("sequelize");


const register = async (req, res) => {
    const { name, mssv, phoneNumber, email, password, userType } = req.body
    try {
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        if (userType == "user" || userType == "userOtherSchool") {
            const newUser = await Users.create({ name, mssv, phoneNumber, email, password: hashPassword, userType })
            res.status(201).send(newUser)
        }
        else {
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
                const token = jwt.sign({ userId: results.id, userType: results.userType }, "trinhhoangquan", { expiresIn: 60 * 60 })
                res.status(200).send({ message: "Login success", token })
            } else {
                throw new Error(`Password is not exist`)
            }
        }else{
            throw new Error(`Mssv is not exist`)
        }
    } catch (error) {
        res.status(400).send( `${error}` )
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
                    if (updatePassword) {
                        res.status(201).send("Change password success")
                    } else {
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

const getAllStudent = async (req, res) => {
    try {
        const students = await Users.findAll({
            where: {
                userType: {
                    [Op.ne]: 'admin'
                }
            }
        })
        if (students) {
            res.status(200).send(students)
        } else {
            throw new Error('Cannot get all student')
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const updateStudentById = async (req, res) => {
    const { id } = req.params
    let { name, mssv, phoneNumber, email } = req.body
    try {
        const student = await Users.findOne({
            where: {
                id
            }
        })
        //check data is null
        name = (name == '') ? student.dataValues.name : name
        mssv = (mssv == '') ? student.dataValues.mssv : mssv
        phoneNumber = (phoneNumber == '') ? student.dataValues.phoneNumber : phoneNumber
        email = (email == '') ? student.dataValues.email : email
        const updateStudent = await Users.update({name: name, mssv: mssv, phoneNumber: phoneNumber, email:email}, {
            where: {
                id,
                userType: {
                    [Op.ne]: 'admin'
                }
            }
        })
        if(updateStudent){
            res.status(201).send(`Update student succes`)
        }else{
            throw new Error('Error update student')
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}

const deleteStudentById = async (req, res) => {
    const {id} = req.params
    try{
        const deleteStudent = await Users.update({isDelete: 1},{
            where:{
                id
            }
        })
        if(deleteStudent){
            res.status(201).send('Delete student success')
        }else{
            throw new Error('Error delete student')
        }
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    register,
    login,
    forgotPassword,
    changePassword,
    registerAdmin,
    getAllStudent,
    updateStudentById,
    deleteStudentById,
}

