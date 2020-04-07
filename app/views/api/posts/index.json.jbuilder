@posts.each do |post|
    json.set! post.id do 
      json.partial! 'post', post: post
      if post.image.attached?
        json.imageUrl url_for(post.image)
      end
    end
end

