import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(firestore.collection("messages").orderBy("createdAt"));
  const scrollRef = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault();
    if (value == "") return alert("Нельзя отправлять пустое сообщение");
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setValue("");
  };
  useEffect(() => {
    if (messages?.length > 3) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (loading) return <Loader />;
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 120 }} marginTop="10px" justifyContent={"center"}>
        <div
          style={{
            width: "80%",
            height: "70%",
            border: "1px solid rgba(104,104,104,0.2)",
            borderRadius: 5,
            overflowY: "auto"
          }}
        >
          {messages.map((message, idx) => (
            <div
              key={idx}
              style={{
                margin: 10,
                border: user.uid === message.uid ? "2px solid rgba(0,0,0, 0.2)" : "1px solid rgba(0,0,0, 0.5)",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 15,
                borderRadius: 5
              }}
            >
              <Grid container alignItems={"center"}>
                <Avatar src={message.photoURL} style={{ marginRight: 5 }}></Avatar>
                <div>{message.displayName === "sync RU" ? "Admin" : message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
              <div ref={scrollRef}></div>
            </div>
          ))}
        </div>
        <Grid container flexDirection={"column"} alignItems="flex-end" style={{ width: "80%" }}>
          <form style={{ width: "100%" }} onSubmit={sendMessage}>
            <TextField
              variant="outlined"
              fullWidth
              maxRows={2}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></TextField>
            <Button onClick={sendMessage} size="large">
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
