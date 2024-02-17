import { SSTConfig } from "sst";
import { Web } from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "portfolio",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(Web);
  },
} satisfies SSTConfig;
