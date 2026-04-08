__GET
#### /api/v1.0/users_vacations

####  Get user vacations 

## Request

#### Route
    GET /api/v1.0/users_vacations

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/users_vacations](https://runrun.it/api/v1.0/users_vacations)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/usersvacations/get_user_vacations)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 87

#### Body
    [
      {
        "id": 1,
        "user_id": "coyote-601",
        "period_start": "2021-10-05",
        "period_end": "2021-11-20"
      }
    ]

__POST

#### /api/v1.0/users/:user_id/vacations

####  Create an user vacation 

## Request

#### Route
    POST /api/v1.0/users/coyote-603/vacations

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "user_vacation": {
        "period_start": "2021-11-01",
        "period_end": "2021-12-01"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/users/coyote-603/vacations](https://runrun.it/api/v1.0/users/coyote-603/vacations)" -d '{"user_vacation":{"period_start":"2021-11-01","period_end":"2021-12-01"}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/usersvacations/create_an_user_vacation)

#### Status    
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 85

#### Body    
    {
      "id": 1,
      "user_id": "coyote-603",
      "period_start": "2021-11-01",
      "period_end": "2021-12-01"
    }

__GET

#### /api/v1.0/users_vacations/:id

####  Show an user vacation 

## Request

#### Route
    GET /api/v1.0/users_vacations/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/users_vacations/1](https://runrun.it/api/v1.0/users_vacations/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/usersvacations/show_an_user_vacation)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 85

#### Body    
    {
      "id": 1,
      "user_id": "coyote-605",
      "period_start": "2021-10-05",
      "period_end": "2021-11-20"
    }

__PUT

#### /api/v1.0/users_vacations/:id

####  Update an user vacation 

## Request

#### Route
    PUT /api/v1.0/users_vacations/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "user_vacation": {
        "period_start": "2021-11-01",
        "period_end": "2021-12-01"
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/users_vacations/1](https://runrun.it/api/v1.0/users_vacations/1)" -d '{"user_vacation":{"period_start":"2021-11-01","period_end":"2021-12-01"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/usersvacations/update_an_user_vacation)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 85

#### Body
    {
      "id": 1,
      "user_id": "coyote-607",
      "period_start": "2021-11-01",
      "period_end": "2021-12-01"
    }

__DELETE

#### /api/v1.0/users_vacations/:id

####  Destroy an user vacation 

## Request

#### Route
    DELETE /api/v1.0/users_vacations/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/users_vacations/1](https://runrun.it/api/v1.0/users_vacations/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/usersvacations/destroy_an_user_vacation)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 85

#### Body
    {
      "id": 1,
      "user_id": "coyote-609",
      "period_start": "2021-10-05",
      "period_end": "2021-11-20"
    }