import { Server, routePartykitRequest } from "partyserver";

type Env = {
  bench: DurableObjectNamespace<Bench>;
};

export class Bench extends Server<Env> {
  async onRequest(request: Request): Promise<Response> {
    return new Response("party");
  }
}

export default {
  async fetch(request, env) {
    return (
      (await routePartykitRequest(request, env)) ||
      new Response("Not Found", { status: 404 })
    );
  },
} satisfies ExportedHandler<Env>;
