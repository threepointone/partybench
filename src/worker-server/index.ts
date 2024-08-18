export default {
  async fetch(request, env) {
    return new Response("worker");
  },
} satisfies ExportedHandler<{}>;
