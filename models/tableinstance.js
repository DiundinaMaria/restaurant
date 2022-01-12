var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var TableInstanceSchema = new Schema(
    {
        table: {type: Schema.ObjectId, ref: 'Table', required: true},
        // user: {type: Schema.ObjectId, ref: 'User', required: true},
        user: {type: String, required: true},
        phone_number: {type: String, required: true},
        date: {type: Date, required: true, default: Date.now},
        time_start: {type: Date, required: true},
        time_end: {type: Date, required: true},
        reserv_description: {type: String, max: 200},
        updated: {type: Date, default: Date.now}
    }
);

// Виртуальное свойство - URL брони
TableInstanceSchema
.virtual('url')
.get(function () {
  return '/hall/tableinstance/' + this._id;
});


// не проверено
TableInstanceSchema
.virtual('duration')
.get(function () {
    var res_duration = this.time_end - this.time_start
  return res_duration;
});

TableInstanceSchema
.virtual('date_formatted')
.get(function () {
  return moment(this.date).format('DD.MM.YYYY');
});

TableInstanceSchema
.virtual('time_start_formatted')
.get(function () {
  return moment(this.time_start).format('HH:mm');
});

TableInstanceSchema
.virtual('time_end_formatted')
.get(function () {
  return moment(this.time_end).format('HH:mm');
});


// TableInstanceSchema
// .virtual('status')
// .get(function () {
//   var date_now = Date.now;
//   var status = ''
//   if (date_now > this.reserv_end) {
//     status = 'Passed'
//   } else if (date_now < this.reserv_start) {
//     status = 'Future'
//   } else {
//     status = "OnGoing"
//   }
//   return status;
// });


module.exports = mongoose.model('TableInstance', TableInstanceSchema);
