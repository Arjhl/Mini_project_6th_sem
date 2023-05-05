import SignIn from "../components/sigin";
import Home from "../components/Home";

import { useState } from "react";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = () => {
    setIsSignedIn(true);
  };

  return (
    <>
      {!isSignedIn && <SignIn signInHandler={signInHandler} />}
      {isSignedIn && <Home />}
    </>
  );
};

export default App;
