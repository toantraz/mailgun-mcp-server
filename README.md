# Mailgun MCP Server 
[![MCP](https://img.shields.io/badge/MCP-Server-blue.svg)](https://github.com/modelcontextprotocol)

## Overview
A Model Context Protocol (MCP) server implementation for [Mailgun](https://mailgun.com), enabling MCP-compatible AI clients like Claude Desktop to interract with the service.

## Prerequisites

- Node.js (v18 or higher)
- Git
- Claude Desktop (for Claude integration)
- Mailgun account and an API key

## Quick Start

### Manual Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mailgun/mailgun-mcp-server.git
   cd mailgun-mcp-server
   ```

2. Install dependencies and build:
   ```bash
   npm install
   ```

3. Configure Claude Desktop:

   Create or modify the config file:
   - MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%/Claude/claude_desktop_config.json`

   Add the following configuration:
   ```json
   {
       "mcpServers": {
           "mailgun": {
               "command": "node",
               "args": ["CHANGE/THIS/PATH/TO/mailgun-mcp-server/src/mailgun-mcp.js"],
               "env": {
                   "MAILGUN_API_KEY": "YOUR-mailgun-api-key"
               }
           }
       }
   }
   ```

## Testing

```bash
NODE_ENV=test npm test
```

## Debugging

The MCP server communicates over stdio, please refer to [Debugging](https://modelcontextprotocol.io/docs/tools/debugging) section of the Model Context Protocol.

## License

[LICENSE](LICENSE) file for details

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.