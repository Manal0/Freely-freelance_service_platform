import React from 'react';
import Featured from '../../components/featured/Featured';
import "./Home.scss";
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import {cards, projects} from "../../data";
import ProjectCard from '../../components/projectCard/ProjectCard';


const Home = () => {
  return (
    <div className='home'>
      
     <Featured/>
     <Slide slidesToShow ={5} arrowScroll={5}>
     {cards.map(card=>(
       <CatCard key={card.id} item = {card}/>
    ))}
     </Slide>
     <div className="features">
      <div className="container">
        <div className="item">
        <h1>A whole world of freelance talent at your fingertips</h1>
        <div className="title">
              <img src="https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/accept-512.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/accept-512.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/accept-512.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/accept-512.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            </div>
        <div className="item">
          <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/289150700/original/ecc98cc908669240e0b03ee7b1cd575f94ef4ba0.png" alt="" />
        </div>
      </div>
     </div>
     <div className="features dark">
      <div className="container">
        <div className="item">
        <h1>freely <i>business</i></h1>
            <h1>A business solution designed for <i>teams</i></h1>
            <p>Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses</p>
              <div className="title">
              <img src="https://tse1.mm.bing.net/th?id=OIP.Kt_qfHuU5ra7SeQ6_kBHiQHaHv&pid=Api&P=0&h=180" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="https://tse1.mm.bing.net/th?id=OIP.Kt_qfHuU5ra7SeQ6_kBHiQHaHv&pid=Api&P=0&h=180" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="https://tse1.mm.bing.net/th?id=OIP.Kt_qfHuU5ra7SeQ6_kBHiQHaHv&pid=Api&P=0&h=180" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Freely Business</button>
            </div>
        <div className="item">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
        </div>
      
     </div>
    </div>
    <Slide slidesToShow ={4} arrowScroll={4}>
     {projects.map(card=>(
       <ProjectCard key={card.id} item = {card}/>
    ))}
     </Slide>
     
    </div>
  )
}

export default Home
