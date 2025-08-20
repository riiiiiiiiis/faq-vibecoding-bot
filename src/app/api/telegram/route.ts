import { NextRequest, NextResponse } from 'next/server';
import { handleUpdate } from '@/bot/bot';

export async function POST(req: NextRequest) {
  try {
    // Проверяем секретный токен
    const secretToken = req.headers.get('X-Telegram-Bot-Api-Secret-Token');
    const expectedToken = process.env.TELEGRAM_WEBHOOK_SECRET;
    
    if (!secretToken || secretToken !== expectedToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Проксируем запрос в grammy
    const response = await handleUpdate(req);
    return response;
  } catch (error) {
    console.error('Telegram webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: 'OK', message: 'Telegram webhook endpoint is working' },
    { status: 200 }
  );
}
