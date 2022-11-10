const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { name, mssv, phoneNumber, email, password } = req.body
    try {
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await Users.create({ name, mssv, phoneNumber, email, password: hashPassword })
        console.log(newUser)
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { mssv, password } = req.body
    try {
        const results = await Users.findOne({ where: { mssv } })
        console.log(results.dataValues.password)
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

module.exports = {
    register,
    login,
}

