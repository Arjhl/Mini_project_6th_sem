import styles from "./Home.module.css";
import { useParams } from "react-router-dom";

const users = [
  {
    name: "Sudarshan",
    usedId: "1",
  },
  {
    name: "Sathvik",
    usedId: "2",
  },
  {
    name: "Yash",
    usedId: "3",
  },
];

const messages = [
  {
    sender: "2",
    msg: "hi",
  },
  {
    sender: "1",
    msg: "hello",
  },
  {
    sender: "0",
    msg: "how are you ?",
  },
];

const Home = () => {
  const param = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h1 className={styles.head}>Users :</h1>
        {users.map((user) => {
          return (
            <div>
              <div className={styles.user_card}>
                <img src={user.img} />
                <h2 className={styles.username}>{user.name}</h2>
              </div>
            </div>
          );
        })}
        <div>
          <div className={styles.user_card}>
            <img src="" />
            <h2 className={styles.username}>Chatbot</h2>
          </div>
        </div>
      </div>
      <div className={styles.msgs}>
        {messages.map((msg) => {
          return (
            <p
              className={msg.sender === String(param.userId) ? styles.self : ""}
            >
              {msg.msg}
            </p>
          );
        })}
      </div>

      <form className={styles.messageBox} onSubmit={submitHandler}>
        <input placeholder="Enter Your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;
