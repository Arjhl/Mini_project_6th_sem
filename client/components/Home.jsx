import styles from "./Home.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

const users = [
  {
    name: "Sudarshan",
    userId: "1",
  },
  {
    name: "Sathvik",
    userId: "2",
  },
  {
    name: "Yash",
    userId: "3",
  },
];

const messages = [
  {
    sender: "2",
    msg: "hi",
    receiver: "0",
  },
  {
    sender: "1",
    receiver: "0",
    msg: "hello",
  },
  {
    sender: "0",
    msg: "how are you ?",
    receiver: "2",
  },
];

const Home = () => {
  const nav = useNavigate();
  const param = useParams();
  const msgRef = useRef();
  const [msgs, setMsgs] = useState(messages);
  const [isChatBot, setIsChatBot] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isChatBot) {
      const duplicate = [...msgs];
      duplicate.push({
        sender: `${param.userId}`,
        receiver: "chatbot",
        msg: msgRef.current.value,
      });
      setMsgs(duplicate);

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.chatbot.response);

      const duplicate2 = [...duplicate];
      duplicate2.push({
        sender: "chatbot",
        receiver: `${param.userId}`,
        msg: result.chatbot.response,
      });
      setMsgs(duplicate2);
      msgRef.current.value = "";
    } else {
      const msg = {
        sender: String(param.userId),
        receiver: String(param.userId2),
        msg: msgRef.current.value,
      };

      console.log(msgRef);

      const idk = [...msgs];
      idk.push(msg);
      setMsgs(idk);

      msgRef.current.value = "";
    }
  };

  const clickHandler = (userId) => {
    console.log(userId);
    nav(`/${param.userId || "0"}/${userId}`);
    setMsgs(messages);
    setIsChatBot(false);
  };

  const chatbotHandler = () => {
    nav(`/${param.userId || "0"}/chatbot`);
    setIsChatBot(true);
    setMsgs([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.main_head}>Chatbot And A Messenger</h1>
      <div className={styles.list}>
        <h1 className={styles.head}>Users :</h1>
        {users.map((user) => {
          return (
            <div>
              <div
                className={
                  String(param.userId2) === user.userId
                    ? styles.active_user
                    : styles.user_card
                }
                onClick={clickHandler.bind(null, user.userId)}
              >
                <img src={user.img} />
                <h2 className={styles.username}>{user.name}</h2>
              </div>
            </div>
          );
        })}
        <div>
          <div
            className={isChatBot ? styles.active_user : styles.user_card}
            onClick={chatbotHandler}
          >
            <img src="" />
            <h2 className={styles.username}>Chatbot</h2>
          </div>
        </div>
      </div>
      <div className={styles.msgs}>
        {!isChatBot &&
          msgs.map((msg) => {
            if (
              (msg.receiver === param.userId && msg.sender === param.userId2) ||
              (msg.receiver === param.userId2 && msg.sender === param.userId)
            ) {
              return (
                <p
                  className={
                    msg.sender === String(param.userId) ? styles.self : ""
                  }
                >
                  {msg.msg}
                </p>
              );
            }
          })}
        {isChatBot &&
          msgs.map((msg) => {
            if (
              (msg.receiver === param.userId && msg.sender === "chatbot") ||
              (msg.receiver === "chatbot" && msg.sender === param.userId)
            ) {
              return (
                <p
                  className={
                    msg.sender === String(param.userId) ? styles.self : ""
                  }
                >
                  {msg.msg}
                </p>
              );
            }
          })}
      </div>

      <form className={styles.messageBox} onSubmit={submitHandler}>
        <input placeholder="Enter Your message" ref={msgRef} type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;
