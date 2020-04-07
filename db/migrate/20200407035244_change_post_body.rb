class ChangePostBody < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :body, :string, null:true
  end
end
