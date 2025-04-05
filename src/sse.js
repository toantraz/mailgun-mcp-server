import express from "express";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { server, main } from "./mailgun-mcp.js";

const app = express();

let transport;

app.get("/sse", async (req, res) => {
  transport = new SSEServerTransport("/messages", res);
  await server.connect(transport);

  server.onclose = async () => {
    await server.close();
    process.exit(0);
  };
});

app.post("/messages", async (req, res) => {
  await transport.handlePostMessage(req, res);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Mailgun MCP SSE Server is running on http://localhost:${port}/sse`);
});

await main()
