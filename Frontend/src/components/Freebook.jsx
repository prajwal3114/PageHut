import React from 'react'
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../list.json'
import Cards from './cards';   // ✅ Capitalized import
import axios from 'axios';
function Freebook() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        const data=res.data.filter((data)=> data.caegory==="Free");
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])
  const filterData = list.filter((data) => data.category === "Free")

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl  container md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 text-left">
            Free offered Books
          </h1>
          <p className='text-left'>
            Browse our free book collection featuring timeless classics, exciting adventures, inspiring stories, and modern favorites, carefully chosen to spark imagination and provide enjoyable reading experiences for people of every age.
          </p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />   
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Freebook
