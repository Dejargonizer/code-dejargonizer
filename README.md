<h1 align="center">The Dejargonizer</h1>

<p align="center"><strong>Talking to coding agents in natural language is solved. The language they come back with is the problem, unless you're a software engineer.</strong></p>

<p align="center"><strong>Dejargonizer makes agents talk back in plain language — so you can manage them like a pro, without a CS degree.</strong></p>

<p align="center"><em>You can't manage what you can't read. Better management of the agent means a better product.</em></p>

<p align="center">
<a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f766e"></a>
<img alt="No engineering degree required" src="https://img.shields.io/badge/engineering%20degree-not%20required-15803d">
<img alt="Works with any AI coding agent" src="https://img.shields.io/badge/works%20with-any%20AI%20agent-2563eb">
<a href="#contributing"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-b45309"></a>
</p>

<p align="center">
<a href="https://dejargonizer.github.io/code-dejargonizer/"><strong>Look up a word</strong></a> &nbsp;·&nbsp; <a href="INSTALL.md"><strong>Install it in your tool</strong></a> &nbsp;·&nbsp; <a href="GLOSSARY.md"><strong>Read the dictionary</strong></a> &nbsp;·&nbsp; <a href="https://dejargonizer.github.io/code-dejargonizer/impact.html"><strong>What we can't explain yet</strong></a>
</p>

---

Talking to coding agents in natural language is solved. The language they come back with is the problem, unless you're a software engineer. Dejargonizer makes agents talk back in plain language — so you can manage them like a pro, without a CS degree.

AI coding agents just handed millions of people the power to build software. Talking *to* them already works: you type plain English, they understand it fine. It's the direction coming *back* that's broken. The status update, the error, the question — they come back in engineering-speak, because that's the language these agents learned from. So a person with a real idea and no computer-science degree opens the tool and reads this:

> "I'll squash-merge the PR once CI is green, then verify the deploy."

Every word means something specific and simple. The gap between that sentence and a person who could act on it is not intelligence. It's **vocabulary** — and vocabulary is fixable.

But it's worth being precise about what fixing it actually buys you, because "understand your code better" undersells it badly. **You are not a student of this work. You are the manager of it.** You decide what gets built, what's good enough, what's worth the time, and what doesn't ship. That job runs entirely on language. When the report comes back in a language you don't read, you lose the ability to *review* the work — you are left able only to *approve* it.

And an agent nobody reviews doesn't stop. It carries on making decisions on your behalf, announcing them in the same flat register as everything else: it typed the price in by hand, it put fake data where the real data goes, it switched off the warning that kept appearing, it skipped the tests for now. Every one of those is defensible. Every one was yours to decide. And every one ends up inside the thing you ship.

So the chain is short, and it does not stop at comprehension. **Read the report, and you can manage the agent. Manage the agent, and you get a better product.**

Natural language is supposed to work in *both* directions. Right now it only works on the way in. **The Dejargonizer makes it work on the way back too** — so the whole conversation, out and back, stays in language you can act on. Here is what that takes:

### 📖 A dictionary — [`GLOSSARY.md`](GLOSSARY.md)
Every coding word a non-engineer actually hits, in plain English. Grouped by the *moment you're in* ("what just happened?"), not alphabetically. Each entry gives you three things: **what it means in one sentence**, **something to picture**, and **what to actually do when your agent says it.** Read it on its own — no agent required. But the first reader is meant to be the **agent**, not you: point your tool at this file and it uses the entries as its own phrasing. That is the faster path, because a dictionary only helps someone who already knows which word confused them, and the words that cost the most are the ones that go by unnoticed.

One section is deliberately unlike the others: [**phrases that mean a decision got made for you**](GLOSSARY.md#10-phrases-that-mean-a-decision-got-made-for-you). "I mocked that out." "It's a workaround." "That should work." These sound like progress updates and are really choices, made on your behalf, that you would probably want a say in.

### 🗣️ A switch for your agent — [`dejargonizer/`](dejargonizer/SKILL.md)
Drop-in instructions that make *any* AI coding agent translate its own engineering-speak back into plain language *by default*: the point first, every term defined in the same breath, an honest heads-up in plain words before anything risky, a clear line on who did what, and — the part that matters most for the product — every decision it made for you named out loud instead of left inside the narration. It turns the agent from a brilliant colleague who forgets you're new into one who never does.

### ⏪ A pass back over what your agent already said
Nobody installs this at the start of a project. You install it halfway through, once the updates stop making sense — and by then there is an hour of engineering-speak behind you that you already nodded through. So the instructions run in reverse as well as forward. On loading, the agent re-reads its own earlier replies and re-states the ones you could not have acted on: risky steps it already took, things it called done but never actually ran, decisions it made on your behalf, terms it never translated. A short catch-up list, oldest first, ending with anything that still needs a decision from you. You can trigger it from any agent, installed or not: *go back over what you’ve told me so far — anything I would have missed?*

### 🔁 A loop that keeps it honest
The dictionary isn't a one-time snapshot someone tried to write in advance — it grows from the words that actually trip people up, and mostly you don't have to do anything for that to happen. Your agent does it, but it always asks first, and it's always your choice which way it goes: when it explains a term the shipped dictionary doesn't cover yet, it offers to either keep the entry just for you (saved to a local file on your own machine, never seen by anyone else) or flag it for the project (it builds a prefilled link with just the term and its plain-English meaning - never your code or project details - and you're the one who clicks submit). You never have to notice the gap yourself, and nothing is ever filed or shared without you saying so. And on the live site, searching for a word and coming up empty is enough: the "Suggest a term" button drafts the whole issue for you in one click. Once enough different people independently flag the same word, an automated check drafts it straight into [`GLOSSARY.md`](GLOSSARY.md) and opens it for a maintainer to review — never merged automatically, always reviewed by a person first. Plain language flows out to you; real confusion flows back in and becomes the next entry.

---

### 🔎 A way to hear when nothing was checked — [section 17](GLOSSARY.md#17-signs-the-work-was-not-actually-checked)

Twenty-three tells, in plain language. "It should work now" is a prediction wearing a result’s clothes — the word *should* means it never ran. "I verified it" with nothing shown is a claim, not evidence. A summary that repeats the plan word for word usually means the outcome was never read. None of these mean your agent is lying — they mean it is predicting instead of reporting, which is what it does when it has not looked. The skill also makes it label its own claims: what it ran, versus what it expects.

### 🧪 A test, and a gap list — [what we still can't explain](https://dejargonizer.github.io/code-dejargonizer/impact.html)

A product about telling a measured claim from a confident guess should not make unmeasured claims about itself. There used to be a coverage score here: the share of jargon in a sample of real agent output that already had an entry. It was computed, sealed on the day each line arrived, and it fell twelve points the day a real agent report landed. It is gone anyway, because of what it was describing. A dictionary we control, scored against a sample we choose, will always catch up — the number was a fact about our own filing wearing the clothes of a fact about your project.

What survives is the useful half, and it stays in the workshop: every word that arrived in a line and could not be explained the first time it was seen, kept in [`data/ledger.json`](data/ledger.json) and never cleared. That list is how the next entries get chosen, and you can rebuild it with `node scripts/build-metrics.mjs`.

The claim itself gets tested a different way. [`scripts/paired-trial.mjs`](scripts/paired-trial.mjs) hands one line of raw agent output to the same model twice — once with nothing, once with the instructions and the dictionary in front of it — and reads both answers against the four things this project actually promises: every term defined in the same breath, what was run kept apart from what is only expected, decisions named out loud, anything hard to undo flagged as such. Both answers are stored in full in [`data/trials.json`](data/trials.json), whichever way the pair comes out, and no record is ever edited or removed.

Running it needs no terminal. On the [Actions tab](https://github.com/Dejargonizer/code-dejargonizer/actions/workflows/run-trial.yml) there is a **Run a trial** button: it asks which line and which model, and it has a dry run box that prints exactly what would be sent without sending it. The key it needs is added once, by you, under Settings, and is never printed in the log.

It has been run **zero times** so far — it needs a model key, supplied by whoever runs it — so nothing in this repository answers that question yet. That sentence leads the not-proven list on the page, where it belongs.

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

**[→ Full install guide: INSTALL.md](INSTALL.md)** — exact file paths for 12 coding tools, the right settings box for 7 vibe-coding platforms, how to wire it into your own agent, and a one-question test to prove it took effect.

The short version:

- **You have files in your project** — Claude Code, Cursor, Copilot, Windsurf, Cline, Aider, Codex. Put [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) into your tool's rules file. [Exact paths →](INSTALL.md#option-a-tools-where-you-have-files)
- **You only have a chat box** — Lovable, Replit, Bolt, v0, ChatGPT. Paste [`dejargonizer/SKILL-SHORT.md`](dejargonizer/SKILL-SHORT.md), or hit **Copy the instructions** on the [live site](https://dejargonizer.github.io/code-dejargonizer/). It is sized to fit a settings box with a character limit. [Exact places →](INSTALL.md#option-b-tools-where-you-only-have-a-chat-box)
- **You are building your own agent** — fetch the raw file into your system prompt, and pin it to a commit if you need consistent behavior. [Raw URLs and the glossary as data →](INSTALL.md#option-c-your-own-agent-or-harness)

Whichever route you take, add one line in your own words: **you are not an engineer, and you are directing this work.** That sentence does more than the rest of the file.

Then check it took. Start a new session and ask the question that matches **what you installed**:

- **Short version (chat box / Copy short):** *Are you on the short Dejargonizer? How do you separate what you ran from what you only expect?* It should refuse “works” / “fixed” until it ran the thing.
- **Full version (rules file / fourteen rules):** *How many Dejargonizer rules are you following, and what is rule 11?* Fourteen rules; rule 11 separates what it saw from what it only expects.

If it guesses what the Dejargonizer is, the file never loaded — see [troubleshooting](INSTALL.md#if-it-is-not-working). Do not grade a short install with the full “rule 11” question; a correct short paste will look broken under that test.

## Six questions you can always ask

Keep these in your back pocket. They work with any agent, any time, and they put you back in control:

1. **"Say that again with no jargon."**
2. **"What's about to happen, in one sentence?"**
3. **"Is this reversible?"**
4. **"What did you decide for me?"**
5. **"Did you run it, or do you expect it to work?"**
6. **"Go back over what you’ve told me so far — anything I would have missed?"**

The fourth is the one nobody thinks to ask, and it catches the most. Agents make small, reasonable calls constantly and rarely volunteer them. Asking turns a status report into something you can manage. The fifth is the one to ask most often: "it should work" and "I ran it and watched it work" are completely different claims, and only one of them is a result. The sixth is the one to ask the day you install this, because everything said before that point is still in the old language — and then whenever you have been away from the project for a while.

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
