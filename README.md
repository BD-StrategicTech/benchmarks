# Fastify Benchmarking

This is a custom configuration of the fastify benchmark repo to test some more specific needs.

You can find the original in all its glory here: https://github.com/fastify/benchmarks

The goal is to run some postgres testing against geo payloads to verify the speed metrics hold up.

Frameworks tested:

- Bare Node
- Connect
- Express
  - Express using Router & Prefix
- Fastify
  - Fastify using the big json package
- Hapi
- Koa
  - Koa using koa-router
- Restify

## Important Notes

It seems like `koa` is unable to handle more than a single pipeline http

It also seems like this might be an issue when using the `express.Router()` with a prefix however this is less of an issue.

With those limitations said, you should run the benchmarks with only a single http pipeline if you want to include Koa Or express router prefix within the test.


## Usage

- Clone the Repo
- `cd` into the cloned directory
- Run `npm i`
- Run `npm start`
- Choose your options
- ???
- Profit

## TODO

- Actually plug in the Postgres system and connect it to the appropriate parties for the benchmark
