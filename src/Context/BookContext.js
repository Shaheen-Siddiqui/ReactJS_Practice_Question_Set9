import { createContext, useEffect, useState } from "react";
import { BookfakeFetch } from "../DataBase/Bookapp.fakefetch";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [done, setAsDone] = useState([]);

  useEffect(() => {
    async function obtainBookData() {
      const response = await BookfakeFetch("https://example.com/api/books");
      setUserData(response.data.user);
      setBookData(response.data.books);
    }
    obtainBookData();
  }, []);

  const addToFavorites = (item) => {
    const isDuplicate = favorites.find(({ id }) => id === item.id);
    return !isDuplicate ? setFavorites([...favorites, item]) : favorites;
  };

  const MarkAsRead = (item) => {
    const isDuplicate = done.find(({ id }) => id === item.id);
    return !isDuplicate ? setAsDone([...done, item]) : done;
  };

  const isInFavorites = (item) => {
    return favorites.find(({ id }) => id === item.id);
  };

  const isAlreadyReaded = (item) => {
    return done.find(({ id }) => id === item.id);
  };

  const value = {
    bookData,
    addToFavorites,
    favorites,
    isInFavorites,
    MarkAsRead,
    done,
    isAlreadyReaded,
    userData
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
