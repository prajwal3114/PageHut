import React, { useState, useEffect } from 'react'
import Cards from './cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here!</span>
          </h1>
          <p className='mt-12'>
            Welcome to our bookstore’s course collection, where knowledge meets inspiration. Here you’ll discover a wide range of books, from essential academic resources to engaging reads that broaden perspectives. Each title is carefully selected to help you learn, grow, and explore subjects in depth, making reading both enjoyable and rewarding.
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {book.map((item) => {
            return <Cards key={item.id} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default Course
