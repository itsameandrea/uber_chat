import consumer from "./consumer"
import { addMessageToDom } from '../plugins/messagesPlugin'

const initChatChannel = () => {
  const messagesBox = document.querySelector('.messages-box')
  if (messagesBox) {
    const order = messagesBox.dataset.orderId

    consumer.subscriptions.create({
      channel: "ChatChannel",
      order_id: order
    }, {  
      connected() {
        console.log('Connected...')
      },
      received({ message }) {
        console.log('Receiving stuff...')
        addMessageToDom(message)
      }
    })
  }
}

export { initChatChannel }