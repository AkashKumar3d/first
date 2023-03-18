import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
<>
<div className='home' id='home'>
      <main>
        <h1>home page </h1>
        <p> in have learn react js </p>
      </main>
    </div>

    <div className='home1'>
        <img src={vg} alt="graphice" />

        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, praesentium officia consequuntur dolorum ex ab accusantium itaque unde debitis inventore, quam cupiditate iusto minima odit accusamus quis hic consectetur illo!
            </p>
        </div>

        
    </div>

    <div className='home2' id='about'>
        <div>
            <h1> who are you</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati cumque molestias sunt ipsa error, ratione esse id minima totam vero est dolor officiis fuga saepe reiciendis quibusdam a ab dolorum?
            </p>
        </div>
    </div>

    <div className="home3" id='brand'>
        <div>
            <h1>Brand</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}> 
                  <AiFillGoogleCircle/>
                  <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}> 
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}> 
                  <AiFillYoutube/>
                  <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"0.9s"
                }}> 
                  <AiFillInstagram/>
                  <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
