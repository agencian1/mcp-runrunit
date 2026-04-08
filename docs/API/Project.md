__GET
#### /api/v1.0/projects

####  List all projects 

## Request

#### Route
    GET /api/v1.0/projects

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects](https://runrun.it/api/v1.0/projects)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/list_all_projects)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1445

#### Body
    [
      {
        "id": 1,
        "name": "Project_A",
        "start_date": null,
        "close_date": null,
        "is_closed": false,
        "client_id": 1,
        "project_group_id": 1,
        "project_sub_group_id": 1,
        "budgeted_cost": 0.0,
        "desired_date": null,
        "created_at": "2026-03-04T16:55:33-03:00",
        "is_public": true,
        "is_shared": false,
        "sharing_details": [
    
        ],
        "use_new_permissions": true,
        "board_stage_id": null,
        "client_name": "Test client 184",
        "project_group_name": "No group",
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_is_default": true,
        "tasks_count": 0,
        "tasks_count_progress": 0.0,
        "tasks_not_assigned_count": 0,
        "tasks_queued_count": 0,
        "tasks_working_on_count": 0,
        "tasks_closed_count": 0,
        "task_points_sum": 0,
        "task_points_progress": null,
        "task_points_not_assigned_sum": 0,
        "task_points_queued_sum": 0,
        "task_points_working_on_sum": 0,
        "task_points_closed_sum": 0,
        "time_worked": 0,
        "time_pending": 0,
        "time_pending_not_assigned": 0,
        "time_pending_queued": 0,
        "time_total": 0,
        "time_progress": 0.0,
        "overdue": "on_schedule",
        "cost_worked": 0.0,
        "cost_pending": 0.0,
        "extra_costs": 0.0,
        "cost_total": 0.0,
        "cost_progress": null,
        "over_budget": "on_budget",
        "activities_6_days_ago": 0,
        "activities_5_days_ago": 0,
        "activities_4_days_ago": 0,
        "activities_3_days_ago": 0,
        "activities_2_days_ago": 0,
        "activities_1_days_ago": 0,
        "activities_0_days_ago": 0,
        "activities": 0,
        "estimated_delivery_date": null,
        "board_stage_name": null,
        "board_stage_color": null,
        "activities_7_days_ago": 0,
        "time_pending_backlog": 0,
        "tasks_backlog_count": 0,
        "is_active": true
      }
    ]

__GET

#### /api/v1.0/projects/:id

####  Show a Project 

## Request

#### Route
    GET /api/v1.0/projects/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/1](https://runrun.it/api/v1.0/projects/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/show_a_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1443

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:35-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 188",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/

####  Create a Project 

## Request

#### Route
    POST /api/v1.0/projects/

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project": {
        "name": "New Project",
        "client_id": 1,
        "start_date": "2025-01-01",
        "desired_date": "2025-01-31"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/](https://runrun.it/api/v1.0/projects/)" -d '{"project":{"name":"New Project","client_id":1,"start_date":"2025-01-01","desired_date":"2025-01-31"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/create_a_project)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1492

#### Body
    {
      "id": 1,
      "name": "New Project",
      "start_date": "2025-01-01T00:00:00-03:00",
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": "2025-01-31T00:00:00-03:00",
      "created_at": "2026-03-04T16:55:36-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 189",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "hard_overdue",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__PUT

#### /api/v1.0/projects/:id

####  Deliver the project 

## Parameters

Name | Description | type  
---|---|---  
id required | The unique identifier of the project to be updated. | integer  
is_active required | Defines whether the project is active (true) or delivered (false). | boolean  
  
## Request

#### Route
    PUT /api/v1.0/projects/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "is_active": false
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1](https://runrun.it/api/v1.0/projects/1)" -d '{"is_active":false}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/deliver_the_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1466

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": "2026-03-04T16:55:37-03:00",
      "is_closed": true,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:37-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 192",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": false
    }

__PUT

#### /api/v1.0/projects/:id

####  Reopen the project 

## Parameters

Name | Description | type  
---|---|---  
id required | The unique identifier of the project to be updated. | integer  
is_active required | Defines whether the project is active (true) or delivered (false). | boolean  
  
## Request

#### Route
    PUT /api/v1.0/projects/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "is_active": true
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1](https://runrun.it/api/v1.0/projects/1)" -d '{"is_active":true}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/reopen_the_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1443

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:38-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 193",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__GET

#### /api/v1.0/projects/:id/related_users

####  List users related in a project 

Related users: 

  * responsible
  * owners
  * followers

## Parameters

Name | Description | type  
---|---|---  
id required | ID of project | integer  
  
## Request

#### Route
    GET /api/v1.0/projects/1/related_users

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/1/related_users](https://runrun.it/api/v1.0/projects/1/related_users)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/list_users_related_in_a_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2668

#### Body
    [
      {
        "id": "coyote-257",
        "name": "Coyote 257",
        "email": "coyote293@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-229/coyote-257/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-229/coyote-257/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-229/coyote-257/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-229/coyote-257/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
        "cost_hour": 0.0,
        "is_master": false,
        "is_manager": false,
        "is_auditor": false,
        "can_create_client_project_and_task_types": false,
        "can_create_boards": true,
        "is_blocked_on_mobile": false,
        "bypass_block_by_time_worked": false,
        "time_zone": "America/Sao_Paulo",
        "position": null,
        "on_vacation": false,
        "birthday": null,
        "phone": null,
        "gender": null,
        "marital_status": null,
        "created_at": "2026-03-04T16:55:39-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "352a660ae8cc037b52bfc1059e5cb9ce",
        "oid": "92a6f5b72",
        "budget_manager": false,
        "shifts": [
          {
            "weekday": 0,
            "work_day": false,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 0
          },
          {
            "weekday": 1,
            "work_day": true,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 28800
          },
          {
            "weekday": 2,
            "work_day": true,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 28800
          },
          {
            "weekday": 3,
            "work_day": true,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 28800
          },
          {
            "weekday": 4,
            "work_day": true,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 28800
          },
          {
            "weekday": 5,
            "work_day": true,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 28800
          },
          {
            "weekday": 6,
            "work_day": false,
            "shift_start": "10:00:00",
            "lunch_start": "12:00:00",
            "lunch_end": "13:00:00",
            "shift_end": "19:00:00",
            "work_time": 0
          }
        ],
        "is_mensurable": true,
        "blocked_by_time_worked_at": null,
        "demanders_count": 0,
        "partners_count": 0,
        "has_all_users_as_partners": false,
        "has_all_users_as_demanders": false,
        "password_updated_at": null,
        "password_expired_at": null,
        "shift_work_time_per_week": 144000,
        "team_ids": [
    
        ],
        "led_team_ids": [
    
        ],
        "is_eligible_to_access_reports": false,
        "is_eligible_to_whatsapp": false,
        "theme": "light",
        "task_list_background_image_url": null,
        "skip_time_adjust_on_task_assignment_deliver": false,
        "time_tracking_mode": "manual",
        "preferences": {
          "theme": "light",
          "task_list_background_image_url": null,
          "skip_time_adjust_on_task_assignment_deliver": false,
          "skip_move_task_to_next_board_stage_suggestion": false
        }
      }
    ]

__POST

#### /api/v1.0/projects/:id/move

####  Move project to another client 

## Request

#### Route
    POST /api/v1.0/projects/1/move

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
    curl "[https://runrun.it/api/v1.0/projects/1/move](https://runrun.it/api/v1.0/projects/1/move)" -d '{"client_id":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/move_project_to_another_client)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1436

#### Body
    {
      "id": 1,
      "name": "Project A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 2,
      "project_group_id": 3,
      "project_sub_group_id": 4,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:39-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Client B",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/:id/move

####  Move project to another project group 

## Request

#### Route
    POST /api/v1.0/projects/1/move

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
    curl "[https://runrun.it/api/v1.0/projects/1/move](https://runrun.it/api/v1.0/projects/1/move)" -d '{"project_group_id":4}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/move_project_to_another_project_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1444

#### Body
    {
      "id": 1,
      "name": "Project A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 2,
      "project_group_id": 4,
      "project_sub_group_id": 5,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:40-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Client B",
      "project_group_name": "Project Group B",
      "project_group_is_default": false,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/:id/move

####  Move project to another project sub group 

## Request

#### Route
    POST /api/v1.0/projects/1/move

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_sub_group_id": 6
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/move](https://runrun.it/api/v1.0/projects/1/move)" -d '{"project_sub_group_id":6}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/move_project_to_another_project_sub_group)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1453

#### Body
    {
      "id": 1,
      "name": "Project A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 2,
      "project_group_id": 4,
      "project_sub_group_id": 6,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:40-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Client B",
      "project_group_name": "Project Group B",
      "project_group_is_default": false,
      "project_sub_group_name": "Project Sub Group B",
      "project_sub_group_is_default": false,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/:id/share

####  Share the project 

Share the project with guests.

## Parameters

Name | Description | type  
---|---|---  
id required | ID of project | integer  
comment  | Comment | string  
guests_params  | List of objects with guest data | array  
sharing_details  | List of optional information to be shared. Options: "tasks", "desired_date", "board_stage", "time_progress", "tasks_count_progress" | array  
  
## Request

#### Route
    POST /api/v1.0/projects/1/share

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "sharing_details": [
        "desired_date"
      ],
      "guests_params": [
        {
          "email": "[guest1@email.com](mailto:guest1@email.com)"
        },
        {
          "email": "[guest2@email.com](mailto:guest2@email.com)"
        }
      ]
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/share](https://runrun.it/api/v1.0/projects/1/share)" -d '{"sharing_details":["desired_date"],"guests_params":[{"email":"[guest1@email.com](mailto:guest1@email.com)"},{"email":"[guest2@email.com](mailto:guest2@email.com)"}]}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/share_the_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1456

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:41-03:00",
      "is_public": true,
      "is_shared": true,
      "sharing_details": [
        "desired_date"
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 195",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/:id/unshare

####  Unshare the project 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of project | integer  
  
## Request

#### Route
    POST /api/v1.0/projects/1/unshare

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/unshare](https://runrun.it/api/v1.0/projects/1/unshare)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/unshare_the_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1443

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:42-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": null,
      "client_name": "Test client 196",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": null,
      "board_stage_color": null,
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }

__POST

#### /api/v1.0/projects/:id/clone

####  Clone a Project 

## Request

#### Route
    POST /api/v1.0/projects/1/clone

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "new_project": {
        "name": "Cloned Project"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/clone](https://runrun.it/api/v1.0/projects/1/clone)" -d '{"new_project":{"name":"Cloned Project"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/clone_a_project)

#### Status
    200

#### Headers
    Content-Type: application/json
    Content-Length: 0

__POST

#### /api/v1.0/projects/:id/change_board_stage

####  Change a project board stage 

## Request

#### Route
    POST /api/v1.0/projects/1/change_board_stage

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "board_stage_id": 1
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/change_board_stage](https://runrun.it/api/v1.0/projects/1/change_board_stage)" -d '{"board_stage_id":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projects/change_a_project_board_stage)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1455

#### Body
    {
      "id": 1,
      "name": "Project_A",
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "client_id": 1,
      "project_group_id": 1,
      "project_sub_group_id": 1,
      "budgeted_cost": 0.0,
      "desired_date": null,
      "created_at": "2026-03-04T16:55:43-03:00",
      "is_public": true,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "use_new_permissions": true,
      "board_stage_id": 1,
      "client_name": "Test client 198",
      "project_group_name": "No group",
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_is_default": true,
      "tasks_count": 0,
      "tasks_count_progress": 0.0,
      "tasks_not_assigned_count": 0,
      "tasks_queued_count": 0,
      "tasks_working_on_count": 0,
      "tasks_closed_count": 0,
      "task_points_sum": 0,
      "task_points_progress": null,
      "task_points_not_assigned_sum": 0,
      "task_points_queued_sum": 0,
      "task_points_working_on_sum": 0,
      "task_points_closed_sum": 0,
      "time_worked": 0,
      "time_pending": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "overdue": "on_schedule",
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "extra_costs": 0.0,
      "cost_total": 0.0,
      "cost_progress": null,
      "over_budget": "on_budget",
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "estimated_delivery_date": null,
      "board_stage_name": "test stage 1",
      "board_stage_color": "#FFFFFF",
      "activities_7_days_ago": 0,
      "time_pending_backlog": 0,
      "tasks_backlog_count": 0,
      "is_active": true
    }
