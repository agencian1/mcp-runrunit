__POST

#### /api/v1.0/justifications

####  Create an arbitrary Justification 

## Request

#### Route
    POST /api/v1.0/justifications

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "text": "New Justification 1",
      "date": "2026-03-03"
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/justifications](https://runrun.it/api/v1.0/justifications)" -d '{"text":"New Justification 1","date":"2026-03-03"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/justifications/create_an_arbitrary_justification)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 113

#### Body
    {
      "id": 1,
      "user_id": "coyote-820",
      "date": "2026-03-03",
      "text": "New Justification 1",
      "task_id": null,
      "task_title": null
    }

__POST

#### /api/v1.0/justifications

####  Create an arbitrary Justification for a task 

## Request

#### Route
    POST /api/v1.0/justifications

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "text": "New Justification 2",
      "date": "2026-03-03",
      "task_id": 498
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/justifications](https://runrun.it/api/v1.0/justifications)" -d '{"text":"New Justification 2","date":"2026-03-03","task_id":498}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/justifications/create_an_arbitrary_justification_for_a_task)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 113

#### Body
    {
      "id": 1,
      "user_id": "coyote-821",
      "date": "2026-03-03",
      "text": "New Justification 2",
      "task_id": null,
      "task_title": null
    }

__PUT

#### /api/v1.0/justifications/:justification_id

####  Update the text of a justification 

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's id | integer  
date required | Justification's date | date  
text  | Justification's text | string  
task_id  | Task's id | integer  
task_title  | Task title | string  
  
## Request

#### Route
    PUT /api/v1.0/justifications/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "text": "Old justification with a new text"
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/justifications/1](https://runrun.it/api/v1.0/justifications/1)" -d '{"text":"Old justification with a new text"}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/justifications/update_the_text_of_a_justification)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 127

#### Body
    {
      "id": 1,
      "user_id": "coyote-823",
      "date": "2026-03-02",
      "text": "Old justification with a new text",
      "task_id": null,
      "task_title": null
    }