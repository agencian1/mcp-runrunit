__GET

#### /api/v1.0/boards/:board_id/stages

####  List all board stages 

## Parameters

Name | Description | type  
---|---|---  
sort  | Sort by column | string  
sort_dir  | Sort direction ('asc' or 'desc') | string  
search_term  | Filter by term | string  
stage_group  | Filter by stage group ('opened' or 'closed') | string  
  
## Request

#### Route
    
    
    GET /api/v1.0/boards/1/stages

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/boards/1/stages](https://runrun.it/api/v1.0/boards/1/stages)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/list_all_board_stages)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Board stage id | integer  
name  | Board stage name | string  
description  | Board stage description | string  
stage_group  | Board stage group ('opened' or 'closed') | enum  
board_id  | Board id | integer  
position  | Board stage position in group | integer  
last_editor_name  | Name of last editor | string  
is_following  | Returns 'true' if user follows the Board Stage | boolean  
use_latency_time  | Returns 'true' if board stage latency time is being calculated | boolean  
use_scrum_points  | Returns 'true' if task points should be shown | boolean  
use_lead_time  | Returns 'true' if board stage use lead time | boolean  
user_settings  | User settings for board stage | hash  
use_elapsed_time  | Returns 'true' if board stage use elapsed time | boolean  
sla_elapsed_time  | SLA elapsed time | integer  
sla_elapsed_time_unit  | SLA time unit | string  
use_last_activity  | Returns 'true' if board stage use last activity | boolean  
sla_last_activity_time  | SLA last activity time | integer  
sla_last_activity_time_unit  | SLA last activity time unit | string  
is_default  | [Deprecated] Not used anymore | boolean  
is_delivered  | [Deprecated] Use 'stage_group' instead | boolean  
status_group  | [Deprecated] Use 'stage_group' instead | enum  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 1872

#### Body
    
    
    [
      {
        "id": 4,
        "name": "Board Stage 705",
        "description": null,
        "stage_group": "opened",
        "board_id": 1,
        "position": null,
        "last_editor_name": null,
        "is_following": false,
        "use_latency_time": true,
        "use_scrum_points": true,
        "use_lead_time": true,
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null,
        "is_default": false,
        "is_delivered": false,
        "status_group": "assigned",
        "fields": [
    
        ]
      },
      {
        "id": 3,
        "name": "Stage Closed 1",
        "description": null,
        "stage_group": "closed",
        "board_id": 1,
        "position": 1,
        "last_editor_name": "Coyote 328",
        "is_following": false,
        "use_latency_time": true,
        "use_scrum_points": true,
        "use_lead_time": null,
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null,
        "is_default": false,
        "is_delivered": true,
        "status_group": "done",
        "fields": [
    
        ]
      },
      {
        "id": 2,
        "name": "Stage Opened 2",
        "description": null,
        "stage_group": "opened",
        "board_id": 1,
        "position": 2,
        "last_editor_name": "Coyote 328",
        "is_following": false,
        "use_latency_time": true,
        "use_scrum_points": true,
        "use_lead_time": true,
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null,
        "is_default": false,
        "is_delivered": false,
        "status_group": "assigned",
        "fields": [
    
        ]
      },
      {
        "id": 1,
        "name": "Stage Opened 1",
        "description": null,
        "stage_group": "opened",
        "board_id": 1,
        "position": 1,
        "last_editor_name": "Coyote 328",
        "is_following": false,
        "use_latency_time": true,
        "use_scrum_points": true,
        "use_lead_time": true,
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null,
        "is_default": false,
        "is_delivered": false,
        "status_group": "assigned",
        "fields": [
    
        ]
      }
    ]

__GET

#### /api/v1.0/boards/:board_id/stages/:id

####  Show a board stage 

## Request

#### Route
    
    
    GET /api/v1.0/boards/1/stages/4

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/boards/1/stages/4](https://runrun.it/api/v1.0/boards/1/stages/4)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/show_a_board_stage)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Board stage id | integer  
name  | Board stage name | string  
description  | Board stage description | string  
stage_group  | Board stage group ('opened' or 'closed') | enum  
board_id  | Board id | integer  
position  | Board stage position in group | integer  
last_editor_name  | Name of last editor | string  
is_following  | Returns 'true' if user follows the Board Stage | boolean  
use_latency_time  | Returns 'true' if board stage latency time is being calculated | boolean  
use_scrum_points  | Returns 'true' if task points should be shown | boolean  
use_lead_time  | Returns 'true' if board stage use lead time | boolean  
user_settings  | User settings for board stage | hash  
use_elapsed_time  | Returns 'true' if board stage use elapsed time | boolean  
sla_elapsed_time  | SLA elapsed time | integer  
sla_elapsed_time_unit  | SLA time unit | string  
use_last_activity  | Returns 'true' if board stage use last activity | boolean  
sla_last_activity_time  | SLA last activity time | integer  
sla_last_activity_time_unit  | SLA last activity time unit | string  
is_default  | [Deprecated] Not used anymore | boolean  
is_delivered  | [Deprecated] Use 'stage_group' instead | boolean  
status_group  | [Deprecated] Use 'stage_group' instead | enum  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 465

#### Body
    
    
    {
      "id": 4,
      "name": "Board Stage 706",
      "description": null,
      "stage_group": "opened",
      "board_id": 1,
      "position": null,
      "last_editor_name": null,
      "is_following": false,
      "use_latency_time": true,
      "use_scrum_points": true,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
    
      ]
    }

__POST

#### /api/v1.0/boards/:board_id/stages

####  Create a board stage 

## Parameters

Name | Description | type | default  
---|---|---|---  
board_stage[name] required | Board stage name | string |   
board_stage[stage_group] required | Board stage group ('opened' or 'closed') | enum | opened  
board_stage[description]  | Board stage description | string |   
board_stage[position]  | Board stage position in group | integer |   
board_stage[fields_data]  | Board stage fields data |  |   
  
## Request

#### Route
    
    
    POST /api/v1.0/boards/1/stages

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "board_stage": {
        "name": "My board stage",
        "stage_group": "opened",
        "description": "Board stage description",
        "fields_data": [
          {
            "field_id": "custom_4"
          }
        ],
        "position": 10
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages](https://runrun.it/api/v1.0/boards/1/stages)" -d '{"board_stage":{"name":"My board stage","stage_group":"opened","description":"Board stage description","fields_data":[{"field_id":"custom_4"}],"position":10}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/create_a_board_stage)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 625

#### Body
    
    
    {
      "id": 4,
      "name": "My board stage",
      "description": "Board stage description",
      "stage_group": "opened",
      "board_id": 1,
      "position": 10,
      "last_editor_name": "Coyote 330",
      "is_following": false,
      "use_latency_time": true,
      "use_scrum_points": true,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
        {
          "field_id": "custom_4",
          "field_label": "Field 23",
          "field_type": "short_text",
          "field_status": "active",
          "position": null,
          "is_required": false
        }
      ]
    }

__PUT

#### /api/v1.0/boards/:board_id/stages/:id

####  Update a board stage 

## Parameters

Name | Description | type  
---|---|---  
board_stage[name]  | Board stage name | string  
board_stage[description]  | Board stage description | string  
board_stage[fields_data]  | Board stage fields data |   
  
## Request

#### Route
    
    
    PUT /api/v1.0/boards/1/stages/4

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "board_stage": {
        "name": "New board stage",
        "description": "New board stage description",
        "fields_data": [
          {
            "field_id": "custom_4"
          }
        ]
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages/4](https://runrun.it/api/v1.0/boards/1/stages/4)" -d '{"board_stage":{"name":"New board stage","description":"New board stage description","fields_data":[{"field_id":"custom_4"}]}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/update_a_board_stage)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 632

#### Body
    
    
    {
      "id": 4,
      "name": "New board stage",
      "description": "New board stage description",
      "stage_group": "opened",
      "board_id": 1,
      "position": null,
      "last_editor_name": "Coyote 331",
      "is_following": false,
      "use_latency_time": true,
      "use_scrum_points": true,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
        {
          "field_id": "custom_4",
          "field_label": "Field 24",
          "field_type": "short_text",
          "field_status": "active",
          "position": null,
          "is_required": false
        }
      ]
    }

__DELETE

#### /api/v1.0/boards/:board_id/stages/:id

####  Destroy a board stage 

## Request

#### Route
    
    
    DELETE /api/v1.0/boards/1/stages/4

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages/4](https://runrun.it/api/v1.0/boards/1/stages/4)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/destroy_a_board_stage)

#### Status
    
    
    204

#### Headers


__POST

#### /api/v1.0/boards/:board_id/stages/:id/move

####  Move a board stage to another group position 

## Parameters

Name | Description | type  
---|---|---  
position required | Board stage position in group | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/boards/1/stages/4/move

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "position": 2
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages/4/move](https://runrun.it/api/v1.0/boards/1/stages/4/move)" -d '{"position":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/move_a_board_stage_to_another_group_position)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 462

#### Body
    
    
    {
      "id": 4,
      "name": "Board Stage 709",
      "description": null,
      "stage_group": "opened",
      "board_id": 1,
      "position": 2,
      "last_editor_name": null,
      "is_following": false,
      "use_latency_time": true,
      "use_scrum_points": true,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
    
      ]
    }

__POST

#### /api/v1.0/boards/:board_id/stages/:id/update_use_latency_time

####  Update to use (or not) latency time 

## Parameters

Name | Description | type  
---|---|---  
use_latency_time required | Returns 'true' if board stage latency time is being calculated | boolean  
  
## Request

#### Route
    
    
    POST /api/v1.0/boards/1/stages/1/update_use_latency_time

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "use_latency_time": false
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages/1/update_use_latency_time](https://runrun.it/api/v1.0/boards/1/stages/1/update_use_latency_time)" -d '{"use_latency_time":false}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/update_to_use_\(or_not\)_latency_time)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 470

#### Body
    
    
    {
      "id": 1,
      "name": "Stage Opened 1",
      "description": null,
      "stage_group": "opened",
      "board_id": 1,
      "position": 1,
      "last_editor_name": "Coyote 341",
      "is_following": false,
      "use_latency_time": false,
      "use_scrum_points": true,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
    
      ]
    }

__POST

#### /api/v1.0/boards/:board_id/stages/:id/update_use_scrum_points

####  Update to use (or not) scrum points 

## Parameters

Name | Description | type  
---|---|---  
use_scrum_points required | Returns 'true' if task points should be shown | boolean  
  
## Request

#### Route
    
    
    POST /api/v1.0/boards/1/stages/1/update_use_scrum_points

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "use_scrum_points": false
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/boards/1/stages/1/update_use_scrum_points](https://runrun.it/api/v1.0/boards/1/stages/1/update_use_scrum_points)" -d '{"use_scrum_points":false}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/board_stages/update_to_use_\(or_not\)_scrum_points)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 470

#### Body
    
    
    {
      "id": 1,
      "name": "Stage Opened 1",
      "description": null,
      "stage_group": "opened",
      "board_id": 1,
      "position": 1,
      "last_editor_name": "Coyote 342",
      "is_following": false,
      "use_latency_time": true,
      "use_scrum_points": false,
      "use_lead_time": true,
      "use_elapsed_time": false,
      "sla_elapsed_time": null,
      "sla_elapsed_time_unit": null,
      "use_last_activity": false,
      "sla_last_activity_time": null,
      "sla_last_activity_time_unit": null,
      "is_default": false,
      "is_delivered": false,
      "status_group": "assigned",
      "fields": [
    
      ]
    }
