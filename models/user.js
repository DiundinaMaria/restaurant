var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
      user_login: {type: String, required: true, max: 100},
      isAdmin: {type: Boolean, default: false},
      first_name: {type: String,  max: 100},
      last_name: {type: String,  max: 100},
      birth_day: {type: Date},
      phone_number: {type: String}
  }
);

// Виртуальное свойство - URL пользователя
// к этим данным должен быть доступ только у самого пользователя
// и администратора
// (личные данные)

UserSchema
.virtual('url')
.get(function () {
  return '/hall/user/' + this._id;
});


module.exports = mongoose.model('User', UserSchema);
