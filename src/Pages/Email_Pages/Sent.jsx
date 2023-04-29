import { useContext } from "react";
import { EmailContext } from "../../Context/EmailContext";

export const Sent = () => {
  const { sentEmails } = useContext(EmailContext);

  return (
    <>
      {sentEmails.map(({ to, subject, message }) => {
        return (
          <ul>
            <li>{to}</li>
            <li>{subject}</li>
            <li>{message}</li>
            <hr />
          </ul>
        );
      })}
    </>
  );
};
