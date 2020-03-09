module Api
  module V1
    class MessagesController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        order = Order.find params[:order_id]
        messages = order.messages

        render json: messages
      end
    
      def create
        order = Order.find params[:order_id]
        message = Message.new message_params
        
        message.user = current_user
        message.order = order
        
        render json: message if message.save
      end

      private

      def message_params
        params.require(:message).permit(:content)
      end
    end    
  end
end