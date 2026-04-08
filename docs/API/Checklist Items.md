__GET
#### /api/v1.0/checklists/:checklist_id/items

####  List checklist items 

## Request

#### Route
    
    
    GET /api/v1.0/checklists/1/items

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/checklists/1/items](https://runrun.it/api/v1.0/checklists/1/items)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklist_items/list_checklist_items)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of checklist item | integer  
description  | Item description | string  
position  | Item position | integer  
checked  | Checklist item was completed? | boolean  
checker_id  | ID of last user who marked checklist item as completed | string  
checked_at  | Time when checklist item was marked as completed | datetime  
checklist_id  | ID of the checklist the item belongs to | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 271

#### Body
    
    
    [
      {
        "id": 1,
        "description": "Paper clips",
        "position": 1,
        "checked": false,
        "checker_id": "coyote-690",
        "checked_at": null,
        "checklist_id": 1
      },
      {
        "id": 2,
        "description": "Cups",
        "position": 2,
        "checked": false,
        "checker_id": "coyote-688",
        "checked_at": "2026-03-04T16:58:56-03:00",
        "checklist_id": 1
      }
    ]

__GET

#### /api/v1.0/checklists/:checklist_id/items/:id

####  Show a checklist item 

## Request

#### Route
    
    
    GET /api/v1.0/checklists/1/items/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/checklists/1/items/1](https://runrun.it/api/v1.0/checklists/1/items/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklist_items/show_a_checklist_item)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of checklist item | integer  
description  | Item description | string  
position  | Item position | integer  
checked  | Checklist item was completed? | boolean  
checker_id  | ID of last user who marked checklist item as completed | string  
checked_at  | Time when checklist item was marked as completed | datetime  
checklist_id  | ID of the checklist the item belongs to | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 129

#### Body
    
    
    {
      "id": 1,
      "description": "Paper clips",
      "position": null,
      "checked": false,
      "checker_id": "coyote-693",
      "checked_at": null,
      "checklist_id": 1
    }

__POST

#### /api/v1.0/checklists/:checklist_id/items

####  Create a checklist item 

## Parameters

Name | Description | type  
---|---|---  
checklist_item[description] required | Item description | string  
checklist_item[checked]  | Checklist item was completed? | boolean  
checklist_item[position]  | Item position | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/checklists/1/items

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist_item": {
        "checked": true,
        "description": "Buy more pencils",
        "position": 1
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/checklists/1/items](https://runrun.it/api/v1.0/checklists/1/items)" -d '{"checklist_item":{"checked":true,"description":"Buy more pencils","position":1}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklist_items/create_a_checklist_item)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 153

#### Body
    
    
    {
      "id": 2,
      "description": "Buy more pencils",
      "position": 1,
      "checked": true,
      "checker_id": "coyote-694",
      "checked_at": "2026-03-04T16:58:58-03:00",
      "checklist_id": 1
    }

__PUT

#### /api/v1.0/checklists/:checklist_id/items/:id

####  Update a checklist item 

## Parameters

Name | Description | type  
---|---|---  
checklist_item[description]  | Item description | string  
checklist_item[checked]  | Checklist item was completed? | boolean  
checklist_item[position]  | Item position | integer  
  
## Request

#### Route
    
    
    PUT /api/v1.0/checklists/1/items/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist_item": {
        "checked": true,
        "description": "Buy beer",
        "position": 1
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/checklists/1/items/1](https://runrun.it/api/v1.0/checklists/1/items/1)" -d '{"checklist_item":{"checked":true,"description":"Buy beer","position":1}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklist_items/update_a_checklist_item)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 145

#### Body
    
    
    {
      "id": 1,
      "description": "Buy beer",
      "position": 1,
      "checked": true,
      "checker_id": "coyote-696",
      "checked_at": "2026-03-04T16:58:59-03:00",
      "checklist_id": 1
    }

__DELETE

#### /api/v1.0/checklists/:checklist_id/items/:id

####  Destroy a checklist item 

## Request

#### Route
    
    
    DELETE /api/v1.0/checklists/1/items/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/checklists/1/items/1](https://runrun.it/api/v1.0/checklists/1/items/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklist_items/destroy_a_checklist_item)

#### Status
    
    
    204

#### Headers


## __Checklists

__GET

#### /api/v1.0/tasks/:task_id/checklist

####  Show a checklist from a task 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1/checklist](https://runrun.it/api/v1.0/tasks/1/checklist)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/show_a_checklist_from_a_task)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of checklist | integer  
title  | Checklist title | string  
creator_id  | ID of user who created this checklist | string  
task_id  | ID of the task the checklist belongs to | integer  
task_template_id  | ID of the task template the checklist belongs to | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 96

#### Body
    
    
    {
      "id": 1,
      "title": "Office Supplies",
      "creator_id": "coyote-114",
      "task_id": 1,
      "checklist_item_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:task_id/checklist

####  Create a checklist from a task 

## Parameters

Name | Description | type  
---|---|---  
checklist[title] required | Checklist title | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist": {
        "title": "Office Supplies"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/checklist](https://runrun.it/api/v1.0/tasks/1/checklist)" -d '{"checklist":{"title":"Office Supplies"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/create_a_checklist_from_a_task)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 96

#### Body
    
    
    {
      "id": 1,
      "title": "Office Supplies",
      "creator_id": "coyote-116",
      "task_id": 1,
      "checklist_item_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:task_id/checklist

####  Update a checklist from a task 

## Parameters

Name | Description | type  
---|---|---  
checklist[title]  | Checklist title | string  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist": {
        "title": "Kitchen supplies"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/checklist](https://runrun.it/api/v1.0/tasks/1/checklist)" -d '{"checklist":{"title":"Kitchen supplies"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/update_a_checklist_from_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 97

#### Body
    
    
    {
      "id": 1,
      "title": "Kitchen supplies",
      "creator_id": "coyote-118",
      "task_id": 1,
      "checklist_item_ids": [
    
      ]
    }

__DELETE

#### /api/v1.0/tasks/:task_id/checklist

####  Destroy a checklist from a task 

## Request

#### Route
    
    
    DELETE /api/v1.0/tasks/1/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/checklist](https://runrun.it/api/v1.0/tasks/1/checklist)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/destroy_a_checklist_from_a_task)

#### Status
    
    
    204

#### Headers


__GET

#### /api/v1.0/task_templates/:task_template_id/checklist

####  Show a checklist from a task template 

## Request

#### Route
    
    
    GET /api/v1.0/task_templates/1/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/task_templates/1/checklist](https://runrun.it/api/v1.0/task_templates/1/checklist)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/show_a_checklist_from_a_task_template)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of checklist | integer  
title  | Checklist title | string  
creator_id  | ID of user who created this checklist | string  
task_id  | ID of the task the checklist belongs to | integer  
task_template_id  | ID of the task template the checklist belongs to | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 114

#### Body
    
    
    {
      "id": 1,
      "title": "Office Supplies Template",
      "creator_id": "coyote-122",
      "task_template_id": 1,
      "checklist_item_ids": [
    
      ]
    }

__POST

#### /api/v1.0/task_templates/:task_template_id/checklist

####  Create a checklist from a task template 

## Parameters

Name | Description | type  
---|---|---  
checklist[title] required | Checklist title | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/task_templates/3/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist": {
        "title": "Office Supplies"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/task_templates/3/checklist](https://runrun.it/api/v1.0/task_templates/3/checklist)" -d '{"checklist":{"title":"Office Supplies"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/create_a_checklist_from_a_task_template)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 105

#### Body
    
    
    {
      "id": 1,
      "title": "Office Supplies",
      "creator_id": "coyote-127",
      "task_template_id": 3,
      "checklist_item_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/task_templates/:task_template_id/checklist

####  Update a checklist from a task template 

## Parameters

Name | Description | type  
---|---|---  
checklist[title]  | Checklist title | string  
  
## Request

#### Route
    
    
    PUT /api/v1.0/task_templates/4/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "checklist": {
        "title": "Kitchen supplies"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/task_templates/4/checklist](https://runrun.it/api/v1.0/task_templates/4/checklist)" -d '{"checklist":{"title":"Kitchen supplies"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/update_a_checklist_from_a_task_template)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 106

#### Body
    
    
    {
      "id": 1,
      "title": "Kitchen supplies",
      "creator_id": "coyote-129",
      "task_template_id": 4,
      "checklist_item_ids": [
    
      ]
    }

__DELETE

#### /api/v1.0/task_templates/:task_template_id/checklist

####  Destroy a checklist from a task template 

## Request

#### Route
    
    
    DELETE /api/v1.0/task_templates/5/checklist

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/task_templates/5/checklist](https://runrun.it/api/v1.0/task_templates/5/checklist)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/checklists/destroy_a_checklist_from_a_task_template)

#### Status
    
    
    204

#### Headers
