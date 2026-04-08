__GET
#### /api/v1.0/tasks/:task_id/documents

####  List all documents uploaded to a task 

Only includes files which have been successfully uploaded. Any files still in the process of being uploaded will not be returned

## Request

#### Route
    
    
    GET /api/v1.0/tasks/1/documents

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/tasks/1/documents](https://runrun.it/api/v1.0/tasks/1/documents)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/documents/list_all_documents_uploaded_to_a_task)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 631

#### Body
    [
      {
        "id": 1,
        "type": "UploadedDocument",
        "data_file_name": "awesome_report_5.txt",
        "data_file_size": 10,
        "data_content_type": "text/plain",
        "file_name": "awesome_report_5.txt",
        "file_size": 10,
        "file_content_type": "text/plain",
        "file_extension": "txt",
        "uploaded_at": "2026-03-04T16:53:49-03:00",
        "transfered": true,
        "uploader_id": "coyote-104",
        "uploader_name": "Coyote 104",
        "attachable_id": 1,
        "attachable_type": "Task",
        "attachable_name": "Bla 3",
        "thumbnail_file_name": null,
        "preview_file_name": null,
        "is_shared": false,
        "tags_data": [
    
        ],
        "has_approval_request": false,
        "field_label": null,
        "task_email_id": null,
        "remote_id": null,
        "remote_icon_url": null,
        "evaluations": [
    
        ]
      }
    ]

__GET

#### /api/v1.0/documents/:id

####  Show a document 

## Request

#### Route
    GET /api/v1.0/documents/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl -g "[https://runrun.it/api/v1.0/documents/1](https://runrun.it/api/v1.0/documents/1)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/documents/show_a_document)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of document | integer  
type  | Subclass of Document | string  
data_file_name  | Name of the document | string  
data_file_size  | Size in bytes | integer  
data_content_type  | MIME type of file | string  
file_name  | Name of the document | string  
file_size  | Size in bytes | integer  
file_content_type  | MIME type of file | string  
file_extension  | Document's extension | string  
uploaded_at  | Datetime when file was uploaded | datetime  
transfered  | Whether the file has be successfully uploaded to the cloud | boolean  
uploader_id  | ID of the user who uploaded the file | string  
uploader_name  | Name of the user who uploaded the file | string  
attachable_id  | To which resource id this document belongs to | string  
attachable_type  | To which resource type this document belongs to | string  
attachable_name  | Name of the attachable | string  
thumbnail_file_name  | Name of the thumbnail | string  
preview_file_name  | Name of the preview | string  
is_shared  | True if the document is shared | boolean  
tags_data  | Tags associated with the document | array  
has_approval_request  | True if the document has an approval request | boolean  
field_label  | Label of the field associated with the document | string  
task_email_id  | ID of task email | integer  
remote_id  | ID of file on third party storage provider | string  
remote_icon_url  | URL to icon for file on third party storage | string  
  
#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 629

#### Body
    {
      "id": 1,
      "type": "UploadedDocument",
      "data_file_name": "awesome_report_8.txt",
      "data_file_size": 10,
      "data_content_type": "text/plain",
      "file_name": "awesome_report_8.txt",
      "file_size": 10,
      "file_content_type": "text/plain",
      "file_extension": "txt",
      "uploaded_at": "2026-03-04T16:53:53-03:00",
      "transfered": true,
      "uploader_id": "coyote-113",
      "uploader_name": "Coyote 113",
      "attachable_id": 1,
      "attachable_type": "Task",
      "attachable_name": "Bla 6",
      "thumbnail_file_name": null,
      "preview_file_name": null,
      "is_shared": false,
      "tags_data": [
    
      ],
      "has_approval_request": false,
      "field_label": null,
      "task_email_id": null,
      "remote_id": null,
      "remote_icon_url": null,
      "evaluations": [
      ]
    }

__GET

#### /api/v1.0/documents/:id/download

####  Download a document 

__GET

#### /api/v1.0/documents/:id/thumbnail

####  Download a document thumbnail 

__GET

#### /api/v1.0/documents/:id/preview

####  Download a document preview 

__POST

#### /api/v1.0/tasks/:task_id/documents

####  Create a document 

Creates a document record and returns the data needed to successfully upload the associated file to Amazon S3.

More information on how to upload a file can be found [here]([https://github.com/Runrunit/api_examples](https://github.com/Runrunit/api_examples)).

## Parameters

Name | Description | type  
---|---|---  
document[data_file_name] required | Name of the document | string  
document[data_file_size] required | Size in bytes | integer  
  
## Request

#### Route
    POST /api/v1.0/tasks/1/documents

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    {
      "document": {
        "data_file_name": "example.txt",
        "data_file_size": 4096
      }
    }

#### cURL
    curl "[https://runrun.it/api/v1.0/tasks/1/documents](https://runrun.it/api/v1.0/tasks/1/documents)" -d '{"document":{"data_file_name":"example.txt","data_file_size":4096}}' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/documents/create_a_document)

#### Response Fields

Name | Description | type  
---|---|---  
fields  | List of key/value pairs which need to be sent to Amazon S3 in the POST request | object  
  
#### Status
    201

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 1362

#### Body
    {
      "id": 1,
      "type": "UploadedDocument",
      "data_file_name": "example.txt",
      "data_file_size": 4096,
      "data_content_type": "text/plain",
      "file_name": "example.txt",
      "file_size": 4096,
      "file_content_type": "text/plain",
      "file_extension": "txt",
      "uploaded_at": null,
      "transfered": false,
      "uploader_id": "coyote-121",
      "uploader_name": "Coyote 121",
      "attachable_id": 1,
      "attachable_type": "Task",
      "attachable_name": "Bla 10",
      "thumbnail_file_name": null,
      "preview_file_name": null,
      "is_shared": false,
      "tags_data": [],
      "has_approval_request": false,
      "field_label": null,
      "task_email_id": null,
      "remote_id": null,
      "remote_icon_url": null,
      "evaluations": [],
      "fields": {
        "key": "data/enterprise/1/1/example.txt",
        "Policy": "eyJleHBpcmF0aW9uIjoiMjAyNi0wMy0wNFQyMDo1Mzo1NloiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJydW5ydW5pdC1kZXYifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIiJdLFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTM2ODcwOTEyMF0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifSx7IngtYW16LWFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IngtYW16LWNyZWRlbnRpYWwiOiJBQkNERUZHSElKS0xNTk9QUVJTVC8yMDI2MDMwNC9zYS1zYW9wYXVsby0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotZGF0ZSI6IjIwMjYwMzA0VDE5NTM1NloifV19",
        "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
        "X-Amz-Credential": "ABCDEFGHIJKLMNOPQRST/20260304/sa-saopaulo-1/s3/aws4_request",
        "X-Amz-Date": "20260304T195356Z",
        "X-Amz-Signature": "574c6e96ca2fe64e34d5f21885e2d24932f4b38785a6fde5762417844bf1574a",
        "success_action_status": "201"
      }
    }

__POST
#### /api/v1.0/documents/:id/mark_as_uploaded

####  Update the transfered status of a document 

## Request

#### Route
    POST /api/v1.0/documents/1/mark_as_uploaded

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/documents/1/mark_as_uploaded](https://runrun.it/api/v1.0/documents/1/mark_as_uploaded)" -d '' -X POST \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/documents/update_the_transfered_status_of_a_document)

#### Status
    200

#### Headers
    Content-Type: application/json; charset=utf-8
    Content-Length: 614

#### Body
    {
      "id": 1,
      "type": "UploadedDocument",
      "data_file_name": "document.txt",
      "data_file_size": 10,
      "data_content_type": "text/plain",
      "file_name": "document.txt",
      "file_size": 10,
      "file_content_type": "text/plain",
      "file_extension": "txt",
      "uploaded_at": "2026-03-04T16:54:01-03:00",
      "transfered": true,
      "uploader_id": "coyote-131",
      "uploader_name": "Coyote 131",
      "attachable_id": 1,
      "attachable_type": "Task",
      "attachable_name": "Bla 14",
      "thumbnail_file_name": null,
      "preview_file_name": null,
      "is_shared": false,
      "tags_data": [
    
      ],
      "has_approval_request": false,
      "field_label": null,
      "task_email_id": null,
      "remote_id": null,
      "remote_icon_url": null,
      "evaluations": []
    }

__DELETE
#### /api/v1.0/documents/:id

####  Destroy a document 

Deleting a document is only possible by the original creator and may only be an option for a limited amount of time. Deleting a document will also delete the file from the cloud storage. It is NOT recoverable.

## Request

#### Route
    DELETE /api/v1.0/documents/1

#### Headers
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    curl "[https://runrun.it/api/v1.0/documents/1](https://runrun.it/api/v1.0/documents/1)" -d '' -X DELETE \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/documents/destroy_a_document)

#### Status
    204

#### Headers

__GET
#### /api/v1.0/documents/download_zip

####  Download multiple documents as zip 

This endpoint will generate a temporary key and redirect you to the download service's URL.

## Parameters

Name | Description  
---|---  
ids  | List of document's ids to download
