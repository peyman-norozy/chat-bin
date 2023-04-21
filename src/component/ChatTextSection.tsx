import { useSelector } from "react-redux";
import { RootState } from "../store";

const ChatTextSection = () => {
  const messageContent = useSelector((state: RootState) => state);

  console.log(messageContent);
  return (
    <>
      <div className="h-full py-[10px] px-[10px]">
        {messageContent.messageContent.message.map((item) => {
          return (
            <div className={item.client ? "" : "text-left"}>{item.Text}</div>
          );
        })}
      </div>
    </>
  );
};

export default ChatTextSection;
