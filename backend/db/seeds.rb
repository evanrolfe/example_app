# All the passwords for users are just "password"
User.create!([
  {email: "alice@authcov.io", name: "Alice", password: 'password', reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
  {email: "bob@authcov.io", name: "Bob", password: 'password', reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil},
  {email: "celine@authcov.io", name: "Celine", password: 'password', reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil}
])
Post.create!([
  {title: "Hello", body: "World", user_id: 'auth0|5d0b85ece89b620d08ce4158'},
  {title: "Bye", body: "World", user_id: 'auth0|5d0b85ece89b620d08ce4158'},
  {title: "Hello", body: "Just a greeting from Bob.", user_id: 2},
  {title: "Hey", body: "Hey Bob, how are you?", user_id: 3}
])
Secret.create!([
  {name: "PIN Code", value: "7752", user_id: 'auth0|5d0b85ece89b620d08ce4158'},
  {name: "Bob's Secret", value: "My favorite colour is brown.", user_id: 2},
  {name: "Spare key location", value: "Under the flower pot.", user_id: 3},
  {name: "Celebrity Crush", value: "Danny DeVito", user_id: 3}
])
