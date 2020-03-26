class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?
    private
    def current_user 
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end


    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in!
        unless current_user
         render json: { base: ['Invalid email or password.'] }, status: 401
        end
    end



end
#CELLl