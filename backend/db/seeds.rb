# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(
  id: 1,
  email: 'evan@gmail.com',
  name: 'Evan Rolfe',
  password: 'pass'
)
User.create(
  id: 2,
  email: 'tom@gmail.com',
  name: 'Tom Smith',
  password: 'pass'
)

Post.create(id: 1, title: "My first post!x", body: "Hello world, this is my amazing post!!!", user_id: 1)
Post.create(id: 2, title: "WHat an amazing site!", body: "This is such a good site, love it, Tom.", user_id: 2)

Secret.create(id: 1, name: "Fav colour", value: "Pink", user_id: 2)
Secret.create(id: 2, name: "Fav colour", value: "Blue", user_id: 1)
