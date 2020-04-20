class AddColumnsToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reblogged_post_id, :integer
    add_column :posts, :reblog_body, :text
    add_index :posts, :reblogged_post_id
  end
end
