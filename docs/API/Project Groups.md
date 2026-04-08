__GET
#### /api/v1.0/clients/:client_id/project_groups

####  List all Project Groups 

## Request

#### Route
    GET /api/v1.0/clients/1/project_groups

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/clients/1/project_groups](https://runrun.it/api/v1.0/clients/1/project_groups)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/list_all_project_groups)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 674

#### Body
    [
      {
        "id": 1,
        "name": "No group",
        "is_default": true,
        "client_id": 1,
        "client_name": "Test client 572",
        "projects_count": 0,
        "time_worked": 0,
        "time_pending_not_assigned": 0,
        "time_pending_queued": 0,
        "time_pending": 0,
        "time_total": 0,
        "time_progress": 0.0,
        "cost_worked": 0.0,
        "cost_pending": 0.0,
        "cost_total": 0.0,
        "activities_6_days_ago": 0,
        "activities_5_days_ago": 0,
        "activities_4_days_ago": 0,
        "activities_3_days_ago": 0,
        "activities_2_days_ago": 0,
        "activities_1_days_ago": 0,
        "activities_0_days_ago": 0,
        "activities": 0,
        "time_pending_backlog": 0,
        "project_sub_groups": [
          {
            "id": 1,
            "name": null,
            "project_group_id": 1,
            "is_default": true,
            "created_at": "2026-03-04T16:58:50-03:00",
            "updated_at": "2026-03-04T16:58:50-03:00"
          }
        ]
      }
    ]

__GET

#### /api/v1.0/clients/:client_id/project_groups/:id

####  Show a Project Group 

## Request

#### Route
    GET /api/v1.0/clients/1/project_groups/2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/clients/1/project_groups/2](https://runrun.it/api/v1.0/clients/1/project_groups/2)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/show_a_project_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 680

#### Body
    {
      "id": 2,
      "name": "Project Group 1",
      "is_default": false,
      "client_id": 1,
      "client_name": "Test client 573",
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_sub_groups": [
        {
          "id": 2,
          "name": null,
          "project_group_id": 2,
          "is_default": true,
          "created_at": "2026-03-04T16:58:51-03:00",
          "updated_at": "2026-03-04T16:58:51-03:00"
        }
      ]
    }

__POST

#### /api/v1.0/clients/:client_id/project_groups

####  Create a Project Group 

When creating a project group the name must be unique among clients belonging to the same enterprise.

## Parameters

Name | Description | type  
---|---|---  
name  | Name of project group | string  
is_default  | Project group is default for that client? | boolean  
  
## Request

#### Route
    POST /api/v1.0/clients/1/project_groups

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_group": {
        "name": "Project Group 2",
        "is_default": false
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/clients/1/project_groups](https://runrun.it/api/v1.0/clients/1/project_groups)" -d '{"project_group":{"name":"Project Group 2","is_default":false}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/create_a_project_group)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 680

#### Body
    {
      "id": 2,
      "name": "Project Group 2",
      "is_default": false,
      "client_id": 1,
      "client_name": "Test client 574",
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_sub_groups": [
        {
          "id": 2,
          "name": null,
          "project_group_id": 2,
          "is_default": true,
          "created_at": "2026-03-04T16:58:52-03:00",
          "updated_at": "2026-03-04T16:58:52-03:00"
        }
      ]
    }

__PUT

#### /api/v1.0/clients/:client_id/project_groups/:id

####  Update a Project Group 

When updating a project group the name must be unique among clients belonging to the same enterprise.

## Request

#### Route
    PUT /api/v1.0/clients/1/project_groups/2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_group": {
        "name": "New Name"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/clients/1/project_groups/2](https://runrun.it/api/v1.0/clients/1/project_groups/2)" -d '{"project_group":{"name":"New Name"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/update_a_project_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 673

#### Body    
    {
      "id": 2,
      "name": "New Name",
      "is_default": false,
      "client_id": 1,
      "client_name": "Test client 576",
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_sub_groups": [
        {
          "id": 2,
          "name": null,
          "project_group_id": 2,
          "is_default": true,
          "created_at": "2026-03-04T16:58:53-03:00",
          "updated_at": "2026-03-04T16:58:53-03:00"
        }
      ]
    }

__DELETE

#### /api/v1.0/clients/:client_id/project_groups/:id

####  Destroy a Project Group 

## Request

#### Route    
    DELETE /api/v1.0/clients/1/project_groups/2

#### Headers    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL       
    curl "[https://runrun.it/api/v1.0/clients/1/project_groups/2](https://runrun.it/api/v1.0/clients/1/project_groups/2)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/destroy_a_project_group)

#### Status  
    204

#### Headers


__POST

#### /api/v1.0/project_groups/:id/move

####  Move project group to another client 

## Request

#### Route
    POST /api/v1.0/project_groups/2/move

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "client_id": 2
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_groups/2/move](https://runrun.it/api/v1.0/project_groups/2/move)" -d '{"client_id":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_groups/move_project_group_to_another_client)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 673

#### Body
    {
      "id": 2,
      "name": "Project Group 6",
      "is_default": false,
      "client_id": 2,
      "client_name": "Client B",
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_sub_groups": [
        {
          "id": 2,
          "name": null,
          "project_group_id": 2,
          "is_default": true,
          "created_at": "2026-03-04T16:58:54-03:00",
          "updated_at": "2026-03-04T16:58:54-03:00"
        }
      ]
    }
