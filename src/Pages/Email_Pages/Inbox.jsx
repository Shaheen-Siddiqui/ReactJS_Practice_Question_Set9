import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EmailContext } from "../../Context/EmailContext";

export const Inbox = () => {
  const { emailData, done, pending, markAsRead } = useContext(EmailContext);

  return (
    <>
      <h2>All received emails</h2>
      done:{done} || pending:{pending}
      {emailData.map(({ id, subject, read }) => {
        return (
          <h5 key={id}>
            <ul>
              <li>
                <NavLink to={`/detail/${id}`}> {subject}</NavLink>&nbsp;
                <button
                  onClick={() => markAsRead(id)}
                  className="mark-as-read-btn"
                >
                  {read ? "marked" : "mark as done"}
                </button>
              </li>
            </ul>
          </h5>
        );
      })}
      <u> {pending === 0 ? "No email is pending" : ""}</u>
    </>
  );
};
