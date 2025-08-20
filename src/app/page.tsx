export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              🤖 FAQ-бот для Telegram
            </h1>
            <p className="text-xl text-gray-600">
              Развёрнут и готов к работе!
            </p>
          </div>
          
          <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              📋 Что делать дальше:
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </span>
                <p className="text-gray-700">
                  Настрой переменные окружения на Vercel: <code className="bg-gray-200 px-2 py-1 rounded text-sm">TELEGRAM_BOT_TOKEN</code> и <code className="bg-gray-200 px-2 py-1 rounded text-sm">TELEGRAM_WEBHOOK_SECRET</code>
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </span>
                <p className="text-gray-700">
                  Задеплой проект на Vercel
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </span>
                <p className="text-gray-700">
                  Настрой webhook в браузере по инструкции из README
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </span>
                <p className="text-gray-700">
                  Протестируй бота: отправь <code className="bg-gray-200 px-2 py-1 rounded text-sm">/start</code> и <code className="bg-gray-200 px-2 py-1 rounded text-sm">/faq</code>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 font-medium">
              ✅ Бот готов принимать сообщения через webhook на <code className="bg-green-100 px-2 py-1 rounded">/api/telegram</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
