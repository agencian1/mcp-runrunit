__POST
#### /api/v1.0/tasks/:task_id/evaluations

####  Updates the task evaluations 

## Request

#### Route
    POST /api/v1.0/tasks/1/evaluations

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "evaluations": [
        {
          "evaluator_id": "coyote-591"
        },
        {
          "evaluator_id": "coyote-592"
        }
      ]
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/evaluations](https://runrun.it/api/v1.0/tasks/1/evaluations)" -d '{"evaluations":[{"evaluator_id":"coyote-591"},{"evaluator_id":"coyote-592"}]}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/updates_the_task_evaluations)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3507

#### Body
    {
      "id": 1,
      "title": "Bla 213",
      "is_working_on": false,
      "user_id": "coyote-590",
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
      "created_at": "2026-03-04T16:58:39-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": "pending",
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 387",
      "client_id": 1,
      "project_name": "Test project 348",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 392",
      "user_name": "Coyote 590",
      "guest_name": null,
      "board_name": "Board 311",
      "board_stage_name": "Board Stage 899",
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
      "evaluator_ids": [
        "coyote-591",
        "coyote-592"
      ],
      "pending_evaluator_ids": [
        "coyote-591",
        "coyote-592"
      ],
      "approved_evaluator_ids": [
    
      ],
      "rejected_evaluator_ids": [
    
      ],
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
      "last_activity_at": "2026-03-04T16:58:39-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "assignments": [
        {
          "id": "49537adb9",
          "task_id": 1,
          "assignee_id": "coyote-590",
          "team_id": null,
          "assignee_name": "Coyote 590",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:58:39-03:00",
          "created_at": "2026-03-04T16:58:39-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-538/coyote-590/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-538/coyote-590/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-538/coyote-590/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-538/coyote-590/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ]
    }

__DELETE

#### /api/v1.0/tasks/:task_id/evaluations

####  Destroy all evaluations for this task 

## Request

#### Route
    DELETE /api/v1.0/tasks/1/evaluations

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/evaluations](https://runrun.it/api/v1.0/tasks/1/evaluations)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/destroy_all_evaluations_for_this_task)

#### Status
    204

#### Headers

## __Task Evaluations - 2

__GET

#### /api/v1.0/task_evaluations

####  List all task evaluations when no params are passed 

## Request

#### Route
    GET /api/v1.0/task_evaluations

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_evaluations](https://runrun.it/api/v1.0/task_evaluations)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/list_all_task_evaluations_when_no_params_are_passed)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 11369

#### Body
    [
      {
        "id": 3,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-580",
        "evaluator_name": "Coyote 580",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-580/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-580/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 3,
          "title": "Third task",
          "is_working_on": false,
          "user_id": "coyote-579",
          "guest_id": null,
          "type_id": 3,
          "project_id": 3,
          "team_id": null,
          "board_id": 3,
          "board_stage_id": 7,
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
          "created_at": "2026-03-04T16:57:29-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 402",
          "client_id": 3,
          "project_name": "Test project 400",
          "project_group_name": "No group",
          "project_group_id": 3,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 3,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 447",
          "user_name": "Coyote 579",
          "guest_name": null,
          "board_name": "Board 318",
          "board_stage_name": "Board Stage 925",
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
          "last_activity_at": "2026-03-04T16:57:29-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "dbfa7092b",
              "task_id": 3,
              "assignee_id": "coyote-579",
              "team_id": null,
              "assignee_name": "Coyote 579",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:29-03:00",
              "created_at": "2026-03-04T16:57:29-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-579/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-579/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-579/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-579/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      },
      {
        "id": 2,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-577",
        "evaluator_name": "Coyote 577",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-577/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-577/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 2,
          "title": "Second task",
          "is_working_on": false,
          "user_id": "coyote-578",
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
          "queue_position": 1,
          "created_at": "2026-03-04T16:57:29-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 401",
          "client_id": 2,
          "project_name": "Test project 399",
          "project_group_name": "No group",
          "project_group_id": 2,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 2,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 446",
          "user_name": "Coyote 578",
          "guest_name": null,
          "board_name": "Board 317",
          "board_stage_name": "Board Stage 922",
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
          "last_activity_at": "2026-03-04T16:57:29-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "92a6f5b72",
              "task_id": 2,
              "assignee_id": "coyote-578",
              "team_id": null,
              "assignee_name": "Coyote 578",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:29-03:00",
              "created_at": "2026-03-04T16:57:29-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-578/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-578/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-578/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-578/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      },
      {
        "id": 1,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-577",
        "evaluator_name": "Coyote 577",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-577/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-577/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 1,
          "title": "First task",
          "is_working_on": false,
          "user_id": "coyote-576",
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
          "created_at": "2026-03-04T16:57:29-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 400",
          "client_id": 1,
          "project_name": "Test project 398",
          "project_group_name": "No group",
          "project_group_id": 1,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 1,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 445",
          "user_name": "Coyote 576",
          "guest_name": null,
          "board_name": "Board 316",
          "board_stage_name": "Board Stage 919",
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
          "last_activity_at": "2026-03-04T16:57:29-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "49537adb9",
              "task_id": 1,
              "assignee_id": "coyote-576",
              "team_id": null,
              "assignee_name": "Coyote 576",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:29-03:00",
              "created_at": "2026-03-04T16:57:29-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-576/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-576/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-576/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-368/coyote-576/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      }
    ]

__GET

#### /api/v1.0/task_evaluations

####  List all task evaluations for a specific task 

## Request

#### Route
    GET /api/v1.0/task_evaluations?task_id=1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    task_id=1

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_evaluations?task_id=1](https://runrun.it/api/v1.0/task_evaluations?task_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/list_all_task_evaluations_for_a_specific_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3790

#### Body
    [
      {
        "id": 1,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-583",
        "evaluator_name": "Coyote 583",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-583/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-583/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 1,
          "title": "First task",
          "is_working_on": false,
          "user_id": "coyote-582",
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
          "created_at": "2026-03-04T16:57:31-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 403",
          "client_id": 1,
          "project_name": "Test project 401",
          "project_group_name": "No group",
          "project_group_id": 1,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 1,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 448",
          "user_name": "Coyote 582",
          "guest_name": null,
          "board_name": "Board 319",
          "board_stage_name": "Board Stage 928",
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
          "last_activity_at": "2026-03-04T16:57:31-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "49537adb9",
              "task_id": 1,
              "assignee_id": "coyote-582",
              "team_id": null,
              "assignee_name": "Coyote 582",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:31-03:00",
              "created_at": "2026-03-04T16:57:31-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-582/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-582/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-582/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-369/coyote-582/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      }
    ]
__GET

#### /api/v1.0/task_evaluations

####  List all task evaluations for a specific evaluator 

## Request

#### Route
    GET /api/v1.0/task_evaluations?evaluator_id=coyote-589

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    evaluator_id=coyote-589

#### cURL
    curl -g "[https://runrun.it/api/v1.0/task_evaluations?evaluator_id=coyote-589](https://runrun.it/api/v1.0/task_evaluations?evaluator_id=coyote-589)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/list_all_task_evaluations_for_a_specific_evaluator)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 7580

#### Body
    [
      {
        "id": 2,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-589",
        "evaluator_name": "Coyote 589",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-589/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-589/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 2,
          "title": "Second task",
          "is_working_on": false,
          "user_id": "coyote-590",
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
          "queue_position": 1,
          "created_at": "2026-03-04T16:57:33-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 407",
          "client_id": 2,
          "project_name": "Test project 405",
          "project_group_name": "No group",
          "project_group_id": 2,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 2,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 452",
          "user_name": "Coyote 590",
          "guest_name": null,
          "board_name": "Board 323",
          "board_stage_name": "Board Stage 940",
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
          "last_activity_at": "2026-03-04T16:57:33-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "92a6f5b72",
              "task_id": 2,
              "assignee_id": "coyote-590",
              "team_id": null,
              "assignee_name": "Coyote 590",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:33-03:00",
              "created_at": "2026-03-04T16:57:33-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-590/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-590/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-590/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-590/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      },
      {
        "id": 1,
        "state": "pending",
        "happened_at": null,
        "evaluator_id": "coyote-589",
        "evaluator_name": "Coyote 589",
        "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-589/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-589/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "evaluator_is_deleted": false,
        "task": {
          "id": 1,
          "title": "First task",
          "is_working_on": false,
          "user_id": "coyote-588",
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
          "created_at": "2026-03-04T16:57:33-03:00",
          "start_date": null,
          "desired_start_date": null,
          "current_estimate_seconds": 3600,
          "evaluation_status": null,
          "attachments_count": 0,
          "tags_data": [
    
          ],
          "client_name": "Test client 406",
          "client_id": 1,
          "project_name": "Test project 404",
          "project_group_name": "No group",
          "project_group_id": 1,
          "project_group_is_default": true,
          "project_sub_group_name": "No subgroup",
          "project_sub_group_id": 1,
          "project_sub_group_is_default": true,
          "type_name": "TaskType 451",
          "user_name": "Coyote 588",
          "guest_name": null,
          "board_name": "Board 322",
          "board_stage_name": "Board Stage 937",
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
          "last_activity_at": "2026-03-04T16:57:33-03:00",
          "automation_id": null,
          "automation_name": null,
          "has_emails": false,
          "priority": 1,
          "assignments": [
            {
              "id": "49537adb9",
              "task_id": 1,
              "assignee_id": "coyote-588",
              "team_id": null,
              "assignee_name": "Coyote 588",
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
              "automatic_time_worked_updated_at": "2026-03-04T16:57:33-03:00",
              "created_at": "2026-03-04T16:57:33-03:00",
              "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-588/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-588/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
              "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-588/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-370/coyote-588/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
              "time_worked_not_persisted": 0
            }
          ]
        }
      }
    ]

__POST

#### /api/v1.0/task_evaluations/:id/reset

####  Reset a task evaluation 

## Request

#### Route
    POST /api/v1.0/task_evaluations/1/reset

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/task_evaluations/1/reset](https://runrun.it/api/v1.0/task_evaluations/1/reset)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/reset_a_task_evaluation)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 3809

#### Body
    {
      "id": 1,
      "state": "pending",
      "happened_at": null,
      "evaluator_id": "coyote-595",
      "evaluator_name": "Coyote 595",
      "evaluator_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-595/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-595/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "evaluator_is_deleted": false,
      "task": {
        "id": 1,
        "title": "First task",
        "is_working_on": false,
        "user_id": "coyote-594",
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
        "created_at": "2026-03-04T16:57:35-03:00",
        "start_date": null,
        "desired_start_date": null,
        "current_estimate_seconds": 3600,
        "evaluation_status": "pending",
        "attachments_count": 0,
        "tags_data": [
    
        ],
        "client_name": "Test client 409",
        "client_id": 1,
        "project_name": "Test project 407",
        "project_group_name": "No group",
        "project_group_id": 1,
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_id": 1,
        "project_sub_group_is_default": true,
        "type_name": "TaskType 454",
        "user_name": "Coyote 594",
        "guest_name": null,
        "board_name": "Board 325",
        "board_stage_name": "Board Stage 946",
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
        "evaluator_ids": [
          "coyote-595"
        ],
        "pending_evaluator_ids": [
          "coyote-595"
        ],
        "approved_evaluator_ids": [
    
        ],
        "rejected_evaluator_ids": [
    
        ],
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
        "last_activity_at": "2026-03-04T16:57:35-03:00",
        "automation_id": null,
        "automation_name": null,
        "has_emails": false,
        "priority": 1,
        "assignments": [
          {
            "id": "49537adb9",
            "task_id": 1,
            "assignee_id": "coyote-594",
            "team_id": null,
            "assignee_name": "Coyote 594",
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
            "automatic_time_worked_updated_at": "2026-03-04T16:57:35-03:00",
            "created_at": "2026-03-04T16:57:35-03:00",
            "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-594/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-594/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
            "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-594/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-371/coyote-594/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
            "time_worked_not_persisted": 0
          }
        ]
      }
    }

__DELETE

#### /api/v1.0/task_evaluations/:id

####  Destroy a task evaluation 

## Request

#### Route
    DELETE /api/v1.0/task_evaluations/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/task_evaluations/1](https://runrun.it/api/v1.0/task_evaluations/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/task_evaluations/destroy_a_task_evaluation)

#### Status
    204

#### Headers