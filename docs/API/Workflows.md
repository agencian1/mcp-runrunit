__GET
#### /api/v1.0/workflows

####  Show a task workflow 

## Parameters

Name | Description  
---|---  
task_id required | ID of the task the workflow belongs to  

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

[Simulated Response](/api/documentation/simulate/workflows/show_a_task_workflow)

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

####  Create a task workflow 

## Parameters

Name | Description  
---|---  
task_id required | ID of the task the workflow will be associated  
  
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
      "task_id": 1,
      "workflow": {
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows](https://runrun.it/api/v1.0/workflows)" -d '{"task_id":1,"workflow":{}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflows/create_a_task_workflow)

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

####  Destroy task workflow 

## Parameters

Name | Description  
---|---  
task_id required | ID of the task the workflow belongs to  
  
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

[Simulated Response](/api/documentation/simulate/workflows/destroy_task_workflow)

#### Status
    204

#### Headers


__GET

#### /api/v1.0/workflows

####  Show a task_template workflow 

## Parameters

Name | Description  
---|---  
task_template_id required | ID of the task_template the workflow belongs to  
  
## Request

#### Route    
    GET /api/v1.0/workflows?task_template_id=1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    task_template_id=1

#### cURL
    curl -g "[https://runrun.it/api/v1.0/workflows?task_template_id=1](https://runrun.it/api/v1.0/workflows?task_template_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflows/show_a_task_template_workflow)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 158

#### Body    
    {
      "id": 1,
      "workable_id": 1,
      "workable_type": "TaskTemplate",
      "task_template_id": 1,
      "current_workflow_element_id": null,
      "is_last_element": true,
      "is_first_element": true
    }

__POST

#### /api/v1.0/workflows

####  Create a task_template workflow 

## Parameters

Name | Description  
---|---  
task_template_id required | ID of the task_template the workflow will be associated  
  
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
      "task_template_id": 2,
      "workflow": {
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows](https://runrun.it/api/v1.0/workflows)" -d '{"task_template_id":2,"workflow":{}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflows/create_a_task_template_workflow)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 158

#### Body
    {
      "id": 1,
      "workable_id": 2,
      "workable_type": "TaskTemplate",
      "task_template_id": 2,
      "current_workflow_element_id": null,
      "is_last_element": true,
      "is_first_element": true
    }

__DELETE

#### /api/v1.0/workflows

####  Destroy task_template workflow 

## Parameters

Name | Description  
---|---  
task_template_id required | ID of the task_template the workflow belongs to  
  
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
      "task_template_id": 3
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows](https://runrun.it/api/v1.0/workflows)" -d '{"task_template_id":3}' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflows/destroy_task_template_workflow)

#### Status    
    204

#### Headers
...