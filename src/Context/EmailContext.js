import { createContext, useEffect, useState } from "react";
import { EmailfakeFetch } from "../DataBase/Email.fakefatch";

export const EmailContext = createContext();

export const EmailContextProvider = ({ children }) => {
  const [emailData, setEmailData] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);
  useEffect(() => {
    async function obtainEmailData() {
      const response = await EmailfakeFetch(
        "https://example.com/api/allemails"
      );
      setSentEmails(response.data.sentEmails);

      setEmailData(response.data.emails);
    }
    obtainEmailData();
  }, []);

  const markAsRead = (itemId) => {
    setEmailData((emailData) => {
      return emailData.map((item) => ({
        ...item,
        read: item.id === itemId ? !item.read : item.read
      }));
    });
  };

  const { done, pending } = emailData.reduce(
    (count, Item) => {
      Item.read ? count.done++ : count.pending++;
      return count;
    },
    { done: 0, pending: 0 }
  );
  const value = { emailData, done, pending, markAsRead, sentEmails };
  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};
