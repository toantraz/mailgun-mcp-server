import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server, main} from "./mailgun-mcp.js";

await main()

// Connect to the transport
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Mailgun MCP Server running on stdio");
