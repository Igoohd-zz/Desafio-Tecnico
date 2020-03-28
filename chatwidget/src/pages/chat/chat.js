import React, { useEffect, useState } from "react";
import SlackChat from "../../components/slackChat";

import axios from "axios";

function Chat() {
  const [token, setToken] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:5000`).then(res => {
      setToken(res.data);
    }).catch(err => console.log(err));
  }, []);
  return <SlackChat tokenSlackChat={token} />;
}

export default Chat;
