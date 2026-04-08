__GET

#### /api/v1.0/manual_work_periods

####  List all manual work periods 

List all manual work periods. If a `user_id` and/or `task_id` is supplied, only work periods for the given user and/or task will be returned. `from` and `before` can be used to specify a date window, default period is 1 month if not specified.

## Parameters

Name | Description | type  
---|---|---  
manual_work_period[task_id]  | ID of related task | integer  
manual_work_period[from]  | Manual work period from | date_time  
manual_work_period[before]  | Manual work period before | date_time  
  
## Request

#### Route
    GET /api/v1.0/manual_work_periods?task_id=1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    task_id=1

#### cURL
    curl -g "[https://runrun.it/api/v1.0/manual_work_periods?task_id=1](https://runrun.it/api/v1.0/manual_work_periods?task_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/manual_work_periods/list_all_manual_work_periods)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 237

#### Body
    [
      {
        "id": 1,
        "task_id": 1,
        "seconds": 1000,
        "date_to_apply": "2019-02-08",
        "worker_name": "Coyote 690",
        "user_id": "coyote-690",
        "team_id": null,
        "team_name": null,
        "board_stage_id": null,
        "board_stage_name": null,
        "task_state_id": null,
        "task_status_id": null
      }
    ]

__GET

#### /api/v1.0/manual_work_periods/:id

####  Show a Manual Work Period 

## Request

#### Route
    GET /api/v1.0/manual_work_periods/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/manual_work_periods/1](https://runrun.it/api/v1.0/manual_work_periods/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/manual_work_periods/show_a_manual_work_period)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID | integer  
task_id  | ID of related task | integer  
seconds  | Time added in seconds | integer  
date_to_apply  | Date time was worked | date  
worker_name  | Name of user who did the work | string  
user_id  | ID of user who did the work | string  
team_id  | ID of team associated to user who did the work | integer  
team_name  | Name of the team associated to the manual work period | string  
board_stage_id  | ID of board stage associated to the manual work period | integer  
board_stage_name  | Name of the board stage associated to the manual work period | string  
task_state_id  | [Deprecated] Use board_stage_id | integer  
task_status_id  | [Deprecated] Use board_stage_id | integer  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 235

#### Body
    {
      "id": 1,
      "task_id": 1,
      "seconds": 1000,
      "date_to_apply": "2019-02-08",
      "worker_name": "Coyote 691",
      "user_id": "coyote-691",
      "team_id": null,
      "team_name": null,
      "board_stage_id": null,
      "board_stage_name": null,
      "task_state_id": null,
      "task_status_id": null
    }

__POST

#### /api/v1.0/manual_work_periods

####  Create a Manual Work Period 

Create a record that additional time was worked on a given task, by the logged in user on a specific team and board stage, on a specific day.

## Parameters

Name | Description | type  
---|---|---  
manual_work_period[task_id]  | ID of related task | integer  
manual_work_period[board_stage_id]  | ID of board stage associated to the manual work period | integer  
manual_work_period[date_to_apply]  | Date time was worked | date  
manual_work_period[seconds]  | Time added in seconds | integer  
  
## Request

#### Route
    POST /api/v1.0/manual_work_periods

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "manual_work_period": {
        "task_id": 1,
        "seconds": 3600,
        "date_to_apply": "2019-02-08"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/manual_work_periods](https://runrun.it/api/v1.0/manual_work_periods)" -d '{"manual_work_period":{"task_id":1,"seconds":3600,"date_to_apply":"2019-02-08"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/manual_work_periods/create_a_manual_work_period)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 235

#### Body
    {
      "id": 1,
      "task_id": 1,
      "seconds": 3600,
      "date_to_apply": "2019-02-08",
      "worker_name": "Coyote 692",
      "user_id": "coyote-692",
      "team_id": null,
      "team_name": null,
      "board_stage_id": null,
      "board_stage_name": null,
      "task_state_id": null,
      "task_status_id": null
    }

__PUT

#### /api/v1.0/manual_work_periods/:id

####  Update a Manual Work Period 

After creation the only updateable field is `seconds`. In general, it is better to delete and create a new Manual Work Period rather than update an existing one.

## Parameters

Name | Description | type  
---|---|---  
manual_work_period[seconds]  | Time added in seconds | integer  
  
## Request

#### Route
    PUT /api/v1.0/manual_work_periods/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "manual_work_period": {
        "seconds": 2000
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/manual_work_periods/1](https://runrun.it/api/v1.0/manual_work_periods/1)" -d '{"manual_work_period":{"seconds":2000}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/manual_work_periods/update_a_manual_work_period)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 235

#### Body
    {
      "id": 1,
      "task_id": 1,
      "seconds": 2000,
      "date_to_apply": "2019-02-08",
      "worker_name": "Coyote 693",
      "user_id": "coyote-693",
      "team_id": null,
      "team_name": null,
      "board_stage_id": null,
      "board_stage_name": null,
      "task_state_id": null,
      "task_status_id": null
    }

__DELETE

#### /api/v1.0/manual_work_periods/:id

####  Destroy a Manual Work Period 

## Request

#### Route
    DELETE /api/v1.0/manual_work_periods/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/manual_work_periods/1](https://runrun.it/api/v1.0/manual_work_periods/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/manual_work_periods/destroy_a_manual_work_period)

#### Status
    204

#### Headers