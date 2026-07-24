<h1 align="center">The Dejargonizer</h1>

<p align="center"><strong>Plain-English translation for anyone building software with an AI coding agent — a dictionary that grows from what actually trips people up.</strong></p>

<p align="center"><em>You don't need to be an engineer. You need a translator.</em></p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f766e"></a>
  <img alt="No engineering degree required" src="https://img.shields.io/badge/engineering%20degree-not%20required-15803d">
  <a href="#contributing"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-b45309"></a>
</p>

---

AI coding agents — Claude Code, Cursor, and the rest — just handed millions of people the power to build software. Then they kept talking like engineers, because that's who they learned from. So a person with a real idea and no computer-science degree opens the tool and reads this:

> "I'll squash-merge the PR once CI is green, then verify the deploy."

Every word means something specific and simple. The gap between that sentence and a person who could act on it is not intelligence. It's **vocabulary** — and vocabulary is fixable.

**The Dejargonizer is the fix.** Three things, working together:

### 📖 A dictionary — [`GLOSSARY.md`](GLOSSARY.md)
Every coding word a non-engineer actually hits, in plain English. Grouped by the *moment you're in* ("what just happened?"), not alphabetically. Each entry gives you three things: **what it means in one sentence**, a **picture to hang it on**, and **what to actually do when your agent says it.** Read it on its own — no agent required.

### 🗣️ A switch for your agent — [`dejargonizer/`](dejargonizer/SKILL.md)
Drop-in instructions that make your coding agent *talk to you this way by default*: the point first, every term defined in the same breath, an honest heads-up in plain words before anything risky, and a clear line on who did what. It turns the agent from a brilliant colleague who forgets you're new into one who never does.

### 🔁 A loop that keeps it honest
The dictionary isn't a one-time snapshot someone tried to write in advance. Hit a word on the live site that isn't in it yet? The "Suggest a term" button turns your confusion into a pre-filled GitHub issue in one click. Once enough different people independently flag the same word, an automated check drafts it straight into [`GLOSSARY.md`](GLOSSARY.md) and opens it for a maintainer to review — never merged automatically, always reviewed by a person first. Plain language flows out to you; real confusion flows back in and becomes the next entry.

---

## See it first

The dictionary as a searchable web page: **[open `index.html`](index.html)** in any browser — or turn on the free live site in one click (**Settings → Pages → deploy from `main`**) and share the link.

## The whole pitch, in one example

> ❌ **Before**
> *"Ran the suite, tsc is clean, opening a PR — will squash-merge to main once CI's green and verify the deploy."*
>
> ✅ **After The Dejargonizer**
> *"The automatic checks all passed, so the work is ready. I've put it up for your approval — nothing goes live until you say yes. When you do, I'll make it official and then double-check it's actually running. Want to take a look first?"*

Same facts. Same rigor. One of them you can act on.

## Turn it on for your agent

<details open>
<summary><strong>Claude Code</strong></summary>

Copy the `dejargonizer` folder into your project's `.claude/skills/` folder. Then add one line to your project's `CLAUDE.md` (create it if it doesn't exist):

> Always use the `dejargonizer` skill. I am not an engineer — explain everything in plain English, define any technical term in the same sentence, and give me a plain heads-up before anything risky or hard to undo.

</details>

<details>
<summary><strong>Cursor, or any other agent</strong></summary>

Paste the contents of [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) into your project's rules file (Cursor calls it `.cursorrules`), or just paste it into the chat at the start of a session.

</details>

From then on your agent leads with the point, translates as it goes, tells you who did what, and warns you — in plain words — before it does anything you'd want to be asked about first.

## Three questions you can always ask

Keep these in your back pocket. They work with any agent, any time, and they put you back in control:

1. **"Say that again with no jargon."**
2. **"What's about to happen, in one sentence?"**
3. **"Is this reversible?"**

## Who this is for

Founders, designers, writers, operators, students — anyone who is *building* with an AI agent but was never handed the decoder ring. You do not need to become an engineer to make real things. You need a translator.

## Contributing

The most useful thing you can add is **the word that tripped *you* up.** Easiest way: use the "Suggest a term" button on the live site — it drafts the issue for you, and if enough other people hit the same word, it's automatically drafted into the glossary for review. Or open an issue yourself with the term (and, if you like, a first attempt at the plain-language version), or open a pull request adding it to [`GLOSSARY.md`](GLOSSARY.md). One rule sets the bar:

> Would a smart person with no coding background understand it — **without having to look anything else up?**

## License

[MIT](LICENSE) — free to copy, share, adapt, translate, and build on, for any purpose.

---

<p align="center"><em>Built so that millions of people who aren't engineers can still build — and so every one of them makes it a little better for the next person.</em></p>
