# Install the Dejargonizer

One goal: your coding agent explains itself in plain English every time, without you having to ask.

Two things to know before you start.

**There are two versions of the instructions.** [`dejargonizer/SKILL-SHORT.md`](dejargonizer/SKILL-SHORT.md) is a single paste-able block, small enough for a settings box with a character limit. [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) is the full version, ten rules, for tools that read a rules file.

**Nothing here is tool-specific.** It is plain text. If your tool is not in the tables below, find where it keeps its standing instructions and put the same text there.

---

## Step 1: which kind of tool are you using?

- **You can see and edit files in your project** — Claude Code, Cursor, Copilot, Windsurf, Cline, Aider, Zed, Continue, Codex. Go to [Option A](#option-a-tools-where-you-have-files).
- **You only get a chat box or a settings panel** — Lovable, Replit, Bolt, v0, ChatGPT, Claude.ai. Go to [Option B](#option-b-tools-where-you-only-have-a-chat-box).
- **You are writing your own agent in code** — go to [Option C](#option-c-your-own-agent-or-harness).

---

## Option A: tools where you have files

Put the instructions where your tool already looks for standing orders.

| Tool | Exactly where it goes |
|---|---|
| **Claude Code** | Copy the whole `dejargonizer/` folder to `.claude/skills/dejargonizer/`, then add the one-line reminder below to `CLAUDE.md` |
| **Cursor** | `.cursor/rules/dejargonizer.mdc` (older versions: `.cursorrules` in the project root) |
| **GitHub Copilot** | `.github/copilot-instructions.md` |
| **Windsurf** | `.windsurf/rules/dejargonizer.md` |
| **Cline / Roo Code** | `.clinerules/dejargonizer.md` |
| **Gemini CLI** | `GEMINI.md` in the project root |
| **Zed** | `.rules` in the project root |
| **Continue** | `.continue/rules/dejargonizer.md` |
| **Aider** | `CONVENTIONS.md`, then start it with `aider --read CONVENTIONS.md` |
| **JetBrains Junie** | `.junie/guidelines.md` |
| **Codex, Amp, Jules, and others** | `AGENTS.md` in the project root — the cross-tool convention |
| **Anything else** | Its rules file. Search its docs for "custom instructions" or "rules file" |

**What goes in the file:** the contents of [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md).

**The one-line reminder**, for `CLAUDE.md`, `AGENTS.md`, or the top of any rules file:

> I am not an engineer and I am directing this work. Follow the Dejargonizer rules: plain English, define every technical word in one sentence the first time you use it, and name the decisions you made for me.

If your tool supports both a skill folder and a rules file, use both. The folder holds the detail. The one line makes sure it gets picked up.

---

## Option B: tools where you only have a chat box

Every one of these has a named place for standing instructions. Paste [`dejargonizer/SKILL-SHORT.md`](dejargonizer/SKILL-SHORT.md) into it — or click **Copy the instructions** on the [live site](https://dejargonizer.github.io/code-dejargonizer/), which puts the same block on your clipboard.

| Platform | Where to paste it |
|---|---|
| **Lovable** | Project settings, **Knowledge** |
| **Replit** | The project's `replit.md`, or your first message |
| **Bolt** | Your first message in the project |
| **v0** | Project settings, **Instructions** |
| **ChatGPT** | Settings, Personalization, **Custom instructions** — or a Project's instructions |
| **Claude.ai** | A Project's **custom instructions** |
| **Gemini** | **Saved info**, or a Gem's instructions |

If there is no settings box at all, paste it as the first message of every new session. It is deliberately short so that this is not painful.

---

## Option C: your own agent or harness

Fetch the text at runtime and put it in your system prompt.

```
https://raw.githubusercontent.com/Dejargonizer/code-dejargonizer/main/dejargonizer/SKILL.md
https://raw.githubusercontent.com/Dejargonizer/code-dejargonizer/main/dejargonizer/SKILL-SHORT.md
https://raw.githubusercontent.com/Dejargonizer/code-dejargonizer/main/GLOSSARY.md
```

**Pin it.** `main` moves. If you need your agent to behave identically between runs, swap `main` for a commit SHA:

```
https://raw.githubusercontent.com/Dejargonizer/code-dejargonizer/COMMIT_SHA/dejargonizer/SKILL.md
```

**The glossary as structured data.** If you would rather look terms up than paste the whole thing, `glossary-data.js` is regenerated from `GLOSSARY.md` on every change:

```
https://dejargonizer.github.io/code-dejargonizer/glossary-data.js
```

It assigns one variable, `window.GLOSSARY_DATA`, holding an array of sections:

```js
[
  {
    n: "1",
    title: "Saving and sharing your work",
    blurb: "...",
    terms: [
      {
        t: "Repository",   // the term
        m: "...",          // meaning, one plain sentence
        p: "...",          // something to picture
        aka: "repo",       // other names, comma-separated
        note: "..."        // what to do when your agent says it
      }
    ]
  }
]
```

Outside a browser, drop the leading `window.GLOSSARY_DATA =` and the trailing semicolon and parse the rest as JSON. Or parse `GLOSSARY.md` yourself — [`scripts/build-glossary-data.mjs`](scripts/build-glossary-data.mjs) is the parser we use, and it is about a hundred lines.

**One rule if you build a lookup.** Send only the term and its plain-English meaning. Never the surrounding code, the filenames, or anything about the project. That rule is in the skill and it applies to your harness too.

---

## Step 2: check it actually worked

Installing something and assuming it took effect is the exact habit this project exists to break. Start a **new** session and ask:

> How many Dejargonizer rules are you following, and what is rule 10?

| What you hear | What it means |
|---|---|
| "Ten rules, and rule 10 is to name the decisions I made for you" | The full version is live. Done. |
| It knows about plain English and naming decisions, but not the numbering | The short version is live. That is correct behavior for the short version. |
| It guesses, or asks what the Dejargonizer is | It never read the file. Wrong path, or the tool needs restarting. |

Then give it a real piece of work and watch for one thing: **does it define a technical word the first time it uses one?** That is the whole product working. If it does not, say so once in the session and it usually holds for the rest of it.

---

## Keeping it current

The glossary grows. To pick up new terms:

- **Files in your project** — re-copy `SKILL.md`, or add this repo as a git submodule and pull when you want to.
- **Chat box** — re-paste from the live site occasionally. The short version changes rarely.
- **Harness** — if you pinned a commit SHA, bump it deliberately. That is the point of pinning.

Nothing phones home and nothing updates itself behind your back.

---

## If it is not working

- **The agent ignores it entirely.** Most tools read rules files only at the start of a session. Restart it.
- **The file looks right but nothing changes.** Check the path is relative to the project root rather than your home folder, and that the folder name matches the table exactly, leading dot included.
- **It defines words for a few messages, then stops.** That is the context window filling up — the agent has run out of room and dropped your rules. Ask it to re-read the rules file, or switch to the one-line reminder, which is cheap enough to stay in mind.
- **Your tool is not in the tables.** Open an [issue](https://github.com/Dejargonizer/code-dejargonizer/issues) and name it. Adding a row takes two minutes.
