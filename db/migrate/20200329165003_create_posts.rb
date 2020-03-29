class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body, null: false
      t.text :tags
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :posts, :id
    add_index :posts, :user_id 
  end
end
