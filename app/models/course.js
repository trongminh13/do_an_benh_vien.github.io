const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const slug = require('mongoose-slug-generator');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String },
    doctor: { type: String },
    videoId: { type: String, required: true, },
    level: { type: String },
    slug: { type: String,slug: 'name',unique:true },

},{
    timestamps: true,
});

module.exports = mongoose.model('Course',Course);

