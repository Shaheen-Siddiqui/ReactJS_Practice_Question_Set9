import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../Context/BookContext";
// import Card from "react-bootstrap/Card";

export const Home = () => {
  const {
    bookData,
    addToFavorites,
    isInFavorites,
    MarkAsRead,
    isAlreadyReaded
  } = useContext(BookContext);
  return (
    <div style={{ display: "flex" }}>
      {bookData.map((item) => {
        const { id, title, author, image } = item;
        return (
          <Card style={{ width: "18rem" }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Card Title: {title}</Card.Title>
              <Card.Text>Author: {author}</Card.Text>
              {isAlreadyReaded(item) ? (
                <button disabled>Done</button>
              ) : (
                <button onClick={() => MarkAsRead(item)}>Not Readed</button>
              )}
              &nbsp;
              {isInFavorites(item) ? (
                <NavLink to="/favorite">
                  <button onClick={() => addToFavorites(item)}>
                    <u> Go to favorites</u>
                  </button>
                </NavLink>
              ) : (
                <button onClick={() => addToFavorites(item)}>
                  Add to favorites
                </button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
