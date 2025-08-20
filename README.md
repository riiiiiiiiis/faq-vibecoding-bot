# FAQ-бот для Telegram «Вайбкодинг для новичков»

Минимальный Telegram бот на Next.js 14 + TypeScript для деплоя на Vercel. Отвечает на вопросы о вайбкодинге для начинающих программистов.

## 🚀 Быстрый старт

### Шаг 1: Создание бота
1. Напиши [@BotFather](https://t.me/botfather) в Telegram
2. Отправь команду `/newbot`
3. Следуй инструкциям и получи `TELEGRAM_BOT_TOKEN`

### Шаг 2: Деплой на Vercel
1. Создай аккаунт на [vercel.com](https://vercel.com)
2. Подключи GitHub репозиторий
3. Добавь переменные окружения:
   - `TELEGRAM_BOT_TOKEN` = твой токен от BotFather
   - `TELEGRAM_WEBHOOK_SECRET` = любой длинный секрет (например: `my-super-secret-webhook-token-123`)
4. Задеплой проект

### Шаг 3: Настройка webhook
Открой в браузере URL (замени на свои значения):

```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=https://<ВАШ_ДОМЕН>.vercel.app/api/telegram&secret_token=<TELEGRAM_WEBHOOK_SECRET>
```

**Пример:**
```
https://api.telegram.org/bot1234567890:ABCdefGHIjklMNOpqrsTUVwxyz/setWebhook?url=https://my-bot.vercel.app/api/telegram&secret_token=my-super-secret-webhook-token-123
```

Если всё настроено правильно, увидишь:
```json
{"ok":true,"result":true,"description":"Webhook was set"}
```

### Шаг 4: Тестирование
1. Найди своего бота в Telegram
2. Отправь `/start` — получишь приветствие и кнопку
3. Отправь `/faq` — увидишь список вопросов-ответов

## 🛠 Технологии

- **Next.js 14** с App Router
- **TypeScript**
- **GrammY** — современная библиотека для Telegram ботов
- **Vercel** — хостинг и деплой

## 📁 Структура проекта

```
src/
├── app/
│   ├── page.tsx              # Главная страница
│   └── api/telegram/
│       └── route.ts          # Webhook endpoint
├── bot/
│   ├── bot.ts                # Логика бота
│   └── faq.ts                # Вопросы и ответы
```

## 🔧 Команды бота

- `/start` — приветствие + кнопка «FAQ»
- `/faq` — показать вопросы и ответы
- Любой другой текст — подсказка по командам

## 🌐 API Endpoints

- `GET /` — главная страница
- `GET /api/telegram` — проверка работоспособности
- `POST /api/telegram` — webhook для Telegram

## 📝 FAQ содержимое

Бот содержит 7 вопросов-ответов о вайбкодинге:
1. Что такое вайбкодинг
2. С чего начать изучение
3. Отличия от обычного программирования
4. Типичные ошибки новичков
5. Где деплоить прототипы
6. Как не потерять мотивацию
7. Какие инструменты использовать

## 🚨 Безопасность

- Webhook защищён секретным токеном
- Проверяется заголовок `X-Telegram-Bot-Api-Secret-Token`
- Все переменные окружения хранятся на Vercel

## 🔄 Обновление FAQ

Чтобы изменить вопросы и ответы, отредактируй файл `src/bot/faq.ts` и перезадеплой проект.

## 📞 Поддержка

Если что-то не работает:
1. Проверь логи на Vercel
2. Убедись, что webhook настроен правильно
3. Проверь переменные окружения
4. Убедись, что бот не заблокирован

---

**Удачи в изучении вайбкодинга! 🚀**
