__GET
#### /api/v1.0/users/:user_id/event_notifications

####  List all user's event notifications 

## Request

#### Route
    GET /api/v1.0/users/1/event_notifications

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/users/1/event_notifications](https://runrun.it/api/v1.0/users/1/event_notifications)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/eventnotification/list_all_user's_event_notifications)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 219

#### Body
    [
      {
        "id": 1,
        "event": "event_notification:create",
        "title": "this is a title",
        "message": "this is a message",
        "full_message_formatted": null,
        "readed_in": null,
        "group_key": null,
        "happened_at": "2026-03-04T16:58:04-03:00",
        "extra": {
        }
      }
    ]

__POST
#### /api/v1.0/users/:user_id/event_notifications/:id/mark_as_read

####  Assign readed_in on event_notification 

## Request

#### Route
    POST /api/v1.0/users/1/event_notifications/1/mark_as_read

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL    
    curl "[https://runrun.it/api/v1.0/users/1/event_notifications/1/mark_as_read](https://runrun.it/api/v1.0/users/1/event_notifications/1/mark_as_read)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/eventnotification/assign_readed_in_on_event_notification)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 240

#### Body
    {
      "id": 1,
      "event": "event_notification:create",
      "title": "this is a title",
      "message": "this is a message",
      "full_message_formatted": null,
      "readed_in": "2026-03-04T16:58:04-03:00",
      "group_key": null,
      "happened_at": "2026-03-04T16:58:04-03:00",
      "extra": {
      }
    }

__POST

#### /api/v1.0/users/:user_id/event_notifications/mark_all_as_read

####  Assigns all user's event notifications 

## Request

#### Route
    POST /api/v1.0/users/1/event_notifications/mark_all_as_read

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/users/1/event_notifications/mark_all_as_read](https://runrun.it/api/v1.0/users/1/event_notifications/mark_all_as_read)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/eventnotification/assigns_all_user's_event_notifications)

#### Status
    200

#### Headers
    Content-Type: application/json
    Content-Length: 0

__DELETE

#### /api/v1.0/users/:user_id/event_notifications/:id

####  Delete a event_notification 

## Request

#### Route
    DELETE /api/v1.0/users/1/event_notifications/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/users/1/event_notifications/1](https://runrun.it/api/v1.0/users/1/event_notifications/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/eventnotification/delete_a_event_notification)

#### Status
    204

#### Headers


__POST
#### /api/v1.0/users/:user_id/event_notifications/destroy_all

####  Delete all event_notifications 

## Request

#### Route
    POST /api/v1.0/users/1/event_notifications/destroy_all

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/users/1/event_notifications/destroy_all](https://runrun.it/api/v1.0/users/1/event_notifications/destroy_all)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/eventnotification/delete_all_event_notifications)

#### Status
    204

#### Headers