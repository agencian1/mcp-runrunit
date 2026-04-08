**Manage Webhooks**

On the `API and Webhooks` page, you can manage all webhooks on your account. To **create** or **update** a webhook, click on the `+` button, then select the event you want to listen to and enter the URL that will receive the HTTP POST payload. After creating a webhook, click `Save` to persist your changes.

![Webhook section](/api_docs_images/05.png)

To **delete** a webhook, click on the trash icon button and then "Delete".

**Supported events**

  * `task:create` → Triggered when a task is created.
  * `task:update` → Triggered when the following task attributes are updated: title, tags, desired delivery date, desired start date, points, custom fields.
  * `task:destroy` → Triggered when a task is deleted.
  * `task:deliver` → Triggered when a task is delivered, that is, moved from an open stage to a closed stage.
  * `task:reopen` → Triggered when a task is reopened, that is, when it is moved from a closed step to an open step.
  * `task:move` → Triggered when a task is moved between stages without changing its state (open/closed).
  * `task:add_manual_work_period` → Triggered when a user adds hours manually to a task.
  * `task:remove_manual_work_period` → Triggered when a user removes hours manually to a task.
  * `task:change_time_worked` → Triggered when the total time worked on a task changes.
  * `task:mark_as_urgent` → Triggered when a task is marked as urgent.
  * `task:unmark_as_urgent` → Triggered when a task is unmarked as urgent.
  * `task:desired_start_date_upcoming` → Triggered when task desired start date is upcoming.
  * `task_assignment:play` → Triggered when an assignee clicks on the play button.
  * `task_assignment:pause` → Triggered when an assignee clicks on the pause button.
  * `task:change_evaluation_status` → Triggered when the task evaluation status changes.
  * `task:evaluations:create` → Triggered when new evaluation requests are created.
  * `task:evaluations:reset` → Triggered when existing evaluation requests are requested again.
  * `task:evaluations:destroy` → Triggered when existing evaluation requests are deleted.
  * `task:evaluation:approve` → Triggered when an evaluation request is approved.
  * `task:evaluation:reject` → Triggered when an evaluation request is rejected.
  * `task:evaluation:reset` → Triggered when an evaluation request is reseted.
  * `task:assignments:create` → Triggered when new assignees are added to a task.
  * `task:description:update` → Triggered when task description is updated.
  * `task:comment:create` → Triggered when a comment on a task is created by a user.
  * `task:comment:update` → Triggered when a comment on a task is edited by a user.
  * `project:create` → Triggered when a project is created.
  * `project:change_time_worked` → Triggered when the total time worked on a project changes.
  * `project:comment:create` → Triggered when a comment on a project is created by a user.
  * `project:comment:update` → Triggered when a comment on a project is edited by a user.
  * `client:create` → Triggered when a client is created.
  * `team:comment:create` → Triggered when a comment on a team bulletin is created by a user.
  * `team:comment:update` → Triggered when a comment on a team bulletin is edited by a user.
  * `enterprise:comment:create` → Triggered when a comment on the enterprise bulletin is created by a user.
  * `enterprise:comment:update` → Triggered when a comment on the enterprise bulletin is edited by a user.
  * `document:comment:create` → Triggered when a comment on an attachment is created by a user.
  * `document:comment:update` → Triggered when a comment on an attachment is edited by a user.



**Response**

Here are some examples of the HTTP POST payload:

  * `task:create`


    
    
        {
          "event": "task:create",
          "happened_at": "2024-10-08 11:15:32 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 0,
              "evaluation_status": nil,
              "assignees": [],
              "assignments": [],
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:update`  
      {
        "event": "task:update",
        "happened_at": "2024-10-08 11:21:34 -0300",
        "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
        "data": {
          "task": {
            "id": 1696,
            "title": "task 1",
            "board": { "id": 25 },
            "board_stage": { "id": 254 },
            "project": nil,
            "time_worked": 0,
            "evaluation_status": nil,
            "assignees": [],
            "assignments": [],
            "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
            "points": nil,
            "tags_data": [],
            "desired_start_date": nil,
            "desired_date": nil,
            "is_urgent": false,
            "custom_fields": {},
            "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
          }
        }
      }
  * `task:destroy`
        {
          "event": "task:destroy",
          "happened_at": "2024-10-08 11:25:24 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 0,
              "evaluation_status": nil,
              "assignees": [],
              "assignments": [],
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:deliver`
        {
          "event": "task:deliver",
          "happened_at": "2024-10-08 11:28:46 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:reopen`
        {
          "event": "task:reopen",
          "happened_at": "2024-10-08 13:52:52 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:move`
        {
          "event": "task:move",
          "happened_at": "2024-10-08 14:06:40 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:add_manual_work_period`
        {
          "event": "task:add_manual_work_period",
          "happened_at": "2024-10-08 14:09:20 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 249903,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:remove_manual_work_period`
        {
          "event": "task:remove_manual_work_period",
          "happened_at": "2024-10-08 14:10:43 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:change_time_worked`
        {
          "event": "task:change_time_worked",
          "happened_at": "2024-10-08 14:23:44 -0300",
          "performer": nil,
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": nil,
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {
                  "assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
                },
                {
                  "assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:mark_as_urgent`
        {
          "event": "task:mark_as_urgent",
          "happened_at": "2024-10-08 14:07:40 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": true,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:unmark_as_urgent`    
        {
          "event": "task:unmark_as_urgent",
          "happened_at": "2024-10-08 14:08:23 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": nil,
              "desired_date": nil,
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:desired_start_date_upcoming`
        {
          "event": "task:desired_start_date_upcoming",
          "happened_at": "2024-10-08 14:15:36 -0300",
          "performer": nil,
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 246303,
              "evaluation_status": nil,
              "assignees": [
                { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
              ],
              "assignments": [
                {
                  "assignee": { "id": "petey-cruiser", "email": "[petey.cruiser@runrun.it](mailto:petey.cruiser@runrun.it)" }
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task_assignment:play`
        {
          "event": "task_assignment:play",
          "happened_at": "2024-10-08 14:57:35 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {
                  "assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
                },
                {
                  "assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task_assignment:pause`
        {
          "event": "task_assignment:pause",
          "happened_at": "2024-10-08 14:58:12 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 197,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {
                  "assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
                },
                {
                  "assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:change_evaluation_status`
        {
          "event": "task:change_evaluation_status",
          "happened_at": "2024-10-08 14:30:52 -0300",
          "performer": nil,
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "approved",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {
                  "assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
                },
                {
                  "assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:evaluations:create`
        {
          "event": "task:evaluations:create",
          "happened_at": "2024-10-08 14:25:03 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {
                  "assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
                },
                {
                  "assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                }
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            },
            "evaluations": [
              {
                "state": "pending",
                "evaluator": {"id": "antonio-carlos-soares", "email": "[acsoares@runrun.it](mailto:acsoares@runrun.it)"}
              }
            ]
          }
        }
  * `task:evaluations:reset`
        {
          "event": "task:evaluations:reset",
          "happened_at": "2024-10-08 14:29:21 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)"
                },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}],
              "assignments":
                [{"assignee":
                  { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee":
                  {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"},
            "evaluations":
              [{"state": "pending",
                "evaluator":
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }}]}}
  * `task:evaluations:destroy`
        {
          "event": "task:evaluations:destroy",
          "happened_at": "2024-10-08 14:26:45 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": nil,
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"},
            "evaluations": [
              {
                "state": "pending",
                "evaluator": {"id": "antonio-carlos-soares", "email": "[acsoares@runrun.it](mailto:acsoares@runrun.it)"}
              }
            ]
          }
        }
  * `task:evaluation:approve`    
        {
          "event": "task:evaluation:approve",
          "happened_at": "2024-10-08 14:28:01 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "evaluation": {
              "state": "approved",
              "evaluator": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
            },
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "approved",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:evaluation:reject`
        {
          "event": "task:evaluation:reject",
          "happened_at": "2024-10-08 14:43:03 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "evaluation": {
              "state": "rejected",
              "evaluator": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
            },
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "rejected",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:evaluation:reset`
        {
          "event": "task:evaluation:reset",
          "happened_at": "2024-10-08 14:55:47 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "evaluation": {
              "state": "pending",
              "evaluator": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }
            },
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
            }
          }
        }
  * `task:assignments:create`
        {
          "event": "task:assignments:create",
          "happened_at": "2024-10-08 14:45:54 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"},
            "assignments": [
              {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
            ]
          }
        }
  * `task:description:update`
        {
          "event": "task:description:update",
          "happened_at": "2024-10-08 14:49:06 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "task": {
              "id": 1696,
              "title": "task 1",
              "board": { "id": 25 },
              "board_stage": { "id": 254 },
              "project": nil,
              "time_worked": 158,
              "evaluation_status": "pending",
              "assignees": [
                { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
              ],
              "assignments": [
                {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
              ],
              "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
              "points": nil,
              "tags_data": [],
              "desired_start_date": "2024-10-08 15:00:00 -0300",
              "desired_date": "2024-10-08 23:59:00 -0300",
              "is_urgent": false,
              "custom_fields": {},
              "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"},
            "description": {"description": '\<p>description\</p>'}
          }
        }
  * `task:comment:create`
        {
          "event": "task:comment:create",
          "happened_at": "2024-10-08 14:50:39 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 569252855,
              "commentable_type": "Task",
              "commentable": {
                "id": 1696,
                "title": "task 1",
                "board": { "id": 25 },
                "board_stage": { "id": 254 },
                "project": nil,
                "time_worked": 158,
                "evaluation_status": "pending",
                "assignees": [
                  { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                  {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                ],
                "assignments": [
                  {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                  {"assignee": {"id": "ned-stark","email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
                ],
                "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
                "points": nil,
                "tags_data": [],
                "desired_start_date": "2024-10-08 15:00:00 -0300",
                "desired_date": "2024-10-08 23:59:00 -0300",
                "is_urgent": false,
                "custom_fields": {},
                "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
              },
              "text": "new comment",
              "channel_name": nil,
              "created_at": "2024-10-08 14:50:34 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `task:comment:update`
        {
          "event": "task:comment:update",
          "happened_at": "2024-10-08 14:51:38 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 569252855,
              "commentable_type": "Task",
              "commentable": {
                "id": 1696,
                "title": "task 1",
                "board": { "id": 25 },
                "board_stage": { "id": 254 },
                "project": nil,
                "time_worked": 158,
                "evaluation_status": "pending",
                "assignees": [
                  { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
                  {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}
                ],
                "assignments": [
                  {"assignee": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" }},
                  {"assignee": {"id": "ned-stark", "email": "[ned.stark@runrun.it](mailto:ned.stark@runrun.it)"}}
                ],
                "user": { "id": "anna-mull", "email": "[anna.mull@runrun.it](mailto:anna.mull@runrun.it)" },
                "points": nil,
                "tags_data": [],
                "desired_start_date": "2024-10-08 15:00:00 -0300",
                "desired_date": "2024-10-08 23:59:00 -0300",
                "is_urgent": false,
                "custom_fields": {},
                "url": "[http://localhost:3000/pt-BR/tasks/1696](http://localhost:3000/pt-BR/tasks/1696)"
              },
              "text": "new comment edited",
              "channel_name": nil,
              "created_at": "2024-10-08 14:50:34 -0300",
              "edited_at": "2024-10-08 14:51:34 -0300",
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `project:create`
        {
          "event": "project:create",
          "happened_at": "2024-10-09 08:51:58 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "project": {
              "id": 985,
              "project_sub_group": { "id": 3846 },
              "project_group": { "id": 6528 },
              "time_worked": 0,
              "client": { "id": 5849 },
              "url": "[http://localhost:3000/pt-BR/company/projects/985](http://localhost:3000/pt-BR/company/projects/985)"
            }
          }
        }
  * `project:change_time_worked`    
        {
          "event": "project:change_time_worked",
          "happened_at": "2024-10-09 08:56:03 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "project": {
              "id": 985,
              "project_sub_group": { "id": 3846 },
              "project_group": { "id": 6528 },
              "time_worked": 0,
              "client": { "id": 5849 },
              "url": "[http://localhost:3000/pt-BR/company/projects/985](http://localhost:3000/pt-BR/company/projects/985)"
            }
          }
        }
  * `project:comment:create`
        {
          "event": "project:comment:create",
          "happened_at": "2024-10-09 08:53:04 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 8548,
              "commentable_type": "Project",
              "commentable": {
                "id": 985,
                "project_sub_group": { "id": 3846 },
                "project_group": { "id": 6528 },
                "time_worked": 0,
                "client": { "id": 5849 },
                "url": "[http://localhost:3000/pt-BR/company/projects/985](http://localhost:3000/pt-BR/company/projects/985)"
              },
              "text": "New comment",
              "channel_name": nil,
              "created_at": "2024-10-09 08:53:04 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `project:comment:update`
        {
          "event": "project:comment:update",
          "happened_at": "2024-10-09 08:53:54 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 8548,
              "commentable_type": "Project",
              "commentable": {
                "id": 985,
                "project_sub_group": { "id": 3846 },
                "project_group": { "id": 6528 },
                "time_worked": 0,
                "client": { "id": 5849 },
                "url": "[http://localhost:3000/pt-BR/company/projects/985](http://localhost:3000/pt-BR/company/projects/985)"
              },
              "text": "New comment edited.",
              "channel_name": nil,
              "created_at": "2024-10-09 08:53:04 -0300",
              "edited_at": "2024-10-09 08:53:54 -0300",
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `client:create`
        {
          "event": "client:create",
          "happened_at": "2024-10-09 08:50:38 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "client": {
              "id": 5849,
              "url": "[http://localhost:3000/pt-BR/company/clients/5849](http://localhost:3000/pt-BR/company/clients/5849)"
            }
          }
        }
  * `team:comment:create`
        {
          "event": "team:comment:create",
          "happened_at": "2024-10-09 08:57:28 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 3655,
              "commentable_type": "Team",
              "commentable": { "id": 254, "name": "Team name" },
              "text": "New comment",
              "channel_name": nil,
              "created_at": "2024-10-09 08:57:26 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `team:comment:update`
        {
          "event": "team:comment:update",
          "happened_at": "2024-10-09 08:58:42 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 3655,
              "commentable_type": "Team",
              "commentable": { "id": 254, "name": "Team name" },
              "text": "New comment edited",
              "channel_name": nil,
              "created_at": "2024-10-09 08:57:26 -0300",
              "edited_at": "2024-10-09 08:58:40 -0300",
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `enterprise:comment:create`
        {
          "event": "enterprise:comment:create",
          "happened_at": "2024-10-09 09:00:55 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 25478,
              "commentable_type": "Enterprise",
              "commentable": {"id": "runrun-it", "name": "Runrun.it"},
              "text": "New Comment",
              "channel_name": nil,
              "created_at": "2024-10-09 08:59:19 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `enterprise:comment:update`
        {
          "event": "enterprise:comment:update",
          "happened_at": "2024-10-09 09:03:45 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 25478,
              "commentable_type": "Enterprise",
              "commentable": {"id": "runrun-it", "name": "Runrun.it"},
              "text": "New Comment edited",
              "channel_name": nil,
              "created_at": "2024-10-09 08:59:19 -0300",
              "edited_at": "2024-10-09 09:02:15 -0300",
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `document:comment:create`
        {
          "event": "document:comment:create",
          "happened_at": "2024-10-09 09:06:23 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 25415,
              "commentable_type": "Document",
              "commentable": {"id": 35155, "file_name": "Document.pdf"},
              "text": "Comment text",
              "channel_name": "guest",
              "created_at": "2024-10-09 09:06:20 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
  * `document:comment:update`
        {
          "event": "document:comment:update",
          "happened_at": "2024-10-09 09:09:03 -0300",
          "performer": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
          "data": {
            "comment": {
              "id": 25415,
              "commentable_type": "Document",
              "commentable": {"id": 35155, "file_name": "Document.pdf"},
              "text": "Comment text",
              "channel_name": "guest",
              "created_at": "2024-10-09 09:06:20 -0300",
              "edited_at": nil,
              "user": { "id": "john-snow", "email": "[john.snow@runrun.it](mailto:john.snow@runrun.it)" },
              "guest": nil,
              "mentions": {
                "users": [],
                "tasks": []
              }
            }
          }
        }
    