__GET
#### /api/v1.0/tags

####  Query tags 

## Parameters

Name | Description | type  
---|---|---  
search_term required | Search term for tag name. For a given term will be return a list of tags that match fully or partially with tag name. | string  
  
## Request

#### Route
    GET /api/v1.0/tags?search_term=tag

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    search_term=tag

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tags?search_term=tag](https://runrun.it/api/v1.0/tags?search_term=tag)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tags/query_tags)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2

#### Body    
    []
