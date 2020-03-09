require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import { fetchMessages, createMessage } from '../plugins/messagesPlugin'
import { initChatChannel } from '../channels/chat_channel'

document.addEventListener("turbolinks:load", function() {
  fetchMessages()
  createMessage()
  initChatChannel()
})
