class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.string :name
      t.text :value
      t.integer :user_id

      t.timestamps
    end
  end
end
