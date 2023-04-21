import { useSelector } from "react-redux";
import { RootState } from "../store";

const textRight =
  "bg-[#4E426D] mt-2 text-[#eee] text-[14px] py-[10px] px-[10px] w-[30%] rounded-e-2xl rounded-br-2xl";

const textLeft =
  "bg-[#F5F7FB] mt-2 text-[#aaa] text-[14px] py-[10px] px-[10px] w-[30%] rounded-s-2xl rounded-bl-2xl";

const ChatTextSection = () => {
  const messageContent = useSelector((state: RootState) => state);

  console.log(messageContent);
  return (
    <>
      <div className="h-full py-[10px] px-[10px] over ">
        {messageContent.messageContent.message.map((item) => {
          return (
            <div className={item.client ? "" : "flex justify-end"}>
              <p className={item.client ? textRight : textLeft}>{item.Text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatTextSection;