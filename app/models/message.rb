class Message < ApplicationRecord
  belongs_to :user
  belongs_to :order

  after_create :broadcast_through_action_cable

  private

  def broadcast_through_action_cable
    ActionCable.server.broadcast("order_#{self.order.id}", message: self)
  end
end
