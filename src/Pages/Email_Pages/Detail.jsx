import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmailContext } from "../../Context/EmailContext";
import { ExpendedEmail } from "./ExpendedEmail";

export const Detail = () => {
  const { emailData } = useContext(EmailContext);
  const { userID } = useParams();

  function obtainPerticularId(emailData, userID) {
    return emailData.find(({ id }) => id == userID);
  }

  const OnlyClicked = obtainPerticularId(emailData, userID);

  return <ExpendedEmail {...OnlyClicked} />;
};
