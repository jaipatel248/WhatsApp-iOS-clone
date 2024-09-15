import { IChatObject } from "./TypeScriptObjs";
import { sampleChatList } from "./sampleData/sampleChatList";

const getChatList = (): Promise<IChatObject[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sampleChatList);
    }, 500);
  });
};

export { getChatList };
