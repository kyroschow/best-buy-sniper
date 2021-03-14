import { getNotificationsInformation } from '@core/configs';
import { TelegramClient } from 'messaging-api-telegram';
import { MessageProperties } from '@core/notifications/message-properties';

const config = getNotificationsInformation().telegram;

const client = new TelegramClient({
  accessToken: config.token
});

export const sendMessage = async ({ color, image, message, title }: MessageProperties) => {
  if (config.enabled) {
    try {
      await client.sendMessage(config.chatId, message);
    } catch (err) {
      console.log(`Sending Telegram notification failed with err: ${err}`);
    }
  }
};