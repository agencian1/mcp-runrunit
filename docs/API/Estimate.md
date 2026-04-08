__GET
#### /api/v1.0/tasks/:task_id/estimates

####  Show all the estimatives for a task. 

"Show the all the estimatives for a task."

## Request

#### Route
    GET /api/v1.0/tasks/1/estimates

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/1/estimates](https://runrun.it/api/v1.0/tasks/1/estimates)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/estimates/show_all_the_estimatives_for_a_task.)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 205

#### Body
    [
      {
        "id": 3,
        "task_id": 1,
        "work_seconds": 3600,
        "created_at": "2026-03-04T17:00:51-03:00",
        "is_standard": false
      },
      {
        "id": 4,
        "task_id": 1,
        "work_seconds": 7200,
        "created_at": "2026-03-04T17:00:51-03:00",
        "is_standard": false
      }
    ]

__POST

#### /api/v1.0/tasks/:task_id/estimates

####  Create a estimative for a task. 

"Create a estimate for a task."

## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/estimates

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "estimate": {
        "task_id": 1,
        "work_seconds": "9000"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/estimates](https://runrun.it/api/v1.0/tasks/1/estimates)" -d '{"estimate":{"task_id":1,"work_seconds":"9000"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/estimates/create_a_estimative_for_a_task.)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 101

#### Body
    
    
    {
      "id": 4,
      "task_id": 1,
      "work_seconds": 9000,
      "created_at": "2026-03-04T17:00:52-03:00",
      "is_standard": false
    }
