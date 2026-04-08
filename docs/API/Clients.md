__GET
#### /api/v1.0/clients

####  List clients 

## Parameters

Name | Description | type  
---|---|---  
sort  | Sort by column | string  
sort_dir  | Sort direction ('asc' or 'desc') | string  
search_term  | Filter by term | string  
filter_id  | Filter by an existing filter | integer  
is_visible  | Filter by visible clients | boolean  
  
## Request

#### Route
    
    
    GET /api/v1.0/clients

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/clients](https://runrun.it/api/v1.0/clients)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/list_clients)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Client ID | integer  
name  | Client's name | string  
custom_field  | Custom field | string  
is_visible  | Client is currently visible to be used | boolean  
budgeted_hours_month  | Budgeted hours per month | decimal  
budgeted_cost_month  | Budgeted cost per month | decimal  
projects_count  | Number of projects in the client | integer  
time_worked  | Time (in seconds) worked in the client | integer  
time_pending_not_assigned  | Time (in seconds) pending not assigned in the client | integer  
time_pending_queued  | Time (in seconds) pending queued in the client | integer  
time_pending  | Time (in seconds) pending in the client | integer  
time_total  | Total time (in seconds) spent in the client | integer  
time_progress  | Progress of time worked on the client | float  
cost_worked  | Cost spent on the client | float  
cost_pending  | Cost pending in the client | float  
cost_total  | Total cost of the client | float  
activities_6_days_ago  | Time (in seconds) worked in the client 6 days ago | integer  
activities_5_days_ago  | Time (in seconds) worked in the client 5 days ago | integer  
activities_4_days_ago  | Time (in seconds) worked in the client 4 days ago | integer  
activities_3_days_ago  | Time (in seconds) worked in the client 3 days ago | integer  
activities_2_days_ago  | Time (in seconds) worked in the client 2 days ago | integer  
activities_1_days_ago  | Time (in seconds) worked in the client 1 days ago | integer  
activities_0_days_ago  | Time (in seconds) worked in the client today | integer  
activities  | Total time (in seconds) worked today and in the last 6 days | integer  
time_pending_backlog  | [Deprecated] Use 'time_pending_not_assigned' instead | integer  
project_groups  | [Deprecated] Not used anymore | array  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 712

#### Body
    
    
    [
      {
        "id": 1,
        "name": "Test client 474",
        "custom_field": null,
        "is_visible": true,
        "budgeted_hours_month": 0,
        "budgeted_cost_month": 0.0,
        "projects_count": 0,
        "time_worked": 0,
        "time_pending_not_assigned": 0,
        "time_pending_queued": 0,
        "time_pending": 0,
        "time_total": 0,
        "time_progress": 0.0,
        "cost_worked": 0.0,
        "cost_pending": 0.0,
        "cost_total": 0.0,
        "activities_6_days_ago": 0,
        "activities_5_days_ago": 0,
        "activities_4_days_ago": 0,
        "activities_3_days_ago": 0,
        "activities_2_days_ago": 0,
        "activities_1_days_ago": 0,
        "activities_0_days_ago": 0,
        "activities": 0,
        "time_pending_backlog": 0,
        "project_groups": [
          {
            "id": 1,
            "name": null,
            "client_id": 1,
            "is_default": true,
            "created_at": "2026-03-04T16:59:23-03:00",
            "updated_at": "2026-03-04T16:59:23-03:00"
          }
        ],
        "project_ids": [
    
        ]
      }
    ]

__GET

#### /api/v1.0/clients/:id

####  Show a client 

## Request

#### Route
    
    
    GET /api/v1.0/clients/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/clients/1](https://runrun.it/api/v1.0/clients/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/show_a_client)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Client ID | integer  
name  | Client's name | string  
custom_field  | Custom field | string  
is_visible  | Client is currently visible to be used | boolean  
budgeted_hours_month  | Budgeted hours per month | decimal  
budgeted_cost_month  | Budgeted cost per month | decimal  
projects_count  | Number of projects in the client | integer  
time_worked  | Time (in seconds) worked in the client | integer  
time_pending_not_assigned  | Time (in seconds) pending not assigned in the client | integer  
time_pending_queued  | Time (in seconds) pending queued in the client | integer  
time_pending  | Time (in seconds) pending in the client | integer  
time_total  | Total time (in seconds) spent in the client | integer  
time_progress  | Progress of time worked on the client | float  
cost_worked  | Cost spent on the client | float  
cost_pending  | Cost pending in the client | float  
cost_total  | Total cost of the client | float  
activities_6_days_ago  | Time (in seconds) worked in the client 6 days ago | integer  
activities_5_days_ago  | Time (in seconds) worked in the client 5 days ago | integer  
activities_4_days_ago  | Time (in seconds) worked in the client 4 days ago | integer  
activities_3_days_ago  | Time (in seconds) worked in the client 3 days ago | integer  
activities_2_days_ago  | Time (in seconds) worked in the client 2 days ago | integer  
activities_1_days_ago  | Time (in seconds) worked in the client 1 days ago | integer  
activities_0_days_ago  | Time (in seconds) worked in the client today | integer  
activities  | Total time (in seconds) worked today and in the last 6 days | integer  
time_pending_backlog  | [Deprecated] Use 'time_pending_not_assigned' instead | integer  
project_groups  | [Deprecated] Not used anymore | array  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 710

#### Body
    
    
    {
      "id": 1,
      "name": "Test client 475",
      "custom_field": null,
      "is_visible": true,
      "budgeted_hours_month": 0,
      "budgeted_cost_month": 0.0,
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_groups": [
        {
          "id": 1,
          "name": null,
          "client_id": 1,
          "is_default": true,
          "created_at": "2026-03-04T16:59:24-03:00",
          "updated_at": "2026-03-04T16:59:24-03:00"
        }
      ],
      "project_ids": [
    
      ]
    }

__POST

#### /api/v1.0/clients

####  Create a client 

## Parameters

Name | Description | type  
---|---|---  
client[name] required | Client's name | string  
client[is_visible]  | Client is currently visible to be used | boolean  
client[budgeted_hours_month]  | Budgeted hours per month | decimal  
client[budgeted_cost_month]  | Budgeted cost per month | decimal  
client[custom_field]  | Custom field | string  
  
## Request

#### Route
    
    
    POST /api/v1.0/clients

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "client": {
        "name": "My Client",
        "is_visible": true,
        "budgeted_hours_month": 10000,
        "budgeted_cost_month": 2000.5,
        "custom_field": "custom field"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/clients](https://runrun.it/api/v1.0/clients)" -d '{"client":{"name":"My Client","is_visible":true,"budgeted_hours_month":10000,"budgeted_cost_month":2000.5,"custom_field":"custom field"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/create_a_client)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 721

#### Body
    
    
    {
      "id": 1,
      "name": "My Client",
      "custom_field": "custom field",
      "is_visible": true,
      "budgeted_hours_month": 10000,
      "budgeted_cost_month": 2000.5,
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_groups": [
        {
          "id": 1,
          "name": null,
          "client_id": 1,
          "is_default": true,
          "created_at": "2026-03-04T16:59:25-03:00",
          "updated_at": "2026-03-04T16:59:25-03:00"
        }
      ],
      "project_ids": [
    
      ]
    }

__PUT

#### /api/v1.0/clients/:id

####  Update a client 

## Parameters

Name | Description | type  
---|---|---  
client[name]  | Client's name | string  
client[is_visible]  | Client is currently visible to be used | boolean  
client[budgeted_hours_month]  | Budgeted hours per month | decimal  
client[budgeted_cost_month]  | Budgeted cost per month | decimal  
client[custom_field]  | Custom field | string  
  
## Request

#### Route
    
    
    PUT /api/v1.0/clients/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "client": {
        "name": "Widgets Inc"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/clients/1](https://runrun.it/api/v1.0/clients/1)" -d '{"client":{"name":"Widgets Inc"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/update_a_client)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 706

#### Body
    
    
    {
      "id": 1,
      "name": "Widgets Inc",
      "custom_field": null,
      "is_visible": true,
      "budgeted_hours_month": 0,
      "budgeted_cost_month": 0.0,
      "projects_count": 0,
      "time_worked": 0,
      "time_pending_not_assigned": 0,
      "time_pending_queued": 0,
      "time_pending": 0,
      "time_total": 0,
      "time_progress": 0.0,
      "cost_worked": 0.0,
      "cost_pending": 0.0,
      "cost_total": 0.0,
      "activities_6_days_ago": 0,
      "activities_5_days_ago": 0,
      "activities_4_days_ago": 0,
      "activities_3_days_ago": 0,
      "activities_2_days_ago": 0,
      "activities_1_days_ago": 0,
      "activities_0_days_ago": 0,
      "activities": 0,
      "time_pending_backlog": 0,
      "project_groups": [
        {
          "id": 1,
          "name": null,
          "client_id": 1,
          "is_default": true,
          "created_at": "2026-03-04T16:59:25-03:00",
          "updated_at": "2026-03-04T16:59:25-03:00"
        }
      ],
      "project_ids": [
    
      ]
    }

__GET

#### /api/v1.0/clients/:client_id/monthly_budgets

####  List all budgets 

## Parameters

Name | Description | type  
---|---|---  
client_id  | Client id | integer  
month  | Year-Month | string  
time  | Include others | integer  
cost  | Cost | string  
  
## Request

#### Route
    
    
    GET /api/v1.0/clients/1/monthly_budgets

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/clients/1/monthly_budgets](https://runrun.it/api/v1.0/clients/1/monthly_budgets)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/list_all_budgets)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 116

#### Body
    
    
    [
      {
        "client_id": 1,
        "month": "2020-07",
        "time": 10,
        "cost": "140.0"
      },
      {
        "client_id": 1,
        "month": "2026-03",
        "time": 0,
        "cost": "0.0"
      }
    ]

__POST

#### /api/v1.0/clients/:client_id/update_monthly_budget

####  when a budget not exists, creates a new budget 

## Request

#### Route
    
    
    POST /api/v1.0/clients/1/update_monthly_budget

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "client_monthly_budget": {
        "month": "2020-01",
        "time": 10,
        "cost": 140.0
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/clients/1/update_monthly_budget](https://runrun.it/api/v1.0/clients/1/update_monthly_budget)" -d '{"client_monthly_budget":{"month":"2020-01","time":10,"cost":140.0}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/clients/when_a_budget_not_exists,_creates_a_new_budget)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 58

#### Body
    
    
    {
      "client_id": 1,
      "month": "2020-01",
      "time": 10,
      "cost": "140.0"
    }
