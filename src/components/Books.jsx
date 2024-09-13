import React, { useState } from 'react'

import { books as bookData } from '../constants/mockData'
import styles from './Books.module.css';
import BookCard from './BookCard';
import SideCard from './SideCard';
import SearchBox from './SearchBox';

const Books = () => {
  const [books, setBooks] = useState(bookData)
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handelLikeList = (book, status) => {
    if (status) {
      const NewLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(NewLikedList)
    } else {
      setLiked((liked) => [...liked, book])
    }
  }
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    } else {
      setBooks(bookData)
    }
  }
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}  />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard key={book.id} data={book} handelLikeList={handelLikeList} />
          ))}
        </div>
        {!!liked.length &&
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (<SideCard key={book.id} data={book} />))}
          </div>
        }
      </div>
    </>
  )
}

export default Books