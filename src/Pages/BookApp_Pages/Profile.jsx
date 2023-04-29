import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

export const Profile = () => {
  const { userData } = useContext(BookContext);
  const { img, bio, name } = userData;
  return (
    <>
      <img src={img} alt="useImage" style={{ height: "7rem" }} />
      <h4>{bio}</h4>
      <h1>{name}</h1>
    </>
  );
};
