const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Andre Charland', // ←  Start by adding your name!
    title: 'My incredible home page!',
    occupation: 'Lord Commander',
    location: 'Whistler, BC',
    bio: 'I came from outerspace',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'andrecharland',
    linkedin: 'your-linkedin-name',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body
  }
}
