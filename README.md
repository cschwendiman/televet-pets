# TeleVet Full Stack Project

### How to Run

First run the api server:

```
cd api
npm install
PORT=3001 node bin/www;
```

Then startup the React app server:
```
cd ../app
npm install
npm run start
```

You should be able to make api calls to localhost:3001 and access the app at localhost:3000

### Project Requirements

##### Node.js API Endpoints

The two endpoints we require are as follows:

1. GET /pets
  1. Fetch list of pets with pagination
  2. Pets should be sorted by id
  3. It should default to 10 pets per page
  4. 
  ```
  {
    “pets”: [],
    ...
  }
  ```
2. GET /pet/{id}
  1. Fetch a specific pet as a JSON object
  2. 
  ```
  {
    “id”: 1,
    “name”: “...”,
    ...
  }
  ```

##### ReactJS Frontend App

These are the minimal requirements for this part of the exercise. You are free to take whatever approach you want and add more if you like. The minimal requirements are as follows:

1. Display a table list of all Pets
  1. the table shows two columns: id, name
  2. should be paginated to 10 pets
  3. provide sorting capabilities on the column heads
  4. allow searching by name
2. The names of the Pets are clickable, clicking on them allows you to see details of the Pet 
  1. id
  2. name 
  3. weight 
  4. height

### Outstanding TODOs

1. Use a SQL backend for the API. I'm doing all sorts of terrible sorting and paging on the fly by pulling the whole data set into memory and doing it with JS. I've never set up a database with node before so I decided to keep it simple for now. All of the sorting and paging should really be done with SQL though.
2. I used a denormalized data model from the original data given. This is how I'm used to seeing data from Rest APIs. However, it became an issue with pagination because I had no way of telling how many pages there are. I either need to switch back to the original data model and add some metadata, or use a combined approach that nests the pets under a 'pets' attribute and also add some metadata.
3. /pets should not return all the data about a pet, it's unecessary
4. Style updates
4. Write some tests!

### Attributions

I followed https://daveceddia.com/create-react-app-express-backend/ to help me quickly get a react + node/express project set up. I don't have experience with express so I needed help getting it configured.
