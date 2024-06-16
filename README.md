# Localize Phrase Search API

This project is a simple Phrase Search API built using Node.js, Express, and TypeScript. It provides endpoints to manage and search phrases with translations in multiple languages. The API allows users to search for phrases,

## Table of Contents

- [Localize Phrase Search API](#localize-phrase-search-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Base API URL](#base-api-url)
    - [GET /phrase/{id}](#get-phraseid)
    - [GET /phrase/{id}/{language}](#get-phraseidlanguage)
    - [GET /phrase/search](#get-phrasesearch)
  - [Running Tests](#running-tests)
  - [Notes](#notes)
  - [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mdefeo/localize.phrase.api.git
   cd localize.phrase.api
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm start
   ```

The API server will be running on `http://localhost:3000`.

## Usage

The API provides the following endpoints:

### Base API URL

[http://localhost:3000/api/](http://localhost:3000/api/)

### GET /phrase/{id}

Returns a phrase object without translations.

**Request:**

```sh
GET /phrase/1
```

**Response:**

```json
{
  "id": 1,
  "phrase": "Hi, I’m a phrase",
  "status": "active",
  "createdAt": "2024-05-23T15:58:35+00:00",
  "updatedAt": "2024-05-23T15:58:35+00:00"
}
```

### GET /phrase/{id}/{language}

Returns a translation of a phrase in the specified language.

**Request:**

```sh
GET /phrase/1/fr
```

**Response:**

```json
{
  "translation": "Salut, je suis une phrase"
}
```

### GET /phrase/search

Returns phrases that contain the search text, optionally filtered by status, and sorted by a specified field.

**Request:**

```sh
GET /phrase/search?query=Hi&status=active
```

**Response:**

```json
[
  {
    "id": 1,
    "phrase": "Hi, I’m a phrase",
    "status": "active",
    "createdAt": "2024-05-23T15:58:35+00:00",
    "updatedAt": "2024-05-23T15:58:35+00:00"
  }
]
```

## Running Tests

To run the tests, use the following command:

```sh
npx jest
```

This will run the unit tests and integration tests for the API.

## Notes

- Main is the only branch created for this challenge
- Created/Updated dates in data file are all the same
- Google Translate used to translate phrases
- Search route is defined first so it is not hijacked by ID endpoint
  - Regex could also be used but, for the purposes of this coding challenge, I have simply reordered it
- Testing done in Postman
- ChatGPT used to generate base README template

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
