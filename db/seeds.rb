puts "Resetting the db..."

User.destroy_all
Driver.destroy_all
Order.destroy_all

puts "Creating a user..."
user = User.create email: 'user@test.com', password: 'password', password_confirmation: 'password'

puts "Creating a driver"
driver_user = User.create email: 'driver@test.com', password: 'password', password_confirmation: 'password'
driver = Driver.create user: driver_user

puts "Creating an order..."
Order.create user: user, driver: driver