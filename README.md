![Build Status](https://travis-ci.org/pierr/chat-api.svg)

## Purpose

Have a chat api

## Install

- Clone the repository
- Be sure to have [nodejs](https://nodejs.org/en/) installed
- Go into the repository
- Run `npm install`

> The app should start and init the db

## Dependencies

- express
- sequelize

## How I proceed

- A db and a user schema
- A unit test on a request
- A build travis
- A first route with the user
- Add room and all room routes
- Add create and delete a room

## What I could have done

- The association between the tow
- A many to many association between user and room for the user of a room
- A one to many association between the user and the room, for the moderator
- The admin role would have been done with the login
- To use the role depending on the logged user, I would have use a token inside the request with a middleware on each request
- The app should be deployed on heroku

> I think the structure and the test structure is here
> I list what I could have done with more time, which would have been quite easy...
> I do this in 1 hour on monday and maybe 1,5 hour on tuesday and half an hour this morning.
