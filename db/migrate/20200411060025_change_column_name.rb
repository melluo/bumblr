class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :user_id, :author_id
  end
end
