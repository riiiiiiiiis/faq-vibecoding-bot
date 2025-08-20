import { Bot, InlineKeyboard, webhookCallback } from "grammy";
import { FAQ } from "./faq";

// Создаем экземпляр бота только если есть токен
const bot = process.env.TELEGRAM_BOT_TOKEN 
  ? new Bot(process.env.TELEGRAM_BOT_TOKEN)
  : null;

// Команда /start
bot?.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text("Показать FAQ", "faq:0");

  await ctx.reply(
    "Привет! 👋 Я бот-помощник по вайбкодингу для новичков.\n\n" +
    "Нажми кнопку ниже, чтобы узнать ответы на популярные вопросы!",
    { reply_markup: keyboard }
  );
});

// Команда /faq
bot?.command("faq", async (ctx) => {
  await sendFAQ(ctx, 0);
});

// Обработчик callback для кнопки FAQ
bot?.callbackQuery(/^faq:(\d+)$/, async (ctx) => {
  const startIndex = parseInt(ctx.match[1]);
  await sendFAQ(ctx, startIndex);
  await ctx.answerCallbackQuery();
});

// Функция отправки FAQ
async function sendFAQ(ctx: any, startIndex: number) {
  const faqItems = FAQ.slice(startIndex, startIndex + 5);
  let message = "📚 FAQ по вайбкодингу для новичков:\n\n";
  
  faqItems.forEach((item, index) => {
    const globalIndex = startIndex + index;
    message += `${globalIndex + 1}. ${item.q}\n`;
    message += `${item.a}\n\n`;
  });

  const keyboard = new InlineKeyboard();
  
  if (startIndex > 0) {
    keyboard.text("◀️ Назад", `faq:${Math.max(0, startIndex - 5)}`);
  }
  
  if (startIndex + 5 < FAQ.length) {
    keyboard.text("Вперед ▶️", `faq:${startIndex + 5}`);
  }

  await ctx.reply(message, {
    reply_markup: keyboard.inline_keyboard.length > 0 ? keyboard : undefined
  });
}

// Fallback для любых других сообщений
bot?.on("message", async (ctx) => {
  await ctx.reply(
    "Пока доступно: /start и /faq\n\n" +
    "Используй эти команды для навигации по боту!"
  );
});

// Экспортируем функцию для webhook
export const handleUpdate = bot 
  ? webhookCallback(bot, "std/http", {
      secretToken: process.env.TELEGRAM_WEBHOOK_SECRET
    })
  : async () => new Response("Bot not configured", { status: 500 });
