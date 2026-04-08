__GET
#### /api/v1.0/projects/filters

####  List all projects filters 

List all projects filters that the current user can view.

## Request

#### Route
    GET /api/v1.0/projects/filters

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/filters](https://runrun.it/api/v1.0/projects/filters)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/list_all_projects_filters)

#### Status
    200

#### Headers    
    Content-Type: application/json; charset=utf-8
    Content-Length: 2053

#### Body
    [
      {
        "id": "all",
        "name": "All projects",
        "status": "all",
        "restriction": [],
        "conditions": [],
        "parameters": {},
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc"
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc"
        },
        "valid": true,
        "default": true,
        "preset": true
      },
      {
        "id": "open",
        "name": "Open projects",
        "status": "all",
        "restriction": [
          {
            "column_id": "open",
            "operator": "is_true",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          }
        ],
        "conditions": [
          {
            "column_id": "open",
            "operator": "is_true",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "closed",
        "name": "Closed projects",
        "status": "all",
        "restriction": [
          {
            "column_id": "open",
            "operator": "is_false",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          }
        ],
        "conditions": [
          {
            "column_id": "open",
            "operator": "is_false",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "close_date",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "close_date",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": 1,
        "name": "Amazing Projects",
        "status": "all",
        "restriction": [
          {
            "column_id": "open",
            "operator": "is_false",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          },
          {
            "column_id": "desired_date",
            "operator": "up_to",
            "value": "2016-10-02",
            "valid": true,
            "column_name": "Desired delivery date"
          },
          {
            "column_id": "time_total",
            "operator": "greater_than",
            "value": 1000,
            "valid": true,
            "column_name": "Total hours"
          }
        ],
        "conditions": [
          {
            "column_id": "open",
            "operator": "is_false",
            "value": null,
            "valid": true,
            "column_name": "Opened"
          },
          {
            "column_id": "desired_date",
            "operator": "up_to",
            "value": "2016-10-02",
            "valid": true,
            "column_name": "Desired delivery date"
          },
          {
            "column_id": "time_total",
            "operator": "greater_than",
            "value": 1000,
            "valid": true,
            "column_name": "Total hours"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "desired_date",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "desired_date",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": false
      }
    ]

__GET

#### /api/v1.0/projects/filters/:id

####  Show a project filter 

## Request

#### Route
    GET /api/v1.0/projects/filters/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/filters/1](https://runrun.it/api/v1.0/projects/filters/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/show_a_project_filter)

#### Status
      200

#### Headers
     Content-Type: application/json; charset=utf-8
    Content-Length: 907

#### Body
     {
      "id": 1,
      "name": "Amazing Projects",
      "status": "all",
      "restriction": [
        {
          "column_id": "open",
          "operator": "is_false",
          "value": null,
          "valid": true,
          "column_name": "Opened"
        },
        {
          "column_id": "desired_date",
          "operator": "up_to",
          "value": "2016-10-02",
          "valid": true,
          "column_name": "Desired delivery date"
        },
        {
          "column_id": "time_total",
          "operator": "greater_than",
          "value": 1000,
          "valid": true,
          "column_name": "Total hours"
        }
      ],
      "conditions": [
        {
          "column_id": "open",
          "operator": "is_false",
          "value": null,
          "valid": true,
          "column_name": "Opened"
        },
        {
          "column_id": "desired_date",
          "operator": "up_to",
          "value": "2016-10-02",
          "valid": true,
          "column_name": "Desired delivery date"
        },
        {
          "column_id": "time_total",
          "operator": "greater_than",
          "value": 1000,
          "valid": true,
          "column_name": "Total hours"
        }
      ],
      "parameters": {
      },
      "sorting": [
        {
          "column_id": "desired_date",
          "dir": "desc",
          "valid": true
        }
      ],
      "sort": {
        "column_id": "desired_date",
        "dir": "desc",
        "valid": true
      },
      "valid": true,
      "default": false,
      "preset": false
    }

__DELETE

#### /api/v1.0/projects/filters/:id

####  Destroy a project filter 

Destroy a filter record.

## Request

#### Route
    DELETE /api/v1.0/projects/filters/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
     curl "[https://runrun.it/api/v1.0/projects/filters/1](https://runrun.it/api/v1.0/projects/filters/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/destroy_a_project_filter)

#### Status
    204

#### Headers


__GET
#### /api/v1.0/tasks/filters

####  List all tasks filters 

List all tasks filters that the current user can view.

## Request

#### Route
    GET /api/v1.0/tasks/filters

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/filters](https://runrun.it/api/v1.0/tasks/filters)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/list_all_tasks_filters)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 7236

#### Body
    [
      {
        "id": "all",
        "name": "All",
        "status": "all",
        "restriction": [
    
        ],
        "conditions": [
    
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc"
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc"
        },
        "valid": true,
        "default": true,
        "preset": true
      },
      {
        "id": "not_assigned",
        "name": "No responsible",
        "status": "all",
        "restriction": [
          {
            "column_id": "assignees",
            "operator": "is_empty",
            "value": [
    
            ],
            "valid": true,
            "column_name": "Assignees"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "assignees",
            "operator": "is_empty",
            "value": [
    
            ],
            "valid": true,
            "column_name": "Assignees"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "priority",
            "dir": "asc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "priority",
          "dir": "asc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "queued",
        "name": "Assigned (Pending)",
        "status": "all",
        "restriction": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "queued",
              "name": "pending"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "queued",
              "name": "pending"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "working_on",
        "name": "Assigned (In development)",
        "status": "all",
        "restriction": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "working_on",
              "name": "in development"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "working_on",
              "name": "in development"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "open",
        "name": "Opened",
        "status": "all",
        "restriction": [
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "priority",
            "dir": "asc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "priority",
          "dir": "asc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "delivered",
        "name": "Delivered",
        "status": "all",
        "restriction": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "close_date",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "close_date",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "delivered_in_the_last_7_days",
        "name": "Delivered in the last 7 days",
        "status": "all",
        "restriction": [
          {
            "column_id": "close_date",
            "operator": "in_the_last",
            "value": "seven_days",
            "valid": true,
            "column_name": "Delivery date"
          },
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "close_date",
            "operator": "in_the_last",
            "value": "seven_days",
            "valid": true,
            "column_name": "Delivery date"
          },
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "close_date",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "close_date",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "estimated_delivery_in_the_next_7_days",
        "name": "To be delivered in the next 7 days",
        "status": "all",
        "restriction": [
          {
            "column_id": "estimated_delivery_date",
            "operator": "in_the_next",
            "value": "seven_days",
            "valid": true,
            "column_name": "Estimated delivery"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "estimated_delivery_date",
            "operator": "in_the_next",
            "value": "seven_days",
            "valid": true,
            "column_name": "Estimated delivery"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "overdue",
        "name": "Overdue",
        "status": "all",
        "restriction": [
          {
            "column_id": "overdue",
            "operator": "is",
            "value": {
              "id": "hard_overdue",
              "name": "with delay"
            },
            "valid": true,
            "column_name": "Delay"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "overdue",
            "operator": "is",
            "value": {
              "id": "hard_overdue",
              "name": "with delay"
            },
            "valid": true,
            "column_name": "Delay"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "desired_date",
            "dir": "asc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "desired_date",
          "dir": "asc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "overdue_estimated",
        "name": "With overdue estimated",
        "status": "all",
        "restriction": [
          {
            "column_id": "overdue",
            "operator": "is",
            "value": {
              "id": "soft_overdue",
              "name": "estimated delay"
            },
            "valid": true,
            "column_name": "Delay"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "overdue",
            "operator": "is",
            "value": {
              "id": "soft_overdue",
              "name": "estimated delay"
            },
            "valid": true,
            "column_name": "Delay"
          },
          {
            "column_id": "state",
            "operator": "is_not",
            "value": {
              "id": "closed",
              "name": "completed"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "desired_date",
            "dir": "asc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "desired_date",
          "dir": "asc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": "shared",
        "name": "Shared",
        "status": "all",
        "restriction": [
          {
            "column_id": "is_shared",
            "operator": "is_true",
            "value": null,
            "valid": true,
            "column_name": "Shared"
          }
        ],
        "conditions": [
          {
            "column_id": "is_shared",
            "operator": "is_true",
            "value": null,
            "valid": true,
            "column_name": "Shared"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "activities",
            "dir": "desc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "activities",
          "dir": "desc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": true
      },
      {
        "id": 1,
        "name": "Amazing Tasks",
        "status": "all",
        "restriction": [
          {
            "column_id": "title",
            "operator": "contains",
            "value": "Test",
            "valid": true,
            "column_name": "Title"
          },
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "queued",
              "name": "pending"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "conditions": [
          {
            "column_id": "title",
            "operator": "contains",
            "value": "Test",
            "valid": true,
            "column_name": "Title"
          },
          {
            "column_id": "state",
            "operator": "is",
            "value": {
              "id": "queued",
              "name": "pending"
            },
            "valid": true,
            "column_name": "State"
          }
        ],
        "parameters": {
        },
        "sorting": [
          {
            "column_id": "title",
            "dir": "asc",
            "valid": true
          }
        ],
        "sort": {
          "column_id": "title",
          "dir": "asc",
          "valid": true
        },
        "valid": true,
        "default": false,
        "preset": false
      }
    ]

__GET

#### /api/v1.0/tasks/filters/:id

####  Show a task filter 

## Request

#### Route
    GET /api/v1.0/tasks/filters/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/filters/1](https://runrun.it/api/v1.0/tasks/filters/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/show_a_task_filter)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 666

#### Body
    {
      "id": 1,
      "name": "Amazing Tasks",
      "status": "all",
      "restriction": [
        {
          "column_id": "title",
          "operator": "contains",
          "value": "Test",
          "valid": true,
          "column_name": "Title"
        },
        {
          "column_id": "state",
          "operator": "is",
          "value": {
            "id": "queued",
            "name": "pending"
          },
          "valid": true,
          "column_name": "State"
        }
      ],
      "conditions": [
        {
          "column_id": "title",
          "operator": "contains",
          "value": "Test",
          "valid": true,
          "column_name": "Title"
        },
        {
          "column_id": "state",
          "operator": "is",
          "value": {
            "id": "queued",
            "name": "pending"
          },
          "valid": true,
          "column_name": "State"
        }
      ],
      "parameters": {
      },
      "sorting": [
        {
          "column_id": "title",
          "dir": "asc",
          "valid": true
        }
      ],
      "sort": {
        "column_id": "title",
        "dir": "asc",
        "valid": true
      },
      "valid": true,
      "default": false,
      "preset": false
    }

__DELETE
#### /api/v1.0/tasks/filters/:id

####  Destroy a task filter 

Destroy a filter record.

## Request

#### Route
    DELETE /api/v1.0/tasks/filters/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/filters/1](https://runrun.it/api/v1.0/tasks/filters/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/filters/destroy_a_task_filter)

#### Status
    204

#### Headers

