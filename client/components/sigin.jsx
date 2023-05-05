import { signInWithGoogle } from "../src/config/firebase";

const SignIn = (props) => {
  const clickHandler = async () => {
    const res = await signInWithGoogle();
    console.log(res);
    res ? props.signInHandler() : "";
  };

  return (
    <button onClick={clickHandler} className="siginButton">
      Sign In
    </button>
  );
};

export default SignIn;
