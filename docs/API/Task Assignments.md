__DELETE
#### /api/v1.0/tasks/:task_id/assignments/:id

####  Destroy a task assignment for another user 

Destroy a task assignment.

## Parameters

Name | Description | type | default  
---|---|---|---  
id required | ID of assignment | string |   
task_id required | ID of task | integer |   
destroy_worked_time  | Destroy worked time | boolean |   
  
## Request

#### Route
    DELETE /api/v1.0/tasks/1/assignments/92a6f5b72

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "destroy_worked_time": false
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/92a6f5b72](https://runrun.it/api/v1.0/tasks/1/assignments/92a6f5b72)" -d '{"destroy_worked_time":false}' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/destroy_a_task_assignment_for_another_user)

#### Status
    204

#### Headers


__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/play

####  Play a Task 

Indicate that a task is being worked on, if the responsible is currently working on a task it will be paused.

The task is eligible to be started if: 

  * it's not already being working on
  * it's not closed
  * it does not have any open prerequisite tasks
## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
task_id required | ID of task | integer  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/assignments/49537adb9/play

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/play](https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/play)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/play_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 881

#### Body
    {
      "id": "49537adb9",
      "task_id": 1,
      "assignee_id": "coyote-381",
      "team_id": null,
      "assignee_name": "Coyote 381",
      "team_name": null,
      "queue_position": 1,
      "priority": 1,
      "current_estimate_seconds": 3600,
      "time_worked": 0,
      "estimated_start_date": null,
      "estimate_updated": false,
      "start_date": "2026-03-04T16:56:21-03:00",
      "close_date": null,
      "is_closed": false,
      "reestimate_count": 0,
      "is_working_on": true,
      "automatic_time_worked_updated_at": "2026-03-04T16:56:21-03:00",
      "created_at": "2026-03-04T16:56:21-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-190/coyote-381/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-190/coyote-381/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-190/coyote-381/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-190/coyote-381/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }
__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/pause

####  Pause a task assignment 

Pause the work on a task.

The task is eligible to be paused if: 

  * it's currently being working on

## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
task_id required | ID of task | integer  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/assignments/49537adb9/pause

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/pause](https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/pause)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/pause_a_task_assignment)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 905

#### Body
    {
      "id": "49537adb9",
      "task_id": 1,
      "assignee_id": "coyote-384",
      "team_id": null,
      "assignee_name": "Coyote 384",
      "team_name": null,
      "queue_position": 1,
      "priority": 1,
      "current_estimate_seconds": 3600,
      "time_worked": 0,
      "estimated_start_date": "2026-03-04T16:56:23-03:00",
      "estimate_updated": false,
      "start_date": "2026-03-04T16:56:23-03:00",
      "close_date": null,
      "is_closed": false,
      "reestimate_count": 0,
      "is_working_on": false,
      "automatic_time_worked_updated_at": "2026-03-04T16:56:23-03:00",
      "created_at": "2026-03-04T16:56:23-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-192/coyote-384/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-192/coyote-384/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-192/coyote-384/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-192/coyote-384/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }

__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/deliver

####  Deliver a task assignment 

Deliver a task.

The task is eligible to be delivered if: 

  * it's not already delivered
  * it does not have any open prerequisite tasks

## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
task_id required | ID of task | integer  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/assignments/49537adb9/deliver

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/deliver](https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/deliver)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/deliver_a_task_assignment)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 909

#### Body
    {
      "id": "49537adb9",
      "task_id": 1,
      "assignee_id": "coyote-387",
      "team_id": null,
      "assignee_name": "Coyote 387",
      "team_name": null,
      "queue_position": null,
      "priority": null,
      "current_estimate_seconds": 3600,
      "time_worked": 0,
      "estimated_start_date": null,
      "estimate_updated": true,
      "start_date": "2026-03-04T16:56:24-03:00",
      "close_date": "2026-03-04T16:56:24-03:00",
      "is_closed": true,
      "reestimate_count": 0,
      "is_working_on": false,
      "automatic_time_worked_updated_at": "2026-03-04T16:56:24-03:00",
      "created_at": "2026-03-04T16:56:24-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-194/coyote-387/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-194/coyote-387/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-194/coyote-387/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-194/coyote-387/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }

__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/reopen

####  Reopen a Task 

Reopen a closed task.

IMPORTANT!!: If the task is prerequisite directly or indirectly in any task that has already been delivered or is under development, it is necessary to pause or reopen these tasks. You can set the parameter "reopen_or_pause_descendant_tasks" to automatically pause or reopen the necessary tasks. To complete this operation with success it's necessary that the current user is allowed to reopen and pause all these tasks.

The task is eligible to be reopened if: 

  * it's closed
  * it's not a prerequisite of working on or closed tasks

## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
task_id required | ID of task | integer  
reopen_or_pause_descendant_tasks  | Force pause/reopen all descendant tasks | boolean  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/assignments/49537adb9/reopen

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/reopen](https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/reopen)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/reopen_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 859

#### Body
    {
      "id": "49537adb9",
      "task_id": 1,
      "assignee_id": "coyote-394",
      "team_id": null,
      "assignee_name": "Coyote 394",
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
      "automatic_time_worked_updated_at": "2026-03-04T16:56:27-03:00",
      "created_at": "2026-03-04T16:56:27-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-198/coyote-394/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-198/coyote-394/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-198/coyote-394/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-198/coyote-394/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }

__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/reposition

####  Reposition a Task 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
queue_position required | The new queue position on assignee user's task list | integer  
  
## Request

#### Route    
    POST /api/v1.0/tasks/3/assignments/dbfa7092b/reposition

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "queue_position": 2
    }

#### 
    curl "[https://runrun.it/api/v1.0/tasks/3/assignments/dbfa7092b/reposition](https://runrun.it/api/v1.0/tasks/3/assignments/dbfa7092b/reposition)" -d '{"queue_position":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/reposition_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 859

#### Body
    {
      "id": "dbfa7092b",
      "task_id": 3,
      "assignee_id": "coyote-397",
      "team_id": null,
      "assignee_name": "Coyote 397",
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
      "automatic_time_worked_updated_at": "2026-03-04T16:56:28-03:00",
      "created_at": "2026-03-04T16:56:28-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-200/coyote-397/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-200/coyote-397/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-200/coyote-397/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-200/coyote-397/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }

__POST

#### /api/v1.0/tasks/:task_id/assignments/:id/reestimate

####  Reestimate a task assignment 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of assignment | string  
task_id required | ID of task | integer  
work_seconds required | Work seconds |   
  
## Request

#### Route
    POST /api/v1.0/tasks/1/assignments/49537adb9/reestimate

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "work_seconds": 118800
    }

#### cURL    
    curl "[https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/reestimate](https://runrun.it/api/v1.0/tasks/1/assignments/49537adb9/reestimate)" -d '{"work_seconds":118800}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/taskassignments/reestimate_a_task_assignment)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 861

#### Body
    {
      "id": "49537adb9",
      "task_id": 1,
      "assignee_id": "coyote-400",
      "team_id": null,
      "assignee_name": "Coyote 400",
      "team_name": null,
      "queue_position": 1,
      "priority": 1,
      "current_estimate_seconds": 118800,
      "time_worked": 0,
      "estimated_start_date": null,
      "estimate_updated": false,
      "start_date": null,
      "close_date": null,
      "is_closed": false,
      "reestimate_count": 1,
      "is_working_on": false,
      "automatic_time_worked_updated_at": "2026-03-04T16:56:30-03:00",
      "created_at": "2026-03-04T16:56:30-03:00",
      "assignee_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-202/coyote-400/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-202/coyote-400/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "assignee_avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-202/coyote-400/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-202/coyote-400/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "time_worked_not_persisted": 0
    }
