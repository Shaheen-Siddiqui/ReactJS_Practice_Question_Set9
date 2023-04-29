import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

export const Readed = () => {
  const { done } = useContext(BookContext);
  return (
    <>
      {done.length === 0 ? (
        "you have not read anything rightNow"
      ) : (
        <>
          {done.map(({ title, id }) => {
            return <h4 key={id}>title: {title}</h4>;
          })}
        </>
      )}
    </>
  );
};
