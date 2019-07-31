# All the passwords for users are just "password"
User.create!([
  {email: "alice@authcov.io", name: "Alice", encrypted_password: "$2a$11$ej6BA2.v4.bxbifV.1P3C.cTvv9V9bEE3ajHAiUUOoNJi5oEhL80S", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
  {email: "bob@authcov.io", name: "Bob", encrypted_password: "$2a$11$cFl5ZV6W9GLDc.r9sqZf6uLbHeNrevnDYWJ9gdsmlQ.KSZp2JCUQO", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
  {email: "celine@authcov.io", name: "Celine", encrypted_password: "$2a$11$FGOSwjEbHlc7SXqABUf5M.Ule.ciDKrx7hJ/DyZOc.yDIik0QsRVq", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil}
])
Post.create!([
  {title: "Hello", body: "World", user_id: 1},
  {title: "Bye", body: "World", user_id: 1},
  {title: "Hello", body: "Just a greeting from Bob.", user_id: 2},
  {title: "Hey", body: "Hey Bob, how are you?", user_id: 3}
])
Secret.create!([
  {name: "PIN Code", value: "7752", user_id: 1},
  {name: "Bob's Secret", value: "My favorite colour is brown.", user_id: 2},
  {name: "Spare key location", value: "Under the flower pot.", user_id: 3},
  {name: "Celebrity Crush", value: "Danny DeVito", user_id: 3}
])
