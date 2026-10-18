// Vibe coding tool pricing. Sourced from vendor pricing pages; prices.html renders this automatically.
// status: verified | partial | unverified. Re-check the source_url before relying on a price.
const PRICES_UPDATED = "2026-10-18";
const PRICES = [
  {
    "name": "Lovable",
    "category": "App builder",
    "free_tier": "Yes: 5 daily build credits (up to 30/month)",
    "paid_plan": "Pro (100 credits/mo)",
    "price_usd_month": 25,
    "price_note": "$25/mo monthly; $21/mo billed annually",
    "source_url": "https://docs.lovable.dev/introduction/subscription-plans",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "Bolt.new",
    "category": "App builder",
    "free_tier": "Yes: 300K tokens/day, 1M/month",
    "paid_plan": "Pro",
    "price_usd_month": 25,
    "price_note": "$25/mo billed monthly",
    "source_url": "https://bolt.new/pricing",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "Replit Agent",
    "category": "App builder",
    "free_tier": "Yes: limited \"Free Mode\" (details not listed on page)",
    "paid_plan": "Core",
    "price_usd_month": 20,
    "price_note": "Page shows $20 struck through to $18/mo billed annually; plan label and monthly-billing price not stated explicitly",
    "source_url": "https://replit.com/pricing",
    "checked": "2026-10-18",
    "status": "partial"
  },
  {
    "name": "v0",
    "category": "App builder",
    "free_tier": "Yes: 7 messages/day",
    "paid_plan": "First paid tier (name not shown in fetched page)",
    "price_usd_month": 30,
    "price_note": "$30/user/mo (page text also showed a stray $90 figure; needs manual re-check)",
    "source_url": "https://v0.app/pricing",
    "checked": "2026-10-18",
    "status": "partial"
  },
  {
    "name": "Cursor",
    "category": "Coding IDE/agent",
    "free_tier": "Yes: limited agent and chat usage",
    "paid_plan": "Plus",
    "price_usd_month": 8,
    "price_note": "$8/mo ($80/yr). Plus is limited to Cursor's own models; third-party models need Premium at $30/mo",
    "source_url": "https://cursor.com/docs/models-and-pricing",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "Claude Code",
    "category": "Coding agent (CLI)",
    "free_tier": "No: Claude Code is not on the Free plan",
    "paid_plan": "Claude Pro",
    "price_usd_month": 20,
    "price_note": "$20/mo monthly; $17/mo billed annually ($200 upfront)",
    "source_url": "https://claude.com/pricing",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "OpenAI Codex",
    "category": "Coding agent",
    "free_tier": "Yes: included in ChatGPT Free (limited, desktop app, subject to rollout)",
    "paid_plan": "ChatGPT Go",
    "price_usd_month": 8,
    "price_note": "Go $8/mo is for lightweight use; Plus $20/mo adds Codex web, CLI and IDE extension",
    "source_url": "https://developers.openai.com/codex/pricing",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding assistant",
    "free_tier": "Yes: limited chat and agent usage",
    "paid_plan": "Pro",
    "price_usd_month": 10,
    "price_note": "$10/mo (includes $10 base AI credits plus a variable flex allotment)",
    "source_url": "https://github.com/features/copilot/plans",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "Gemini CLI",
    "category": "Coding agent (CLI)",
    "free_tier": "Yes: up to 1,000 requests/day via Google login, but the page says unpaid-tier use was replaced by Antigravity CLI on 2026-06-18",
    "paid_plan": "Google AI Pro (1,500 requests/day)",
    "price_usd_month": null,
    "price_note": "Plan price not shown on the vendor quota page; not verified",
    "source_url": "https://geminicli.com/docs/resources/quota-and-pricing/",
    "checked": "2026-10-18",
    "status": "unverified"
  },
  {
    "name": "Supabase",
    "category": "Backend / database",
    "free_tier": "Yes: 500 MB database, 2 active projects, paused after 1 week idle",
    "paid_plan": "Pro",
    "price_usd_month": 25,
    "price_note": "From $25/mo; includes $10 compute credit",
    "source_url": "https://supabase.com/pricing",
    "checked": "2026-10-18",
    "status": "verified"
  },
  {
    "name": "Windsurf",
    "category": "Coding IDE/agent",
    "free_tier": "Unverified",
    "paid_plan": "Unverified",
    "price_usd_month": null,
    "price_note": "Official pricing page could not be fetched (404)",
    "source_url": "https://windsurf.com/pricing",
    "checked": "2026-10-18",
    "status": "unverified"
  }
];
