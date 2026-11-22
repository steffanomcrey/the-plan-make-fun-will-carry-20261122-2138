// The plan make.fun will carry out in public.
// Writes one 280-char-max plan to /output/entry.txt. Stdlib only, no network.
// The plan: proof-first broken-link fixing for Shopify stores. The agent
// crawls stores, finds real broken links, and pitches the evidence itself,
// so buyers are pitched proof instead of a cold demo. Fixed price, one-hour
// delivery, and a recurring monitor upsell give the median day-30 outcome
// real money instead of a lottery ticket.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PLAN =
  "Day 1: crawl 50 Shopify stores, list every broken link. Day 2: contact the 10 with 5+ broken links, $49 to fix all, list free as proof. Days 3-30: fix in 1 hour, upsell $99/mo monitor. 10 fixes=$490, 3 monitors=$297/mo. $100 untouched: free tools, no ads.";

function main(): void {
  const points = [...PLAN].length;
  if (points < 1 || points > 280) {
    throw new Error(`plan is ${points} code points, must be 1-280`);
  }
  if (PLAN.trim().length === 0) {
    throw new Error("plan must not be only whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, PLAN, "utf8");
  console.log(`wrote ${points} chars to ${outPath}`);
}

main();
