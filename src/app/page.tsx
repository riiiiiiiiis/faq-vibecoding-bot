import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              🤖 FAQ-бот для Telegram
            </h1>
            <p className={styles.subtitle}>
              Развёрнут и готов к работе!
            </p>
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>
              📋 Что делать дальше:
            </h2>
            
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>
                  1
                </span>
                <p className={styles.stepText}>
                  Настрой переменные окружения на Vercel: <code className={styles.code}>TELEGRAM_BOT_TOKEN</code> и <code className={styles.code}>TELEGRAM_WEBHOOK_SECRET</code>
                </p>
              </div>
              
              <div className={styles.step}>
                <span className={styles.stepNumber}>
                  2
                </span>
                <p className={styles.stepText}>
                  Задеплой проект на Vercel
                </p>
              </div>
              
              <div className={styles.step}>
                <span className={styles.stepNumber}>
                  3
                </span>
                <p className={styles.stepText}>
                  Настрой webhook в браузере по инструкции из README
                </p>
              </div>
              
              <div className={styles.step}>
                <span className={styles.stepNumber}>
                  4
                </span>
                <p className={styles.stepText}>
                  Протестируй бота: отправь <code className={styles.code}>/start</code> и <code className={styles.code}>/faq</code>
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              ✅ Бот готов принимать сообщения через webhook на <code className={styles.code}>/api/telegram</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}