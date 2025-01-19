import { Hono } from "hono";
import ConnectDatabase from "./utilites/database";
import logger from "./utilites/logger";
const app = new Hono();
export default app; // so we can use it in routes n shit

const port = 3551;
Bun.serve({
    fetch: app.fetch,
    port: port,
    development: false,
}); //serve with bun

logger.info(`TemplePublic listening on ${port}`);
await ConnectDatabase();