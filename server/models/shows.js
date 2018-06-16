const mongoose = require('mongoose');

const ShowSchema = mongoose.Schema({
        // show_id: {
        //     type: String,
        //     required: true
        // },
        show_title: {
            type: String,
            required: true
        },
        show_year:{
            type: String,
            required: true
        },
        show_description:{
            type: String,
            required: true
        },
        show_poster: {
            type: String,
            required: true
        },
        show_trailer:{
            type: String,
            required: true
        }
});

const Show = module.exports = mongoose.model('shows', ShowSchema);