__GET
#### /api/v1.0/project_groups/:project_group_id/project_sub_groups

####  List all Project Sub Groups using Project Group id 

## Request

#### Route
    GET /api/v1.0/project_groups/2/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    sort_dir=desc
    search_term=Project Sub Group 1

#### cURL
    curl -g "[https://runrun.it/api/v1.0/project_groups/2/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+1](https://runrun.it/api/v1.0/project_groups/2/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/list_all_project_sub_groups_using_project_group_id)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 614

#### Body
    [
      {
        "id": 3,
        "name": "Project Sub Group 1",
        "is_default": false,
        "project_group_id": 2,
        "client_name": "Test client 443",
        "client_id": 1,
        "project_group_name": "Project Group 1",
        "project_group_is_default": false,
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
        "time_pending_backlog": 0
      }
    ]

__GET

#### /api/v1.0/clients/:client_id/project_sub_groups

####  List all Project Sub Groups using Client id 

## Request

#### Route
    GET /api/v1.0/clients/1/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    sort_dir=desc
    search_term=Project Sub Group 2

#### cURL
    curl -g "[https://runrun.it/api/v1.0/clients/1/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+2](https://runrun.it/api/v1.0/clients/1/project_sub_groups?sort_dir=desc&search_term=Project+Sub+Group+2)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/list_all_project_sub_groups_using_client_id)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 614

#### Body
    [
      {
        "id": 3,
        "name": "Project Sub Group 2",
        "is_default": false,
        "project_group_id": 2,
        "client_name": "Test client 444",
        "client_id": 1,
        "project_group_name": "Project Group 2",
        "project_group_is_default": false,
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
        "time_pending_backlog": 0
      }
    ]

__GET

#### /api/v1.0/project_groups/:project_group_id/project_sub_groups/:id

####  Show a Project Sub Group 

## Request

#### Route
    GET /api/v1.0/project_groups/2/project_sub_groups/3

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3](https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/show_a_project_sub_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 612

#### Body
    {
      "id": 3,
      "name": "Project Sub Group 3",
      "is_default": false,
      "project_group_id": 2,
      "client_name": "Test client 445",
      "client_id": 1,
      "project_group_name": "Project Group 3",
      "project_group_is_default": false,
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
      "time_pending_backlog": 0
    }

__POST

#### /api/v1.0/project_groups/:project_group_id/project_sub_groups

####  Create a Project Sub Group 

When creating a project sub group the name must be unique among project groups belonging to the same client.

## Parameters

Name | Description | type  
---|---|---  
name  | Name of project group | string  
is_default  | Project group is default for that client? | boolean  
  
## Request

#### Route
    POST /api/v1.0/project_groups/2/project_sub_groups

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_sub_group": {
        "name": "Project Sub Group 4",
        "is_default": false
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_groups/2/project_sub_groups](https://runrun.it/api/v1.0/project_groups/2/project_sub_groups)" -d '{"project_sub_group":{"name":"Project Sub Group 4","is_default":false}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/create_a_project_sub_group)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 612

#### Body
    {
      "id": 3,
      "name": "Project Sub Group 4",
      "is_default": false,
      "project_group_id": 2,
      "client_name": "Test client 446",
      "client_id": 1,
      "project_group_name": "Project Group 4",
      "project_group_is_default": false,
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
      "time_pending_backlog": 0
    }

__PUT

#### /api/v1.0/project_groups/:project_group_id/project_sub_groups/:id

####  Update a Project Sub Group 

When updating a project sub group the name must be unique among project groups belonging to the same client.

## Request

#### Route
    PUT /api/v1.0/project_groups/2/project_sub_groups/3

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_sub_group": {
        "name": "New Name"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3](https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3)" -d '{"project_sub_group":{"name":"New Name"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/update_a_project_sub_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 601

#### Body
    {
      "id": 3,
      "name": "New Name",
      "is_default": false,
      "project_group_id": 2,
      "client_name": "Test client 449",
      "client_id": 1,
      "project_group_name": "Project Group 6",
      "project_group_is_default": false,
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
      "time_pending_backlog": 0
    }

__DELETE

#### /api/v1.0/project_groups/:project_group_id/project_sub_groups/:id

####  Destroy a Project Sub Group 

## Request

#### Route
    DELETE /api/v1.0/project_groups/2/project_sub_groups/3

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3](https://runrun.it/api/v1.0/project_groups/2/project_sub_groups/3)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/destroy_a_project_sub_group)

#### Status
    204

#### Headers


__POST

#### /api/v1.0/project_sub_groups/:id/move

####  Move project sub group to another project group 

## Request

#### Route
    POST /api/v1.0/project_sub_groups/3/move

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_group_id": 4
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_sub_groups/3/move](https://runrun.it/api/v1.0/project_sub_groups/3/move)" -d '{"project_group_id":4}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_sub_groups/move_project_sub_group_to_another_project_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 605

#### Body
    {
      "id": 3,
      "name": "Project Sub Group 9",
      "is_default": false,
      "project_group_id": 4,
      "client_name": "Client B",
      "client_id": 2,
      "project_group_name": "Project Group B",
      "project_group_is_default": false,
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
      "time_pending_backlog": 0
    }
