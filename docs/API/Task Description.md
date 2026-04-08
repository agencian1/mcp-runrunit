Task Description
GET
/api/v1.0/tasks/:task_id/description
Show the task description

Show the task description.

Request
Route
GET /api/v1.0/tasks/1/description
Headers
App-Key: 1a219437eab893dc115509bb85e06d77
User-Token: 9flMUzLxQtxohKGZjU5
Content-Type: application/json
Host: example.org
cURL
curl -g "https://runrun.it/api/v1.0/tasks/1/description" -X GET \
 -H "Version: HTTP/1.0" \
 -H "App-Key: 1a219437eab893dc115509bb85e06d77" \
 -H "User-Token: 9flMUzLxQtxohKGZjU5" \
 -H "Content-Type: application/json"
Response
Simulated Response
Status
200
Headers
Content-Type: application/json; charset=utf-8
Content-Length: 142
Body
{
"id": 1,
"description": "Awesome!",
"current_editor_id": null,
"current_editor_name": null,
"edited_at": "2026-03-24T16:59:47-03:00",
"locked_at": null
}
PUT
/api/v1.0/tasks/:task_id/description
Update the task description

Update a task description.

Parameters
Name Description type
description
The text of the description

text

current_editor_id
ID of user that is editing the description

string

current_editor_name
Name of user that is editing the description

string

edited_at
Datetime the description has been edited

datetime

locked_at
Datetime the description has been locked by the current editor

datetime

Request
Route
PUT /api/v1.0/tasks/1/description
Headers
App-Key: 1a219437eab893dc115509bb85e06d77
User-Token: 9flMUzLxQtxohKGZjU5
Content-Type: application/json
Host: example.org
Body
{
"task_description": {
"id": null,
"description": "Gorgeous!",
"task_id": 476,
"created_at": null,
"updated_at": null,
"current_editor_id": null,
"edited_at": null,
"locked_at": null,
"enterprise_id": null
}
}
cURL
curl "https://runrun.it/api/v1.0/tasks/1/description" -d '{"task_description":{"id":null,"description":"Gorgeous!","task_id":476,"created_at":null,"updated_at":null,"current_editor_id":null,"edited_at":null,"locked_at":null,"enterprise_id":null}}' -X PUT \
 -H "Version: HTTP/1.0" \
 -H "App-Key: 1a219437eab893dc115509bb85e06d77" \
 -H "User-Token: 9flMUzLxQtxohKGZjU5" \
 -H "Content-Type: application/json"
Response
Simulated Response
Status
200
Headers
Content-Type: application/json; charset=utf-8
Content-Length: 143
Body
{
"id": 1,
"description": "Gorgeous!",
"current_editor_id": null,
"current_editor_name": null,
"edited_at": "2026-03-24T16:59:48-03:00",
"locked_at": null
}
