import { createServer, Model } from "miragejs";

type Continent = {
  name: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/continents");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
