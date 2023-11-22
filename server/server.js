const cors = require('cors')
const express = require('express');
require('dotenv').config()
require('./db')

const loginRoutes = require('./routes/login.routes')
const postRoutes = require('./routes/posts.routes')
const menuRoutes = require('./routes/menu.routes')
const testimonialRoutes = require('./routes/testimonials.routes')
const eventRoutes = require('./routes/event.routes');
const detailRoutes = require('./routes/details.routes')
const galleryRoutes = require('./routes/gallery.routes')
const varietyRoutes = require('./routes/variety.routes')
const awardRoutes = require('./routes/awards.routes')

const app = express();
app.use(cors())
app.use(express.json())

//routes
app.use('/api/login', loginRoutes)


//for posts page
app.use('/api/posts/', postRoutes)


//menu page routes
app.use('/api/menu/variety', varietyRoutes)
app.use('/api/menu', menuRoutes)


//for testimonials page
app.use('/api/testimonials', testimonialRoutes)


//event page routes
app.use('/api/events', eventRoutes)


//details routes
app.use('/api/more/details', detailRoutes)


//gallery routes
app.use('/api/more/gallery', galleryRoutes)


//award - our story routes
app.use('/api/ourstory/awards', awardRoutes)

const PORT = process.env.PORT || 8000
//listening to port 
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})