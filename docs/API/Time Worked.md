__GET
#### /api/v1.0/reports/time_worked

####  List all time worked grouped and filtered by parameters 

Returns a time worked list grouped by the provided `group_by` params, for example `group_by=project_id,project_group_id,project_subgroup_id,task_id,user_id,date`. More than one attribute can be used for grouping.

Providing a `client_id`, `project_id`, `project_group_id`, `project_subgroup_id`, `tag_list` or `type_id` will return a filtered list by the given parameter.

## Parameters

Name | Description | type | default  
---|---|---|---  
include_capacity  | Include capacity | boolean |   
include_untracked  | Include untracked | boolean |   
include_others  | Include others | boolean | true  
expand_others  | Expand others field to a non-aggregate | boolean |   
group_by  | Attributes to group by: date, client_id, project_group_id, project_id, project_sub_group_id, task_id, task_status_id, team_id, type_id, user_id | text |   
period_type  | Period type. Must be one of the following: last_seven_days, current_week, last_fifteen_days, last_thirty_days, current_month, last_ninety_days, current_quarter, last_one_year, custom_range | text | last_seven_days  
period_start  | Period start. Only used if period_type is 'custom_range' | date |   
period_end  | Period end. Only used if period_type is 'custom_range' | date |   
period_unit  | Period unit. Must be one of the following: day, week, month or year | text | day  
client_id  | IDs of clients, separated by comma | text |   
project_id  | IDs of projects, separated by comma | text |   
project_group_id  | ID of project group | text |   
project_subgroup_id  | ID of project subgroup | text |   
tag_list  | List of task tags, separated by comma | text |   
type_id  | IDs of task types, separated by comma | text |   
team_id  | IDs of teams, separated by comma | text |   
user_id  | IDs of users, separated by comma | text |   
  
## Request

#### Route
    GET /api/v1.0/reports/time_worked?include_capacity=true&include_untracked=true&group_by=date%2Cproject_id&project_id=1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Query Parameters
    include_capacity=true
    include_untracked=true
    group_by=date,project_id
    project_id=1

#### cURL    
    curl -g "[https://runrun.it/api/v1.0/reports/time_worked?include_capacity=true&include_untracked=true&group_by=date%2Cproject_id&project_id=1](https://runrun.it/api/v1.0/reports/time_worked?include_capacity=true&include_untracked=true&group_by=date%2Cproject_id&project_id=1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/time_worked/list_all_time_worked_grouped_and_filtered_by_parameters)

#### Response Fields

Name | Description | type  
---|---|---  
meta  | Represents the parameters used for building the response | Object  
result  | Time Worked filtered and/or grouped by the given parameters | Array of Objects  
other  | Represents all the *other* time worked not contained on the result | Array of Objects  
capacity  | Total time on users' workweek | Array of Objects  
untracked  | Time not tracked by the system | Array of Objects  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 894

#### Body
    {
      "meta": {
        "period_start": "2018-01-31",
        "period_end": "2018-02-06",
        "unit": "day"
      },
      "result": [
        {
          "date": "2018-02-05",
          "project_id": 1,
          "project_name": "Test project 592",
          "project_sub_group_id": 1,
          "project_sub_group_name": null,
          "project_group_id": 1,
          "project_group_name": null,
          "client_id": 1,
          "client_name": "Test client 613",
          "automatic_time": 0,
          "manual_time": 72000,
          "time": 72000
        }
      ],
      "others": [
        {
          "date": "2018-02-05",
          "time": 10800
        }
      ],
      "capacity": [
        {
          "date": "2018-01-31",
          "time": 28800
        },
        {
          "date": "2018-02-01",
          "time": 28800
        },
        {
          "date": "2018-02-02",
          "time": 28800
        },
        {
          "date": "2018-02-03",
          "time": 0
        },
        {
          "date": "2018-02-04",
          "time": 0
        },
        {
          "date": "2018-02-05",
          "time": 28800
        },
        {
          "date": "2018-02-06",
          "time": 0
        }
      ],
      "untracked": [
        {
          "date": "2018-02-05",
          "time": 0
        },
        {
          "date": "2018-01-31",
          "time": 28800
        },
        {
          "date": "2018-02-01",
          "time": 28800
        },
        {
          "date": "2018-02-02",
          "time": 28800
        },
        {
          "date": "2018-02-03",
          "time": 0
        },
        {
          "date": "2018-02-04",
          "time": 0
        },
        {
          "date": "2018-02-06",
          "time": 0
        }
      ]
    }