# localize.phrase.api

## Steps used

### Initial setup

1. Initialize Node app
   1. (npm init -y)
2. Install Express and dev dependencies
   1. npm i express
   2. npm i --save-dev typescript ts-node @types/node @types/express
3. Create TypeScript config file (tsconfig.json)
4. Create source directory and cd into it (src)
5. Create files in src directory (index.ts, data.ts, routes.ts)
6. Add start script to package file

### Second commit

1. Write to TS config file
   1. Define directories, etc.
2. Create data file
3. Create index file
4. Create skeleton routes file

### Third commit

1. Create routes/endpoints

### Fourth commit

## Notes

- Main is the only branch created for this challenge
- Created/Updated dates in data file are all the same
- Google Translate used to translate phrases
- Search route is defined first so it is not hijacked by ID endpoint
  - Regex could also be used but, for the purposes of this coding challenge, I have simply reordered it
- Testing done in Postman