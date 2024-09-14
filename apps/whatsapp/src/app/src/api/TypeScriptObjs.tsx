export type IChatObject = {
  id: number;
  name: string;
  last_chat_date: string; // You might want to use a Date type here if you plan to parse the date string
  unread_message_count: number;
  last_message: string;
};
