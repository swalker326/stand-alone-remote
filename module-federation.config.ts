import { createModuleFederationConfig } from "@module-federation/enhanced";

export const config = createModuleFederationConfig({
  name: "detached-remote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: "19.1.0",
      eager: true
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "19.1.0",
      eager: true
    }
  }
});
