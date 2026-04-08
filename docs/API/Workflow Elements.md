__GET
#### /api/v1.0/workflows/:workflow_id/workflow_elements

####  List workflow elements 

## Parameters

Name | Description | type  
---|---|---  
workflow_id required | ID of workflow | integer  
  
## Request

#### Route
    GET /api/v1.0/workflows/1/workflow_elements

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/workflows/1/workflow_elements](https://runrun.it/api/v1.0/workflows/1/workflow_elements)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflow_elements/list_workflow_elements)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 843

#### Body
    [
      {
        "id": 1,
        "workflow_id": 1,
        "order": 1,
        "is_current": true,
        "is_completed": false,
        "current": true,
        "completed": false,
        "completed_at": null,
        "started_at": "2026-03-04T16:58:09-03:00",
        "user_id": "coyote-664",
        "user_name": "Coyote 664",
        "user_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-300/coyote-664/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-300/coyote-664/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "team_id": null,
        "team_name": null
      },
      {
        "id": 2,
        "workflow_id": 1,
        "order": 1,
        "is_current": false,
        "is_completed": false,
        "current": false,
        "completed": false,
        "completed_at": null,
        "started_at": null,
        "user_id": "coyote-665",
        "user_name": "Coyote 665",
        "user_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-300/coyote-665/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-300/coyote-665/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
        "team_id": 1,
        "team_name": "Test team 41"
      }
    ]

__GET

#### /api/v1.0/workflows/:workflow_id/workflow_elements/:id

####  Show a workflow element 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of workflow element | integer  
workflow_id required | ID of workflow | integer  
  
## Request

#### Route
    GET /api/v1.0/workflows/1/workflow_elements/2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/workflows/1/workflow_elements/2](https://runrun.it/api/v1.0/workflows/1/workflow_elements/2)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflow_elements/show_a_workflow_element)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 413

#### Body
    {
      "id": 2,
      "workflow_id": 1,
      "order": 2,
      "is_current": false,
      "is_completed": false,
      "current": false,
      "completed": false,
      "completed_at": null,
      "started_at": null,
      "user_id": "coyote-669",
      "user_name": "Coyote 669",
      "user_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-302/coyote-669/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-302/coyote-669/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "team_id": 1,
      "team_name": "Test team 42"
    }

__POST

#### /api/v1.0/workflows/:workflow_id/workflow_elements

####  Create a workflow element 

## Parameters

Name | Description | type  
---|---|---  
workflow_id required | ID of workflow | integer  
user_id required | User ID | string  
team_id  | Team ID of the user | integer  
order  | Order of the element on workflow | integer  
  
## Request

#### Route
    POST /api/v1.0/workflows/1/workflow_elements

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "workflow_element": {
        "user_id": "coyote-673",
        "team_id": 1,
        "order": 2
      }
    }

#### cURL    
    curl "[https://runrun.it/api/v1.0/workflows/1/workflow_elements](https://runrun.it/api/v1.0/workflows/1/workflow_elements)" -d '{"workflow_element":{"user_id":"coyote-673","team_id":1,"order":2}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflow_elements/create_a_workflow_element)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 413

#### Body
    {
      "id": 2,
      "workflow_id": 1,
      "order": 2,
      "is_current": false,
      "is_completed": false,
      "current": false,
      "completed": false,
      "completed_at": null,
      "started_at": null,
      "user_id": "coyote-673",
      "user_name": "Coyote 673",
      "user_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-304/coyote-673/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-304/coyote-673/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "team_id": 1,
      "team_name": "Test team 43"
    }

__POST

#### /api/v1.0/workflows/:workflow_id/workflow_elements/:id/reorder

####  Reorder a workflow element 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of workflow element | integer  
workflow_id required | ID of workflow | integer  
order  | Order of the element on workflow | integer  
  
## Request

#### Route
    POST /api/v1.0/workflows/1/workflow_elements/3/reorder

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "order": 2
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows/1/workflow_elements/3/reorder](https://runrun.it/api/v1.0/workflows/1/workflow_elements/3/reorder)" -d '{"order":2}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflow_elements/reorder_a_workflow_element)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 413

#### Body
    {
      "id": 3,
      "workflow_id": 1,
      "order": 2,
      "is_current": false,
      "is_completed": false,
      "current": false,
      "completed": false,
      "completed_at": null,
      "started_at": null,
      "user_id": "coyote-680",
      "user_name": "Coyote 680",
      "user_avatar_url": "[https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-306/coyote-680/f5a97807846085bb7e64f0e93f5f8a97mini.png](https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gryvnagsfedj/b/runrunit-public-dev/o/avatars/acme-306/coyote-680/f5a97807846085bb7e64f0e93f5f8a97mini.png)",
      "team_id": 1,
      "team_name": "Test team 44"
    }

__DELETE

#### /api/v1.0/workflows/:workflow_id/workflow_elements/:id

####  Destroy a workflow element 

## Parameters

Name | Description | type  
---|---|---  
id required | ID of workflow element | integer  
workflow_id required | ID of workflow | integer  
  
## Request

#### Route
    DELETE /api/v1.0/workflows/1/workflow_elements/2

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/workflows/1/workflow_elements/2](https://runrun.it/api/v1.0/workflows/1/workflow_elements/2)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/workflow_elements/destroy_a_workflow_element)

#### Status
    204

#### Headers