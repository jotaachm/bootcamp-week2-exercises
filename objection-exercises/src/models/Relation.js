const BaseModel = require('./BaseModel')
const User = require('./User')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }
}

module.exports = Relation