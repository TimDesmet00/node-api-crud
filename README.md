# node-api-crud
exercice pour m'entrainer a faire une API en Node.js

## route

| table | fonction | path | données |
| :----: | :----: | :----:| :----: |
| pokemon | get | http://localhost:5000/pokemons | aucune |
| pokemon | get | http://localhost:5000/pokemons/"id" | aucune |
| pokemon | post | http://localhost:5000/pokemons | {  name:"string", hp:"int", cp:"int", picture:"string", types:"array" |
| pokemon | put | http://localhost:5000/pokemons/"id" | {  name:"string", hp:"int", cp:"int", picture:"string", types:"array" |
| pokemon | delete | http://localhost:5000/pokemons/"id" | aucune |
| users | get | http://localhost:5000/users | aucune |
| users | get | http://localhost:5000/users/"id" | aucune |
| users | post | http://localhost:5000/users | username:"string", email:"string", password:"string", biography:"string", picture:"string" |
| users | put | http://localhost:5000/users/"id" | username:"string", email:"string", password:"string", biography:"string", picture:"string" |
| users | delete | http://localhost:5000/users/"id" | aucune |
| users | patch | http://localhost:5000/users/add-favorite/"id" | types:"sting array" |
| users | patch | http://localhost:5000/users/remove-favorite/"id" | types:"sting array" |