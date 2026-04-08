const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "..", "dist", "index.js");
if (!fs.existsSync(p)) process.exit(0);
const c = fs.readFileSync(p, "utf8");
if (!c.startsWith("#!")) {
  fs.writeFileSync(p, "#!/usr/bin/env node\n" + c);
}
