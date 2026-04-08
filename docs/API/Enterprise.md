__GET

#### /api/v1.0/enterprises/:id

####  Show details for requesting user's enterprise 

## Request

#### Route
    
    
    GET /api/v1.0/enterprises/acme-458

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### cURL
    
    
    curl -g "[https://runrun.it/api/v1.0/enterprises/acme-458](https://runrun.it/api/v1.0/enterprises/acme-458)" -X GET \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/enterprises/show_details_for_requesting_user's_enterprise)

#### Response Fields

Name | Description | type  
---|---|---  
id  | ID of enterprise | string  
name  | Name of enterprise | string  
avatar_url  | Enterprise avatar url | url  
phone  | Enterprise phone | string  
country  | Enterprise country | string  
company_size  | Enterprise size | string  
company_sector  | Enterprise sector | string  
attachments_sum  | Total size of all stored documents in bytes | float  
total_users_sum  | Total of users in account | integer  
total_guests_sum  | Total of guests in account | integer  
remaining_attachment_space  | Total space remaining for documents in bytes | float  
logo_url  | Logo of enterprise | string  
alt_id  | Constant size ID (internal use only) | string  
oid  | Constant size ID (internal use only) | string  
support_phone  | Call this number to contact Runrun.it | string  
trial_days_left  | Days left to the date of trial period end, if it's a trial plan | date  
disabled_reason  | Why account is disabled | string  
disabled_at  | Disabled date | datetime  
currency_symbol  | Currency symbol (ISO 4217) | string  
created_at  | Enterprise creation date | datetime  
master_user_id  | ID of the account creator | string  
using_temporary_edition  | Is enterprise using a temporary edition in subscription? | boolean  
temporary_edition_expiration  | Date when the temporary edition will expire | datetime  
signup_completed  | True if signup completed | boolean  
signup_qualified  | True if signup qualified | boolean  
time_zone  | Enterprise time zone | string  
language  | Enterprise language | string  
should_see_promo_modal  | True if Enterprise should see promo modal (internal use only) | boolean  
master_user_position  | Enterprise master user position | string  
subscription_expiration_date  | Internal use only | date  
invite_user_link_code  | Internal use only | string  
is_beta_tester  | Internal use only | boolean  
trial_triggered_by  | Name of the feature that triggered the trial plan | string  
allow_ignore_board_dashboard_limitations  | Allow ignore board dashboard limitations | boolean  
default_board_id  | Internal use only | integer  
use_board_feature  | Internal use only | boolean  
optional_use_board_feature  | Internal use only | boolean  
plan[id]  | ID of plan | integer  
plan[name_pt]  | Plan name in Portuguese | string  
plan[name_en]  | Plan name in English | string  
plan[name_es]  | Plan name in Spanish | string  
plan[max_storage]  | Total available size for documents in bytes | float  
plan[max_users]  | Total number of users which can be active | integer  
plan[max_guests]  | Total number of guests which can be active | integer  
plan[max_open_tasks]  | Limit of open tasks in the account | integer  
plan[max_assignees_per_task]  | Limit of assignees per task | integer  
plan[max_boards]  | Limit of boards in account | integer  
plan[max_widgets_per_dashboard]  | Limit of widgets per dashboard | integer  
plan[max_widgets_per_boards_dashboard]  | Limit of widgets per boards dashboard | integer  
plan[max_document_size]  | Max size in bytes for documents | float  
plan[max_period_days]  | Max period days | integer  
plan[is_free]  | Is a free plan? | boolean  
plan[is_trial]  | Is a trial plan? | boolean  
plan[can_use_mobile]  | Can use mobile? | boolean  
plan[category]  | Plan category | string  
plan[is_eligible_for_temporary_edition]  | Plan eligibility for temporary edition | boolean  
  
#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3372

#### Body
    
    
    {
      "id": "acme-458",
      "name": "Acme 458",
      "avatar_url": "/static/images/enterprise-avatar-fallback.png",
      "phone": null,
      "country": null,
      "company_size": "666",
      "company_sector": "technology",
      "attachments_sum": 0.0,
      "total_users_sum": 1,
      "total_guests_sum": 0,
      "remaining_attachment_space": 858993459200.0,
      "logo_url": "",
      "alt_id": "2aff8b415046c1d40d4bfaca01bd0289",
      "oid": "49537adb9",
      "support_phone": "+55 11 2769-9713",
      "trial_days_left": 30,
      "disabled_reason": null,
      "disabled_at": null,
      "currency_symbol": "USD",
      "created_at": "2026-03-04T16:58:44-03:00",
      "master_user_id": "coyote-729",
      "using_temporary_edition": false,
      "temporary_edition_expiration": null,
      "signup_completed": false,
      "signup_qualified": false,
      "time_zone": "America/Sao_Paulo",
      "language": "en-GB",
      "should_see_promo_modal": false,
      "master_user_position": null,
      "subscription_expiration_date": "2026-04-03",
      "invite_user_link_code": null,
      "is_beta_tester": false,
      "trial_triggered_by": [
    
      ],
      "allow_ignore_board_dashboard_limitations": false,
      "default_board_id": null,
      "use_board_feature": true,
      "optional_use_board_feature": true,
      "plan": {
        "id": 1,
        "name_pt": "Plano Teste",
        "name_en": "Plan Trial",
        "name_es": null,
        "max_storage": 858993459200.0,
        "max_users": 100,
        "max_guests": 10,
        "max_open_tasks": null,
        "max_assignees_per_task": null,
        "max_boards": null,
        "max_widgets_per_dashboard": null,
        "max_widgets_per_boards_dashboard": 36,
        "max_document_size": null,
        "max_period_days": null,
        "is_free": false,
        "is_trial": true,
        "can_use_mobile": true,
        "category": "trial",
        "is_eligible_for_temporary_edition": false
      },
      "configuration": {
        "permitted_user_inviters": "everybody",
        "new_users_mutual_partners_by_default": true,
        "use_project_group_level": false,
        "use_project_sub_group_level": false,
        "only_admins_can_delete_tasks": false,
        "only_partners_can_be_mentioned": false,
        "only_partners_can_be_added_as_followers": false,
        "use_bulletin": true,
        "is_rating_public": true,
        "extra_users": 0,
        "custom_max_guests": null,
        "comment_document_change_window": 900,
        "use_block_user_by_time_worked_min": false,
        "use_block_user_by_time_worked_max": false,
        "block_user_by_time_worked_percentage_min": 50,
        "block_user_by_time_worked_percentage_max": 100,
        "use_advanced_password_policy": false,
        "optional_use_new_permissions": false,
        "use_board_lead_time_to_estimate": true,
        "deliver_task_after_last_assignment_delivery": true,
        "use_project_rr_board": false,
        "feature_task_list_sort_by_priority": true,
        "allow_create_tasks_without_project": true,
        "allow_resource_sharing": true,
        "allow_whatsapp_integration": false,
        "request_time_adjust_on_task_assignment_deliver": false,
        "use_scrum": false,
        "allow_everyone_to_create_portals": true,
        "allow_everyone_to_manage_tags": false,
        "allow_change_descendant_tasks_dates_automatically": true,
        "block_documents_creation": false,
        "allow_everyone_to_perform_batch_actions": true,
        "time_tracking_mode": "manual",
        "factor_for_delivered_tasks": 1,
        "factor_for_reopened_tasks": -2,
        "factor_for_delivered_tasks_on_estimated_time": 2,
        "factor_for_tasks_with_no_more_than_2_estimates": 1,
        "factor_for_delivered_tasks_on_desired_date": 1,
        "factor_for_tasks_created": 1,
        "factor_for_tasks_involved": 1,
        "allow_comments_reply_by_email": true,
        "allow_everyone_to_create_boards": true,
        "allow_avatar_change": true,
        "batch_actions_enabled": true,
        "manual_work_period_change_window": null,
        "use_forms_to_create_tasks": false,
        "use_time_worked": true,
        "use_task_effort": true,
        "use_rr_rating": true,
        "use_gantt": true,
        "use_client_project": true,
        "guest_use_rr_footer": true,
        "allow_create_new_task_emails": true
      }
    }

__PUT

#### /api/v1.0/enterprises/:id

####  Update enterprise 

## Parameters

Name | Description | type  
---|---|---  
enterprise[id] required | ID of enterprise | string  
  
## Request

#### Route
    
    
    PUT /api/v1.0/enterprises/acme-459

#### Headers
    
    
    App-Key: 1a219437eab893dc115509bb85e06d77
    User-Token: 9flMUzLxQtxohKGZjU5
    Content-Type: application/json
    Host: example.org

#### Body
    
    
    {
      "enterprise": {
        "name": "New name"
      }
    }

#### cURL
    
    
    curl "[https://runrun.it/api/v1.0/enterprises/acme-459](https://runrun.it/api/v1.0/enterprises/acme-459)" -d '{"enterprise":{"name":"New name"}}' -X PUT \
    	-H "Version: HTTP/1.0" \
    	-H "App-Key: 1a219437eab893dc115509bb85e06d77" \
    	-H "User-Token: 9flMUzLxQtxohKGZjU5" \
    	-H "Content-Type: application/json"

## Response

[Simulated Response](/api/documentation/simulate/enterprises/update_enterprise)

#### Status
    
    
    200

#### Headers
    
    
    Content-Type: application/json; charset=utf-8
    Content-Length: 3372

#### Body
    
    
    {
      "id": "acme-459",
      "name": "New name",
      "avatar_url": "/static/images/enterprise-avatar-fallback.png",
      "phone": null,
      "country": null,
      "company_size": "666",
      "company_sector": "technology",
      "attachments_sum": 0.0,
      "total_users_sum": 1,
      "total_guests_sum": 0,
      "remaining_attachment_space": 858993459200.0,
      "logo_url": "",
      "alt_id": "0c785ded54d67b81f0061f63e21cf31a",
      "oid": "49537adb9",
      "support_phone": "+55 11 2769-9713",
      "trial_days_left": 30,
      "disabled_reason": null,
      "disabled_at": null,
      "currency_symbol": "USD",
      "created_at": "2026-03-04T16:58:45-03:00",
      "master_user_id": "coyote-730",
      "using_temporary_edition": false,
      "temporary_edition_expiration": null,
      "signup_completed": false,
      "signup_qualified": false,
      "time_zone": "America/Sao_Paulo",
      "language": "en-GB",
      "should_see_promo_modal": false,
      "master_user_position": null,
      "subscription_expiration_date": "2026-04-03",
      "invite_user_link_code": null,
      "is_beta_tester": false,
      "trial_triggered_by": [
    
      ],
      "allow_ignore_board_dashboard_limitations": false,
      "default_board_id": null,
      "use_board_feature": true,
      "optional_use_board_feature": true,
      "plan": {
        "id": 1,
        "name_pt": "Plano Teste",
        "name_en": "Plan Trial",
        "name_es": null,
        "max_storage": 858993459200.0,
        "max_users": 100,
        "max_guests": 10,
        "max_open_tasks": null,
        "max_assignees_per_task": null,
        "max_boards": null,
        "max_widgets_per_dashboard": null,
        "max_widgets_per_boards_dashboard": 36,
        "max_document_size": null,
        "max_period_days": null,
        "is_free": false,
        "is_trial": true,
        "can_use_mobile": true,
        "category": "trial",
        "is_eligible_for_temporary_edition": false
      },
      "configuration": {
        "permitted_user_inviters": "everybody",
        "new_users_mutual_partners_by_default": true,
        "use_project_group_level": false,
        "use_project_sub_group_level": false,
        "only_admins_can_delete_tasks": false,
        "only_partners_can_be_mentioned": false,
        "only_partners_can_be_added_as_followers": false,
        "use_bulletin": true,
        "is_rating_public": true,
        "extra_users": 0,
        "custom_max_guests": null,
        "comment_document_change_window": 900,
        "use_block_user_by_time_worked_min": false,
        "use_block_user_by_time_worked_max": false,
        "block_user_by_time_worked_percentage_min": 50,
        "block_user_by_time_worked_percentage_max": 100,
        "use_advanced_password_policy": false,
        "optional_use_new_permissions": false,
        "use_board_lead_time_to_estimate": true,
        "deliver_task_after_last_assignment_delivery": true,
        "use_project_rr_board": false,
        "feature_task_list_sort_by_priority": true,
        "allow_create_tasks_without_project": true,
        "allow_resource_sharing": true,
        "allow_whatsapp_integration": false,
        "request_time_adjust_on_task_assignment_deliver": false,
        "use_scrum": false,
        "allow_everyone_to_create_portals": true,
        "allow_everyone_to_manage_tags": false,
        "allow_change_descendant_tasks_dates_automatically": true,
        "block_documents_creation": false,
        "allow_everyone_to_perform_batch_actions": true,
        "time_tracking_mode": "manual",
        "factor_for_delivered_tasks": 1,
        "factor_for_reopened_tasks": -2,
        "factor_for_delivered_tasks_on_estimated_time": 2,
        "factor_for_tasks_with_no_more_than_2_estimates": 1,
        "factor_for_delivered_tasks_on_desired_date": 1,
        "factor_for_tasks_created": 1,
        "factor_for_tasks_involved": 1,
        "allow_comments_reply_by_email": true,
        "allow_everyone_to_create_boards": true,
        "allow_avatar_change": true,
        "batch_actions_enabled": true,
        "manual_work_period_change_window": null,
        "use_forms_to_create_tasks": false,
        "use_time_worked": true,
        "use_task_effort": true,
        "use_rr_rating": true,
        "use_gantt": true,
        "use_client_project": true,
        "guest_use_rr_footer": true,
        "allow_create_new_task_emails": true
      }
    }