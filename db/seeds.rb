# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
#delete everything first
User.all.each do |user|
    user.avatar.purge if user.avatar
    user.destroy
end
User.destroy_all

user1 = User.create(email: "shiba@gmail.com", username: "shiba-inosuke", password: "hunter12")
user2 = User.create(email: "flowerboy@gmail.com", username: "flowerboy", password: "hunter12")
user3 = User.create(email: "samoyed@gmail.com", username: "samoyed", password: "hunter12")
user4 = User.create(email: "whereami@gmail.com", username: "whereami", password: "hunter12")
demo = User.create(email: "demouser@demo.com", username: "demouser", password: "hunter12") 


#avatar-images
user1_avie = open("https://bumblr-dev.s3.us-east-2.amazonaws.com/tumblr_pp17rgerFz1xzczs3o5_400.png")
user1.avatar.attach(io: user1_avie, filename: "shiba-inosuke.png")
user2_avie = open("https://bumblr-dev.s3.us-east-2.amazonaws.com/tumblr_ovpqz2NcGW1v1u7rro7_500.jpg")
user2.avatar.attach(io: user2_avie, filename: "flowerboy.jpg")
user3_avie = open("https://bumblr-dev.s3.us-east-2.amazonaws.com/tumblr_pk329mTRCb1xxxd2qo2_640.jpg")
user3.avatar.attach(io: user3_avie, filename: "samoyed.jpg")
user4_avie = open("https://bumblr-dev.s3.us-east-2.amazonaws.com/tumblr_omic84WR7Q1vaaf1yo3_500.png")
user4.avatar.attach(io: user4_avie, filename: "whereami.png")
demo_avatar = open("https://bumblr-dev.s3.us-east-2.amazonaws.com/tumblr_ovpqz2NcGW1v1u7rro4_500.jpg")
demo.avatar.attach(io: demo_avatar, filename: "cutiepie.jpg")
# #followee, person being followed
Follow.create(follower_id: demo.id, followee_id: user1.id) #demo follows user1
Follow.create(follower_id: user1.id, followee_id: user3.id) #user1 follows user3
Follow.create(follower_id: user1.id, followee_id: user2.id) #user1 follows user2

#posts
text1 = Post.create(title: "Hello", body: "World", tags:"my first post", post_type: "text", author_id: demo.id)
text2 = Post.create(title: "Test", body: "Ok", post_type: "text", author_id: user3.id)

#likes
like1 = Like.create(user_id: user1.id, post_id: text1.id)
like2 = Like.create(user_id: user4.id, post_id: text2.id)