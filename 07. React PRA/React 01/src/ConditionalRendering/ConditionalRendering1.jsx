import { useState } from "react";

const ConditionalRendering1 = () => {
  let [loggedData, setLoggedData] = useState(false);

  if (loggedData) {
    return (
      <>
        <h1>Home</h1>
        <h1>All Product</h1>
        <h1>Edit Profile</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Home</h1>
        <h1>Login</h1>
        <h1>SignUp</h1>
      </>
    );
  }
};

export default ConditionalRendering1;