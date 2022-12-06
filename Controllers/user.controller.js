import UserModel from "../Models/user.models.js";

class UserController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
            order: ['lastname'],
            limit: 1
        })
        res.json(result)
    }
    details = async (req, res) => {

        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'createdAt', 'updatedAt'],
            where: { id: id }
        })
        res.json(result)
    }
}
export default UserController