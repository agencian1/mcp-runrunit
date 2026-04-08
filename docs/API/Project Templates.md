__GET
#### /api/v1.0/project_templates

####  List all Project Templates 

## Request

#### Route
    GET /api/v1.0/project_templates

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/project_templates](https://runrun.it/api/v1.0/project_templates)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_templates/list_all_project_templates)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 2

#### Body
    []

__GET

#### /api/v1.0/project_templates/:id

####  Show a Project Template 

## Request

#### Route
    GET /api/v1.0/project_templates/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/project_templates/1](https://runrun.it/api/v1.0/project_templates/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_templates/show_a_project_template)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 41

#### Body
    {
      "id": 1,
      "name": "Test project template 1"
    }

__POST

#### /api/v1.0/project_templates/

####  Create a Project Template 

When creating a project template the name must be unique among projects belonging to the same client.

## Parameters

Name | Description | type  
---|---|---  
name  | Name of project template | string  
  
## Request

#### Route
    POST /api/v1.0/project_templates/

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_template": {
        "name": "Test project template 2"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_templates/](https://runrun.it/api/v1.0/project_templates/)" -d '{"project_template":{"name":"Test project template 2"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_templates/create_a_project_template)

#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 41

#### Body
    {
      "id": 1,
      "name": "Test project template 2"
    }

__PUT

#### /api/v1.0/project_templates/:id

####  Update a Project Template 

When updating a project template the name must be unique among projects belonging to the same client.

## Request

#### Route
    PUT /api/v1.0/project_templates/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "project_template": {
        "name": "New Name"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/project_templates/1](https://runrun.it/api/v1.0/project_templates/1)" -d '{"project_template":{"name":"New Name"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_templates/update_a_project_template)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 26

#### Body
    {
      "id": 1,
      "name": "New Name"
    }

__DELETE

#### /api/v1.0/project_templates/:id

####  Destroy a Project Template 

## Request

#### Route
    DELETE /api/v1.0/project_templates/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/project_templates/1](https://runrun.it/api/v1.0/project_templates/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/project_templates/destroy_a_project_template)

#### Status
    204

#### Headers
