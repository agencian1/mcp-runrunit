There is a maximum limit of 100 requests per minute. If this limit is reached, it will be necessary to wait 1 minute to make new requests. In this case, the response will return the HTTP status code 429 with the following headers:

  * "RateLimit-Limit" → request limit
  * "RateLimit-Remaining" → remaining requests to reach the limit
  * "RateLimit-Reset" → date when the limit will be restored

Excessive use of the API will result in the offending `app_key` being revoked to ensure the quality of service for other users.