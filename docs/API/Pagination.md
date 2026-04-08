#### Overview

Runrun.it API uses pagination to manage large sets of data efficiently. This section explains the use of headers and query parameters for pagination, along with a practical guide for implementation.

#### Headers

  * **X-Item-Range** : Indicates the range of items in the current response. The format is `items {first_position}-{last_position}/{total}`.
  * **Link** : Provides hypermedia links for navigation: 
    * `rel="self"`: The current page.
    * `rel="prev"`: The previous page (if applicable).
    * `rel="next"`: The next page (if available).
    * `rel="last"`: The last page in the dataset.
  * **X-Item-Without-View-Permission** (optional): Shows the count of items not viewable due to permissions.