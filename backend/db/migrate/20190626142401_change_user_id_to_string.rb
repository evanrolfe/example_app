class ChangeUserIdToString < ActiveRecord::Migration[5.2]
  def change
    change_column(:posts, :user_id, :string)
    change_column(:secrets, :user_id, :string)
  end
end
