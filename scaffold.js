#!/usr/bin/env node
/**
 * scaffold.js — Instala dependências do desafio especificado
 * Uso: node scaffold.js <número>
 * Ex:  node scaffold.js 14
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const num = parseInt(process.argv[2], 10);
if (isNaN(num) || num < 1 || num > 100) {
  console.error("Usage: node scaffold.js <1-100>");
  process.exit(1);
}

function findChallengePath(n) {
  const levels = [
    { range: [1, 25], dir: n <= 13 ? "easy/backend" : "easy/frontend" },
    { range: [26, 50], dir: n <= 38 ? "medium/backend" : "medium/frontend" },
    { range: [51, 75], dir: n <= 63 ? "hard/backend" : "hard/frontend" },
    { range: [76, 100], dir: n <= 88 ? "expert/backend" : "expert/frontend" },
  ];

  for (const level of levels) {
    if (n >= level.range[0] && n <= level.range[1]) {
      return path.join(__dirname, level.dir, `desafio-${n}`);
    }
  }
}

const challengePath = findChallengePath(num);

if (!fs.existsSync(challengePath)) {
  console.error(`Challenge path not found: ${challengePath}`);
  process.exit(1);
}

const pkgPath = path.join(challengePath, "package.json");
if (!fs.existsSync(pkgPath)) {
  console.error(`No package.json found in ${challengePath}`);
  process.exit(1);
}

console.log(`\n🧩 Setting up Desafio ${num}...`);
console.log(`📁 Path: ${challengePath}\n`);

try {
  execSync("npm install", { cwd: challengePath, stdio: "inherit" });
  console.log(`\n✅ Ready! Navigate to the challenge:`);
  console.log(`   cd ${path.relative(process.cwd(), challengePath)}`);
  console.log(`   cat CHALLENGE.md\n`);
} catch (e) {
  console.error("Failed to install dependencies:", e.message);
  process.exit(1);
}
