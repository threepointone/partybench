## partybench

Some scripts for benchmarking partyserver/durable objects.

Each folder under `src/` contains a different benchmarking scenario.

- `index.ts` that defines a worker
- `wrangler.toml` for configuration
- `load.yml` for artillery load testing
- `results.txt` with a results for a run

The folders:

- `worker-server` is a simple worker
- `plain-server` is a Durable Object
- `party-server` is a Durable Object defined with partyserver

You can run a becnhmark by running `artillery run load.yml` in the folder of the scenario you want to test.

Results:

- [`worker-server`](/src/worker-server/results.txt)
- [`plain-server`](/src/plain-server/results.txt)
- [`party-server`](/src/party-server/results.txt)
