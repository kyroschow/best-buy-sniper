import { sendMessage as sendDiscordMessage } from '@core/notifications/discord';
import { sendMessage as sendTelegramMessage } from '@core/notifications/telegram';
import { MessageProperties } from '@core/notifications/message-properties';

export const sendMessage = async ({ color, image, message, title }: MessageProperties) => {
    await Promise.all([
        sendDiscordMessage({ message, color, image, title }),
        sendTelegramMessage({ message, color, image, title })
      ]);
  };