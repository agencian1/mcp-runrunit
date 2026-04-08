__GET

#### /api/v1.0/tasks/:task_id/prerequisites

####  List all task prerequisites from a task 

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task | integer  
  
## Request

#### Route
    GET /api/v1.0/tasks/1/prerequisites

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/1/prerequisites](https://runrun.it/api/v1.0/tasks/1/prerequisites)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/list_all_task_prerequisites_from_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3937

#### Body
    [
      {
        "id": 2,
        "title": "Bla 408",
        "is_working_on": false,
        "user_id": "coyote-447",
        "guest_id": null,
        "type_id": 2,
        "project_id": 2,
        "team_id": null,
        "board_id": 2,
        "board_stage_id": 4,
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
        "queue_position": 2,
        "created_at": "2026-03-04T16:57:42-03:00",
        "start_date": null,
        "desired_start_date": null,
        "current_estimate_seconds": 3600,
        "evaluation_status": null,
        "attachments_count": 0,
        "tags_data": [
    
        ],
        "client_name": "Test client 397",
        "client_id": 2,
        "project_name": "Test project 397",
        "project_group_name": "No group",
        "project_group_id": 2,
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_id": 2,
        "project_sub_group_is_default": true,
        "type_name": "TaskType 472",
        "user_name": "Coyote 447",
        "guest_name": null,
        "board_name": "Board 358",
        "board_stage_name": "Board Stage 1166",
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
          1
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
        "last_activity_at": "2026-03-04T16:57:42-03:00",
        "automation_id": null,
        "automation_name": null,
        "has_emails": false,
        "priority": 2,
        "uid": 2,
        "responsible_id": "coyote-445",
        "task_state_id": 4,
        "responsible_name": "Coyote 445",
        "task_state_name": "Board Stage 1166",
        "activities_7_days_ago": 0,
        "repetition_rule_id": null,
        "current_worked_time": 0,
        "estimated_delivery_date_updated": false,
        "last_estimated_at": null,
        "task_tags": [
    
        ],
        "approved": null,
        "task_status_id": 4,
        "task_status_name": "Board Stage 1166",
        "tag_list": "",
        "tags": [
    
        ],
        "scheduled_start_time": null,
        "is_scheduled": false,
        "current_evaluator_id": null,
        "assignments": [
          {
            "id": "92a6f5b72",
            "task_id": 2,
            "assignee_id": "coyote-445",
            "team_id": null,
            "assignee_name": "Coyote 445",
            "team_name": null,
            "queue_position": 2,
            "priority": 2,
            "current_estimate_seconds": 3600,
            "time_worked": 0,
            "estimated_start_date": null,
            "estimate_updated": false,
            "start_date": null,
            "close_date": null,
            "is_closed": false,
            "reestimate_count": 0,
            "is_working_on": false,
            "automatic_time_worked_updated_at": "2026-03-04T16:57:42-03:00",
            "created_at": "2026-03-04T16:57:42-03:00",
            "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-376/coyote-445/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-376/coyote-445/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
            "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-376/coyote-445/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-376/coyote-445/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
            "time_worked_not_persisted": 0
          }
        ],
        "follower_ids": []
      }
    ]

__POST

#### /api/v1.0/tasks/:task_id/prerequisites

####  Add a task prerequisite to a task 

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task | integer  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/prerequisites

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "prerequisite": {
        "id": 2
      }
    }

#### cURL   
    curl "[https://runrun.it/api/v1.0/tasks/1/prerequisites](https://runrun.it/api/v1.0/tasks/1/prerequisites)" -d '{"prerequisite":{"id":2}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/add_a_task_prerequisite_to_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3936

#### Body
    {
      "id": 1,
      "title": "Bla 409",
      "is_working_on": false,
      "user_id": "coyote-449",
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
      "created_at": "2026-03-04T16:57:43-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 398",
      "client_id": 1,
      "project_name": "Test project 398",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 473",
      "user_name": "Coyote 449",
      "guest_name": null,
      "board_name": "Board 359",
      "board_stage_name": "Board Stage 1169",
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
        2
      ],
      "opened_parent_ids": [
        2
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
      "last_activity_at": "2026-03-04T16:57:44-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-448",
      "task_state_id": 1,
      "responsible_name": "Coyote 448",
      "task_state_name": "Board Stage 1169",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 1169",
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
          "assignee_id": "coyote-448",
          "team_id": null,
          "assignee_name": "Coyote 448",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:57:43-03:00",
          "created_at": "2026-03-04T16:57:43-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-377/coyote-448/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-377/coyote-448/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-377/coyote-448/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-377/coyote-448/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__DELETE

#### /api/v1.0/tasks/:task_id/prerequisites/:id

####  Remove a task prerequisite from a task 

## Parameters

Name | Description | type  
---|---|---  
task_id required | ID of the task | integer  
id required | ID of the task prerequisite | integer  
  
## Request

#### Route
    DELETE /api/v1.0/tasks/1/prerequisites/2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL    
    curl "[https://runrun.it/api/v1.0/tasks/1/prerequisites/2](https://runrun.it/api/v1.0/tasks/1/prerequisites/2)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/remove_a_task_prerequisite_from_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3934

#### Body
    {
      "id": 1,
      "title": "Bla 411",
      "is_working_on": false,
      "user_id": "coyote-452",
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
      "created_at": "2026-03-04T16:57:45-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 400",
      "client_id": 1,
      "project_name": "Test project 400",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 475",
      "user_name": "Coyote 452",
      "guest_name": null,
      "board_name": "Board 361",
      "board_stage_name": "Board Stage 1175",
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
      "last_activity_at": "2026-03-04T16:57:46-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-451",
      "task_state_id": 1,
      "responsible_name": "Coyote 451",
      "task_state_name": "Board Stage 1175",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 1175",
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
          "assignee_id": "coyote-451",
          "team_id": null,
          "assignee_name": "Coyote 451",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:57:45-03:00",
          "created_at": "2026-03-04T16:57:45-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-378/coyote-451/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-378/coyote-451/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-378/coyote-451/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-378/coyote-451/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__GET

#### /api/v1.0/task_templates/:task_template_id/prerequisites

####  List all task template prerequisites from a task template 

## Parameters

Name | Description | type  
---|---|---  
task_template_id required | ID of the task template | integer  
  
## Request

#### Route
    GET /api/v1.0/task_templates/1/prerequisites

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_templates/1/prerequisites](https://runrun.it/api/v1.0/task_templates/1/prerequisites)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/list_all_task_template_prerequisites_from_a_task_template)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 498

#### Body
    [
      {
        "id": 2,
        "title": "Task Template",
        "user_id": "coyote-456",
        "type_id": 2,
        "team_id": null,
        "board_id": null,
        "queue_position": 1,
        "project_template_id": 1,
        "tag_list": "",
        "tags_data": [
    
        ],
        "created_at": "2026-03-04T16:57:47-03:00",
        "follower_ids": [
    
        ],
        "is_assigned": true,
        "team_name": null,
        "type_name": "TaskType 478",
        "subtasks_data": [
    
        ],
        "responsible_id": null,
        "assignments": [
          {
            "id": "92a6f5b72",
            "task_template_id": 2,
            "assignee_id": "coyote-456",
            "team_id": null,
            "assignee_name": "Coyote 456",
            "team_name": null
          }
        ],
        "workflow_id": null
      }
    ]

__POST

#### /api/v1.0/task_templates/:task_template_id/prerequisites

####  Add a task template prerequisite to a task template 

## Parameters

Name | Description | type  
---|---|---  
task_template_id required | ID of the task template | integer  
  
## Request

#### Route
    POST /api/v1.0/task_templates/3/prerequisites

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "prerequisite": {
        "id": 4
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/task_templates/3/prerequisites](https://runrun.it/api/v1.0/task_templates/3/prerequisites)" -d '{"prerequisite":{"id":4}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/add_a_task_template_prerequisite_to_a_task_template)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 496

#### Body
    {
      "id": 3,
      "title": "Task Template",
      "user_id": "coyote-458",
      "type_id": 1,
      "team_id": null,
      "board_id": null,
      "queue_position": 2,
      "project_template_id": 1,
      "tag_list": "",
      "tags_data": [
    
      ],
      "created_at": "2026-03-04T16:57:48-03:00",
      "follower_ids": [
    
      ],
      "is_assigned": true,
      "team_name": null,
      "type_name": "TaskType 479",
      "subtasks_data": [
    
      ],
      "responsible_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_template_id": 3,
          "assignee_id": "coyote-458",
          "team_id": null,
          "assignee_name": "Coyote 458",
          "team_name": null
        }
      ],
      "workflow_id": null
    }

__DELETE

#### /api/v1.0/task_templates/:task_template_id/prerequisites/:id

####  Remove a task template prerequisite from a task template 

## Parameters

Name | Description | type  
---|---|---  
task_template_id required | ID of the task template | integer  
id required | ID of the task template prerequisite | integer  
  
## Request

#### Route
    DELETE /api/v1.0/task_templates/5/prerequisites/6

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/task_templates/5/prerequisites/6](https://runrun.it/api/v1.0/task_templates/5/prerequisites/6)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/prerequisites/remove_a_task_template_prerequisite_from_a_task_template)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 496

#### Body
    {
      "id": 5,
      "title": "Task Template",
      "user_id": "coyote-461",
      "type_id": 1,
      "team_id": null,
      "board_id": null,
      "queue_position": 2,
      "project_template_id": 1,
      "tag_list": "",
      "tags_data": [
    
      ],
      "created_at": "2026-03-04T16:57:49-03:00",
      "follower_ids": [
    
      ],
      "is_assigned": true,
      "team_name": null,
      "type_name": "TaskType 481",
      "subtasks_data": [
    
      ],
      "responsible_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_template_id": 5,
          "assignee_id": "coyote-461",
          "team_id": null,
          "assignee_name": "Coyote 461",
          "team_name": null
        }
      ],
      "workflow_id": null
    }