# About

This project was done as an interview project for Lumiformapp.

The project is composed of the frontend project, and the backend project.

You can check out the backend project here: https://github.com/CharlieBrownCharacter/lumiform-app-backend

# Pre requisites to run this project

- Have docker installed (https://docs.docker.com/get-docker/)
- Have docker compose installed (https://docs.docker.com/compose/install/)
- Have backend project up and running: https://github.com/CharlieBrownCharacter/lumiform-app-backend/blob/create-app/README.md

# How to run this project

To run the frontend project you will need to clone the repository:

```
git clone git@github.com:CharlieBrownCharacter/lumiform-app-frontend.git && cd lumiform-app-frontend && git checkout create-app
```

After that you will need to up the `app` container with the following command:

```
docker-compose up app
```

After build is done just visit `localhost:9191` and you will see the project up and running

# Linting

You can lint the project using the following command

```
docker-compose run --rm app npm run lint
```

# Testing
## Unit testing
To be able to run the unit tests you will have to run

```
docker-compose run --rm app npm run test:unit
```

## E2E testing

To run the E2E testing you should run:

```
docker-compose run --rm test_e2e && docker-compose down
```

Even though the container is up and running the tests that make requests to the backend will fail.
My best assumption is that since they are in a different network the variable `VUE_APP_BACK_END_API` should
be changed to `app (or backend container name)`. I have tried changing the variable but wasn't capable of making it work.

# Running into problems

If you run into problems fell free to email me at `bruno11.francisco@gmail.com`
