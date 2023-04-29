import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

export const Favorites = () => {
  const { favorites } = useContext(BookContext);
  return (
    <>
      {favorites.length === 0 ? (
        "nothing is in favorites"
      ) : (
        <>
          {favorites.map(({ title }) => {
            return (
              <>
                Title: <h5>{title}</h5>
                <br />
              </>
            );
          })}
        </>
      )}
    </>
  );
};
