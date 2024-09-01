# REST API Using Express

A REST API (Representational State Transfer Application Programming Interface) is an architectural style for building web services that communicate over HTTP (Hypertext Transfer Protocol). It relies on standard HTTP methods for performing CRUD (Create, Read, Update, Delete) operations. Here’s an explanation of the key HTTP methods used in REST APIs:

## HTTP Methods

### GET
- **Purpose:** Retrieve data from the server.
- **Example:** Fetch a list of users.
- **Response:** A list of user objects.
- **Operation:** It's used to request data from a specified resource.
- **Example:** `GET /users/123` retrieves user information with the ID 123.
- **Idempotency:** Safe and idempotent, meaning repeated requests will not change the state of the server.
- **Response:** The server returns the requested resource in the response body, typically in JSON or XML format.
- **Status Codes:**
  - `200 OK` (Request successful)
  - `404 Not Found` (Resource doesn't exist)

### POST
- **Purpose:** Create a new resource on the server.
- **Example:** Add a new user.
- **Response:** The newly created user object with an assigned ID.
- **Operation:** Sends data to the server to create a new resource.
- **Example:** `POST /users` might create a new user in the database.
- **Idempotency:** Not idempotent; multiple POST requests may result in multiple resources being created.
- **Response:** The server responds with the newly created resource or an identifier for the resource.
- **Status Codes:**
  - `201 Created` (Resource successfully created)
  - `400 Bad Request` (Invalid input)

### PUT
- **Purpose:** Update an existing resource with new data.
- **Example:** Replace the user information for a specific user ID.
- **Response:** The updated user object.
- **Operation:** Sends data to update a resource at a specific URL.
- **Example:** `PUT /users/123` updates the user with the ID 123.
- **Idempotency:** Idempotent; making the same request multiple times will result in the same state.
- **Response:** Typically, the server responds with the updated resource.
- **Status Codes:**
  - `200 OK` (Request successful)
  - `204 No Content` (Request successful, no content returned)
  - `404 Not Found` (Resource doesn't exist)

### PATCH
- **Purpose:** Partially update an existing resource.
- **Example:** Update specific fields of a user's information.
- **Response:** The updated user object with the modified fields.
- **Operation:** Modifies certain fields of a resource.
- **Example:** `PATCH /users/123` updates certain attributes of the user with ID 123.
- **Idempotency:** Generally idempotent, but depends on the implementation.
- **Response:** The server responds with the updated resource or confirmation.
- **Status Codes:**
  - `200 OK` (Request successful)
  - `204 No Content` (Request successful, no content returned)

### DELETE
- **Purpose:** Remove a resource from the server.
- **Example:** Delete a user by ID.
- **Response:** A message confirming the deletion.
- **Operation:** Deletes a specified resource.
- **Example:** `DELETE /users/123` deletes the user with the ID 123.
- **Idempotency:** Idempotent; repeated DELETE requests should not result in errors if the resource has already been deleted.
- **Response:** The server typically responds with a success message or confirmation.
- **Status Codes:**
  - `200 OK` (Request successful)
  - `204 No Content` (Request successful, no content returned)
  - `404 Not Found` (Resource doesn't exist)

## Resources
- [Express Documentation](https://expressjs.com/en/guide.html)
- [MDN Web Docs - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [Video Tutorial on HTTP Methods](https://www.youtube.com/watch?v=1OjoBopM9cM)
