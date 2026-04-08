__GET

#### /api/v1.0/projects/:project_id/extra_costs

####  List all extra costs of a project 

## Request

#### Route
    GET /api/v1.0/projects/1/extra_costs

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/1/extra_costs](https://runrun.it/api/v1.0/projects/1/extra_costs)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projectextracost/list_all_extra_costs_of_a_project)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 293

#### Body
    [
      {
        "id": 1,
        "description": "Cost 1",
        "date": "2026-03-04",
        "amount": 1000.0,
        "project_id": 1,
        "author_name": "Coyote 585",
        "author_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-534/coyote-585/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-534/coyote-585/f5a97807846085bb7e64f0e93f5f8a97mini.png)"
      }
    ]

__GET

#### /api/v1.0/projects/:project_id/extra_costs/:id

####  Show a extra cost of a project 

## Request

#### Route
    GET /api/v1.0/projects/1/extra_costs/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/projects/1/extra_costs/1](https://runrun.it/api/v1.0/projects/1/extra_costs/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projectextracost/show_a_extra_cost_of_a_project)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of project extra cost | integer  
description  | Description about the project extra cost | string  
date  | When project extra cost was created | date  
amount  | Project extra cost value | decimal  
project_id  | Project extra cost associated project ID | integer  
author_name  | User's name that created the project extra cost | string  
author_avatar_url  | User's avatar that created the project extra cost | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 291

#### Body
    {
      "id": 1,
      "description": "Cost 2",
      "date": "2026-03-04",
      "amount": 1000.0,
      "project_id": 1,
      "author_name": "Coyote 587",
      "author_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-535/coyote-587/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-535/coyote-587/f5a97807846085bb7e64f0e93f5f8a97mini.png)"
    }

__POST

#### /api/v1.0/projects/:project_id/extra_costs

####  Create a new Project Extra Cost 

## Parameters

Name | Description | type  
---|---|---  
project_extra_cost[description] required | Description about the project extra cost | string  
project_extra_cost[date] required | When project extra cost was created | date  
project_extra_cost[amount] required | Project extra cost value | decimal  
  
## Request

#### Route
    POST /api/v1.0/projects/1/extra_costs

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_extra_cost": {
        "description": "Cost 3",
        "date": "2026-03-04",
        "amount": "1000.0"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/projects/1/extra_costs](https://runrun.it/api/v1.0/projects/1/extra_costs)" -d '{"project_extra_cost":{"description":"Cost 3","date":"2026-03-04","amount":"1000.0"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/projectextracost/create_a_new_project_extra_cost)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 291

#### Body
    {
      "id": 1,
      "description": "Cost 3",
      "date": "2026-03-04",
      "amount": 1000.0,
      "project_id": 1,
      "author_name": "Coyote 588",
      "author_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-536/coyote-588/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-536/coyote-588/f5a97807846085bb7e64f0e93f5f8a97mini.png)"
    }
