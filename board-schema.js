const mongoose = require('mongoose');
const { Schema } = mongoose;

const boardSchema = new Schema({
  id: { type: String, required: true, unique: true },
  address: String,
  board_height: Number,
  board_width: Number,
  city: String,
  created: Date,
  description: String,
  display_name: String,
  facing: String,
  flip_duration: Number,
  height: Number,
  lat: Number,
  location: String,
  lon: Number,
  name: String,
  postal_code: String,
  province: String,
  read: { type: String, default: null },
  timezone: String,
  unique_sign: Boolean,
  width: Number,
  max_minimum_price: Number,
  unique_creative_url: { type: String, default: null },
  thirty_day_averages: {
    price_per_flip: Number,
    impressions_per_flip: Number,
    avg_flips_per_day: Number,
  },
  private: Boolean,
  booked: Boolean,
  daily_impressions: Number,
  photos: [{
    id: String,
    url: String,
    thumbnail_url: String
  }],
  available_flips: Number,
  moderation_time: Number,
  categories: [String],
});

const Board = mongoose.model('Billboard', boardSchema);

module.exports = Board;
