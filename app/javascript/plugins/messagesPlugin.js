const fetchMessages = async () => {
  const messagesBox = document.querySelector('.messages-box')
  if (messagesBox) {
    const orderId = messagesBox.dataset.orderId
    
    const res = await fetch(`/api/v1/orders/${orderId}/messages`)
    const messages = await res.json()

    messages.forEach(message => addMessageToDom(message))
  }
}

const createMessage = () => {
  const messagesBox = document.querySelector('.messages-box')
  if (messagesBox) {
    const form = document.querySelector('.new-message-form')
    const input = document.querySelector('.new-message-input')
    const orderId = messagesBox.dataset.orderId

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      fetch(`/api/v1/orders/${orderId}/messages`, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          message: {
            content: input.value
          }
        })
      })
    })
  }
}

const addMessageToDom = (message) => {
  const messagesBox = document.querySelector('.messages-box')
  if (messagesBox) {
    messagesBox.insertAdjacentHTML('beforeend', `<p> ${message.content} by <strong> User #${message.user_id}</strong></p>`)
  }
}

export { fetchMessages, createMessage, addMessageToDom }