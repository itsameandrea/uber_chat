class Order < ApplicationRecord
  belongs_to :user
  belongs_to :driver
  has_many :messages
end
