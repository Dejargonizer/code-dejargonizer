<h1 align="center">The Dejargonizer</h1>

<p align="center"><strong>You can't manage what you can't read. This makes your AI coding agent report back in words you can act on.</strong></p>

<p align="center"><em>Better management of the agent. Which means a better product.</em></p>

<p align="center">
<a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f766e"></a>
<img alt="No engineering degree required" src="https://img.shields.io/badge/engineering%20degree-not%20required-15803d">
<img alt="Works with any AI coding agent" src="https://img.shields.io/badge/works%20with-any%20AI%20agent-2563eb">
<a href="#contributing"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-b45309"></a>
</p>

---

AI coding agents just handed millions of people the power to build software. Talking *to* them already works: you type plain English, they understand it fine. It's the direction coming *back* that's broken. The status update, the error, the question — they come back in engineering-speak, because that's the language these agents learned from. So a person with a real idea and no computer-science degree opens the tool and reads this:

> "I'll squash-merge the PR once CI is green, then verify the deploy."

Every word means something specific and simple. The gap between that sentence and a person who could act on it is not intelligence. It's **vocabulary** — and vocabulary is fixable.

But it's worth being precise about what fixing it actually buys you, because "understand your code better" undersells it badly. **You are not a student of this work. You are the manager of it.** You decide what gets built, what's good enough, what's worth the time, and what doesn't ship. That job runs entirely on language. When the report comes back in a language you don't read, you lose the ability to *review* the work — you are left able only to *approve* it.

And an agent nobody reviews doesn't stop. It carries on making decisions on your behalf, announcing them in the same flat register as everything else: it typed the price in by hand, it put fake data where the real data goes, it switched off the warning that kept appearing, it skipped the tests for now. Every one of those is defensible. Every one was yours to decide. And every one ends up inside the thing you ship.

So the chain is short, and it does not stop at comprehension. **Read the report, and you can manage the agent. Manage the agent, and you get a better product.**

Natural language is supposed to work in *both* directions. Right now it only works on the way in. **The Dejargonizer makes it work on the way back too** — so the whole conversation, out and back, stays in language you can act on. Three things, working together:

### 📖 A dictionary — [`GLOSSARY.md`](GLOSSARY.md)
Every coding word a non-engineer actually hits, in plain English. Grouped by the *moment you're in* ("what just happened?"), not alphabetically. Each entry gives you three things: **what it means in one sentence**, **something to picture**, and **what to actually do when your agent says it.** Read it on its own — no agent required.

One section is deliberately unlike the others: [**phrases that mean a decision got made for you**](GLOSSARY.md#10-phrases-that-mean-a-decision-got-made-for-you). "I mocked that out." "It's a workaround." "That should work." These sound like progress updates and are really choices, made on your behalf, that you would probably want a say in.

### 🗣️ A switch for your agent — [`dejargonizer/`](dejargonizer/SKILL.md)
Drop-in instructions that make *any* AI coding agent translate its own engineering-speak back into plain language *by default*: the point first, every term defined in the same breath, an honest heads-up in plain words before anything risky, a clear line on who did what, and — the part that matters most for the product — every decision it made for you named out loud instead of left inside the narration. It turns the agent from a brilliant colleague who forgets you're new into one who never does.

### 🔁 A loop that keeps it honest
The dictionary isn't a one-time snapshot someone tried to write in advance — it grows from the words that actually trip people up, and mostly you don't have to do anything for that to happen. Your agent does it: when it explains a term the shipped dictionary doesn't cover yet, it files that word back here — just the term and its plain-English meaning, never your code or project details. You never have to notice the gap yourself. And on the live site, searching for a word and coming up empty is enough: the "Suggest a term" button drafts the whole issue for you in one click. Once enough different people independently flag the same word, an automated check drafts it straight into [`GLOSSARY.md`](GLOSSARY.md) and opens it for a maintainer to review — never merged automatically, always reviewed by a person first. Plain language flows out to you; real confusion flows back in and becomes the next entry.

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

And then the example that actually changes what you ship:

> ❌ **Before**
> *"Hardcoded the pricing constants for now, added a validation lib."*
>
> ✅ **After The Dejargonizer**
> *"Two decisions I made for you. First, the prices are typed in by hand rather than read from your spreadsheet — that got it working today, but the page will be wrong the first time you change a price. Second, I brought in a small outside tool to check the form entries instead of writing that part myself. Happy with both, or want either done differently?"*

The first example saves you a confusing minute. The second one saves you a bug in production.

## Turn it on for your agent

**Quickest version, works everywhere:** copy [`dejargonizer/SKILL-SHORT.md`](dejargonizer/SKILL-SHORT.md) and paste it into your agent, or hit **Copy the instructions** on the [live site](https://dejargonizer.github.io/code-dejargonizer/). It is one short block, deliberately small enough for a custom-instructions box with a character limit, and it needs no files and no install. That covers Lovable, Replit, Bolt, v0, ChatGPT and anything else where you only get a chat window.

The rest of this section is the fuller version, for when you have a project you can put files in.

The skill is one plain-text file of instructions — [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md). It isn't tied to any one tool or model. Whatever agent you use, the job is the same: **get those instructions in front of it, and tell it you're not an engineer.** The simplest universal way, which works everywhere:

> Paste the contents of [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) into your chat at the start of a session, then add: *"Follow these for everything from here on. I am not an engineer — explain in plain English, define any technical term in the same sentence, and give me a plain heads-up before anything risky or hard to undo."*

Most agents also have an "always-on rules" spot so you don't have to paste it every time:

<details>
<summary><strong>Claude Code</strong></summary>

Copy the `dejargonizer` folder into your project's `.claude/skills/` folder. Then add one line to your project's `CLAUDE.md` (create it if it doesn't exist):

> Always use the `dejargonizer` skill. I am not an engineer — explain everything in plain English, define any technical term in the same sentence, and give me a plain heads-up before anything risky or hard to undo.

</details>

<details>
<summary><strong>Cursor</strong></summary>

Paste the contents of [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) into your project's rules file (`.cursor/rules`, or the older `.cursorrules`). It then applies to every session automatically.

</details>

<details>
<summary><strong>Anything that reads AGENTS.md (the cross-tool convention)</strong></summary>

A growing number of agents look for a file called `AGENTS.md` in the project root and follow it with no configuration at all. If yours does, that is the least work available: copy this repo's [`AGENTS.md`](AGENTS.md) into your own project root, or add a line to yours pointing at the instructions.

</details>

<details>
<summary><strong>Any other agent (Copilot, Gemini, Windsurf, Aider, ChatGPT, plain API, …)</strong></summary>

Put the contents of [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) wherever that agent keeps standing instructions — a custom-instructions box, a system prompt, a project rules file — or just paste it into the chat at the start of a session. There's nothing tool-specific inside it; it's plain instructions any capable model can follow.

</details>

From then on your agent leads with the point, translates as it goes, tells you who did what, and warns you — in plain words — before it does anything you'd want to be asked about first.

By default, when your agent defines a term the shipped glossary doesn't cover yet, it files that term back to this project — just the word and its plain-English meaning, never your code or project details. You don't have to spot the gap or report it, which is the whole point: the person who can't tell a word is missing shouldn't be the one responsible for reporting it. It only does anything if your agent can actually open a GitHub issue from where it's running, and it files the same kind of issue the site's "Suggest a term" button does — so the glossary keeps growing from real sessions across everyone using the skill, not only visitors to the site.

If you'd rather it filed nothing, just tell your agent so, or delete the last paragraph of "Keeping this current" from `dejargonizer/SKILL.md`.

## Four questions you can always ask

Keep these in your back pocket. They work with any agent, any time, and they put you back in control:

1. **"Say that again with no jargon."**
2. **"What's about to happen, in one sentence?"**
3. **"Is this reversible?"**
4. **"What did you decide for me?"**

The fourth is the one nobody thinks to ask, and it catches the most. Agents make small, reasonable calls constantly and rarely volunteer them. Asking turns a status report into something you can manage.

## Who this is for

Founders, designers, writers, operators, students — anyone who is *building* with an AI agent but was never taught the vocabulary. You do not need to become an engineer to make real things. You need to be able to read the report well enough to run the project.

## Contributing

The most useful thing you can add is **the word that tripped *you* up** — and you do **not** need to know what it means to contribute it. That is worth saying twice, because the obvious design gets this backwards: the person who cannot define a word is exactly the person whose confusion the dictionary needs, so a bare word with no definition is a complete, valid contribution.

Easiest way: search for it on the live site. If it is not there, the empty result offers to flag it and writes the issue for you. Once enough different people flag the same word, it is drafted into the glossary for a maintainer to write up and review.

If you *do* know the plain-language version, all the better — add it to the issue, or open a pull request straight onto [`GLOSSARY.md`](GLOSSARY.md). One rule sets the bar:

> Would a smart person with no coding background understand it — **without having to look anything else up?**

## License

[MIT](LICENSE) — free to copy, share, adapt, translate, and build on, for any purpose.

---

<p align="center"><em>Built so that millions of people who aren't engineers can still build — and so every one of them makes it a little better for the next person.</em></p>
