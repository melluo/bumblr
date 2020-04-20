class AddColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reblog_tags, :text
  end
end
