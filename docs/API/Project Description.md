__PUT
#### /api/v1.0/projects/:project_id/description

####  Update the project description 

## Parameters

Name | Description | type  
---|---|---  
description  | The text of the description | text  
current_editor_id  | ID of user that is editing the description | string  
current_editor_name  | Name of user that is editing the description | string  
edited_at  | Datetime the description has been edited | datetime  
locked_at  | Datetime the description has been locked by the current editor | datetime  
  
## Request

#### Route
    PUT /api/v1.0/projects/1/description

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body 
    {
      "description": {
        "id": 1,
        "describable_id": 1,
        "describable_type": "Project",
        "description": "My description",
        "created_at": "2026-03-04T16:59:01-03:00",
        "updated_at": "2026-03-04T16:59:01-03:00",
        "edited_at": "2026-03-04T16:59:01-03:00",
        "current_editor_id": null,
        "locked_at": null,
        "enterprise_id": 1
      },
      "project_description": {
        "id": null,
        "describable_id": 1,
        "describable_type": "Project",
        "description": "Gorgeous!",
        "created_at": null,
        "updated_at": null,
        "edited_at": null,
        "current_editor_id": null,
        "locked_at": null,
        "enterprise_id": null
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/description](https://runrun.it/api/v1.0/projects/1/description)" -d '{"description":{"id":1,"describable_id":1,"describable_type":"Project","description":"My description","created_at":"2026-03-04T16:59:01-03:00","updated_at":"2026-03-04T16:59:01-03:00","edited_at":"2026-03-04T16:59:01-03:00","current_editor_id":null,"locked_at":null,"enterprise_id":1},"project_description":{"id":null,"describable_id":1,"describable_type":"Project","description":"Gorgeous!","created_at":null,"updated_at":null,"edited_at":null,"current_editor_id":null,"locked_at":null,"enterprise_id":null}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_description/update_the_project_description)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 143

#### Body
    {
      "id": 1,
      "description": "Gorgeous!",
      "current_editor_id": null,
      "current_editor_name": null,
      "edited_at": "2026-03-04T16:59:01-03:00",
      "locked_at": null
    }
