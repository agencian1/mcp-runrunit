__GET
#### /api/v1.0/teams

####  List teams 

## Parameters

Name | Description | type  
---|---|---  
sort  | Sort by column | string  
sort_dir  | Sort direction ('asc' or 'desc') | string  
search_term  | Filter by term | string  
filter_id  | Filter by an existing filter | integer  
  
## Request

#### Route
    GET /api/v1.0/teams

#### Headers1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/teams](https://runrun.it/api/v1.0/teams)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/list_teams)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Id of the team | integer  
name  | Name of the team | string  
leader_id  | Id of the user team leader | string  
leader_name  | Name of the user team leader | string  
cost_center  | Cost center | string  
user_ids  | Ids of team members | array  
master_user_id  | [Deprecated] Use leader_id | string  
master_user_name  | [Deprecated] Use leader_name | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 185

#### Body
    [
      {
        "id": 1,
        "name": "Team 1",
        "leader_id": "coyote-547",
        "leader_name": "Coyote 547",
        "cost_center": null,
        "user_ids": [
          "coyote-547"
        ],
        "master_user_id": "coyote-547",
        "master_user_name": "Coyote 547"
      }
    ]

__GET

#### /api/v1.0/teams/:id

####  Show a team 

## Request

#### Route    
    GET /api/v1.0/teams/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/teams/1](https://runrun.it/api/v1.0/teams/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/show_a_team)

#### Response Fields

Name | Description | type  
---|---|---  
id  | Id of the team | integer  
name  | Name of the team | string  
leader_id  | Id of the user team leader | string  
leader_name  | Name of the user team leader | string  
cost_center  | Cost center | string  
user_ids  | Ids of team members | array  
master_user_id  | [Deprecated] Use leader_id | string  
master_user_name  | [Deprecated] Use leader_name | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 183

#### Body
    {
      "id": 1,
      "name": "Team 1",
      "leader_id": "coyote-550",
      "leader_name": "Coyote 550",
      "cost_center": null,
      "user_ids": [
        "coyote-550"
      ],
      "master_user_id": "coyote-550",
      "master_user_name": "Coyote 550"
    }

__POST

#### /api/v1.0/teams

####  Create a team 

## Parameters

Name | Description | type  
---|---|---  
team[name] required | Name of the team | string  
team[master_user_id]  | [Deprecated] Use leader_id | string  
team[cost_center]  | Cost center | string  
  
## Request

#### Route
    POST /api/v1.0/teams

#### Headers    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "team": {
        "name": "Team 1",
        "master_user_id": "coyote-551",
        "cost_center": "Cost center"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/teams](https://runrun.it/api/v1.0/teams)" -d '{"team":{"name":"Team 1","master_user_id":"coyote-551","cost_center":"Cost center"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/create_a_team)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 192

#### Body
    {
      "id": 1,
      "name": "Team 1",
      "leader_id": "coyote-551",
      "leader_name": "Coyote 551",
      "cost_center": "Cost center",
      "user_ids": [
        "coyote-551"
      ],
      "master_user_id": "coyote-551",
      "master_user_name": "Coyote 551"
    }

__PUT

#### /api/v1.0/teams/:id

####  Update a team 

## Parameters

Name | Description | type  
---|---|---  
team[name]  | Name of the team | string  
team[master_user_id]  | [Deprecated] Use leader_id | string  
team[cost_center]  | Cost center | string  
  
## Request

#### Route
    PUT /api/v1.0/teams/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "team": {
        "name": "Team 2",
        "master_user_id": "coyote-553",
        "cost_center": "Cost center"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/teams/1](https://runrun.it/api/v1.0/teams/1)" -d '{"team":{"name":"Team 2","master_user_id":"coyote-553","cost_center":"Cost center"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/update_a_team)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 205

#### Body
    {
      "id": 1,
      "name": "Team 2",
      "leader_id": "coyote-553",
      "leader_name": "Coyote 553",
      "cost_center": "Cost center",
      "user_ids": [
        "coyote-552",
        "coyote-553"
      ],
      "master_user_id": "coyote-553",
      "master_user_name": "Coyote 553"
    }

__DELETE

#### /api/v1.0/teams/:id

####  Destroy a team 

## Request

#### Route
    DELETE /api/v1.0/teams/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/teams/1](https://runrun.it/api/v1.0/teams/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/destroy_a_team)

#### Status
    204

#### Headers


__POST

#### /api/v1.0/teams/:id/add_member

####  Add a user to a team 

## Parameters

Name | Description | type  
---|---|---  
user_id required | New team member id | string  
team_partnership  | Flag to make the new team member and other members, partners | boolean  
  
## Request

#### Route
    POST /api/v1.0/teams/1/add_member

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body    
    {
      "user_id": "coyote-557"
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/teams/1/add_member](https://runrun.it/api/v1.0/teams/1/add_member)" -d '{"user_id":"coyote-557"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/add_a_user_to_a_team)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 196

#### Body
    {
      "id": 1,
      "name": "Team 1",
      "leader_id": "coyote-556",
      "leader_name": "Coyote 556",
      "cost_center": null,
      "user_ids": [
        "coyote-556",
        "coyote-557"
      ],
      "master_user_id": "coyote-556",
      "master_user_name": "Coyote 556"
    }

__POST

#### /api/v1.0/teams/:id/remove_member

####  Remove a user from team 

## Parameters

Name | Description | type  
---|---|---  
user_id required | Team member id | string  
  
## Request

#### Route
    POST /api/v1.0/teams/1/remove_member

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "user_id": "coyote-559"
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/teams/1/remove_member](https://runrun.it/api/v1.0/teams/1/remove_member)" -d '{"user_id":"coyote-559"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/teams/remove_a_user_from_team)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 183

#### Body
    {
      "id": 1,
      "name": "Team 1",
      "leader_id": "coyote-558",
      "leader_name": "Coyote 558",
      "cost_center": null,
      "user_ids": [
        "coyote-558"
      ],
      "master_user_id": "coyote-558",
      "master_user_name": "Coyote 558"
    }