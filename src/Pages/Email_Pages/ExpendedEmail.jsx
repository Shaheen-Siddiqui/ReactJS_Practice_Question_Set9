export const ExpendedEmail = ({ message, sender, subject }) => {
  return (
    <div>
      <h1>{subject}</h1>
      <h2>{sender}</h2>
      <h3>{message}</h3>
    </div>
  );
};
