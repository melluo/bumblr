# [bumblr](http://bumblr-app.herokuapp.com "bumblr")

##### bumblr is a full-stack web application utilizing a ruby on rails and postgreSQL database back-end and a react and redux front-end. bumblr incorporates Amazon AWS S3 technologies, allowing cloud-based hosting of image files for faster delivery speeds and better scalability. 

![alt text](https://bumblr-dev.s3.us-east-2.amazonaws.com/bumblr-splash+(2).png "splash")

##### bumblr, a tumblr clone, is a content-driven social media site providing users a variety of posting options including text, images, quotes, and links. Users have access to personalized dashboards feeds with their posts and posts from users they follow.

# Features

## User authentication: 
- Users can signup and login. Demo account is available for trial. 
- Users who are not logged in will not have access certain fetaures of the site and will be redirected to sign in. 
```javascript
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path} 
        exact={exact} 
        render={(props) => 
            loggedIn ? <Component {...props} /> : <Redirect to='/' />
        }
    />
);

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
```

- Setting up Auth and Protected routes using react-router-dom allows for users to be redirected given certain criteria. If a user is not logged in, they will be redirected to the sign in page. If a user is already logged in, they will be shown the dashboard by default.

## User Dashboard: 
![alt text](https://bumblr-dev.s3.us-east-2.amazonaws.com/dashboard.png "dashboard")
- Users have access to personalized feeds with content they have reblogged, created, and content from users they follow. 
- Users have access to a list of recommended users they can follow and also the radar, which displays the top trending post on bumblr.
``` javascript
render() {
        return(
            <div className = "dashboard-container">
                <NavBar />
                <section className = "empty-width"></section>
                <section className = "dashboard-left">
                    <section className = "post-navbar">
                        <PostNavBar />
                    </section>
                    <section className = "dashboard-post-index">
                        <PostIndex />
                    </section>
                </section>
                <section className = "dashboard-right">
                    {this.renderRecommendedBlogs()}
                    {this.renderRadar()}
                </section>
            </div>
        )
    }
```
- The dashboard consists of modular components such as the navigation bar, the radar and recommended blogs, which can be worked into other parts of the application. 

## User Posts: 
![alt text](https://bumblr-dev.s3.us-east-2.amazonaws.com/61a5acff3af67ee52a71349697546d11.gif "post demo")
- Users can create their own content ranging from text, images, gifs, quotes, links. Users may also add tags to their posts.
```javascript
const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "Text Post":
        component = <NewTextPost />;
        break;
    case "Edit Text Post":
        component = <EditTextPost />;
        break;
    case "Photo Post":
        component = <NewPhotoPost />;
        break;
    case "Edit Photo Post":
        component = <EditPhotoPost />;
        break;
    case "Quote Post":
        component = <NewQuotePost />;
        break;
    case "Edit Quote Post":
        component = <EditQuotePost />;
        break;
    case "Link Post":
        component = <NewLinkPost />;
        break;
    case "Edit Link Post":
        component = <EditLinkPost />;
        break;
    case "Profile Dropdown":
        component = <ProfileDropdown />;
        break;
    case "User Show":
        component = <UserShow authorId = {event.target.getAttribute("authorid")} />;
        break;
    case "Search Result":
        component = <SearchResult />;
        break;
    case "Reblog Post":
        component = <NewReblogPost />;
        break;
    default:
        return null;
  }
```
- Modals are used to incorporate a wide variety of user interaction, ranging from creating new posts, editing these posts, as well as rendering account dropdown for the navgation page or a user's show page. 

## Content Interaction: 
![alt text](https://bumblr-dev.s3.us-east-2.amazonaws.com/527b17f3aba8cd880ed6aad362278f20.gif "reblog demo")
- Users can reblog content from their dashboard. Users may also like other user posts. Reblogs and likes increments the notes on a post.
``` javascript
 let originalPost = this.props.originalPost;
        if (!originalPost){
            originalPost = this.props.post;
        }
        let reblogPosts = [];
        while (originalPost && originalPost.reblogged_post_id) {
                if (originalPost.reblog_body){
                    reblogPosts.push([originalPost.author, originalPost.reblog_body])
                };
                originalPost = this.props.posts[originalPost.reblogged_post_id];
            } 
       
       
    
        let reblogList = reblogPosts.map((post) => {
            return(
                <div className = "reblog-list" key = {post[1]}>
                <div className = "reblog-header">
                <Avatar 
                avatarUrl = {post[0].avatarUrl}
                /> 
                <span>{post[0].username}</span>
                </div>
                <p className = "reblog-body">{post[1]}</p>
                </div>
                )
            })
```
- Reblogs are posts which store the original post id under a "reblogged_post_id" attribute. They can be rendered by accessing the post at the reblogged_post_id. To get the reblog chain, call .reblogged_post_id on each preceding post. 

## Future Implementation:
- Users can comment on other user's posts


