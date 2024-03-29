import { ApiHandler } from "sst/node/api";
import { Time } from "@portfolio/core/time";

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: `Hi from SST ${Time.now()}`,
  };
});
