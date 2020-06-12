import { Message } from "element-ui";

export let message = (message, type) => {
  Message({
    message: message,
    type: type,
    duration: 5 * 1000
  });
}