import { Lesson } from "@/types/types";

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Урок 1 : Ознакомление",
    videos: [
      {
        id: 101,
        title: "1. Введение",
        description: "Как ставить и оценивать задачи",
        duration: "1 ч. 23м.",
        locked: true,
      },
      {
        id: 102,
        title: "2. Основные принципы",
        description: "Основы работы с системой",
        duration: "45 м.",
        locked: false,
      },
      {
        id: 103,
        title: "3. Первые шаги",
        description: "Настройки и подготовка среды",
        duration: "30 м.",
        locked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Урок 2 : Методы бизнеса",
    videos: [
      {
        id: 201,
        title: "1. Базовые стратегии",
        description: "Как выбрать подходящую бизнес-модель",
        duration: "1 ч.",
        locked: false,
      },
      {
        id: 202,
        title: "2. Управление финансами",
        description: "Финансовая грамотность для предпринимателей",
        duration: "30 м.",
        locked: true,
      },
      {
        id: 203,
        title: "3. Анализ конкурентов",
        description: "Как находить и анализировать конкурентов",
        duration: "40 м.",
        locked: false,
      },
    ],
  },
  {
    id: 3,
    title: "Урок 3 : Как начать зарабатывать больше",
    videos: [
      {
        id: 301,
        title: "1. Ценообразование",
        description: "Как правильно устанавливать цены",
        duration: "1 ч. 10м.",
        locked: false,
      },
      {
        id: 302,
        title: "2. Маркетинговые стратегии",
        description: "Как привлекать больше клиентов",
        duration: "50 м.",
        locked: true,
      },
      {
        id: 303,
        title: "3. Оптимизация продаж",
        description: "Как увеличить средний чек",
        duration: "40 м.",
        locked: false,
      },
    ],
  },
  {
    id: 4,
    title: "Урок 4 : Заключение",
    videos: [
      {
        id: 401,
        title: "1. Итоги курса",
        description: "Обобщение и важные выводы",
        duration: "30 м.",
        locked: false,
      },
      {
        id: 402,
        title: "2. Следующие шаги",
        description: "Куда двигаться дальше?",
        duration: "45 м.",
        locked: false,
      },
      {
        id: 403,
        title: "3. Вопросы и ответы",
        description: "Ответы на часто задаваемые вопросы",
        duration: "1 ч.",
        locked: true,
      },
    ],
  },
];

export default lessons;
