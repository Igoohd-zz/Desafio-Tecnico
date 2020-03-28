import React from "react";
import { ReactSlackChat } from "react-slack-chat";

const SlackChat = ({ tokenSlackChat = "" }) => {
  return (
    <ReactSlackChat
      botName="SlackChat"
      apiToken={
        tokenSlackChat !== ""
          ? tokenSlackChat
          : "eG94Yi0xMTExMjA5MTYwNjUtQVROd20zVTF0WGxURDdLUHdQMmkyQjNI"
      }
      channels={[
        {
          name: "mac",
          icon: "https://image.flaticon.com/icons/svg/141/141021.svg"
        },
        {
          name: "pc",
          icon: "https://image.flaticon.com/icons/svg/224/224597.svg"
        },
        {
          name: "linux",
          icon: "https://image.flaticon.com/icons/svg/226/226772.svg"
        }
      ]}
      helpText="Lett Chat"
      themeColor="#856090"
      userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
      debugMode={true}
    />
  );
};

export default SlackChat;
