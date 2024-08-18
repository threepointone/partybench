import { DurableObject } from "cloudflare:workers";

type Env = {
  bench: DurableObjectNamespace<Bench>;
};

export class Bench extends DurableObject {
  async fetch(request: Request): Promise<Response> {
    return new Response("plain");
  }
}

export default {
  async fetch(request, env) {
    const id = env.bench.idFromName("bench");
    const stub = env.bench.get(id);
    const response = await stub.fetch(request);
    return response;
  },
} satisfies ExportedHandler<Env>;
