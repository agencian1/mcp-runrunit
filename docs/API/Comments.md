__GET

#### /api/v1.0/tasks/:task_id/comments

####  List comments on a task 

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/comments

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/tasks/1/comments](https://runrun.it/api/v1.0/tasks/1/comments)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/list_comments_on_a_task)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 1301

#### Body
    
    
    [
      {
        "id": 2,
        "user_id": null,
        "guest_id": null,
        "is_system_message": true,
        "text": "System text",
        "commenter_name": null,
        "children_count": 0,
        "commentable_id": 1,
        "commentable_type": "Task",
        "created_at": "2026-03-04T17:00:32-03:00",
        "edited_at": null,
        "deleted_at": null,
        "thread_id": 2,
        "quoted_comment_id": null,
        "quoted_comment_text": null,
        "quoted_comment_user_id": null,
        "quoted_comment_user_name": null,
        "quoted_comment_guest_id": null,
        "quoted_comment_guest_name": null,
        "task_id": 1,
        "comment_id": null,
        "team_id": null,
        "enterprise_id": null,
        "document_id": null,
        "is_legacy": false,
        "media": null,
        "documents": [
    
        ],
        "reactions": [
    
        ],
        "is_automation_message": false,
        "related_task_ids": null
      },
      {
        "id": 1,
        "user_id": "coyote-1033",
        "guest_id": null,
        "is_system_message": false,
        "text": "Comment text",
        "commenter_name": "Coyote 1033",
        "children_count": 0,
        "commentable_id": 1,
        "commentable_type": "Task",
        "created_at": "2026-03-04T17:00:32-03:00",
        "edited_at": null,
        "deleted_at": null,
        "thread_id": 1,
        "quoted_comment_id": null,
        "quoted_comment_text": null,
        "quoted_comment_user_id": null,
        "quoted_comment_user_name": null,
        "quoted_comment_guest_id": null,
        "quoted_comment_guest_name": null,
        "task_id": 1,
        "comment_id": null,
        "team_id": null,
        "enterprise_id": null,
        "document_id": null,
        "is_legacy": false,
        "media": null,
        "documents": [
    
        ],
        "reactions": [
    
        ],
        "is_automation_message": false,
        "related_task_ids": null
      }
    ]

__GET

#### /api/v1.0/comments/:id

####  Show a specific comment 

## Request

#### Route
    
    
    GET /api/v1.0/comments/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/comments/1](https://runrun.it/api/v1.0/comments/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/show_a_specific_comment)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 659

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1038",
      "guest_id": null,
      "is_system_message": false,
      "text": "Comment text",
      "commenter_name": "Coyote 1038",
      "children_count": 0,
      "commentable_id": 1,
      "commentable_type": "Task",
      "created_at": "2026-03-04T17:00:38-03:00",
      "edited_at": null,
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": 1,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
    
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }

__POST

#### /api/v1.0/comments

####  Create a new comment 

## Request

#### Route
    
    
    POST /api/v1.0/comments

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task_id": 1,
      "text": "Comment text"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments](https://runrun.it/api/v1.0/comments)" -d '{"task_id":1,"text":"Comment text"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/create_a_new_comment)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 659

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1040",
      "guest_id": null,
      "is_system_message": false,
      "text": "Comment text",
      "commenter_name": "Coyote 1040",
      "children_count": 0,
      "commentable_id": 1,
      "commentable_type": "Task",
      "created_at": "2026-03-04T17:00:39-03:00",
      "edited_at": null,
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": 1,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
    
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }

__POST

#### /api/v1.0/comments

####  Create a new comment 

## Request

#### Route
    
    
    POST /api/v1.0/comments

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "task_id": 1,
      "text": "Comment text"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments](https://runrun.it/api/v1.0/comments)" -d '{"task_id":1,"text":"Comment text"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/create_a_new_comment)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 659

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1040",
      "guest_id": null,
      "is_system_message": false,
      "text": "Comment text",
      "commenter_name": "Coyote 1040",
      "children_count": 0,
      "commentable_id": 1,
      "commentable_type": "Task",
      "created_at": "2026-03-04T17:00:39-03:00",
      "edited_at": null,
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": 1,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
    
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }

__POST

#### /api/v1.0/comments

####  Create a new project comment 

## Request

#### Route
    
    
    POST /api/v1.0/comments

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "project_id": 1,
      "text": "comment"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments](https://runrun.it/api/v1.0/comments)" -d '{"project_id":1,"text":"comment"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/create_a_new_project_comment)

#### Status
    
    
    201

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 663

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1043",
      "guest_id": null,
      "is_system_message": false,
      "text": "comment",
      "commenter_name": "Coyote 1043",
      "children_count": 0,
      "commentable_id": null,
      "commentable_type": "Project",
      "created_at": "2026-03-04T17:00:45-03:00",
      "edited_at": null,
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": null,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
    
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }

__PUT

#### /api/v1.0/comments/:id

####  Update a comment 

## Request

#### Route
    
    
    PUT /api/v1.0/comments/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "text": "New text"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments/1](https://runrun.it/api/v1.0/comments/1)" -d '{"text":"New text"}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/update_a_comment)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 678

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1044",
      "guest_id": null,
      "is_system_message": false,
      "text": "New text",
      "commenter_name": "Coyote 1044",
      "children_count": 0,
      "commentable_id": 1,
      "commentable_type": "Task",
      "created_at": "2026-03-04T17:00:46-03:00",
      "edited_at": "2026-03-04T17:00:46-03:00",
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": 1,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
    
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }

__DELETE

#### /api/v1.0/comments/:id

####  Destroy a comment 

## Request

#### Route
    
    
    DELETE /api/v1.0/comments/1

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments/1](https://runrun.it/api/v1.0/comments/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/destroy_a_comment)

#### Status
    
    
    204

#### Headers


__POST

#### /api/v1.0/comments/:id/reaction

####  Reaction to a comment 

## Request

#### Route
    
    
    POST /api/v1.0/comments/1/reaction

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "emoji": "👨"
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/comments/1/reaction](https://runrun.it/api/v1.0/comments/1/reaction)" -d '{"emoji":"👨"}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/comments/reaction_to_a_comment)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 739

#### Body
    
    
    {
      "id": 1,
      "user_id": "coyote-1048",
      "guest_id": null,
      "is_system_message": false,
      "text": "Comment text",
      "commenter_name": "Coyote 1048",
      "children_count": 0,
      "commentable_id": 1,
      "commentable_type": "Task",
      "created_at": "2026-03-04T17:00:53-03:00",
      "edited_at": null,
      "deleted_at": null,
      "thread_id": 1,
      "quoted_comment_id": null,
      "quoted_comment_text": null,
      "quoted_comment_user_id": null,
      "quoted_comment_user_name": null,
      "quoted_comment_guest_id": null,
      "quoted_comment_guest_name": null,
      "task_id": 1,
      "comment_id": null,
      "team_id": null,
      "enterprise_id": null,
      "document_id": null,
      "is_legacy": false,
      "media": null,
      "documents": [
    
      ],
      "reactions": [
        {
          "emoji": "👨",
          "count": 1,
          "users": [
            {
              "slug": "coyote-1048",
              "name": "Coyote 1048"
            }
          ]
        }
      ],
      "is_automation_message": false,
      "related_task_ids": null
    }
