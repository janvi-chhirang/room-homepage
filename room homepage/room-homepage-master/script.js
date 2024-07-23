const mainImage = document.querySelector('.hero-image')
const heading = document.querySelector('.content h1')
const para = document.querySelector('.content p')
const next = document.querySelector('.next')
const last = document.querySelector('.last')
// const imageArraySrc = [
//   'C:UsersDELLDesktopweb-devprojects\room homepage\room-homepage-mastermy-imagesdesktop-image-hero-1.jpg',
//   'C:UsersDELLDesktopweb-devprojects\room homepage\room-homepage-mastermy-imagesdesktop-image-hero-2.jpg',
//   'C:UsersDELLDesktopweb-devprojects\room homepage\room-homepage-mastermy-imagesdesktop-image-hero-3.jpg',
// ]

// const headingArray = [
//   'Discover innovative ways to decorate',
//   'We are available all across the globe',
//   'Manufactured with the best materials',
// ]

// const paraArray = [
//   `We provide unmatched quality, comfort, and style for property owners across the country.
//   Our experts combine form and function in bringing your vision to life. Create a room in your
//   own style with our collection and make your property a reflection of you and what you love.`,
//   `With stores all over the world, it's easy for you to find furniture for your home or place of business.
//   Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
//   store locator. Any questions? Don't hesitate to contact us today.`,
//   `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
//   to ensure that every product is made as perfect and as consistent as possible. With three decades of
//   experience in this industry, we understand what customers want for their home and office.`,
// ]

let count = 0
next.addEventListener('click', () => {
  count++
  console.log(count)

  if (count == 0 || Math.abs(count) % 3 == 0) {
    mainImage.src = './my-images/desktop-image-hero-1.jpg'
    heading.innerText = 'Discover innovative ways to decorate'
    para.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`
  }
  if (
    count == -1 ||
    count == -4 ||
    count == -7 ||
    count == -10 ||
    count == -13 ||
    count == -2 ||
    count == -16 ||
    count == -19 ||
    count == 1 ||
    count == 4 ||
    count == 7 ||
    count == 10 ||
    count == 13 ||
    count == 16 ||
    count == 19
  ) {
    mainImage.src = './my-images/desktop-image-hero-2.jpg'
    heading.innerText = 'We are available all across the globe'
    para.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`
  }
  if (
    count == -2 ||
    count == -5 ||
    count == -8 ||
    count == -11 ||
    count == -14 ||
    count == -17 ||
    count == -20 ||
    count == 2 ||
    count == 5 ||
    count == 8 ||
    count == 11 ||
    count == 14 ||
    count == 17 ||
    count == 20
  ) {
    mainImage.src = './my-images/desktop-image-hero-3.jpg'
    heading.innerText = 'Manufactured with the best materials'
    para.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
  }
})

last.addEventListener('click', () => {
  count--
  console.log(count)
  if (count == 0 || count % 3 == 0) {
    mainImage.src = './my-images/desktop-image-hero-1.jpg'
    heading.innerText = 'Discover innovative ways to decorate'
    para.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`
  }
  if (
    count == 1 ||
    count == 4 ||
    count == 7 ||
    count == 10 ||
    count == 13 ||
    count == 16 ||
    count == 19
  ) {
    mainImage.src = './my-images/desktop-image-hero-2.jpg'
    heading.innerText = 'We are available all across the globe'
    para.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`
  }
  if (
    count == 2 ||
    count == 5 ||
    count == 8 ||
    count == 11 ||
    count == 14 ||
    count == 17 ||
    count == 20
  ) {
    mainImage.src = './my-images/desktop-image-hero-3.jpg'
    heading.innerText = 'Manufactured with the best materials'
    para.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`
  }
})
