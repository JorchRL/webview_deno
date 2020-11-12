import { Webview } from "../mod.ts";

await new Webview({
  title: "Remote webview_deno example",
  url: `https://deno.land/`,
  width: 800,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
}).run();
