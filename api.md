# Tasks By Group API

## Overview

This API was created to keep track of all your tasks. Each task is categorized by a group and includes a description as well as any other tasks that it depends on being completed first.

## Endpoints

## `GET`

*  **URL**
  localhost:3000/tasks

  *   **URL Params**
    Optional:
   `id=[integer]`

  * **Success Response:**
    * **Code:** 200 <br />
      **Content:** 
    ```json
    [{
        "id": 7,
        "group": "Build Airplane",
        "task": "Paint wings",
        "dependencyIds": [
          5,
          6
        ],
        "completedAt": null
      }]
    ```

   * **Error Response:**
      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Task id does not exist" }`

## `POST`

  *  **URL**
  localhost:3000/tasks

  * **Success Response:**
    * **Code:** 201 <br />
      **Content:** 
    ```json
    {
      "id": 8,
      "group": "Build Airplane",
      "task": "Have a snack",
      "dependencyIds": [],
      "completedAt": null
    }
    ```

   * **Error Response:**
      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Must have group, task, and list any dependencies" }`
        
## `PATCH`

  *  **URL**
  localhost:3000/tasks/:id

  *   **URL Params**
    Required:
   `id=[integer]`

  * **Success Response:**
    * **Code:** 200 <br />
      **Content:** 
    ```json
    {
      "id": 8,
      "group": "Build Airplane",
      "task": "Have lots of snacks",
      "dependencyIds": [],
      "completedAt": null
    }
    ```

   * **Error Response:**
      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Must include id of task and fields to update" }`


        
        
## `DELETE`

  *  **URL**
  localhost:3000/tasks/:id

  *   **URL Params**
    Required:
   `id=[integer]`

  * **Success Response:**
    * **Code:** 200 <br />
      **Content:** 
    ```json
    {
      "id": 8,
      "group": "Build Airplane",
      "task": "Have lots of snacks",
      "dependencyIds": [],
      "completedAt": null
    }
    ```

   * **Error Response:**
      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Task id does not exist" }`