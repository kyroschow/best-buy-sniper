import { getNotificationsInformation } from '@core/configs';
import { Webhook, MessageBuilder } from 'discord-webhook-node';
import { MessageProperties } from '@core/notifications/message-properties';

const config = getNotificationsInformation().discord;
const hook = new Webhook(config.url);

export const sendMessage = async ({ color, image, message, title }: MessageProperties) => {
  if (config.enabled) {
    try {
      const embed = new MessageBuilder().setDescription(message);
      embed.setText('@here');
      if (title) embed.setTitle(title);
      if (color) embed.setColor(color);
      await hook.send(embed);
      if (image) await hook.sendFile(image);
    }
    catch (err) {
      console.log(`Sending Discord notification failed with err: ${err}`);
    }
  }
};

export const isEnabled = () => {
  return config.enabled;
};
