// vite.config.js
import { defineConfig } from "file:///Users/stephenlambert/Desktop/Flask-Vite-Deployment-Ready/client/node_modules/vite/dist/node/index.js";
import react from "file:///Users/stephenlambert/Desktop/Flask-Vite-Deployment-Ready/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    // changes our vite to launch out of port 3000
    port: 3e3,
    // this allows the app to be accessed from outside the localhost 
    cors: true
    // we write our fetches to /api/route and it will go through this proxy
    // PROXY ONLY WORKS IN DEVELOPMENT AND WONT WORK IN PRODUCTION/DEPLOYED
    // proxy: {
    //   "/api":{
    //     // we can adjust the target based on our backend port
    //     target: "http://127.0.0.1:5000",
    //     changeOrigin:true,
    //     secure: false,
    //     rewrite: (path)=>path.replace(/^\/api/,"")
    //   }
    // }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc3RlcGhlbmxhbWJlcnQvRGVza3RvcC9GbGFzay1WaXRlLURlcGxveW1lbnQtUmVhZHkvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc3RlcGhlbmxhbWJlcnQvRGVza3RvcC9GbGFzay1WaXRlLURlcGxveW1lbnQtUmVhZHkvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zdGVwaGVubGFtYmVydC9EZXNrdG9wL0ZsYXNrLVZpdGUtRGVwbG95bWVudC1SZWFkeS9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBjaGFuZ2VzIG91ciB2aXRlIHRvIGxhdW5jaCBvdXQgb2YgcG9ydCAzMDAwXG4gICAgcG9ydDogMzAwMCxcbiAgICAvLyB0aGlzIGFsbG93cyB0aGUgYXBwIHRvIGJlIGFjY2Vzc2VkIGZyb20gb3V0c2lkZSB0aGUgbG9jYWxob3N0IFxuICAgIGNvcnM6dHJ1ZSxcbiAgICAvLyB3ZSB3cml0ZSBvdXIgZmV0Y2hlcyB0byAvYXBpL3JvdXRlIGFuZCBpdCB3aWxsIGdvIHRocm91Z2ggdGhpcyBwcm94eVxuICAgIC8vIFBST1hZIE9OTFkgV09SS1MgSU4gREVWRUxPUE1FTlQgQU5EIFdPTlQgV09SSyBJTiBQUk9EVUNUSU9OL0RFUExPWUVEXG4gICAgLy8gcHJveHk6IHtcbiAgICAvLyAgIFwiL2FwaVwiOntcbiAgICAvLyAgICAgLy8gd2UgY2FuIGFkanVzdCB0aGUgdGFyZ2V0IGJhc2VkIG9uIG91ciBiYWNrZW5kIHBvcnRcbiAgICAvLyAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMjcuMC4wLjE6NTAwMFwiLFxuICAgIC8vICAgICBjaGFuZ2VPcmlnaW46dHJ1ZSxcbiAgICAvLyAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAvLyAgICAgcmV3cml0ZTogKHBhdGgpPT5wYXRoLnJlcGxhY2UoL15cXC9hcGkvLFwiXCIpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrWCxTQUFTLG9CQUFvQjtBQUMvWSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBO0FBQUEsSUFFTixNQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWVA7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
