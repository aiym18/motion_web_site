interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  date: string;
  time: string;
}

export const chats: Chat[] = [
  {
    id: "1",
    name: "Ира",
    lastMessage: "Хороший",
    date: "2025-03-10",
    time: "15:12",
  },
  {
    id: "2",
    name: "Азамат",
    lastMessage: "Привет",
    date: "2025-03-09",
    time: "14:45",
  },
  {
    id: "3",
    name: "Тинатин",
    lastMessage: "Что такое любовь ?",
    date: "2025-03-08",
    time: "13:30",
  },
  {
    id: "4",
    name: "Толкунай",
    lastMessage: "Хорошая",
    date: "2025-03-07",
    time: "16:10",
  },
  {
    id: "5",
    name: "Автандил",
    lastMessage: "Любовь это ты ❤️",
    date: "2025-03-03",
    time: "17:05",
  },
];
