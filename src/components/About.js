import React from 'react'
import photo from '../photo3.jpg'
const About = () => {
  return (
    <>
      <div className='text-center d-flex-column justify-content-center  font-weight-bold' style={{ margin: '0 30vh' }}>
        <h1 style={{ marginTop: '7vh' }}>About Us</h1>
        <p style={{ fontSize: '3vh', fontWeight: 'bold', marginTop: '5vh' }}>Welcome to iShop!</p>
        <p>At iShop, we are your go-to destination for stylish and trendy clothing. Whether you're looking for the perfect pair of jeans, a versatile jacket, sharp shirts, or shoes to complete your outfit, we have it all. iShop was created to provide high-quality fashion at affordable prices, making it easy for everyone to look and feel their best. Our carefully curated collection ensures you’ll always find something to suit your style, no matter the occasion.</p>
        <p style={{ fontSize: '3vh', fontWeight: 'bold', marginTop: '1vh' }}>Our Vision</p>
        <p>At iShop, our vision is simple: to be a trusted and go-to source for high-quality fashion essentials that cater to every individual's needs. We understand that everyone has their unique style and preferences, which is why our collection is thoughtfully curated to offer something for everyone. From classic wardrobe staples to modern, trendy pieces, we strive to make fashion accessible, affordable, and exciting.
        </p>
        <p style={{ fontSize: '3vh', fontWeight: 'bold', marginTop: '1vh' }}>Our Commitment to Quality</p>
        <p>
          We take pride in the quality of every item we offer at iShop. Our team carefully selects each product to ensure it meets our standards of craftsmanship, durability, and style. We work closely with trusted suppliers and designers to bring you the latest trends, while also focusing on timeless pieces that never go out of style. Each item in our collection is crafted with attention to detail, ensuring you get the best of both fashion and functionality.</p>
      </div>
      <div className='text-center d-flex-column justify-content-center  font-weight-bold' style={{ margin: '10vh 15vh' }}>
        <h1 style={{ marginTop: '7vh' }}>About the Developers</h1>
        <div className='d-flex' style={{ minHeight: '40vh', alignItems: 'center' }}>
          <div style={{ width: '50%', marginTop: '4vh' }}>
            <img src={photo} alt="" style={{ height: '32vh', width: '32vh', backgroundColor: 'black', borderRadius: '16vh' }} />
            <div style={{ fontWeight: 'bold', marginTop: '1vh' }}>Arnav Tayal<br />(Full Stack Developer)</div>
          </div>
          <div className=' d-flex-column   font-weight-bold' style={{ width: '50%', marginTop: '3vh',textAlign:'justify' }}>
            <p>
              Hi, I’m Arnav Tayal, the developer behind iShop. With a passion for web development and e-commerce, I set out to create a seamless online shopping experience. My expertise in front-end and back-end technologies helped me bring iShop to life, focusing on providing users with a fast, secure, and intuitive platform.

              As a developer, I am constantly striving to improve the site’s functionality and user experience. iShop is a reflection of my dedication to creating websites that are not only visually appealing but also highly efficient and user-friendly.

              When I'm not coding, you can find me exploring the latest trends in fashion and technology, combining my love for both in this project.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
