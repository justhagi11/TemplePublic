import { Hono } from "hono"; import ConnectDatabase from "./utilites/database"; import logger from "./utilites/logger";

const app = new Hono(); export default app;
const port = 3551;

Bun.serve({ fetch: app.fetch, port: port, development: false });
logger.info(`TemplePublic listening on ${port}`);
await ConnectDatabase();