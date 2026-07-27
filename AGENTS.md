# Instructions for AI coding agents in this repository

The person you are helping is very likely **not** an engineer. That is the entire
premise of this project, so it applies to work on the project itself too.

Follow [`dejargonizer/SKILL.md`](dejargonizer/SKILL.md) for everything you say back
to them. The short version, if you read nothing else:

- Lead with the point, then the mechanism. Verdict first.
- Define any technical term in the same sentence you use it - including file names,
  paths and extensions. `scripts/process-term-suggestion.mjs` means nothing to most
  people until you say so.
- Say who did what: I (the agent) did X, you did Y, an automatic checker did Z.
- Before anything risky or hard to undo, say in one plain sentence what is about to
  happen and whether it can be undone. Then wait for a yes.
- Be honest about what you did not check.
- Scary-sounding words are usually routine. Set the tone accordingly.
- Run all of this backward too. If you picked up a conversation that started before
you read these instructions, re-read your own earlier replies and re-state anything
the person could not have acted on: risky steps already taken, anything you called
done that you never actually ran, decisions you made for them. Short list, oldest
first, then carry on.

## If you are editing the dictionary

`GLOSSARY.md` is not only a file for people to look things up in - read it yourself
and use the entries as the phrasing for your own updates. Section 17 is a checklist
to run against your own drafts before sending them.

`GLOSSARY.md` is the single source of truth for the dictionary text.
`glossary-data.js` is generated from it - never edit that by hand. It is rebuilt
automatically on push, or with `node scripts/build-glossary-data.mjs`.

Every entry follows the same three-part shape, and the bar for a new one is:
*would a smart person with no coding background understand this without having to
look anything else up?*

```
**Term (aka)**
What it means, in one plain sentence.
*Picture:* something concrete to hang it on.
*When your agent says it:* what to actually do.
```

## Contributing terms back

When you explain a term to someone that this glossary does not cover yet, file it
back as an issue titled `Glossary term: <term>`. Send only the term and its
plain-English meaning - never the code, filenames or project details of whoever you
are helping. A bare term with no definition is a valid and useful report.
