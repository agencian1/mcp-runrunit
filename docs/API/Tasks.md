__GET
#### /api/v1.0/tasks

####  Query tasks 

Returns a paginated list of tasks that the user has permission to see. The number of tasks returned are limited by `limit` per `page` and are sorted based on `sort` and `sort_dir`. Use the following _Parameters_ to narrow and customize your query.

## Parameters

Name | Description | type | default  
---|---|---|---  
ids  | IDs of tasks, separated by comma | string |   
user_id  | ID of user who created the task | string |   
follower_id  | ID of user following the task | string |   
project_id  | ID of the project the task belongs to | integer |   
is_closed  | True if the task is delivered | boolean | _false_  
is_working_on  | True if any assignee is working on task | boolean |   
sort  | Sort strategy. | string | _closed_date_ if `ìs_closed=true`; otherwise _queue_position_  
sort_dir  | Sort direction. Must be _asc_ or _desc_ | string | _desc_ if `ìs_closed=true`; otherwise _asc_  
page  | The page that will be displayed. Must be equal or greater than _1_ | integer | _1_  
limit  | The number of objects to return per page. The value must be between _1_ and _100_ | integer | _1000_  
bypass_status_default  | Set as _true_ to bypass the default value of `is_closed` param | boolean | _false_  
  
## Request

#### Route
    
    
    GET /api/v1.0/tasks?responsible_id=coyote-2&sort=close_date&sort_dir=desc&is_closed=true&project_id=1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    
    
    responsible_id=coyote-2
    sort=close_date
    sort_dir=desc
    is_closed=true
    project_id=1

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks?responsible_id=coyote-2&sort=close_date&sort_dir=desc&is_closed=true&project_id=1](https://runrun.it/api/v1.0/tasks?responsible_id=coyote-2&sort=close_date&sort_dir=desc&is_closed=true&project_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/query_tasks)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 7842

#### Body
    
    
    [
      {
        "id": 2,
        "title": "Improve Task API",
        "is_working_on": false,
        "user_id": "coyote-4",
        "guest_id": null,
        "type_id": 2,
        "project_id": 1,
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
        "close_date": "2026-03-03T16:52:33-03:00",
        "was_reopened": false,
        "is_closed": true,
        "is_assigned": true,
        "on_going": false,
        "estimate_updated": true,
        "estimated_at": null,
        "queue_position": 2,
        "created_at": "2026-03-04T16:52:33-03:00",
        "start_date": null,
        "desired_start_date": null,
        "current_estimate_seconds": 3600,
        "evaluation_status": null,
        "attachments_count": 0,
        "tags_data": [
    
        ],
        "client_name": "Test client 1",
        "client_id": 1,
        "project_name": "Test project 1",
        "project_group_name": "No group",
        "project_group_id": 1,
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_id": 1,
        "project_sub_group_is_default": true,
        "type_name": "TaskType 2",
        "user_name": "Coyote 4",
        "guest_name": null,
        "board_name": "Board 2",
        "board_stage_name": "Board Stage 4",
        "board_stage_description": null,
        "team_name": null,
        "type_color": "FFFFFF",
        "state": "closed",
        "overdue": null,
        "time_worked": 0,
        "time_pending": 0,
        "time_total": 0,
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
        "last_activity_at": "2026-03-04T16:52:33-03:00",
        "automation_id": null,
        "automation_name": null,
        "has_emails": false,
        "priority": 2,
        "uid": 2,
        "responsible_id": "coyote-2",
        "task_state_id": 4,
        "responsible_name": "Coyote 2",
        "task_state_name": "Board Stage 4",
        "activities_7_days_ago": 0,
        "repetition_rule_id": null,
        "current_worked_time": 0,
        "estimated_delivery_date_updated": true,
        "last_estimated_at": null,
        "task_tags": [
    
        ],
        "approved": null,
        "task_status_id": 4,
        "task_status_name": "Board Stage 4",
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
            "assignee_id": "coyote-2",
            "team_id": null,
            "assignee_name": "Coyote 2",
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
            "automatic_time_worked_updated_at": "2026-03-04T16:52:33-03:00",
            "created_at": "2026-03-04T16:52:33-03:00",
            "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
            "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
            "time_worked_not_persisted": 0
          }
        ],
        "follower_ids": [
    
        ]
      },
      {
        "id": 1,
        "title": "Create Task API",
        "is_working_on": false,
        "user_id": "coyote-3",
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
        "close_date": "2026-03-02T16:52:32-03:00",
        "was_reopened": false,
        "is_closed": true,
        "is_assigned": true,
        "on_going": false,
        "estimate_updated": true,
        "estimated_at": null,
        "queue_position": 1,
        "created_at": "2026-03-04T16:52:33-03:00",
        "start_date": null,
        "desired_start_date": null,
        "current_estimate_seconds": 3600,
        "evaluation_status": null,
        "attachments_count": 0,
        "tags_data": [
    
        ],
        "client_name": "Test client 1",
        "client_id": 1,
        "project_name": "Test project 1",
        "project_group_name": "No group",
        "project_group_id": 1,
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_id": 1,
        "project_sub_group_is_default": true,
        "type_name": "TaskType 1",
        "user_name": "Coyote 3",
        "guest_name": null,
        "board_name": "Board 1",
        "board_stage_name": "Board Stage 1",
        "board_stage_description": null,
        "team_name": null,
        "type_color": "FFFFFF",
        "state": "closed",
        "overdue": null,
        "time_worked": 0,
        "time_pending": 0,
        "time_total": 0,
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
        "last_activity_at": "2026-03-04T16:52:33-03:00",
        "automation_id": null,
        "automation_name": null,
        "has_emails": false,
        "priority": 1,
        "uid": 1,
        "responsible_id": "coyote-2",
        "task_state_id": 1,
        "responsible_name": "Coyote 2",
        "task_state_name": "Board Stage 1",
        "activities_7_days_ago": 0,
        "repetition_rule_id": null,
        "current_worked_time": 0,
        "estimated_delivery_date_updated": true,
        "last_estimated_at": null,
        "task_tags": [
    
        ],
        "approved": null,
        "task_status_id": 1,
        "task_status_name": "Board Stage 1",
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
            "assignee_id": "coyote-2",
            "team_id": null,
            "assignee_name": "Coyote 2",
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
            "automatic_time_worked_updated_at": "2026-03-04T16:52:33-03:00",
            "created_at": "2026-03-04T16:52:33-03:00",
            "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
            "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-1/coyote-2/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
            "time_worked_not_persisted": 0
          }
        ],
        "follower_ids": [
    
        ]
      }
    ]

__GET

#### /api/v1.0/tasks/:id

####  Show a Task 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/show_a_task)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Task ID | integer  
title  | Task title | string  
is_working_on  | True if any assignee is working on task | boolean  
user_id  | ID of user who created the task | string  
guest_id  | ID of guest user who created the task | string  
type_id  | ID of the task type | integer  
project_id  | ID of the project the task belongs to | integer  
team_id  | ID of the team the task belongs to (if not assigned) | integer  
board_id  | ID of the board the task belongs to | integer  
board_stage_id  | ID of the board stage the task belongs to | integer  
board_stage_position  | Position of the task on stage | integer  
subtask_parent_position  | Position of the task on parent task | integer  
desired_date  | Desired delivery date | date  
desired_date_with_time  | Desired delivery date and time | date_time  
estimated_start_date  | Date when the system estimates the task will be started | date_time  
estimated_delivery_date  | Date when the system estimates the task will be delivered | date_time  
gantt_bar_start_date  | Start date for Gantt chart | date_time  
gantt_bar_end_date  | End date for Gantt chart | date_time  
close_date  | Date when the task was delivered | datetime  
was_reopened  | True if the task has been reopened after being delivered | boolean  
is_closed  | True if the task is delivered | boolean  
is_assigned  | True if the task has anyone assigned | boolean  
on_going  | True if the task is an ongoing task | boolean  
estimate_updated  | True if estimate dates have been updated after potential change | boolean  
estimated_at  | Last time when task was estimated | boolean  
queue_position  | 1-based index of position on assignee user's task list | integer  
created_at  | Date when task was created | datetime  
start_date  | First time when task was worked on | datetime  
desired_start_date  | Desired start date | date_time  
current_estimate_seconds  | Current estimated effort (in seconds) | integer  
evaluation_status  | Evaluation status ('approved' / 'rejected' / 'pending' / null) | string  
attachments_count  | Number of attachment that belongs to task | integer  
tags_data  | Tags for task | array  
client_name  | Name of client | string  
client_id  | ID of the client the task belongs to | integer  
project_name  | Name of project | string  
project_group_name  | Name of project group | string  
project_group_id  | ID of the group the task belongs to | integer  
project_group_is_default  | True if the project group is default | boolean  
project_sub_group_name  | Name of project subgroup | string  
project_sub_group_id  | ID of the sub group the task belongs to | integer  
project_sub_group_is_default  | True if the project subgroup is default | boolean  
type_name  | Name of task type | string  
user_name  | Name of user who created the task | string  
guest_name  | Name of guest user who created the task | string  
board_name  | Name of board | string  
board_stage_name  | Name of board stage | string  
board_stage_description  | Description of board stage | string  
team_name  | Name of team (if not assigned) | string  
type_color  | Task type color in hexadecimal format | string  
state  | Task state ('not_assigned', 'working_on', 'queued', 'closed') | string  
overdue  | Overdue status of the task ('on_schedule', 'soft_overdue', 'hard_overdue') | string  
time_worked  | Time (in seconds) worked in the task | integer  
time_pending  | Time (in seconds) pending in the task | integer  
time_total  | Total time (in seconds) spent in the task | integer  
time_progress  | Progress of time worked on the task | float  
activities_6_days_ago  | Time (in seconds) worked in the task 6 days ago | integer  
activities_5_days_ago  | Time (in seconds) worked in the task 5 days ago | integer  
activities_4_days_ago  | Time (in seconds) worked in the task 4 days ago | integer  
activities_3_days_ago  | Time (in seconds) worked in the task 3 days ago | integer  
activities_2_days_ago  | Time (in seconds) worked in the task 2 days ago | integer  
activities_1_days_ago  | Time (in seconds) worked in the task 1 days ago | integer  
activities_0_days_ago  | Time (in seconds) worked in the task today | integer  
activities  | Total time (in seconds) worked today and in the last 6 days | integer  
repetition_rule  | Repetition rule | integer  
board_remaining_time  | Time (in seconds) remaining estimated to deliver the task on board | integer  
stage_depart_estimated_at  | Estimated date of departure from stage on board | date_time  
search_row_rank  | Search relevance | integer  
is_urgent  | True if the task is urgent | boolean  
points  |  | integer  
reestimate_count  | Reestimate counter | integer  
parent_ids  | IDs from direct prerequisite tasks | array  
opened_parent_ids  | IDs from direct open prerequisite tasks | array  
parents_max_desired_date  | Maximum desired date of direct prerequisites. | date_time  
child_ids  | IDs from direct descendant tasks | array  
workflow_id  | Workflow id | integer  
checklist_id  | Checklist id | integer  
is_shared  | True if the task is shared | boolean  
sharing_details  | Sharing details | array  
subtask_ids  | Subtasks ids | array  
subtasks_count  | Subtasks count | integer  
subtasks_closed_count  | Subtasks closed count | integer  
subtasks_count_progress  | Subtasks count progress | float  
is_subtask  | True if the task is a subtask | boolean  
parent_task_id  | Parent task id | integer  
parent_task_title  | Parent task title | string  
description  | Task description | string  
all_subtasks_time_worked  | Sum of time (in seconds) worked in all the subtasks from this task | integer  
all_subtasks_times_updating  | True if is updating subtasks times summations | boolean  
all_subtasks_time_total  | Sum of total time (in seconds) spent in all the subtasks from this task | integer  
all_subtasks_time_progress  | Progress of time worked on all the subtasks from this task | float  
current_level  | Depth level of this task on your tree | integer  
evaluator_ids  | IDs from evaluators | array  
pending_evaluator_ids  | IDs from pending evaluators | array  
approved_evaluator_ids  | IDs from approved evaluators | array  
rejected_evaluator_ids  | IDs from rejected evaluators | array  
custom_fields  | Task custom fields | object  
form_id  | ID of the form whom task was created from | integer  
board_stage_data  | Data about the task board stage | object  
board_stage_elapsed_time  | Time spent in seconds in the board stage | integer  
board_stage_elapsed_time_updated_at  | Datetime of the last update of the attribute board_stage_elapsed_time | datetime  
is_board_stage_sla_elapsed_time_overdue  | True if board stage SLA elapsed time is overdue | boolean  
is_board_stage_sla_last_activity_time_overdue  | True if board stage SLA activity time is overdue | boolean  
last_activity_at  | Datetime of last activity on the task | date_time  
automation_id  | ID of the automation that created the task | integer  
automation_name  | Name of the automation that created the task | string  
email_address  | Unique email address of the task | string  
has_emails  | True if task has any associated email | boolean  
prerequisites_data  | Prerequisite tasks data | object  
subsequents_data  | Subsequent tasks data | object  
is_editable  | True if user is a task editor | boolean  
description_preview  | Description preview | string  
followers_data  | Followers data | array  
priority  | [Deprecated] Use queue_position | integer  
follower_ids  | IDs of users following this task | array  
workflow_id  | ID of associated workflow (if any) | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3912

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 1",
      "is_working_on": false,
      "user_id": "coyote-43",
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
      "created_at": "2026-03-04T16:52:48-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 14",
      "client_id": 1,
      "project_name": "Test project 14",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 20",
      "user_name": "Coyote 43",
      "guest_name": null,
      "board_name": "Board 20",
      "board_stage_name": "Board Stage 58",
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
      "last_activity_at": "2026-03-04T16:52:48-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-42",
      "task_state_id": 1,
      "responsible_name": "Coyote 42",
      "task_state_name": "Board Stage 58",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 58",
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
          "assignee_id": "coyote-42",
          "team_id": null,
          "assignee_name": "Coyote 42",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:52:48-03:00",
          "created_at": "2026-03-04T16:52:48-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-12/coyote-42/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-12/coyote-42/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-12/coyote-42/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-12/coyote-42/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__GET

#### /api/v1.0/tasks/:id/subtasks

####  Show task subtasks 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/subtasks

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1/subtasks](https://runrun.it/api/v1.0/tasks/1/subtasks)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/show_task_subtasks)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Task ID | integer  
title  | Task title | string  
is_working_on  | True if any assignee is working on task | boolean  
user_id  | ID of user who created the task | string  
guest_id  | ID of guest user who created the task | string  
type_id  | ID of the task type | integer  
project_id  | ID of the project the task belongs to | integer  
team_id  | ID of the team the task belongs to (if not assigned) | integer  
board_id  | ID of the board the task belongs to | integer  
board_stage_id  | ID of the board stage the task belongs to | integer  
board_stage_position  | Position of the task on stage | integer  
subtask_parent_position  | Position of the task on parent task | integer  
desired_date  | Desired delivery date | date  
desired_date_with_time  | Desired delivery date and time | date_time  
estimated_start_date  | Date when the system estimates the task will be started | date_time  
estimated_delivery_date  | Date when the system estimates the task will be delivered | date_time  
gantt_bar_start_date  | Start date for Gantt chart | date_time  
gantt_bar_end_date  | End date for Gantt chart | date_time  
close_date  | Date when the task was delivered | datetime  
was_reopened  | True if the task has been reopened after being delivered | boolean  
is_closed  | True if the task is delivered | boolean  
is_assigned  | True if the task has anyone assigned | boolean  
on_going  | True if the task is an ongoing task | boolean  
estimate_updated  | True if estimate dates have been updated after potential change | boolean  
estimated_at  | Last time when task was estimated | boolean  
queue_position  | 1-based index of position on assignee user's task list | integer  
created_at  | Date when task was created | datetime  
start_date  | First time when task was worked on | datetime  
desired_start_date  | Desired start date | date_time  
current_estimate_seconds  | Current estimated effort (in seconds) | integer  
evaluation_status  | Evaluation status ('approved' / 'rejected' / 'pending' / null) | string  
attachments_count  | Number of attachment that belongs to task | integer  
tags_data  | Tags for task | array  
client_name  | Name of client | string  
client_id  | ID of the client the task belongs to | integer  
project_name  | Name of project | string  
project_group_name  | Name of project group | string  
project_group_id  | ID of the group the task belongs to | integer  
project_group_is_default  | True if the project group is default | boolean  
project_sub_group_name  | Name of project subgroup | string  
project_sub_group_id  | ID of the sub group the task belongs to | integer  
project_sub_group_is_default  | True if the project subgroup is default | boolean  
type_name  | Name of task type | string  
user_name  | Name of user who created the task | string  
guest_name  | Name of guest user who created the task | string  
board_name  | Name of board | string  
board_stage_name  | Name of board stage | string  
board_stage_description  | Description of board stage | string  
team_name  | Name of team (if not assigned) | string  
type_color  | Task type color in hexadecimal format | string  
state  | Task state ('not_assigned', 'working_on', 'queued', 'closed') | string  
overdue  | Overdue status of the task ('on_schedule', 'soft_overdue', 'hard_overdue') | string  
time_worked  | Time (in seconds) worked in the task | integer  
time_pending  | Time (in seconds) pending in the task | integer  
time_total  | Total time (in seconds) spent in the task | integer  
time_progress  | Progress of time worked on the task | float  
activities_6_days_ago  | Time (in seconds) worked in the task 6 days ago | integer  
activities_5_days_ago  | Time (in seconds) worked in the task 5 days ago | integer  
activities_4_days_ago  | Time (in seconds) worked in the task 4 days ago | integer  
activities_3_days_ago  | Time (in seconds) worked in the task 3 days ago | integer  
activities_2_days_ago  | Time (in seconds) worked in the task 2 days ago | integer  
activities_1_days_ago  | Time (in seconds) worked in the task 1 days ago | integer  
activities_0_days_ago  | Time (in seconds) worked in the task today | integer  
activities  | Total time (in seconds) worked today and in the last 6 days | integer  
repetition_rule  | Repetition rule | integer  
board_remaining_time  | Time (in seconds) remaining estimated to deliver the task on board | integer  
stage_depart_estimated_at  | Estimated date of departure from stage on board | date_time  
search_row_rank  | Search relevance | integer  
is_urgent  | True if the task is urgent | boolean  
points  |  | integer  
reestimate_count  | Reestimate counter | integer  
parent_ids  | IDs from direct prerequisite tasks | array  
opened_parent_ids  | IDs from direct open prerequisite tasks | array  
parents_max_desired_date  | Maximum desired date of direct prerequisites. | date_time  
child_ids  | IDs from direct descendant tasks | array  
workflow_id  | Workflow id | integer  
checklist_id  | Checklist id | integer  
is_shared  | True if the task is shared | boolean  
sharing_details  | Sharing details | array  
subtask_ids  | Subtasks ids | array  
subtasks_count  | Subtasks count | integer  
subtasks_closed_count  | Subtasks closed count | integer  
subtasks_count_progress  | Subtasks count progress | float  
is_subtask  | True if the task is a subtask | boolean  
parent_task_id  | Parent task id | integer  
parent_task_title  | Parent task title | string  
description  | Task description | string  
all_subtasks_time_worked  | Sum of time (in seconds) worked in all the subtasks from this task | integer  
all_subtasks_times_updating  | True if is updating subtasks times summations | boolean  
all_subtasks_time_total  | Sum of total time (in seconds) spent in all the subtasks from this task | integer  
all_subtasks_time_progress  | Progress of time worked on all the subtasks from this task | float  
current_level  | Depth level of this task on your tree | integer  
evaluator_ids  | IDs from evaluators | array  
pending_evaluator_ids  | IDs from pending evaluators | array  
approved_evaluator_ids  | IDs from approved evaluators | array  
rejected_evaluator_ids  | IDs from rejected evaluators | array  
custom_fields  | Task custom fields | object  
form_id  | ID of the form whom task was created from | integer  
board_stage_data  | Data about the task board stage | object  
board_stage_elapsed_time  | Time spent in seconds in the board stage | integer  
board_stage_elapsed_time_updated_at  | Datetime of the last update of the attribute board_stage_elapsed_time | datetime  
is_board_stage_sla_elapsed_time_overdue  | True if board stage SLA elapsed time is overdue | boolean  
is_board_stage_sla_last_activity_time_overdue  | True if board stage SLA activity time is overdue | boolean  
last_activity_at  | Datetime of last activity on the task | date_time  
automation_id  | ID of the automation that created the task | integer  
automation_name  | Name of the automation that created the task | string  
email_address  | Unique email address of the task | string  
has_emails  | True if task has any associated email | boolean  
prerequisites_data  | Prerequisite tasks data | object  
subsequents_data  | Subsequent tasks data | object  
is_editable  | True if user is a task editor | boolean  
description_preview  | Description preview | string  
followers_data  | Followers data | array  
priority  | [Deprecated] Use queue_position | integer  
follower_ids  | IDs of users following this task | array  
workflow_id  | ID of associated workflow (if any) | integer  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3915

#### Body
    
    
    [
      {
        "id": 2,
        "title": "Subtask",
        "is_working_on": false,
        "user_id": "coyote-46",
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
        "created_at": "2026-03-04T16:52:49-03:00",
        "start_date": null,
        "desired_start_date": null,
        "current_estimate_seconds": 3600,
        "evaluation_status": null,
        "attachments_count": 0,
        "tags_data": [
    
        ],
        "client_name": "Test client 16",
        "client_id": 2,
        "project_name": "Test project 16",
        "project_group_name": "No group",
        "project_group_id": 2,
        "project_group_is_default": true,
        "project_sub_group_name": "No subgroup",
        "project_sub_group_id": 2,
        "project_sub_group_is_default": true,
        "type_name": "TaskType 22",
        "user_name": "Coyote 46",
        "guest_name": null,
        "board_name": "Board 22",
        "board_stage_name": "Board Stage 64",
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
        "is_subtask": true,
        "parent_task_id": null,
        "parent_task_title": null,
        "all_subtasks_time_worked": null,
        "all_subtasks_times_updating": false,
        "all_subtasks_time_total": null,
        "all_subtasks_time_progress": null,
        "current_level": 1,
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
        "last_activity_at": "2026-03-04T16:52:49-03:00",
        "automation_id": null,
        "automation_name": null,
        "has_emails": false,
        "priority": 2,
        "uid": 2,
        "responsible_id": "coyote-44",
        "task_state_id": 4,
        "responsible_name": "Coyote 44",
        "task_state_name": "Board Stage 64",
        "activities_7_days_ago": 0,
        "repetition_rule_id": null,
        "current_worked_time": 0,
        "estimated_delivery_date_updated": false,
        "last_estimated_at": null,
        "task_tags": [
    
        ],
        "approved": null,
        "task_status_id": 4,
        "task_status_name": "Board Stage 64",
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
            "assignee_id": "coyote-44",
            "team_id": null,
            "assignee_name": "Coyote 44",
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
            "automatic_time_worked_updated_at": "2026-03-04T16:52:49-03:00",
            "created_at": "2026-03-04T16:52:49-03:00",
            "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-13/coyote-44/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-13/coyote-44/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
            "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-13/coyote-44/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-13/coyote-44/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
            "time_worked_not_persisted": 0
          }
        ],
        "follower_ids": [
    
        ]
      }
    ]

__POST

#### /api/v1.0/tasks

####  Create a Task 

Create a task. The `user` field will be set to the user on whose behalf the API request is issued.

## Parameters

Name | Description | type  
---|---|---  
task[title] required | Task title | string  
task[on_going]  | True if the task is an ongoing task | boolean  
task[type_id] required | ID of the task type | integer  
task[project_id]  | ID of the project the task belongs to | integer  
task[desired_start_date]  | Desired start date | date_time  
task[desired_date]  | Desired delivery date | date_time  
task[tag_list]  | Task tag list |   
task[assignments]  | Objects of task assignments | array  
task[task_prerequisite_ids]  | IDs of pre-requisite tasks | array  
task[task_descendant_ids]  | IDs of descendant tasks | array  
task[follower_ids]  | IDs of users to follow this task | array  
task[document_ids]  | IDs of Document records to attach | array  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "type_id": 1,
        "project_id": 1,
        "title": "Bla 8",
        "desired_date": null,
        "on_going": false,
        "assignments": [
          {
            "assignee_id": "coyote-57",
            "team_id": 1
          }
        ],
        "source": "my_source_value"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks](https://runrun.it/api/v1.0/tasks)" -d '{"task":{"type_id":1,"project_id":1,"title":"Bla 8","desired_date":null,"on_going":false,"assignments":[{"assignee_id":"coyote-57","team_id":1}],"source":"my_source_value"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/create_a_task)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3977

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 8",
      "is_working_on": false,
      "user_id": "coyote-57",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": 1,
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
      "estimate_updated": true,
      "estimated_at": "2026-03-04T16:52:53-03:00",
      "queue_position": 1,
      "created_at": "2026-03-04T16:52:53-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 22",
      "client_id": 1,
      "project_name": "Test project 22",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 28",
      "user_name": "Coyote 57",
      "guest_name": null,
      "board_name": "Board 28",
      "board_stage_name": "Board Stage 82",
      "board_stage_description": null,
      "team_name": "Test team 1",
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:52:53-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-57",
      "task_state_id": 1,
      "responsible_name": "Coyote 57",
      "task_state_name": "Board Stage 82",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": "2026-03-04T16:52:53-03:00",
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 82",
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
          "assignee_id": "coyote-57",
          "team_id": 1,
          "assignee_name": "Coyote 57",
          "team_name": "Test team 1",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:52:53-03:00",
          "created_at": "2026-03-04T16:52:53-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-15/coyote-57/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-15/coyote-57/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-15/coyote-57/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-15/coyote-57/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Update task title 

## Parameters

Name | Description | type  
---|---|---  
task[title] required | Task title | string  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "title": "New title"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"title":"New title"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/update_task_title)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3928

#### Body
    
    
    {
      "id": 1,
      "title": "New title",
      "is_working_on": false,
      "user_id": "coyote-93",
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
      "created_at": "2026-03-04T16:53:08-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 34",
      "client_id": 1,
      "project_name": "Test project 34",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 45",
      "user_name": "Coyote 93",
      "guest_name": null,
      "board_name": "Board 55",
      "board_stage_name": "Board Stage 163",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:08-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-93",
      "task_state_id": 1,
      "responsible_name": "Coyote 93",
      "task_state_name": "Board Stage 163",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 163",
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
          "assignee_id": "coyote-93",
          "team_id": null,
          "assignee_name": "Coyote 93",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:08-03:00",
          "created_at": "2026-03-04T16:53:08-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-38/coyote-93/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-38/coyote-93/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-38/coyote-93/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-38/coyote-93/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Update task desired start date 

## Parameters

Name | Description | type  
---|---|---  
task[desired_start_date]  | Desired start date | date_time  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "desired_start_date": "2024-04-17T14:50:30-03:00"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"desired_start_date":"2024-04-17T14:50:30-03:00"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/update_task_desired_start_date)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4016

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 19",
      "is_working_on": false,
      "user_id": "coyote-95",
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
      "gantt_bar_start_date": "2024-04-17T14:50:30-03:00",
      "gantt_bar_end_date": "2024-04-17T15:50:30-03:00",
      "close_date": null,
      "was_reopened": false,
      "is_closed": false,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": false,
      "estimated_at": null,
      "queue_position": 1,
      "created_at": "2026-03-04T16:53:09-03:00",
      "start_date": null,
      "desired_start_date": "2024-04-17T14:50:30-03:00",
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 35",
      "client_id": 1,
      "project_name": "Test project 35",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 46",
      "user_name": "Coyote 95",
      "guest_name": null,
      "board_name": "Board 56",
      "board_stage_name": "Board Stage 166",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:09-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-95",
      "task_state_id": 1,
      "responsible_name": "Coyote 95",
      "task_state_name": "Board Stage 166",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 166",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": "2024-04-17T14:50:30-03:00",
      "is_scheduled": true,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_id": 1,
          "assignee_id": "coyote-95",
          "team_id": null,
          "assignee_name": "Coyote 95",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:09-03:00",
          "created_at": "2026-03-04T16:53:09-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-39/coyote-95/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-39/coyote-95/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-39/coyote-95/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-39/coyote-95/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Update task desired date 

## Parameters

Name | Description | type  
---|---|---  
task[desired_date]  | Desired delivery date | date  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "desired_date": "2024-04-20T20:23:40-03:00"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"desired_date":"2024-04-20T20:23:40-03:00"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/update_task_desired_date)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4003

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 21",
      "is_working_on": false,
      "user_id": "coyote-99",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 1,
      "board_stage_position": 70368744177664,
      "subtask_parent_position": null,
      "desired_date": "2024-04-20",
      "desired_date_with_time": "2024-04-20T20:23:40-03:00",
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": "2024-04-20T19:23:40-03:00",
      "gantt_bar_end_date": "2024-04-20T20:23:40-03:00",
      "close_date": null,
      "was_reopened": false,
      "is_closed": false,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": false,
      "estimated_at": null,
      "queue_position": 1,
      "created_at": "2026-03-04T16:53:11-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 37",
      "client_id": 1,
      "project_name": "Test project 37",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 48",
      "user_name": "Coyote 99",
      "guest_name": null,
      "board_name": "Board 58",
      "board_stage_name": "Board Stage 172",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "hard_overdue",
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
      "last_activity_at": "2026-03-04T16:53:11-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-99",
      "task_state_id": 1,
      "responsible_name": "Coyote 99",
      "task_state_name": "Board Stage 172",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 172",
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
          "assignee_id": "coyote-99",
          "team_id": null,
          "assignee_name": "Coyote 99",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:11-03:00",
          "created_at": "2026-03-04T16:53:11-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-41/coyote-99/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-41/coyote-99/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-41/coyote-99/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-41/coyote-99/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Add task tags, without setting the color 

## Parameters

Name | Description | type  
---|---|---  
task[tags_data]  | Tags for task | array  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "tags_data": [
          {
            "name": "tag a",
            "color": "#FFFFFF"
          },
          {
            "name": "tag b",
            "color": "#000000"
          }
        ]
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"tags_data":[{"name":"tag a","color":"#FFFFFF"},{"name":"tag b","color":"#000000"}]}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/add_task_tags,_without_setting_the_color)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4034

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 23",
      "is_working_on": false,
      "user_id": "coyote-103",
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
      "created_at": "2026-03-04T16:53:13-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
        {
          "name": "tag a",
          "color": null
        },
        {
          "name": "tag b",
          "color": null
        }
      ],
      "client_name": "Test client 39",
      "client_id": 1,
      "project_name": "Test project 39",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 50",
      "user_name": "Coyote 103",
      "guest_name": null,
      "board_name": "Board 60",
      "board_stage_name": "Board Stage 178",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:13-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-103",
      "task_state_id": 1,
      "responsible_name": "Coyote 103",
      "task_state_name": "Board Stage 178",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
        "tag a",
        "tag b"
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 178",
      "tag_list": "tag a, tag b",
      "tags": [
        "tag a",
        "tag b"
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "49537adb9",
          "task_id": 1,
          "assignee_id": "coyote-103",
          "team_id": null,
          "assignee_name": "Coyote 103",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:13-03:00",
          "created_at": "2026-03-04T16:53:13-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-43/coyote-103/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-43/coyote-103/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-43/coyote-103/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-43/coyote-103/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Update task points 

## Parameters

Name | Description | type  
---|---|---  
task[points]  |  | integer  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "points": 8
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"points":8}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/update_task_points)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3930

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 28",
      "is_working_on": false,
      "user_id": "coyote-113",
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
      "created_at": "2026-03-04T16:53:17-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 44",
      "client_id": 1,
      "project_name": "Test project 44",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 55",
      "user_name": "Coyote 113",
      "guest_name": null,
      "board_name": "Board 65",
      "board_stage_name": "Board Stage 193",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "points": 8,
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
      "last_activity_at": "2026-03-04T16:53:18-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-113",
      "task_state_id": 1,
      "responsible_name": "Coyote 113",
      "task_state_name": "Board Stage 193",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 193",
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
          "assignee_id": "coyote-113",
          "team_id": null,
          "assignee_name": "Coyote 113",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:17-03:00",
          "created_at": "2026-03-04T16:53:17-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-48/coyote-113/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-48/coyote-113/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-48/coyote-113/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-48/coyote-113/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/tasks/:id

####  Update task custom fields 

Custom fields are identified by a "custom_" prefix followed by a number

To determine which custom fields can be filled in a task, you need to access the endpoint GET api/v1.0/tasks/:task_id/fields

The options of the fields of type 'single_option' and 'multiple_options' can be accessed in the endpoint GET api/v1.0/fields/:field_id/options

## Parameters

Name | Description | type  
---|---|---  
task[custom_fields]  | Task custom fields | object  
  
## Request

#### Route
    
    
    PUT /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task": {
        "custom_fields": {
          "custom_3": "Short text",
          "custom_4": "Long text",
          "custom_5": 45,
          "custom_6": 30.23,
          "custom_7": 8,
          "custom_8": "2024-11-15",
          "custom_9": "2024-11-15T21:12:43-03:00",
          "custom_1": {
            "id": "2",
            "label": "Option 2",
            "color": null
          },
          "custom_2": [
            {
              "id": "3",
              "label": "Option A",
              "color": null
            },
            {
              "id": "4",
              "label": "Option B",
              "color": null
            }
          ],
          "custom_10": "[email@example.com](mailto:email@example.com)"
        }
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '{"task":{"custom_fields":{"custom_3":"Short text","custom_4":"Long text","custom_5":45,"custom_6":30.23,"custom_7":8,"custom_8":"2024-11-15","custom_9":"2024-11-15T21:12:43-03:00","custom_1":{"id":"2","label":"Option 2","color":null},"custom_2":[{"id":"3","label":"Option A","color":null},{"id":"4","label":"Option B","color":null}],"custom_10":"[email@example.com](mailto:email@example.com)"}}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/update_task_custom_fields)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4271

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 31",
      "is_working_on": false,
      "user_id": "coyote-119",
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
      "created_at": "2026-03-04T16:53:20-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 47",
      "client_id": 1,
      "project_name": "Test project 47",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 58",
      "user_name": "Coyote 119",
      "guest_name": null,
      "board_name": "Board 68",
      "board_stage_name": "Board Stage 202",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
        "custom_1": {
          "id": "2",
          "color": null,
          "label": "Option 2"
        },
        "custom_2": [
          {
            "id": "3",
            "color": null,
            "label": "Option A"
          },
          {
            "id": "4",
            "color": null,
            "label": "Option B"
          }
        ],
        "custom_3": "Short text",
        "custom_4": "Long text",
        "custom_5": 45,
        "custom_6": 30.23,
        "custom_7": 8,
        "custom_8": "2024-11-15",
        "custom_9": "2024-11-15T21:12:43-03:00",
        "custom_10": "[email@example.com](mailto:email@example.com)"
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
      "last_activity_at": "2026-03-04T16:53:21-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-119",
      "task_state_id": 1,
      "responsible_name": "Coyote 119",
      "task_state_name": "Board Stage 202",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 202",
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
          "assignee_id": "coyote-119",
          "team_id": null,
          "assignee_name": "Coyote 119",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:20-03:00",
          "created_at": "2026-03-04T16:53:20-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-51/coyote-119/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-51/coyote-119/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-51/coyote-119/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-51/coyote-119/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__DELETE

#### /api/v1.0/tasks/:id

####  Destroy a Task 

## Request

#### Route
    
    
    DELETE /api/v1.0/tasks/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1](https://runrun.it/api/v1.0/tasks/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/destroy_a_task)

#### Status
    
    
    204

#### Headers


__POST

#### /api/v1.0/tasks/:id/play

####  Play a Task 

Indicate that a task is being worked on, if the responsible is currently working on a task it will be paused.

The task is eligible to be started if: 

  * it's not already being working on
  * it's not closed
  * it does not have any open prerequisite tasks



## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/play

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/play](https://runrun.it/api/v1.0/tasks/1/play)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/play_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3972

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 41",
      "is_working_on": true,
      "user_id": "coyote-141",
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
      "created_at": "2026-03-04T16:53:31-03:00",
      "start_date": "2026-03-04T16:53:31-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 57",
      "client_id": 1,
      "project_name": "Test project 57",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 68",
      "user_name": "Coyote 141",
      "guest_name": null,
      "board_name": "Board 78",
      "board_stage_name": "Board Stage 232",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "working_on",
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
      "last_activity_at": "2026-03-04T16:53:31-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-140",
      "task_state_id": 1,
      "responsible_name": "Coyote 140",
      "task_state_name": "Board Stage 232",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 232",
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
          "assignee_id": "coyote-140",
          "team_id": null,
          "assignee_name": "Coyote 140",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": "2026-03-04T16:53:31-03:00",
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": true,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:31-03:00",
          "created_at": "2026-03-04T16:53:31-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-61/coyote-140/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-61/coyote-140/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-61/coyote-140/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-61/coyote-140/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/play

####  Create assignment and play Task 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/play

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/play](https://runrun.it/api/v1.0/tasks/1/play)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/create_assignment_and_play_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3972

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 42",
      "is_working_on": true,
      "user_id": "coyote-143",
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
      "created_at": "2026-03-04T16:53:32-03:00",
      "start_date": "2026-03-04T16:53:32-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 58",
      "client_id": 1,
      "project_name": "Test project 58",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 69",
      "user_name": "Coyote 143",
      "guest_name": null,
      "board_name": "Board 79",
      "board_stage_name": "Board Stage 235",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "working_on",
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
      "last_activity_at": "2026-03-04T16:53:32-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-142",
      "task_state_id": 1,
      "responsible_name": "Coyote 142",
      "task_state_name": "Board Stage 235",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 235",
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
          "assignee_id": "coyote-142",
          "team_id": null,
          "assignee_name": "Coyote 142",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": "2026-03-04T16:53:32-03:00",
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": true,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:32-03:00",
          "created_at": "2026-03-04T16:53:32-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-62/coyote-142/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-62/coyote-142/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-62/coyote-142/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-62/coyote-142/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/pause

####  Pause a Task 

Pause the work on a task.

The task is eligible to be paused if: 

  * it's currently being working on



## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/pause

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/pause](https://runrun.it/api/v1.0/tasks/1/pause)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/pause_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3993

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 43",
      "is_working_on": false,
      "user_id": "coyote-145",
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
      "created_at": "2026-03-04T16:53:33-03:00",
      "start_date": "2026-03-04T16:53:33-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 59",
      "client_id": 1,
      "project_name": "Test project 59",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 70",
      "user_name": "Coyote 145",
      "guest_name": null,
      "board_name": "Board 80",
      "board_stage_name": "Board Stage 238",
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
      "last_activity_at": "2026-03-04T16:53:33-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-145",
      "task_state_id": 1,
      "responsible_name": "Coyote 145",
      "task_state_name": "Board Stage 238",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 238",
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
          "assignee_id": "coyote-144",
          "team_id": null,
          "assignee_name": "Coyote 144",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": "2026-03-04T16:53:33-03:00",
          "estimate_updated": false,
          "start_date": "2026-03-04T16:53:33-03:00",
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:33-03:00",
          "created_at": "2026-03-04T16:53:33-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-63/coyote-144/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-63/coyote-144/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-63/coyote-144/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-63/coyote-144/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/change_board

####  Change a Task board to another 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
board_id required | ID of the board the task belongs to | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/change_board

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "board_id": 2
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/change_board](https://runrun.it/api/v1.0/tasks/1/change_board)" -d '{"board_id":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/change_a_task_board_to_another)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3977

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 46",
      "is_working_on": false,
      "user_id": "coyote-150",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 2,
      "board_stage_id": 3,
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
      "estimate_updated": true,
      "estimated_at": "2026-03-04T16:53:36-03:00",
      "queue_position": 1,
      "created_at": "2026-03-04T16:53:36-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 62",
      "client_id": 1,
      "project_name": "Test project 62",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 73",
      "user_name": "Coyote 150",
      "guest_name": null,
      "board_name": "Board 84",
      "board_stage_name": "Board Stage 249",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:36-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-149",
      "task_state_id": 3,
      "responsible_name": "Coyote 149",
      "task_state_name": "Board Stage 249",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": "2026-03-04T16:53:36-03:00",
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 3,
      "task_status_name": "Board Stage 249",
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
          "assignee_id": "coyote-149",
          "team_id": null,
          "assignee_name": "Coyote 149",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:36-03:00",
          "created_at": "2026-03-04T16:53:36-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-65/coyote-149/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-65/coyote-149/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-65/coyote-149/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-65/coyote-149/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/change_project

####  Change the project from task to another 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
project_id  | ID of the project the task belongs to | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/change_project

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "project_id": 1
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/change_project](https://runrun.it/api/v1.0/tasks/1/change_project)" -d '{"project_id":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/change_the_project_from_task_to_another)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3924

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 47",
      "is_working_on": false,
      "user_id": "coyote-152",
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
      "created_at": "2026-03-04T16:53:36-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 63",
      "client_id": 1,
      "project_name": "Test project 63",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 74",
      "user_name": "Coyote 152",
      "guest_name": null,
      "board_name": "Board 85",
      "board_stage_name": "Board Stage 251",
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
      "last_activity_at": "2026-03-04T16:53:37-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-151",
      "task_state_id": 1,
      "responsible_name": "Coyote 151",
      "task_state_name": "Board Stage 251",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 251",
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
          "assignee_id": "coyote-151",
          "team_id": null,
          "assignee_name": "Coyote 151",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:37-03:00",
          "created_at": "2026-03-04T16:53:37-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-66/coyote-151/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-66/coyote-151/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-66/coyote-151/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-66/coyote-151/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/change_type

####  Change the type from task to another 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
type_id required | ID of the task type | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/change_type

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "type_id": 1
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/change_type](https://runrun.it/api/v1.0/tasks/1/change_type)" -d '{"type_id":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/change_the_type_from_task_to_another)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3977

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 49",
      "is_working_on": false,
      "user_id": "coyote-156",
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
      "estimate_updated": true,
      "estimated_at": "2026-03-04T16:53:39-03:00",
      "queue_position": 1,
      "created_at": "2026-03-04T16:53:38-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 65",
      "client_id": 1,
      "project_name": "Test project 66",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 76",
      "user_name": "Coyote 156",
      "guest_name": null,
      "board_name": "Board 87",
      "board_stage_name": "Board Stage 257",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:38-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-156",
      "task_state_id": 1,
      "responsible_name": "Coyote 156",
      "task_state_name": "Board Stage 257",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": "2026-03-04T16:53:39-03:00",
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 257",
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
          "assignee_id": "coyote-156",
          "team_id": null,
          "assignee_name": "Coyote 156",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:38-03:00",
          "created_at": "2026-03-04T16:53:38-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-68/coyote-156/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-68/coyote-156/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-68/coyote-156/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-68/coyote-156/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/deliver

####  Deliver a Task 

Deliver a task.

The task is eligible to be delivered if: 

  * it's not already delivered
  * it does not have any open prerequisite tasks



## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/deliver

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/deliver](https://runrun.it/api/v1.0/tasks/1/deliver)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/deliver_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4013

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 52",
      "is_working_on": false,
      "user_id": "coyote-162",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 3,
      "board_stage_position": null,
      "subtask_parent_position": null,
      "desired_date": null,
      "desired_date_with_time": null,
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": null,
      "gantt_bar_end_date": null,
      "close_date": "2026-03-04T16:53:42-03:00",
      "was_reopened": false,
      "is_closed": true,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": true,
      "estimated_at": null,
      "queue_position": null,
      "created_at": "2026-03-04T16:53:41-03:00",
      "start_date": "2026-03-04T16:53:42-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 68",
      "client_id": 1,
      "project_name": "Test project 69",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 80",
      "user_name": "Coyote 162",
      "guest_name": null,
      "board_name": "Board 90",
      "board_stage_name": "Board Stage 268",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "closed",
      "overdue": "on_schedule",
      "time_worked": 0,
      "time_pending": 0,
      "time_total": 0,
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
      "board_remaining_time": 0,
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
      "last_activity_at": "2026-03-04T16:53:42-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": null,
      "uid": 1,
      "responsible_id": "coyote-161",
      "task_state_id": 3,
      "responsible_name": "Coyote 161",
      "task_state_name": "Board Stage 268",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 3,
      "task_status_name": "Board Stage 268",
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
          "assignee_id": "coyote-161",
          "team_id": null,
          "assignee_name": "Coyote 161",
          "team_name": null,
          "queue_position": null,
          "priority": null,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": true,
          "start_date": "2026-03-04T16:53:42-03:00",
          "close_date": "2026-03-04T16:53:42-03:00",
          "is_closed": true,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:41-03:00",
          "created_at": "2026-03-04T16:53:41-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-71/coyote-161/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-71/coyote-161/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-71/coyote-161/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-71/coyote-161/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/reopen

####  Reopen a Task 

Reopen a closed task.

IMPORTANT!!: If the task is prerequisite directly or indirectly in any task that has already been delivered or is under development, it is necessary to pause or reopen these tasks. You can set the parameter "reopen_or_pause_descendant_tasks" to automatically pause or reopen the necessary tasks. To complete this operation with success it's necessary that the current user is allowed to reopen and pause all these tasks.

The task is eligible to be reopened if: 

  * it's closed
  * it's not a prerequisite of working on or closed tasks



## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
reopen_or_pause_descendant_tasks  | Force pause/reopen all descendant tasks | boolean  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/reopen

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/reopen](https://runrun.it/api/v1.0/tasks/1/reopen)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/reopen_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4022

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 54",
      "is_working_on": false,
      "user_id": "coyote-168",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 2,
      "board_stage_position": 70368744177664,
      "subtask_parent_position": null,
      "desired_date": null,
      "desired_date_with_time": null,
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": null,
      "gantt_bar_end_date": null,
      "close_date": null,
      "was_reopened": true,
      "is_closed": false,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": true,
      "estimated_at": "2026-03-04T16:53:45-03:00",
      "queue_position": 1,
      "created_at": "2026-03-04T16:53:44-03:00",
      "start_date": "2026-03-04T16:53:44-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 70",
      "client_id": 1,
      "project_name": "Test project 71",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 82",
      "user_name": "Coyote 168",
      "guest_name": null,
      "board_name": "Board 92",
      "board_stage_name": "Board Stage 273",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:53:44-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-167",
      "task_state_id": 2,
      "responsible_name": "Coyote 167",
      "task_state_name": "Board Stage 273",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": "2026-03-04T16:53:45-03:00",
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 2,
      "task_status_name": "Board Stage 273",
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
          "assignee_id": "coyote-167",
          "team_id": null,
          "assignee_name": "Coyote 167",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": "2026-03-04T16:53:44-03:00",
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:44-03:00",
          "created_at": "2026-03-04T16:53:44-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-74/coyote-167/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-74/coyote-167/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-74/coyote-167/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-74/coyote-167/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/reposition

####  Reposition a Task 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
queue_position required | The new queue position on responsible user's task list | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/4/reposition

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "queue_position": 2
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/4/reposition](https://runrun.it/api/v1.0/tasks/4/reposition)" -d '{"queue_position":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/reposition_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3929

#### Body
    
    
    {
      "id": 4,
      "title": "Bla 63",
      "is_working_on": false,
      "user_id": "coyote-170",
      "guest_id": null,
      "type_id": 4,
      "project_id": 4,
      "team_id": null,
      "board_id": 4,
      "board_stage_id": 10,
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
      "created_at": "2026-03-04T16:53:47-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 79",
      "client_id": 4,
      "project_name": "Test project 80",
      "project_group_name": "No group",
      "project_group_id": 4,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 4,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 91",
      "user_name": "Coyote 170",
      "guest_name": null,
      "board_name": "Board 101",
      "board_stage_name": "Board Stage 299",
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
      "last_activity_at": "2026-03-04T16:53:47-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 2,
      "uid": 4,
      "responsible_id": "coyote-170",
      "task_state_id": 10,
      "responsible_name": "Coyote 170",
      "task_state_name": "Board Stage 299",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 10,
      "task_status_name": "Board Stage 299",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "1254deb6e4",
          "task_id": 4,
          "assignee_id": "coyote-170",
          "team_id": null,
          "assignee_name": "Coyote 170",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:47-03:00",
          "created_at": "2026-03-04T16:53:47-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-77/coyote-170/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-77/coyote-170/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-77/coyote-170/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-77/coyote-170/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/reestimate

####  Reestimate a Task using assingee_id param 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
work_seconds required | The new effort (in seconds) | integer  
assignee_id  | If present only the informed assignee effort will be affected | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/reestimate

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "work_seconds": 666,
      "assignee_id": "coyote-173"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/reestimate](https://runrun.it/api/v1.0/tasks/1/reestimate)" -d '{"work_seconds":666,"assignee_id":"coyote-173"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/reestimate_a_task_using_assingee_id_param)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4788

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 65",
      "is_working_on": false,
      "user_id": "coyote-174",
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
      "queue_position": null,
      "created_at": "2026-03-04T16:53:48-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 4266,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 81",
      "client_id": 1,
      "project_name": "Test project 82",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 93",
      "user_name": "Coyote 174",
      "guest_name": null,
      "board_name": "Board 103",
      "board_stage_name": "Board Stage 305",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": null,
      "time_worked": 0,
      "time_pending": 4266,
      "time_total": 4266,
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
      "reestimate_count": 1,
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
      "last_activity_at": "2026-03-04T16:53:48-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": null,
      "uid": 1,
      "responsible_id": "coyote-174",
      "task_state_id": 1,
      "responsible_name": "Coyote 174",
      "task_state_name": "Board Stage 305",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 305",
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
          "assignee_id": "coyote-172",
          "team_id": null,
          "assignee_name": "Coyote 172",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:48-03:00",
          "created_at": "2026-03-04T16:53:48-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-172/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-172/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-172/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-172/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        },
        {
          "id": "92a6f5b72",
          "task_id": 1,
          "assignee_id": "coyote-173",
          "team_id": null,
          "assignee_name": "Coyote 173",
          "team_name": null,
          "queue_position": 1,
          "priority": 1,
          "current_estimate_seconds": 666,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": null,
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 1,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:53:48-03:00",
          "created_at": "2026-03-04T16:53:48-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-173/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-173/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-173/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-79/coyote-173/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/share

####  Share the task 

Share the task with guests.

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
comment  | Comment | string  
guests_params  | List of objects with guest data | array  
sharing_details  | List of optional information to be shared. Options: "documents", "time_progress", "board_stage" | array  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/share

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "sharing_details": [
        "documents"
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
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/share](https://runrun.it/api/v1.0/tasks/1/share)" -d '{"sharing_details":["documents"],"guests_params":[{"email":"[guest1@email.com](mailto:guest1@email.com)"},{"email":"[guest2@email.com](mailto:guest2@email.com)"}]}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/share_the_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3935

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 68",
      "is_working_on": false,
      "user_id": "coyote-181",
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
      "created_at": "2026-03-04T16:53:51-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 84",
      "client_id": 1,
      "project_name": "Test project 85",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 96",
      "user_name": "Coyote 181",
      "guest_name": null,
      "board_name": "Board 106",
      "board_stage_name": "Board Stage 314",
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
      "is_shared": true,
      "sharing_details": [
        "documents"
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
      "last_activity_at": "2026-03-04T16:53:52-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-180",
      "task_state_id": 1,
      "responsible_name": "Coyote 180",
      "task_state_name": "Board Stage 314",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 314",
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
          "assignee_id": "coyote-180",
          "team_id": null,
          "assignee_name": "Coyote 180",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:51-03:00",
          "created_at": "2026-03-04T16:53:51-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-180/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-180/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-180/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-180/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/unshare

####  Unshare the task 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/unshare

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/unshare](https://runrun.it/api/v1.0/tasks/1/unshare)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/unshare_the_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3925

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 69",
      "is_working_on": false,
      "user_id": "coyote-183",
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
      "created_at": "2026-03-04T16:53:53-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 85",
      "client_id": 1,
      "project_name": "Test project 86",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 97",
      "user_name": "Coyote 183",
      "guest_name": null,
      "board_name": "Board 107",
      "board_stage_name": "Board Stage 317",
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
      "last_activity_at": "2026-03-04T16:53:53-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-182",
      "task_state_id": 1,
      "responsible_name": "Coyote 182",
      "task_state_name": "Board Stage 317",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 317",
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
          "assignee_id": "coyote-182",
          "team_id": null,
          "assignee_name": "Coyote 182",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:53-03:00",
          "created_at": "2026-03-04T16:53:53-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/coyote-182/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/coyote-182/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/coyote-182/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/coyote-182/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/complete_workflow_step

####  Complete a workflow step 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/complete_workflow_step

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/complete_workflow_step](https://runrun.it/api/v1.0/tasks/1/complete_workflow_step)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/complete_a_workflow_step)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3923

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 75",
      "is_working_on": false,
      "user_id": "coyote-194",
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
      "created_at": "2026-03-04T16:53:57-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 91",
      "client_id": 1,
      "project_name": "Test project 92",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 103",
      "user_name": "Coyote 194",
      "guest_name": null,
      "board_name": "Board 113",
      "board_stage_name": "Board Stage 335",
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
      "workflow_id": 1,
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
      "last_activity_at": "2026-03-04T16:53:58-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-196",
      "task_state_id": 1,
      "responsible_name": "Coyote 196",
      "task_state_name": "Board Stage 335",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 335",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "92a6f5b72",
          "task_id": 1,
          "assignee_id": "coyote-196",
          "team_id": null,
          "assignee_name": "Coyote 196",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:53:58-03:00",
          "created_at": "2026-03-04T16:53:58-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-87/coyote-196/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-87/coyote-196/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-87/coyote-196/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-87/coyote-196/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/undo_workflow_step

####  Undo a workflow step 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/undo_workflow_step

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/undo_workflow_step](https://runrun.it/api/v1.0/tasks/1/undo_workflow_step)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/undo_a_workflow_step)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3937

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 77",
      "is_working_on": false,
      "user_id": "coyote-203",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": 1,
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
      "created_at": "2026-03-04T16:54:01-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 93",
      "client_id": 1,
      "project_name": "Test project 94",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 105",
      "user_name": "Coyote 203",
      "guest_name": null,
      "board_name": "Board 115",
      "board_stage_name": "Board Stage 341",
      "board_stage_description": null,
      "team_name": "Test team 14",
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
      "workflow_id": 1,
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
      "last_activity_at": "2026-03-04T16:54:01-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-202",
      "task_state_id": 1,
      "responsible_name": "Coyote 202",
      "task_state_name": "Board Stage 341",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 341",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "dbfa7092b",
          "task_id": 1,
          "assignee_id": "coyote-202",
          "team_id": 1,
          "assignee_name": "Coyote 202",
          "team_name": "Test team 14",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:01-03:00",
          "created_at": "2026-03-04T16:54:01-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-91/coyote-202/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-91/coyote-202/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-91/coyote-202/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-91/coyote-202/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/mark_as_urgent

####  Mark a task as urgent 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/mark_as_urgent

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/mark_as_urgent](https://runrun.it/api/v1.0/tasks/1/mark_as_urgent)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/mark_a_task_as_urgent)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3926

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 83",
      "is_working_on": false,
      "user_id": "coyote-218",
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
      "created_at": "2026-03-04T16:54:07-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 99",
      "client_id": 1,
      "project_name": "Test project 100",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 111",
      "user_name": "Coyote 218",
      "guest_name": null,
      "board_name": "Board 121",
      "board_stage_name": "Board Stage 359",
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
      "is_urgent": true,
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
      "last_activity_at": "2026-03-04T16:54:07-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-217",
      "task_state_id": 1,
      "responsible_name": "Coyote 217",
      "task_state_name": "Board Stage 359",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 359",
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
          "assignee_id": "coyote-217",
          "team_id": null,
          "assignee_name": "Coyote 217",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:07-03:00",
          "created_at": "2026-03-04T16:54:07-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-98/coyote-217/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-98/coyote-217/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-98/coyote-217/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-98/coyote-217/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/unmark_as_urgent

####  Unmark a task as urgent 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/unmark_as_urgent

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/unmark_as_urgent](https://runrun.it/api/v1.0/tasks/1/unmark_as_urgent)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/unmark_a_task_as_urgent)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3928

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 84",
      "is_working_on": false,
      "user_id": "coyote-220",
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
      "created_at": "2026-03-04T16:54:08-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 100",
      "client_id": 1,
      "project_name": "Test project 101",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 112",
      "user_name": "Coyote 220",
      "guest_name": null,
      "board_name": "Board 122",
      "board_stage_name": "Board Stage 362",
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
      "last_activity_at": "2026-03-04T16:54:08-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-219",
      "task_state_id": 1,
      "responsible_name": "Coyote 219",
      "task_state_name": "Board Stage 362",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 362",
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
          "assignee_id": "coyote-219",
          "team_id": null,
          "assignee_name": "Coyote 219",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:08-03:00",
          "created_at": "2026-03-04T16:54:08-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-99/coyote-219/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-99/coyote-219/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-99/coyote-219/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-99/coyote-219/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/create_assignments

####  Create a task assignment for another user 

Create a task assignment based on a task.

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
assignments  | Assignments |   
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/create_assignments

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "assignments": [
        {
          "assignee_id": "coyote-222",
          "team_id": 1
        }
      ]
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/create_assignments](https://runrun.it/api/v1.0/tasks/1/create_assignments)" -d '{"assignments":[{"assignee_id":"coyote-222","team_id":1}]}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/create_a_task_assignment_for_another_user)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4803

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 85",
      "is_working_on": false,
      "user_id": "coyote-224",
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
      "queue_position": null,
      "created_at": "2026-03-04T16:54:09-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 7200,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 101",
      "client_id": 1,
      "project_name": "Test project 102",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 113",
      "user_name": "Coyote 224",
      "guest_name": null,
      "board_name": "Board 123",
      "board_stage_name": "Board Stage 365",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": null,
      "time_worked": 0,
      "time_pending": 7200,
      "time_total": 7200,
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
      "last_activity_at": "2026-03-04T16:54:09-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": null,
      "uid": 1,
      "responsible_id": "coyote-221",
      "task_state_id": 1,
      "responsible_name": "Coyote 221",
      "task_state_name": "Board Stage 365",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 365",
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
          "assignee_id": "coyote-221",
          "team_id": null,
          "assignee_name": "Coyote 221",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:09-03:00",
          "created_at": "2026-03-04T16:54:09-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-221/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-221/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-221/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-221/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        },
        {
          "id": "92a6f5b72",
          "task_id": 1,
          "assignee_id": "coyote-222",
          "team_id": 1,
          "assignee_name": "Coyote 222",
          "team_name": "Test team 15",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:09-03:00",
          "created_at": "2026-03-04T16:54:09-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-222/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-222/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-222/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-100/coyote-222/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/move_to_top

####  Move a task to top 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/2/move_to_top

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/2/move_to_top](https://runrun.it/api/v1.0/tasks/2/move_to_top)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/move_a_task_to_top)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3930

#### Body
    
    
    {
      "id": 2,
      "title": "Bla 89",
      "is_working_on": false,
      "user_id": "coyote-235",
      "guest_id": null,
      "type_id": 2,
      "project_id": 2,
      "team_id": null,
      "board_id": 3,
      "board_stage_id": 4,
      "board_stage_position": 35184372088832,
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
      "created_at": "2026-03-04T16:54:14-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 105",
      "client_id": 2,
      "project_name": "Test project 106",
      "project_group_name": "No group",
      "project_group_id": 2,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 2,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 117",
      "user_name": "Coyote 235",
      "guest_name": null,
      "board_name": "Board 128",
      "board_stage_name": "Board Stage 377",
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
      "last_activity_at": "2026-03-04T16:54:14-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 2,
      "uid": 2,
      "responsible_id": "coyote-233",
      "task_state_id": 4,
      "responsible_name": "Coyote 233",
      "task_state_name": "Board Stage 377",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 4,
      "task_status_name": "Board Stage 377",
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
          "assignee_id": "coyote-233",
          "team_id": null,
          "assignee_name": "Coyote 233",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:14-03:00",
          "created_at": "2026-03-04T16:54:14-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-106/coyote-233/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-106/coyote-233/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-106/coyote-233/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-106/coyote-233/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/clone

####  Clone a task 

## Parameters

Name | Description  
---|---  
from_task_id  | From task  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/clone

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "from_task_id": 1
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/clone](https://runrun.it/api/v1.0/tasks/clone)" -d '{"from_task_id":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/clone_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json
    Content-Length: 0

__POST

#### /api/v1.0/tasks/:id/move_to_next_stage

####  Move a task to next stage 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/move_to_next_stage

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/move_to_next_stage](https://runrun.it/api/v1.0/tasks/1/move_to_next_stage)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/move_a_task_to_next_stage)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3983

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 93",
      "is_working_on": false,
      "user_id": "coyote-243",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 2,
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
      "estimate_updated": true,
      "estimated_at": "2026-03-04T16:54:18-03:00",
      "queue_position": 1,
      "created_at": "2026-03-04T16:54:18-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 109",
      "client_id": 1,
      "project_name": "Test project 110",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 121",
      "user_name": "Coyote 243",
      "guest_name": null,
      "board_name": "Board 134",
      "board_stage_name": "Board Stage 400",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "queued",
      "overdue": "on_schedule",
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
      "last_activity_at": "2026-03-04T16:54:18-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 1,
      "uid": 1,
      "responsible_id": "coyote-242",
      "task_state_id": 2,
      "responsible_name": "Coyote 242",
      "task_state_name": "Board Stage 400",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": "2026-03-04T16:54:18-03:00",
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 2,
      "task_status_name": "Board Stage 400",
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
          "assignee_id": "coyote-242",
          "team_id": null,
          "assignee_name": "Coyote 242",
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
          "automatic_time_worked_updated_at": "2026-03-04T16:54:18-03:00",
          "created_at": "2026-03-04T16:54:18-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-110/coyote-242/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-110/coyote-242/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-110/coyote-242/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-110/coyote-242/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/move

####  Move a task to another stage 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
board_stage_id required | The id of the stage to move the task to | integer  
board_stage_position  | Optional position within the stage | integer  
reopen_or_pause_descendant_tasks  | Set to true to force reopen/pause descendant tasks if needed |   
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/1/move

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "board_stage_id": 2
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/1/move](https://runrun.it/api/v1.0/tasks/1/move)" -d '{"board_stage_id":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/move_a_task_to_another_stage)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 4019

#### Body
    
    
    {
      "id": 1,
      "title": "Bla 94",
      "is_working_on": false,
      "user_id": "coyote-245",
      "guest_id": null,
      "type_id": 1,
      "project_id": 1,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 2,
      "board_stage_position": null,
      "subtask_parent_position": null,
      "desired_date": null,
      "desired_date_with_time": null,
      "estimated_start_date": null,
      "estimated_delivery_date": null,
      "gantt_bar_start_date": null,
      "gantt_bar_end_date": null,
      "close_date": "2026-03-04T16:54:19-03:00",
      "was_reopened": false,
      "is_closed": true,
      "is_assigned": true,
      "on_going": false,
      "estimate_updated": true,
      "estimated_at": null,
      "queue_position": null,
      "created_at": "2026-03-04T16:54:19-03:00",
      "start_date": "2026-03-04T16:54:19-03:00",
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 110",
      "client_id": 1,
      "project_name": "Test project 111",
      "project_group_name": "No group",
      "project_group_id": 1,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 1,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 122",
      "user_name": "Coyote 245",
      "guest_name": null,
      "board_name": "Board 135",
      "board_stage_name": "Board Stage 403",
      "board_stage_description": null,
      "team_name": null,
      "type_color": "FFFFFF",
      "state": "closed",
      "overdue": "on_schedule",
      "time_worked": 0,
      "time_pending": 0,
      "time_total": 0,
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
      "board_remaining_time": 0,
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
      "last_activity_at": "2026-03-04T16:54:19-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": null,
      "uid": 1,
      "responsible_id": "coyote-244",
      "task_state_id": 2,
      "responsible_name": "Coyote 244",
      "task_state_name": "Board Stage 403",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": true,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 2,
      "task_status_name": "Board Stage 403",
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
          "assignee_id": "coyote-244",
          "team_id": null,
          "assignee_name": "Coyote 244",
          "team_name": null,
          "queue_position": null,
          "priority": null,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": true,
          "start_date": "2026-03-04T16:54:19-03:00",
          "close_date": "2026-03-04T16:54:19-03:00",
          "is_closed": true,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:54:19-03:00",
          "created_at": "2026-03-04T16:54:19-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-111/coyote-244/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-111/coyote-244/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-111/coyote-244/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-111/coyote-244/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__POST

#### /api/v1.0/tasks/:id/move

####  Move with position 

## Parameters

Name | Description | type  
---|---|---  
id required | Task ID | integer  
board_stage_id required | The id of the stage to move the task to | integer  
board_stage_position  | Optional position within the stage | integer  
reopen_or_pause_descendant_tasks  | Set to true to force reopen/pause descendant tasks if needed |   
  
## Request

#### Route
    
    
    POST /api/v1.0/tasks/3/move

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "board_stage_id": 1,
      "board_stage_position": 1
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/tasks/3/move](https://runrun.it/api/v1.0/tasks/3/move)" -d '{"board_stage_id":1,"board_stage_position":1}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/move_with_position)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3917

#### Body
    
    
    {
      "id": 3,
      "title": "Bla 97",
      "is_working_on": false,
      "user_id": "coyote-249",
      "guest_id": null,
      "type_id": 3,
      "project_id": 3,
      "team_id": null,
      "board_id": 1,
      "board_stage_id": 1,
      "board_stage_position": 1,
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
      "queue_position": 3,
      "created_at": "2026-03-04T16:54:21-03:00",
      "start_date": null,
      "desired_start_date": null,
      "current_estimate_seconds": 3600,
      "evaluation_status": null,
      "attachments_count": 0,
      "tags_data": [
    
      ],
      "client_name": "Test client 113",
      "client_id": 3,
      "project_name": "Test project 114",
      "project_group_name": "No group",
      "project_group_id": 3,
      "project_group_is_default": true,
      "project_sub_group_name": "No subgroup",
      "project_sub_group_id": 3,
      "project_sub_group_is_default": true,
      "type_name": "TaskType 125",
      "user_name": "Coyote 249",
      "guest_name": null,
      "board_name": "Board 136",
      "board_stage_name": "Board Stage 404",
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
      "last_activity_at": "2026-03-04T16:54:21-03:00",
      "automation_id": null,
      "automation_name": null,
      "has_emails": false,
      "priority": 3,
      "uid": 3,
      "responsible_id": "coyote-246",
      "task_state_id": 1,
      "responsible_name": "Coyote 246",
      "task_state_name": "Board Stage 404",
      "activities_7_days_ago": 0,
      "repetition_rule_id": null,
      "current_worked_time": 0,
      "estimated_delivery_date_updated": false,
      "last_estimated_at": null,
      "task_tags": [
    
      ],
      "approved": null,
      "task_status_id": 1,
      "task_status_name": "Board Stage 404",
      "tag_list": "",
      "tags": [
    
      ],
      "scheduled_start_time": null,
      "is_scheduled": false,
      "current_evaluator_id": null,
      "assignments": [
        {
          "id": "dbfa7092b",
          "task_id": 3,
          "assignee_id": "coyote-246",
          "team_id": null,
          "assignee_name": "Coyote 246",
          "team_name": null,
          "queue_position": 3,
          "priority": 3,
          "current_estimate_seconds": 3600,
          "time_worked": 0,
          "estimated_start_date": null,
          "estimate_updated": false,
          "start_date": null,
          "close_date": null,
          "is_closed": false,
          "reestimate_count": 0,
          "is_working_on": false,
          "automatic_time_worked_updated_at": "2026-03-04T16:54:21-03:00",
          "created_at": "2026-03-04T16:54:21-03:00",
          "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-112/coyote-246/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-112/coyote-246/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
          "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-112/coyote-246/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-112/coyote-246/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
          "time_worked_not_persisted": 0
        }
      ],
      "follower_ids": [
    
      ]
    }

__GET

#### /api/v1.0/tasks/:id/form_answers

####  Get answers to the form which created the task 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/form_answers

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1/form_answers](https://runrun.it/api/v1.0/tasks/1/form_answers)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/get_answers_to_the_form_which_created_the_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 118

#### Body
    
    
    {
      "form_answer": "<b>pergunta teste</b><br/>resposta teste<br/><br/>"
    }

__GET

#### /api/v1.0/tasks/:id/fields

####  List fields from task's board 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/fields

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1/fields](https://runrun.it/api/v1.0/tasks/1/fields)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/tasks/list_fields_from_task's_board)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 376

#### Body
    
    
    [
      {
        "id": "custom_1",
        "label": "Nickname",
        "field_type": "short_text",
        "details": {
        },
        "description": null,
        "category": "custom",
        "boards_count": 1,
        "board_ids": [
          1
        ],
        "user_name": null,
        "last_editor_name": null,
        "created_at": "2026-03-04T16:54:32-03:00",
        "edited_at": null,
        "is_editable": false,
        "is_everyone_allowed_to_add_to_board": false,
        "integrators": [
    
        ],
        "status": "active",
        "position": null,
        "board_id": 1
      }
    ]
