@posts.each do |post|
    json.set! post.id do 
      json.partial! 'post', post: post
      if post.photo.attached?
        json.photoUrl url_for(post.photo)
      end
    end
end

