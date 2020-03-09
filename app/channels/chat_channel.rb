class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "order_#{params[:order_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
