## __Description

__GET

#### /api/v1.0/descriptions

####  Query Multiple Descriptions 

## Parameters

Name | Description  
---|---  
task_template_ids  | IDs of Task Templates if belongs  
project_ids  | IDs of Projects if belongs  
  
## Request

#### Route
    
    
    GET /api/v1.0/descriptions?project_ids=1%2C2

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    
    
    project_ids=1,2

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/descriptions?project_ids=1%2C2](https://runrun.it/api/v1.0/descriptions?project_ids=1%2C2)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/description/query_multiple_descriptions)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 316

#### Body
    
    
    [
      {
        "project_id": 1,
        "description": "Cool Project",
        "current_editor_id": null,
        "current_editor_name": null,
        "edited_at": "2026-03-04T16:59:02-03:00",
        "locked_at": null
      },
      {
        "project_id": 2,
        "description": "Expensive Project",
        "current_editor_id": null,
        "current_editor_name": null,
        "edited_at": "2026-03-04T16:59:02-03:00",
        "locked_at": null
      }
    ]

__GET

#### /api/v1.0/descriptions

####  Query Single Project Description 

## Parameters

Name | Description  
---|---  
task_draft_id  | Task draft  
task_template_id  | Task template  
project_id  | Project  
  
## Request

#### Route
    
    
    GET /api/v1.0/descriptions?project_id=1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    
    
    project_id=1

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/descriptions?project_id=1](https://runrun.it/api/v1.0/descriptions?project_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/description/query_single_project_description)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 154

#### Body
    
    
    {
      "project_id": 1,
      "description": "Cool Project",
      "current_editor_id": null,
      "current_editor_name": null,
      "edited_at": "2026-03-04T16:59:05-03:00",
      "locked_at": null
    }

__GET

#### /api/v1.0/descriptions

####  Query Single Task Template Description 

## Parameters

Name | Description  
---|---  
task_draft_id  | Task draft  
task_template_id  | Task template  
project_id  | Project  
  
## Request

#### Route
    
    
    GET /api/v1.0/descriptions?task_template_id=12

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    
    
    task_template_id=12

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/descriptions?task_template_id=12](https://runrun.it/api/v1.0/descriptions?task_template_id=12)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/description/query_single_task_template_description)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 161

#### Body
    
    
    {
      "task_template_id": 12,
      "description": "Awesome Task",
      "current_editor_id": null,
      "current_editor_name": null,
      "edited_at": "2026-03-04T16:59:06-03:00",
      "locked_at": null
    }

__PUT

#### /api/v1.0/descriptions

####  Update Project Description 

## Parameters

Name | Description | type  
---|---|---  
description[description] required | The text of the description | text  
  
## Request

#### Route
    
    
    PUT /api/v1.0/descriptions

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "description": {
        "project_id": 1,
        "description": "Another Awesome Project Description"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/descriptions](https://runrun.it/api/v1.0/descriptions)" -d '{"description":{"project_id":1,"description":"Another Awesome Project Description"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/description/update_project_description)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 177

#### Body
    
    
    {
      "project_id": 1,
      "description": "Another Awesome Project Description",
      "current_editor_id": null,
      "current_editor_name": null,
      "edited_at": "2026-03-04T16:59:08-03:00",
      "locked_at": null
    }

__PUT

#### /api/v1.0/descriptions

####  Update Task Template Description 

## Parameters

Name | Description | type  
---|---|---  
description[description] required | The text of the description | text  
  
## Request

#### Route
    
    
    PUT /api/v1.0/descriptions

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "description": {
        "task_template_id": 13,
        "description": "Another Awesome Project Description"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/descriptions](https://runrun.it/api/v1.0/descriptions)" -d '{"description":{"task_template_id":13,"description":"Another Awesome Project Description"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/description/update_task_template_description)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 184

#### Body
    
    
    {
      "task_template_id": 13,
      "description": "Another Awesome Project Description",
      "current_editor_id": null,
      "current_editor_name": null,
      "edited_at": "2026-03-04T16:59:09-03:00",
      "locked_at": null
    }
