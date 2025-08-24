import React from 'react'
import BannerImg from '../assets/Banner.png';

function Banner() {
  return (
    <>
      <div className='  max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Welcome to <span className='text-pink-500'>PageHut</span>
              — your one-stop shop for every kind of book imaginable!!!
            </h1>
            <p className='text-xl'>
              PageHut is your ultimate online bookstore, offering a wide range of books—from thrilling 
              stories and inspiring novels to the latest in technology and learning. Explore, discover, 
              and find your next favorite read!
            </p>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <button className="mt-6 btn btn-secondary">Secondary</button>
        </div>

        <div className=' order-1 w-full md:w-1/2'>
          <img src={BannerImg} alt="Banner" />
        </div>
      </div>
    </>
  )
}

export default Banner;
