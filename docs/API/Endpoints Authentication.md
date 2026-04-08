
## How to authenticate to use the API

Every request to the API should be sent with the correct authentication headers, `app_key` and `user_token`:
    
    
        curl "[https://runrun.it/api/v1.0/users](https://runrun.it/api/v1.0/users)" -X GET \
          -H "App-Key: f9c650c98eeb28e345e0a38a184d20cb" \
          -H "User-Token: roBknmkPI0ALmwkRuC1q"
    

Whenever you send the incorrect information on `app_key` or `user_token`, the response will be `401 Unauthorized`. The `user_token` is unique to each user and allows an agent to act on behalf of that user on Runrun.it. The `app_key` identifies a whole account, and **cannot be changed through the GUI**.

### How to access your API authentication keys

API access is a premium feature only available to customers of certain paid accounts. To see which plans include API access check [here](/plans_and_pricing). However developers with ideas for apps taking advantage of Runrun.it are always welcome to contact [[help@runrun.it](mailto:help@runrun.it)]([help@runrun.it](mailto:help@runrun.it)) about setting up a test account with API access.

  1. Go to Integration and Apps on Runrun.it ![Integration and Apps](/api_docs_images/04.png)
  2. Then look for "API and Webhooks" and click `Open` ![Api and Webhooks](/api_docs_images/02.png)
  3. Your `app_key` will be displayed next to the `user_token` ![Get application key and user token](/api_docs_images/03.png)



### Data format

All responses will be valid JSON. Requests should be in JSON as well (although for most actions form-encoded data is accepted as well).

All dates will be in [ISO 8601]([http://www.w3.org/TR/NOTE-datetime](http://www.w3.org/TR/NOTE-datetime)) format. The time zones, if specified, will take into account when doing date operations. Another thing to be mentioned is that you need to `urlencode` your dates if it does contain special characters like `+` to specify time zones.
