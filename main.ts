import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIMIT = 280;

const plan =
  "Day 1: crawl 50 Shopify stores, list every broken link. " +
  "Day 2: contact the 10 with 5+ broken links, $49 to fix all, list free as proof. " +
  "Days 3-30: fix in 1 hour, upsell $99/mo monitor. " +
  "10 fixes=$490, 3 monitors=$297/mo. $100 untouched: free tools, no ads.";

function codePointCount(text: string): number {
  return [...text].length;
}

function checkPlan(text: string): void {
  const size = codePointCount(text);
  if (size < 1 || size > LIMIT) {
    throw new Error(`plan must be 1 to ${LIMIT} code points, got ${size}`);
  }
  if (text.trim().length === 0) {
    throw new Error("plan must not be only whitespace");
  }
}

function main(): void {
  checkPlan(plan);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, plan, "utf8");
  console.log(`wrote ${codePointCount(plan)} code points to ${target}`);
}

main();
