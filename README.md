# job-search-api

> **Archived learning-era repo (2022).** Preserved as evidence of self-taught Node.js backend work during 2019-2022. Not maintained. For current work see [aman-bhandari](https://github.com/aman-bhandari).

A REST API for tracking job applications. User registers, logs in, gets a JWT, and then CRUDs their own job records.

## What's in it

- **Auth** — register / login with `bcryptjs` hashing + `jsonwebtoken` issuance. `middleware/authentication.js` verifies the token on every protected route.
- **Jobs CRUD** — `POST /jobs`, `GET /jobs`, `GET /jobs/:id`, `PATCH /jobs/:id`, `DELETE /jobs/:id`. Scoped to the authenticated user.
- **Validation** — `joi` schemas at the controller boundary; Mongoose schema-level validation at the model layer.
- **Security middleware** — `helmet`, `cors`, `xss-clean`, `express-rate-limit`.
- **Error handling** — custom error classes (`errors/`) + centralized `error-handler.js` middleware.
- **API docs** — Swagger UI served at `/api-docs` via `swagger-ui-express` + `swagger.yaml`.

## Stack

Node.js, Express 4, Mongoose 6, MongoDB, JWT, bcryptjs, Joi, Helmet, express-rate-limit, Swagger.

## Project shape

```
app.js
controllers/    auth.js, jobs.js
routes/         auth.js, jobs.js
models/         User.js, Job.js
middleware/     authentication.js, error-handler.js, not-found.js
errors/         custom error classes
db/             connect.js (Mongoose connection)
swagger.yaml    OpenAPI spec
```

## Run locally

```bash
npm install
# create .env with:
#   MONGO_URI=<mongodb-connection-string>
#   JWT_SECRET=<secret>
#   JWT_LIFETIME=30d
npm start
```

## Iteration history

19 commits between 2022-09-12 and 2022-11-25 (~2.5 months of iterative work while self-teaching Node.js backend development).

## Why this is archived

This repo is from the 2019-2022 self-taught period before I joined my current team. It shipped to Render at `aman-jobs-api.onrender.com` and worked end to end. The code reflects what I knew at the time; current standards (see [aman-bhandari pinned repos](https://github.com/aman-bhandari)) look different. The repo is kept public and archived as evidence of the iterative backend work that bridged 2019-2022.
