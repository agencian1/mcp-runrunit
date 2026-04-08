__GET
#### /api/v1.0/task_types

####  List task types 

## Parameters

Name | Description | type  
---|---|---  
sort  | Sort by column | string  
sort_dir  | Sort direction ('asc' or 'desc') | string  
search_term  | Filter by term | string  
filter_id  | Filter by an existing filter | integer  
is_visible  | Filter by visible clients | boolean  
  
## Request

#### Route
    GET /api/v1.0/task_types

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_types](https://runrun.it/api/v1.0/task_types)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasktype/list_task_types)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Id of the type | integer  
name  | Type name | string  
is_visible  | Is the type visible to be chosen? (default: true) | boolean  
standard_effort  | Default effort to complete a task of this type (default: '00:00') | string  
standard_effort_time  | Default effort (in seconds) to complete a task of this type | integer  
avg_delivery  | Average delivery time (in hours) to complete tasks of this type | integer  
color  | Color of the type in hexadecimal format | string  
is_public  | True if type is public | boolean  
is_default  | True if is a system type | boolean  
created_at  | Datetime of creation | datetime  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 212

#### Body
    [
      {
        "id": 1,
        "name": "Task Type",
        "is_visible": true,
        "standard_effort": "01:00",
        "standard_effort_time": 3600,
        "avg_delivery": 0,
        "color": "FFFFFF",
        "is_public": true,
        "is_default": false,
        "created_at": "2026-03-04T16:58:27-03:00"
      }
    ]

__GET

#### /api/v1.0/task_types/:id

####  Show a task type 

## Request

#### Route
    GET /api/v1.0/task_types/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_types/1](https://runrun.it/api/v1.0/task_types/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasktype/show_a_task_type)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Id of the type | integer  
name  | Type name | string  
is_visible  | Is the type visible to be chosen? (default: true) | boolean  
standard_effort  | Default effort to complete a task of this type (default: '00:00') | string  
standard_effort_time  | Default effort (in seconds) to complete a task of this type | integer  
avg_delivery  | Average delivery time (in hours) to complete tasks of this type | integer  
color  | Color of the type in hexadecimal format | string  
is_public  | True if type is public | boolean  
is_default  | True if is a system type | boolean  
created_at  | Datetime of creation | datetime  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 210

#### Body
    {
      "id": 1,
      "name": "Task Type",
      "is_visible": true,
      "standard_effort": "01:00",
      "standard_effort_time": 3600,
      "avg_delivery": 0,
      "color": "FFFFFF",
      "is_public": true,
      "is_default": false,
      "created_at": "2026-03-04T16:58:27-03:00"
    }

__POST

#### /api/v1.0/task_types

####  Create a task type 

## Parameters

Name | Description | type  
---|---|---  
task_type[name] required | Type name | string  
task_type[is_visible]  | Is the type visible to be chosen? (default: true) | boolean  
task_type[standard_effort]  | Default effort to complete a task of this type (default: '00:00') | string  
task_type[is_public]  | True if type is public | boolean  
task_type[color]  | Color of the type in hexadecimal format | string  
  
## Request

#### Route
    POST /api/v1.0/task_types

#### Headers    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "task_type": {
        "name": "Task Type",
        "is_visible": true,
        "standard_effort": "03:00",
        "is_public": true,
        "color": "FFFFFF"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/task_types](https://runrun.it/api/v1.0/task_types)" -d '{"task_type":{"name":"Task Type","is_visible":true,"standard_effort":"03:00","is_public":true,"color":"FFFFFF"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasktype/create_a_task_type)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 211

#### Body
    {
      "id": 1,
      "name": "Task Type",
      "is_visible": true,
      "standard_effort": "03:00",
      "standard_effort_time": 10800,
      "avg_delivery": 0,
      "color": "FFFFFF",
      "is_public": true,
      "is_default": false,
      "created_at": "2026-03-04T16:58:28-03:00"
    }

__PUT

#### /api/v1.0/task_types/:id

####  Update a task type 

## Parameters

Name | Description | type  
---|---|---  
task_type[name]  | Type name | string  
task_type[is_visible]  | Is the type visible to be chosen? (default: true) | boolean  
task_type[standard_effort]  | Default effort to complete a task of this type (default: '00:00') | string  
task_type[is_public]  | True if type is public | boolean  
task_type[color]  | Color of the type in hexadecimal format | string  
  
## Request

#### Route
    PUT /api/v1.0/task_types/1

#### Headers    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "task_type": {
        "name": "Task Type 2",
        "is_visible": false,
        "standard_effort": "04:00",
        "is_public": true,
        "color": "000000"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/task_types/1](https://runrun.it/api/v1.0/task_types/1)" -d '{"task_type":{"name":"Task Type 2","is_visible":false,"standard_effort":"04:00","is_public":true,"color":"000000"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasktype/update_a_task_type)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 214

#### Body
    {
      "id": 1,
      "name": "Task Type 2",
      "is_visible": false,
      "standard_effort": "04:00",
      "standard_effort_time": 14400,
      "avg_delivery": 0,
      "color": "000000",
      "is_public": true,
      "is_default": false,
      "created_at": "2026-03-04T16:58:29-03:00"
    }
