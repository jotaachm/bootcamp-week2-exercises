const BaseModel = require('./BaseModel')
const Pet = require('./Pet')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      pets: {
        relation: this.HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        }
      },
      children: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'
        }
      },
      parents: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id'
        }
      }
    }
  }

  static get virtualAttributes() {
    return ['fullName', 'canDrink']
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  canDrink() {
    return this.age > 21
  }
}

module.exports = User
