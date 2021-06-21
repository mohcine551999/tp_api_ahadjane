const { User } = require('../models')
const {Article} = require('../models')
module.exports = {
    getAllUsers() {
    return User.findAll()
    },
    // méthodes utiles
    getUsers(offset = 0, limit = 10) { 
        return User.findAndCountAll({
            limit: limit,
            offset: offset,
            order:[ ['createdAt', 'DESC'] ], 
          })
    },
    getAdmins() { 
        return User.findAll({
            where:{
                role:"admin"
            }
        })
    },
    getAuthors() { 
        return User.findAll({
            where:{
                role:"author"
            }
        })
    },
    getGuests(){ 
        return User.findAll({
            where:{
                role:"guest"
            }
        })
    },
    getUser(id) {
        return User.findOne({
            where:{
                id:id
            }
        })
     },
    getUserByEmail(email) {
        return User.findOne({
            where:{
                email:email
            }
        })
     },
    addUser(user) {
        return User.create(user)
     },
     deleteUser(id) { 
        return User.destroy({
            where:{
                id:id
            }
          })
    },
    updateUser(user) { 
       return User.update(
            user,
          {
              where:{
                  id:user.id
              }
          }
        )
    },
    findUserArticles(id){
        return User.findOne({
            where:{
                id:id
            },
            include:Article
        })
    }
    }