
__GET
#### /api/v1.0/users

####  List all Users 

List all enterprise users based on the priviligies of the user_token owner.

Permission | JSON attribute | Response  
---|---|---  
Flagged as Administrator on Runrun.it | `is_master: true` | return a list of all users  
Not flagged as Administrator on Runrun.it | `is_master: false` | return a list of teammates  
  
## Request

#### Route
    GET /api/v1.0/users

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/users](https://runrun.it/api/v1.0/users)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/users/list_all_users)

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
    Content-Length: 5328

#### Body
    [
      {
        "id": "coyote-164",
        "name": "Coyote 164",
        "email": "coyote190@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-164/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-164/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-164/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-164/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
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
        "created_at": "2026-03-04T16:54:12-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "a4a7157335b0c804d803e09b399378b6",
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
      },
      {
        "id": "coyote-163",
        "name": "Coyote 163",
        "email": "coyote189@acme.foo",
        "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-163/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-163/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-163/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-75/coyote-163/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
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
        "created_at": "2026-03-04T16:54:12-03:00",
        "in_company_since": null,
        "is_certified": false,
        "is_certified_expert": false,
        "language": "en-US",
        "alt_id": "bcdc3b1489ad8167107f5a5be3a00ffc",
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

__GET

#### /api/v1.0/users/:user_id

####  Get a user by id 

Get a user by id

## Parameters

Name | Description | type  
---|---|---  
user_id required | User's ID | string  
  
## Request

#### Route
    GET /api/v1.0/users/coyote-189

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/users/coyote-189](https://runrun.it/api/v1.0/users/coyote-189)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/users/get_a_user_by_id)

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
    Content-Length: 2664

#### Body
    {
      "id": "coyote-189",
      "name": "Coyote 189",
      "email": "coyote215@acme.foo",
      "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-189/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-189/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-189/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-82/coyote-189/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
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
      "created_at": "2026-03-04T16:54:21-03:00",
      "in_company_since": null,
      "is_certified": false,
      "is_certified_expert": false,
      "language": "en-US",
      "alt_id": "2d6808bbd93c4ae8f13477e269087383",
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

__POST

#### /api/v1.0/users

####  Create a user 

Create a user on an existing account. Upon creation a temporary password will be created and sent to the new user by email. Any locale settings (language, time zone, etc.) will be the same as the user issuing the API call. If the account has reached the maximum number of users a 403 Forbidden will be returned. The `make_my_partner` and `make_everybody_mutual_partners` flags are a convenience for when you may wish to assign tasks to the new user immediately (the same can be accomplished with the Partners API calls).

## Parameters

Name | Description | type  
---|---|---  
user[name] required | User's full name | string  
user[email] required | User's email | string  
make_my_partner  | Flag to make the new user a partner of the creating user | boolean  
make_everybody_mutual_partners  | Flag to make the new user a mutual partner of everybody in enterprise. If not set, defaults to enterprise's configuration | boolean  
  
## Request

#### Route
    POST /api/v1.0/users

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body    
    {
      "user": {
        "name": "Jon Smith",
        "email": "[john@smith.com](mailto:john@smith.com)",
        "source": "my_source_value"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/users](https://runrun.it/api/v1.0/users)" -d '{"user":{"name":"Jon Smith","email":"[john@smith.com](mailto:john@smith.com)","source":"my_source_value"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/users/create_a_user)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2654

#### Body
    {
      "id": "jon-smith",
      "name": "Jon Smith",
      "email": "[john@smith.com](mailto:john@smith.com)",
      "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/jon-smith/3e62ad48a0b89b4fa41af9fcd348c330mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/jon-smith/3e62ad48a0b89b4fa41af9fcd348c330mini.png)",
      "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/jon-smith/3e62ad48a0b89b4fa41af9fcd348c330regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-83/jon-smith/3e62ad48a0b89b4fa41af9fcd348c330regular.png)",
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
      "created_at": "2026-03-04T16:54:22-03:00",
      "in_company_since": null,
      "is_certified": false,
      "is_certified_expert": false,
      "language": "en-GB",
      "alt_id": "31daa0fb8636cf9d804aa797b0253fcc",
      "oid": "92a6f5b72",
      "budget_manager": false,
      "shifts": [
        {
          "weekday": 0,
          "work_day": false,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 0
        },
        {
          "weekday": 1,
          "work_day": true,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 27000
        },
        {
          "weekday": 2,
          "work_day": true,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 27000
        },
        {
          "weekday": 3,
          "work_day": true,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 27000
        },
        {
          "weekday": 4,
          "work_day": true,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 27000
        },
        {
          "weekday": 5,
          "work_day": true,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 27000
        },
        {
          "weekday": 6,
          "work_day": false,
          "shift_start": "09:00:00",
          "lunch_start": "12:00:00",
          "lunch_end": "12:30:00",
          "shift_end": "17:00:00",
          "work_time": 0
        }
      ],
      "is_mensurable": true,
      "blocked_by_time_worked_at": null,
      "demanders_count": 2,
      "partners_count": 2,
      "has_all_users_as_partners": true,
      "has_all_users_as_demanders": true,
      "password_updated_at": null,
      "password_expired_at": null,
      "shift_work_time_per_week": 135000,
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

__PUT

#### /api/v1.0/users/:id

####  Update a user 

Update a user

## Parameters

Name | Description | type  
---|---|---  
user[id] required | User's ID | string  
  
## Request

#### Route
    PUT /api/v1.0/users/jon-smith

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "user": {
        "name": "Steve Jobs",
        "time_zone": "Asia/Brunei"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/users/jon-smith](https://runrun.it/api/v1.0/users/jon-smith)" -d '{"user":{"name":"Steve Jobs","time_zone":"Asia/Brunei"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/users/update_a_user)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2652

#### Body
    {
      "id": "jon-smith",
      "name": "Steve Jobs",
      "email": "coyote230@acme.foo",
      "avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-92/jon-smith/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-92/jon-smith/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "avatar_large_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-92/jon-smith/f5a97807846085bb7e64f0e93f5f8a97regular.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-92/jon-smith/f5a97807846085bb7e64f0e93f5f8a97regular.png)",
      "cost_hour": 0.0,
      "is_master": true,
      "is_manager": false,
      "is_auditor": false,
      "can_create_client_project_and_task_types": true,
      "can_create_boards": true,
      "is_blocked_on_mobile": false,
      "bypass_block_by_time_worked": true,
      "time_zone": "Asia/Brunei",
      "position": null,
      "on_vacation": false,
      "birthday": null,
      "phone": null,
      "gender": null,
      "marital_status": null,
      "created_at": "2018-01-01T00:00:00-02:00",
      "in_company_since": null,
      "is_certified": false,
      "is_certified_expert": false,
      "language": "en-US",
      "alt_id": "84e1eb0b656d2b68a2967ecee0e85323",
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
