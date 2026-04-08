__GET
#### /api/v1.0/workflows

####  Show a Workflow 

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task the workflow belongs to | integer  
  
## Request

#### Route
    GET /api/v1.0/workflows?task_id=1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    task_id=1

#### cURL
    curl -g "[https://runrun.it/api/v1.0/workflows?task_id=1](https://runrun.it/api/v1.0/workflows?task_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_workflows/show_a_workflow)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 138

#### Body
    {
      "id": 1,
      "workable_id": 1,
      "workable_type": "Task",
      "task_id": 1,
      "current_workflow_element_id": 1,
      "is_last_element": true,
      "is_first_element": true
    }

__POST

#### /api/v1.0/workflows

####  Create a Workflow 

The workflow is eligible to be created if: 

  * the task is not closed
  * the task is not on going
  * the task does not have a workflow

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task the workflow belongs to | integer  
  
## Request

#### Route
    POST /api/v1.0/workflows

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "task_id": 1
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows](https://runrun.it/api/v1.0/workflows)" -d '{"task_id":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_workflows/create_a_workflow)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 138

#### Body
    {
      "id": 1,
      "workable_id": 1,
      "workable_type": "Task",
      "task_id": 1,
      "current_workflow_element_id": 1,
      "is_last_element": true,
      "is_first_element": true
    }

__DELETE

#### /api/v1.0/workflows

####  Destroy a workflow 

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task the workflow belongs to | integer  
  
## Request

#### Route
    DELETE /api/v1.0/workflows

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "task_id": 1
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows](https://runrun.it/api/v1.0/workflows)" -d '{"task_id":1}' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_workflows/destroy_a_workflow)

#### Status
    204

#### Headers