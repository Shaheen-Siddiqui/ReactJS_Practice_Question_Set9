import { createContext, useEffect, useState } from "react";
import { OnlinefoodfakeFetch } from "../DataBase/Onlinefood.fakefetch";

export const OnlineFoodContext = createContext();

export const OnlineFoodContextProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [searchMenu, setSearchMenu] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isVegiterian, setIsVegiterian] = useState(true);
  const [isSpicy, setIsSpycy] = useState(true);
  const [sortByPrice, setSortByPrice] = useState("");

  useEffect(() => {
    async function obtainMenu() {
      const response = await OnlinefoodfakeFetch(
        "https://example.com/api/menu"
      );
      setMenuData(response.data.menu);
    }
    obtainMenu();
  }, []);

  const addItemToCart = (item) => {
    const isDuplicate = cartItem.find(({ id }) => id === item.id);
    return !isDuplicate ? setCartItem([...cartItem, item]) : isDuplicate;
  };

  const isAddedToCart = (item) => cartItem.find(({ id }) => id === item.id);

  const removeFromCart = (item) =>
    setCartItem((cartItem) => cartItem.filter(({ id }) => id !== item.id));

  useEffect(() => {
    if (sortByPrice === "high_to_low") {
      const highToLowItem = [...menuData].sort((a, b) => b.price - a.price);
      setSearchMenu(highToLowItem);
    } else if (sortByPrice === "low_to_high") {
      const lowToHighItem = [...menuData].sort((a, b) => a.price - b.price);
      setSearchMenu(lowToHighItem);
    } else {
      setSearchMenu(menuData);
    }
  }, [sortByPrice, menuData]);

  const searchItem = (event) => {
    const filterdItem = menuData.filter((item) =>
      item.name.toLowerCase().includes(event.target.value)
    );
    setSearchMenu(filterdItem);
  };

  useEffect(() => {
    if (!isVegiterian) {
      const vegiterianItem = menuData.filter(
        ({ is_vegetarian }) => is_vegetarian
      );
      setSearchMenu(vegiterianItem);

      if (!isSpicy) {
        const spicyItem = vegiterianItem.filter(({ is_spicy }) => is_spicy);
        setSearchMenu(spicyItem);
      }
    } else if (!isSpicy) {
      const spicyItem = menuData.filter(({ is_spicy }) => is_spicy);
      setSearchMenu(spicyItem);
    } else {
      setSearchMenu(menuData);
    }
  }, [isVegiterian, isSpicy, menuData]);

  const value = {
    menuData,
    searchItem,
    searchMenu,
    isVegiterian,
    setIsVegiterian,
    setIsSpycy,
    isSpicy,
    setSortByPrice,
    addItemToCart,
    cartItem,
    isAddedToCart,
    removeFromCart
  };

  return (
    <OnlineFoodContext.Provider value={value}>
      {children}
    </OnlineFoodContext.Provider>
  );
};
