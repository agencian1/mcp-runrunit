__GET
#### /api/v1.0/tasks/:task_id/followers

####  List all followers 

Responds with an array of users following the task. The format of each user is the same as the User endpoint.

## Request

#### Route
    GET /api/v1.0/tasks/1/followers

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/1/followers](https://runrun.it/api/v1.0/tasks/1/followers)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_followers/list_all_followers)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2665

#### Body
    [
      {
        "id": "coyote-917",
        "name": "Coyote 917",
        "email": "coyote969@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-495/coyote-917/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-495/coyote-917/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-495/coyote-917/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-495/coyote-917/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
        "cost_hour": 0.0,
        "is_master": true,
        "is_manager": false,
        "is_auditor": false,
        "can_create_client_project_and_task_types": true,
        "can_create_boards": true,
        "is_blocked_on_mobile": false,
        "bypass_block_by_time_worked": true,
        "time_zone": "America/Sao_Paulo",
        "position": null,
        "on_vacation": false,
        "birthday": null,
        "phone": null,
        "gender": null,
        "marital_status": null,
        "created_at": "2026-03-04T17:02:04-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "5270ed390e424e41f074f7d25cb2a0b9",
        "oid": "49537adb9",
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

#### /api/v1.0/tasks/:task_id/followers

####  Create a Task Follower 

## Parameters

Name | Description | type  
---|---|---  
id  | ID of user to add as follower | string  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/followers

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "id": "coyote-919"
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/followers](https://runrun.it/api/v1.0/tasks/1/followers)" -d '{"id":"coyote-919"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_followers/create_a_task_follower)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3946

#### Body
    {
      "id": 1,
      "title": "Bla 488",
      "is_working_on": false,
      "user_id": "coyote-918",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 1,
      "board_stage_position": 70368744177664,
      "subtask_parent_position": null,
      "desired_date": null,
      "desired_date_with_time": null,
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": null,
      "gantt_bar_end_date": null,
      "close_date": null,
      "was_reopened": false,
      "is_closed": false,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": false,
      "estimated_at": null,
      "queue_position": 1,
      "created_at": "2026-03-04T17:02:06-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 506",
      "client_id": 1,
      "project_name": "Test project 494",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 578",
      "user_name": "Coyote 918",
      "guest_name": null,
      "board_name": "Board 478",
      "board_stage_name": "Board Stage 1539",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": null,
      "time_worked": 0,
      "time_pending": 3600,
      "time_total": 3600,
      "time_progress": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "repetition_rule": null,
      "board_remaining_time": null,
      "stage_depart_estimated_at": null,
      "is_urgent": false,
      "points": null,
      "reestimate_count": 0,
      "parent_ids": [
    
      ],
      "opened_parent_ids": [
    
      ],
      "parents_max_desired_date": null,
      "child_ids": [
    
      ],
      "workflow_id": null,
      "checklist_id": null,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "subtask_ids": [
    
      ],
      "subtasks_count": 0,
      "subtasks_closed_count": 0,
      "subtasks_count_progress": null,
      "is_subtask": false,
      "parent_task_id": null,
      "parent_task_title": null,
      "all_subtasks_time_worked": null,
      "all_subtasks_times_updating": false,
      "all_subtasks_time_total": null,
      "all_subtasks_time_progress": null,
      "current_level": 0,
      "evaluator_ids": null,
      "pending_evaluator_ids": null,
      "approved_evaluator_ids": null,
      "rejected_evaluator_ids": null,
      "custom_fields": {
      },
      "form_id": null,
      "board_stage_data": {
        "fields_data": [
    
        ],
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null
      },
      "last_activity_at": "2026-03-04T17:02:06-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-918",
      "task_state_id": 1,
      "responsible_name": "Coyote 918",
      "task_state_name": "Board Stage 1539",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 1539",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_id": 1,
          "assignee_id": "coyote-918",
          "team_id": null,
          "assignee_name": "Coyote 918",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": null,
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T17:02:06-03:00",
          "created_at": "2026-03-04T17:02:06-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-496/coyote-918/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-496/coyote-918/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-496/coyote-918/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-496/coyote-918/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
        "coyote-919"
      ]
    }

__DELETE

#### /api/v1.0/tasks/:task_id/followers/:id

####  Remove a Task Follower 

## Request

#### Route
    DELETE /api/v1.0/tasks/1/followers/coyote-921

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/followers/coyote-921](https://runrun.it/api/v1.0/tasks/1/followers/coyote-921)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_followers/remove_a_task_follower)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3934

#### Body
    {
      "id": 1,
      "title": "Bla 489",
      "is_working_on": false,
      "user_id": "coyote-920",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 1,
      "board_stage_position": 70368744177664,
      "subtask_parent_position": null,
      "desired_date": null,
      "desired_date_with_time": null,
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": null,
      "gantt_bar_end_date": null,
      "close_date": null,
      "was_reopened": false,
      "is_closed": false,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": false,
      "estimated_at": null,
      "queue_position": 1,
      "created_at": "2026-03-04T17:02:07-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 507",
      "client_id": 1,
      "project_name": "Test project 495",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 579",
      "user_name": "Coyote 920",
      "guest_name": null,
      "board_name": "Board 479",
      "board_stage_name": "Board Stage 1542",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": null,
      "time_worked": 0,
      "time_pending": 3600,
      "time_total": 3600,
      "time_progress": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "repetition_rule": null,
      "board_remaining_time": null,
      "stage_depart_estimated_at": null,
      "is_urgent": false,
      "points": null,
      "reestimate_count": 0,
      "parent_ids": [
    
      ],
      "opened_parent_ids": [
    
      ],
      "parents_max_desired_date": null,
      "child_ids": [
    
      ],
      "workflow_id": null,
      "checklist_id": null,
      "is_shared": false,
      "sharing_details": [
    
      ],
      "subtask_ids": [
    
      ],
      "subtasks_count": 0,
      "subtasks_closed_count": 0,
      "subtasks_count_progress": null,
      "is_subtask": false,
      "parent_task_id": null,
      "parent_task_title": null,
      "all_subtasks_time_worked": null,
      "all_subtasks_times_updating": false,
      "all_subtasks_time_total": null,
      "all_subtasks_time_progress": null,
      "current_level": 0,
      "evaluator_ids": null,
      "pending_evaluator_ids": null,
      "approved_evaluator_ids": null,
      "rejected_evaluator_ids": null,
      "custom_fields": {
      },
      "form_id": null,
      "board_stage_data": {
        "fields_data": [
    
        ],
        "use_elapsed_time": false,
        "sla_elapsed_time": null,
        "sla_elapsed_time_unit": null,
        "use_last_activity": false,
        "sla_last_activity_time": null,
        "sla_last_activity_time_unit": null
      },
      "last_activity_at": "2026-03-04T17:02:07-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-920",
      "task_state_id": 1,
      "responsible_name": "Coyote 920",
      "task_state_name": "Board Stage 1542",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 1542",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_id": 1,
          "assignee_id": "coyote-920",
          "team_id": null,
          "assignee_name": "Coyote 920",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": null,
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T17:02:07-03:00",
          "created_at": "2026-03-04T17:02:07-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-497/coyote-920/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-497/coyote-920/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-497/coyote-920/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-497/coyote-920/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
      ]
    }
