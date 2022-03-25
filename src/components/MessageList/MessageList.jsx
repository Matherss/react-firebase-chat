import { useState } from "react";

const INIT_MESSAGES = [
  { Author: "Admin", text: "Some text", id: 1 },
  { Author: "User", text: "Some user text", id: 2 }
];

export const MessageList = () => {
  const [messages, setMessages] = useState(INIT_MESSAGES);
  return (
    <>
      {messages.map((el) => (
        <div key={el.id}>
          <h1>{el.Author}</h1>
          <div>{el.text}</div>
        </div>
      ))}
    </>
  );
};
