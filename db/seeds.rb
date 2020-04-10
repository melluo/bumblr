# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "dogsarecool@gmail.com", username: "doggydoggywhatnow", password: "hunter12")
demo = User.create(email: "demouser@demo.com", username: "demouser", password: "hunter12") 

Follow.create(follower_id: demo.id, followee_id: user1.id)
Follow.create(follower_id: user1.id, followee_id: demo.id)