//Требуется Mongoose
var mongoose = require('mongoose');

//Определяем схему
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

var schema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    })

// Компилируем модель из схемы
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );