__GET

#### /api/v1.0/off_days

####  List all off days 

## Parameters

Name | Description | type  
---|---|---  
from  | From date | date  
to  | Up to date | date  
sort  | Sort by column | string  
sort_dir  | Sort direction ('asc' or 'desc') | string  
search_term  | Filter by term | string  
filter_id  | Filter by an existing filter | integer  
  
## Request

#### Route
    GET /api/v1.0/off_days

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/off_days](https://runrun.it/api/v1.0/off_days)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/offdays/list_all_off_days)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of the off day | integer  
day  | Date the off day occurs on | date  
description  | Name/description of off day | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 117

#### Body
    [
      {
        "id": 2,
        "day": "2026-03-06",
        "description": "Ice Cream Day"
      },
      {
        "id": 1,
        "day": "2026-03-05",
        "description": "Developer Day"
      }
    ]

__GET

#### /api/v1.0/off_days/:id

####  Show an off day 

## Request

#### Route
    GET /api/v1.0/off_days/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/off_days/1](https://runrun.it/api/v1.0/off_days/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/offdays/show_an_off_day)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of the off day | integer  
day  | Date the off day occurs on | date  
description  | Name/description of off day | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 59

#### Body
    {
      "id": 1,
      "day": "2026-03-07",
      "description": "City holiday 25"
    }

__POST

#### /api/v1.0/off_days

####  Create an off day 

## Parameters

Name | Description | type  
---|---|---  
off_day[day] required | Date the off day occurs on | date  
off_day[description]  | Name/description of off day | string  
  
## Request

#### Route
    POST /api/v1.0/off_days

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "off_day": {
        "day": "2020-12-25",
        "description": "Christmas"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/off_days](https://runrun.it/api/v1.0/off_days)" -d '{"off_day":{"day":"2020-12-25","description":"Christmas"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/offdays/create_an_off_day)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 53

#### Body
    {
      "id": 1,
      "day": "2020-12-25",
      "description": "Christmas"
    }

__PUT

#### /api/v1.0/off_days/:id

####  Update an off day 

## Parameters

Name | Description | type  
---|---|---  
off_days[day]  | Date the off day occurs on | date  
off_days[description]  | Name/description of off day | string  
  
## Request

#### Route
    PUT /api/v1.0/off_days/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "off_day": {
        "day": "2020-12-11",
        "description": "Developer Day"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/off_days/1](https://runrun.it/api/v1.0/off_days/1)" -d '{"off_day":{"day":"2020-12-11","description":"Developer Day"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/offdays/update_an_off_day)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 57

#### Body
    {
      "id": 1,
      "day": "2020-12-11",
      "description": "Developer Day"
    }

__DELETE

#### /api/v1.0/off_days/:id

####  Destroy an off day 

## Request

#### Route
    DELETE /api/v1.0/off_days/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/off_days/1](https://runrun.it/api/v1.0/off_days/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/offdays/destroy_an_off_day)

#### Status
    204

#### Headers