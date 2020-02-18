import React from "react"
import { Helmet } from "react-helmet"
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
      <div id="newsletter">
          <Helmet>
            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          </Helmet>

          <form 
            action="https://app.convertkit.com/forms/1225484/subscriptions" 
            className="seva-form formkit-form" 
            method="post" 
            data-sv-form="1225484" 
            data-uid="53738043f4" 
            data-format="inline" 
            data-version="5" 
            data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;redirect&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;https://leblanc.tech&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:false,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" 
            min-width="400 500 600 700 800">
                <div className="formkit-background">
                </div>
                <div data-style="minimal">
                    <div className="formkit-header" data-element="header">
                        <h1>Join the Pursuit of Knowledge</h1>
                    </div>
                    <div className="formkit-subheader" data-element="subheader">
                        <p>Get notified about my latest articles and insights.</p>
                    </div>
                    <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
                        <div className="formkit-field">
                            <input className="formkit-input" aria-label="First Name" name="fields[first_name]" placeholder="First Name" type="text" />
                        </div>
                        <div class="formkit-field">
                            <input class="formkit-input" aria-label="Last Name" name="fields[last_name]" placeholder="Last Name" type="text" />
                        </div>
                        <div className="formkit-field">
                            <input className="formkit-input" name="email_address" placeholder="Your email address" required="" type="email" />
                        </div>
                        <button data-element="submit" className="formkit-submit formkit-submit">
                            <div className="formkit-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <span>Sign Up!</span>
                        </button>
                    </div>
                    <div className="formkit-guarantee" data-element="guarantee">
                        I won't send you spam. Unsubscribe at any time.
                    </div>
                </div>
        </form>
      </div>
    </>
  )
}

export default Newsletter
