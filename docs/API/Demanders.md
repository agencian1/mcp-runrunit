__GET
#### /api/v1.0/users/:user_id/demanders

####  List all demanders of user 

Return a list of all demanders of user. Demanders of a user are users that the user can assign tasks to.

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's ID | string  
  
## Request

#### Route
    
    
    GET /api/v1.0/users/coyote-749/demanders

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/users/coyote-749/demanders](https://runrun.it/api/v1.0/users/coyote-749/demanders)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/demanders/list_all_demanders_of_user)

#### Response Fields

Name | Description | type  
---|---|---  
id  | User's ID | string  
name  | User's full name | string  
email  | User's email | string  
avatar_url  | User's chosen profile photo | url  
avatar_large_url  | User's chosen profile photo | url  
cost_hour  | Current user cost per hour | decimal  
is_master  | User is an administrator | boolean  
is_manager  | User is a manager | boolean  
is_auditor  | User is an auditor | boolean  
can_create_client_project_and_task_types  | User has permission to create client, projects and task types | boolean  
can_create_boards  | User has permission to create boards | boolean  
is_blocked_on_mobile  | User has mobile apps access blocked | boolean  
bypass_block_by_time_worked  | User ignore the blocking rule for time worked | boolean  
time_zone  | IANA Time Zone Database zone name | string  
position  | Job position in company | string  
on_vacation  | User currently on vacation | boolean  
birthday  | User's birthday | date  
phone  | User phone | string  
gender  | User gender | string  
marital_status  | User marital status | string  
created_at  | User creation date | datetime  
in_company_since  | Joining date in company | date  
is_certified  | Whether the user has passed RR Starter certification | boolean  
is_certified_expert  | Whether the user has passed RR Expert certification | boolean  
language  | User preference language | string  
alt_id  | Constant size ID (internal use only) | string  
oid  | Constant size ID (internal use only) | string  
budget_manager  | Can edit project extra costs | boolean  
shifts  | User shifts | array  
is_mensurable  | Can process RR Ratings? | boolean  
blocked_by_time_worked_at  | When the user is blocked for being out of the acceptable worked time defined by the company | datetime  
demanders_count  | Demanders count | integer  
partners_count  | Partners count | integer  
has_all_users_as_partners  | True if user has all users as partners | boolean  
has_all_users_as_demanders  | True if has all users as demanders | boolean  
password_updated_at  | Last time user password was updated | datetime  
password_expired_at  | Time when the user password was considered expired | datetime  
shift_work_time_per_week  | Shift work time (in seconds) per week | integer  
admin_runrunit_roles  | Runrun.it admin roles (internal use only) | array  
team_ids  | Ids from teams that the user belongs to | array  
led_team_ids  | Ids from teams the user leads | array  
legacy_on_vacation  | Internal use only | boolean  
is_eligible_to_access_reports  | User can access enterprise reports | boolean  
is_eligible_to_whatsapp  | User can access whatsapp integration | boolean  
theme  | [Deprecated] Use preferences.theme | string  
task_list_background_image_url  | [Deprecated] Use preferences.task_list_background_image_url | string  
skip_time_adjust_on_task_assignment_deliver  | [Deprecated] Use preferences.skip_time_adjust_on_task_assignment_deliver | boolean  
time_tracking_mode  | [Deprecated] Use 'time_tracking_mode' from enterprise | string  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 5335

#### Body
    
    
    [
      {
        "id": "coyote-750",
        "name": "Coyote 750",
        "email": "coyote768@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-750/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-750/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-750/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-750/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
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
        "created_at": "2026-03-04T16:58:59-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "0792c645eb97ddd3086112ee0584a717",
        "oid": "dbfa7092b",
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
      },
      {
        "id": "coyote-749",
        "name": "Coyote 749",
        "email": "coyote767@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-749/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-749/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-749/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-471/coyote-749/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
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
        "created_at": "2026-03-04T16:58:58-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "7f250a9aea9b2bab2b572135515a8270",
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

#### /api/v1.0/users/:user_id/demanders

####  Adds a demander to a user 

Adds the user represented by `demander_id` as demander of the `user_id`

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's ID | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/users/coyote-752/demanders

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "demander_id": "coyote-754"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/users/coyote-752/demanders](https://runrun.it/api/v1.0/users/coyote-752/demanders)" -d '{"demander_id":"coyote-754"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/demanders/adds_a_demander_to_a_user)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json
    Content-Length: 0

__POST

#### /api/v1.0/users/:user_id/demanders/replace

####  Replace a user partners list 

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's ID | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/users/coyote-756/demanders/replace

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "ids": "coyote-758,coyote-759"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/users/coyote-756/demanders/replace](https://runrun.it/api/v1.0/users/coyote-756/demanders/replace)" -d '{"ids":"coyote-758,coyote-759"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/demanders/replace_a_user_partners_list)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json
    Content-Length: 0

__DELETE

#### /api/v1.0/users/:user_id/demanders/:id

####  Destroy a demander of a user 

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's ID | string  
  
## Request

#### Route
    
    
    DELETE /api/v1.0/users/coyote-761/demanders/coyote-762

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/users/coyote-761/demanders/coyote-762](https://runrun.it/api/v1.0/users/coyote-761/demanders/coyote-762)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/demanders/destroy_a_demander_of_a_user)

#### Status
    
    
    204

#### Headers