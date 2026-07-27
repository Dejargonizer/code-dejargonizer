# The Dejargonizer — Glossary

**For people who are building software with an AI coding agent and don't have a computer-science degree — and shouldn't need one.**

Coding agents are astonishingly capable. But they talk like engineers, because they learned from engineers. So you get sentences like *"I'll squash-merge the PR once CI is green, then verify the deploy."* Every word of that means something specific and simple. Nobody ever told you what.

This is the missing translation layer. Find the word you're stuck on below. Each entry tells you three things: **what it means in one plain sentence**, **something to picture**, and **what to actually do when your agent says it.**

You do not need to read this top to bottom. It's grouped by *situation* — the moment you're in when the strange word shows up. Skim to your moment.

---

## 1. Saving and sharing your work

This whole family of words comes from **Git** — the system almost every software project uses to track changes. Think of Git as a *time machine plus a shared filing cabinet* for your project. It remembers every version, and it lets more than one person (or agent) work without clobbering each other.

**Repository (repo)**
Your project's folder — plus its entire history, every version it's ever been.
*Picture:* the filing cabinet itself. One repo = one project.
*When your agent says it:* "the repo" just means "this project." Nothing to do.

**Commit**
A saved snapshot of your work, with a short note saying what changed.
*Picture:* pressing "save" in a video game — but it also writes a diary entry: "reached level 3, got the key."
*When your agent says it:* "I committed the change" = it saved a checkpoint. Your work is now safely recorded. Good news.

**Push**
Sending your saved snapshots *up* from your machine to the shared copy online (usually on GitHub).
*Picture:* uploading your saved game to the cloud so others can see it.
*When your agent says it:* "I pushed" = your work is now on the shared server, not just the local machine. This is how it becomes visible to others and to the systems that put it live.

**Pull**
The opposite of push — bringing the latest shared changes *down* onto your machine.
*Picture:* downloading everyone else's saved progress so you're caught up.

**Branch**
A separate copy of the project where you can try changes safely, without touching the real thing.
*Picture:* a "sandbox" universe. You experiment there; if it works, you bring it back; if it doesn't, you throw the whole universe away and nothing was harmed.
*When your agent says it:* "I made a branch" = "I'm working in a safe side-copy, not on the live project." This is the *responsible* thing to do. Relax.

**Main (or master)**
The branch that is the real, official project. The one that counts.
*Picture:* the master copy of the manuscript. The branches are drafts; `main` is what gets published.
*When your agent says it:* changes on `main` are the ones that generally go live. That's why agents are careful about it.

**Merge**
Taking the changes from a branch and folding them into another branch (usually into `main`).
*Picture:* your sandbox experiment worked, so you copy it back into the real project.
*When your agent says it:* "I'll merge this" = "I'm about to make these changes official." This is often the moment right before something goes live.

**Squash-merge**
Folding all the little saves from one piece of work into the real project as a single tidy change.
*Picture:* twelve rough drafts of a letter going into the file as one clean final copy. The drafts are not kept; the result is.
*When your agent says it:* "I'll squash-merge this" = "I'm about to make this work official, recorded as one change rather than twenty." It is the normal, tidy way to finish a piece of work — and usually the moment right before something goes live.

**Merge conflict**
Git got confused because two people changed the *same line* two different ways, and it doesn't know which one you want. It stops and asks.
*Picture:* two editors wrote different sentences in the same spot of a document. Someone has to pick.
*When your agent says it:* not a disaster — it's a normal traffic jam. The agent (or you) just decides which version wins. Let the agent resolve it; ask it to explain the choice if the change matters to you.

**Pull request (PR)** — also called a *merge request*
A formal proposal that says: "here are my changes; please review them before we make them official." It's the polite knock on the door before merging.
*Picture:* handing in an edited draft with a cover note, and asking someone to approve it before it goes to print.
*When your agent says it:* "I opened a PR" = "the change is ready and waiting for a yes." Often *you* are the one who says yes. It's a checkpoint, on purpose — nothing goes live until the PR is merged.

**Clone**
Making your own full copy of a project onto your machine to work on it.
*Picture:* photocopying the entire filing cabinet to take home.

**Fork**
Your own personal copy of *someone else's* project, so you can change it without affecting theirs.
*Picture:* photocopying a book so you can scribble in the margins without touching the library's copy.

**Revert**
Undo a specific past change — cleanly, on the record.
*Picture:* "undo," but it also writes a note saying "we undid that, on purpose, here's why."
*When your agent says it:* safe and reversible. This is the calm way to back out of a mistake.

**Rollback**
Put the live product back to an earlier working version because the new one is causing problems.
*Picture:* the restaurant's new recipe is making people sick — go back to last week's recipe *right now*, figure out the new one later.
*When your agent says it:* usually said under pressure. It means "something's wrong live; get back to safety first."

**Diff**
The exact list of what changed — what lines were added, what was removed.
*Picture:* "track changes" in a Word document. Red for deleted, green for added.
*When your agent says "here's the diff":* it's showing you precisely what it touched. If you want to know "what did you actually change?", this is the answer.

**Stash**
Temporarily set your half-finished work aside so you can deal with something urgent, then bring it back.
*Picture:* sweeping your in-progress puzzle onto a tray so you can use the table, then sliding it back.

---

## 2. Checking the work is actually good

Before code goes live, it gets *checked* — automatically and repeatedly. This family of words is all about "did we break anything?" Agents run these checks constantly. When one comes back **green**, that's good. **Red** means something needs attention.

**Test**
A small piece of code whose only job is to check that another piece of code does what it's supposed to.
*Picture:* a taste-tester who takes one bite and says "yes, this is soup" or "this is not soup."
*When your agent says it:* "the tests pass" = "the automatic checkers all say the work is behaving correctly." Reassuring.

**Test suite**
The whole collection of tests, run together.
*Picture:* the full panel of taste-testers, not just one.
*When your agent says "the full suite is green, 2,805 passing":* every automatic checker approved. This is one of the strongest "it's fine" signals there is.

**Unit test**
A test that checks one tiny piece in isolation.
*Picture:* testing the doorbell by itself, before you check whether the whole house works.

**Smoke test**
A quick, shallow check that the basics work at all — before bothering with the detailed checks.
*Picture:* turning the car key to confirm the engine starts. You haven't tested the air-con or the radio — you've just confirmed it's not dead.
*Origin, if you're curious:* from plumbing and electronics — literally "turn it on and see if smoke comes out."
*When your agent says it:* "smoke test passed" = "the obvious this-is-alive checks are fine." Basic confidence, not a full guarantee.

**Regression**
A thing that *used* to work but a new change accidentally broke. A step backward.
*Picture:* you fix the kitchen tap, and now the shower is cold. The shower "regressed."
*When your agent says it:* a **regression test** is a checker added specifically so that a bug, once fixed, can never quietly come back. Agents write these on purpose — it's a sign of care.

**CI (continuous integration)**
The robot that automatically runs *all* the checks every time code changes — so nobody has to remember to.
*Picture:* an automatic quality-control line in a factory. Every item that comes off the belt gets inspected, no exceptions.
*When your agent says "waiting for CI" or "CI is green":* it's waiting for (or has received) the robot inspector's all-clear. **Green = passed. Red = something failed, look before proceeding.**

**Build**
Turning the written code into the actual runnable product.
*Picture:* baking. The code is the recipe and ingredients; the build is the finished cake. "The build failed" means something went wrong in the oven — the cake didn't come out.
*When your agent says "the build passed":* the product assembled successfully. A failed build means it can't even be put together yet, let alone go live.

**Lint / linter**
An automatic proofreader for code — catches sloppy style and small mistakes.
*Picture:* spellcheck and grammar-check, but for code.
*When your agent says "lint is clean":* no style complaints. Minor, but tidy.

**Type check** (agents may say *tsc*, *typecheck*)
An automatic check that the pieces of code fit together — that you're not accidentally handing a phone number where a name was expected.
*Picture:* checking that every plug matches its socket before you switch the power on.
*When your agent says "type check clean" or "tsc passes":* the pieces are wired together correctly. If it fails, two parts don't fit and it would break.

**Verify / verification**
Actually confirming something works — not just assuming it does.
*Picture:* the difference between "I mailed the invitation" and "I called and they said they got it."
*When your agent says "verified":* it checked with its own eyes/tools, rather than guessing. This is the good, careful kind of claim. If it says *"not verified,"* respect that — it's being honest that it didn't confirm.

**Flaky test**
A checker that sometimes passes and sometimes fails *for the same code* — usually because of timing or luck, not a real problem.
*Picture:* a smoke alarm that occasionally beeps for no reason. Annoying; not a fire.
*When your agent says it:* it's flagging that a red result might be noise, not a genuine break. Worth a second run to confirm.

**Green / red**
Green = checks passed, all clear. Red = something failed.
*When your agent says "it's green":* good to go. "It's red": stop and look.

**npm audit**
A command that checks your project's dependencies for known security problems and tells you how many it found.
*Picture:* A quick health inspection of every ingredient in your pantry, flagging any that have been recalled.
*When your agent says it:* It's just running a routine check, not fixing or changing anything in your code yet.

---

## 3. Putting it live

Getting your work in front of real people. This is where the stakes go up — mistakes here are visible to users. Agents slow down and get careful around these words, and so should you.

**Deploy / deployment**
Putting your code live where real people can use it.
*Picture:* opening the shop doors. Up to now you were rehearsing inside; deploy is unlocking the front door.
*When your agent says "deploying" or "deployed":* your change is going (or has gone) live. This is the real-consequences moment.

**Production (prod)**
The real, live version that actual users touch. The real world.
*Picture:* opening night, full audience — not the dress rehearsal.
*When your agent says "in prod" or "on production":* it's talking about the live thing, where mistakes are visible to users. Extra care warranted.

**Staging**
A private practice copy that looks exactly like the live product, for final rehearsal before going live.
*Picture:* the dress rehearsal on the real stage, but with no audience yet.

**Environment (dev / staging / prod)**
Which copy of the world you're in: *dev* (your private workshop), *staging* (dress rehearsal), *prod* (live, real users).
*Picture:* three identical kitchens — one to make a mess in, one to rehearse the final plating, one that actually serves customers.

**Localhost**
The version running privately on *your own machine only*. Nobody else can see it.
*Picture:* cooking in your own kitchen with the curtains drawn. "It works on localhost" means "it works on my machine" — which is not yet proof it works for everyone.

**Release**
A packaged, named version of the product that you hand to the world.
*Picture:* a book edition. "Version 2.0" is a release.

**Hotfix**
An urgent, small repair pushed live fast because something is broken *right now*.
*Picture:* a plumber coming out at midnight for a burst pipe. Not elegant — necessary and immediate.
*When your agent says it:* something live is broken and it's fixing it quickly. Read the explanation; hotfixes skip some of the usual patience because time matters.

**Ship / ship it**
Casual slang for "release it / put it live."
*Picture:* the product literally leaving the warehouse on a truck.
*When your agent says "ready to ship":* the work is done and it's proposing to make it live. Often your cue to say go or wait.

**Server**
A computer, always on, somewhere else, that runs your product for everyone.
*Picture:* the restaurant's kitchen — you don't see it, but it's where the food actually gets made for every table.

**Endpoint / API**
A specific "door" your product exposes so other programs can ask it for something.
*Picture:* a drive-through window. You pull up, ask for a specific thing ("give me the user's orders"), and get it handed back. An **API** is the whole set of windows; an **endpoint** is one particular window.

**Downtime / outage**
A stretch when the live product isn't working for users.
*Picture:* the shop lights are off during opening hours. Bad. The thing agents are trying hard to avoid.

---

## 4. When something breaks

Nothing here means the sky is falling. Software breaks constantly — the whole craft is built around finding and fixing breaks calmly. These words are the vocabulary of *diagnosis*.

**Bug**
A mistake in the code that makes it behave wrong.
*Picture:* a typo in a recipe that says "salt" where it meant "sugar." The famous origin: a real moth stuck in a computer in 1947.

**Error / exception**
The code hit a problem and stopped, usually with a message explaining what went wrong.
*Picture:* the "does not compute" moment — the program throws its hands up and says "I can't do this."
*When your agent shows you an error:* the message is a clue, not a verdict. Agents read these to find the cause. You don't need to decode it yourself.

**Crash**
The program didn't just stumble — it fell over completely and stopped.
*Picture:* the engine cutting out mid-drive, versus just a warning light.

**Stack trace (traceback)**
The detailed trail showing exactly where in the code things went wrong, step by step backward.
*Picture:* a "black box" flight recorder — it shows the sequence that led to the crash, so you can find the cause.
*When your agent pastes a wall of this:* it's the evidence, not a demand on you. Let the agent read it. If you're curious, ask "what does that trace tell you?"

**Log / logs**
The running diary a program writes about what it's doing — invaluable when hunting a problem.
*Picture:* a ship's logbook. When something goes wrong, you read back through it to see what happened.

**Root cause**
The *actual underlying reason* something broke — not just the symptom.
*Picture:* the puddle on the floor is the symptom; the leaking pipe behind the wall is the root cause. Mopping the puddle forever doesn't help.
*When your agent says "let me find the root cause":* it's refusing to slap on a surface patch and instead finding the real problem. This is exactly what you want — even though it takes a bit longer.

**Reproduce (repro)**
Make the bug happen again on purpose, so it can be studied and fixed.
*Picture:* a doctor trying to trigger the symptom in the office so they can actually see it, instead of taking your word for it.
*When your agent says "I reproduced it":* good — it can now see the problem directly, which means it can fix it with confidence rather than guessing.

**Edge case**
A rare, unusual situation the code didn't expect — where things go wrong.
*Picture:* the vending machine works fine, until someone pays entirely in coins from another country. That weird case is the edge.

**Breaking change**
A change that will break things that depend on it, unless they're updated too.
*Picture:* changing the locks on a building — necessary sometimes, but now everyone's old keys stop working and you have to hand out new ones.
*When your agent flags "this is a breaking change":* it's warning you there's a knock-on cost. Worth pausing to understand what else is affected.

**Patch / fix**
A repair for a bug.
*Picture:* a patch on a tyre. Small, targeted, gets you rolling again.

---

## 5. The building blocks (what things are)

The nouns. When your agent mentions one of these, it's naming a part of the machine.

**Code / source code**
The written instructions that tell the computer what to do.
*Picture:* the recipe. The computer follows it exactly, literally, with zero improvisation.

**Function**
A named, reusable chunk of instructions that does one job.
*Picture:* a single kitchen appliance — "the blender." You give it inputs, it does its one job, hands back a result. Code is built from thousands of these.

**Variable**
A named container that holds a piece of information, which can change.
*Picture:* a labelled box. The box says `customerName` on the outside; inside, today it holds "Amir," tomorrow "Dana."

**Library / package / dependency**
Pre-built code written by someone else that your project uses so it doesn't reinvent the wheel.
*Picture:* buying a pre-made pastry base instead of making it from scratch. A **dependency** is exactly that — your project *depends* on this outside piece to work.
*When your agent says "I need to add a dependency":* it wants to pull in an outside building block. Reasonable — but each one is a thing your project now relies on, which is why careful agents ask before adding new ones.

**Framework**
A big, opinionated starter kit that gives your whole project its shape and structure.
*Picture:* a pre-fab house frame — walls, plumbing routes, and wiring already laid out. You build your specific home inside it instead of pouring the foundation yourself.

**Database**
The organized store where your product keeps its information, permanently.
*Picture:* a giant, well-indexed set of spreadsheets that never forgets and can be searched instantly.

**Schema**
The agreed shape of your data — what fields exist and what type each one is.
*Picture:* the blank form's structure: "Name (text), Age (number), Email (text)." The schema is the form's design; the data is what people fill in.

**Migration**
A recorded, repeatable change to the shape of your database.
*Picture:* a renovation plan for the filing system — "add a 'phone number' column to every customer record" — written down so it can be applied cleanly and, if needed, reversed.
*When your agent says "I'll run a migration":* it's carefully changing how data is stored. Careful is the operative word — these are done deliberately because they touch real stored information.

**Environment variable / secret / API key / token**
A private setting or password your product needs to work — kept out of the code so it can't leak.
*Picture:* the keys to the building and the alarm codes. You don't write them on the front door — you keep them somewhere safe and separate.
*When your agent mentions these:* treat them like passwords, because they are. Never paste them into a public place. Good agents refuse to print them.

**Frontend / backend**
**Frontend** = the part users see and touch (buttons, screens). **Backend** = the engine behind the scenes (the logic, the database).
*Picture:* a restaurant. Frontend is the dining room and menu; backend is the kitchen and the supply room.

**Config (configuration)**
The settings that control how your product behaves, without changing the code itself.
*Picture:* the dials and switches on a machine. Same machine, different behavior depending on how the dials are set.

---

## 6. Words agents use about how they work

These describe the *manner* of a change or the agent's own process. They come up constantly and mean less than they sound.

**Blocked**
The agent has stopped because it needs something from you — an answer, a decision, a key — and cannot go on until it gets it.
*Picture:* a builder standing in your hallway holding two tins of paint, waiting for you to point at one.
*When your agent says it:* nothing is broken and nothing is lost. It is waiting on you. Find the question, answer it, and it carries on.

**Refactor**
Tidying and reorganizing code so it's cleaner — *without changing what it does*.
*Picture:* reorganizing your closet. Same clothes, better arranged, easier to find. Nothing was thrown out; nothing new was bought.
*When your agent says "just a refactor":* it's saying "I cleaned up the structure but the behavior is identical." Low-risk by definition — though a careful agent still checks it didn't accidentally change anything.

**Idempotent**
Doing it twice has the same effect as doing it once — running it again does no extra harm.
*Picture:* pressing a lift call button. Pressing it five times doesn't call five lifts. Safe to repeat.
*When your agent says it:* it's reassuring you that re-running something won't double up or cause damage.

**Deprecated**
Officially on the way out — still works for now, but you're meant to stop using it.
*Picture:* a product being discontinued. Still on the shelf, but don't build new plans around it.

**Boilerplate**
Standard, repetitive setup code that's basically the same in every project.
*Picture:* the "Dear ___, thank you for your letter" opening you paste into every reply. Necessary, unoriginal, copy-pasted.

**Stub / mock**
A fake stand-in used during testing, so you can test one thing without needing the real other thing.
*Picture:* a crash-test dummy. Not a real person — but good enough to test the airbag safely.

**Stack**
The whole set of technologies a project is built from, top to bottom.
*Picture:* the full list of ingredients and equipment behind the restaurant — not one dish, the entire operation.

**Endpoint / route**
A specific address inside your product that does a specific thing.
*Picture:* a specific counter at the post office — "this window handles passport renewals."

---

## 7. How agents keep themselves honest and out of each other's way

As agents do more real work — fixing their own bugs, running things on a schedule, working alongside other agents — a second layer of jargon shows up: not about the code itself, but about the *process* the agent uses to stay careful. These four ideas come up constantly once an agent is doing real, ongoing work rather than a single one-off task.

**Fix-on-fix review** (also: *adversarial review*)
After an agent fixes a bug, someone — often another agent, deliberately unbiased because it didn't write the fix — reviews the *fix itself* with fresh eyes, not just the original bug. A repair can introduce its own brand-new problems that the original bug never had.
*Picture:* a surgeon who, after finishing an operation, has a second surgeon check the stitches — not because they doubt the diagnosis, but because a repair is its own new thing that can go wrong in its own new ways.
*When your agent says it:* "running a fix-on-fix review" = it's double-checking its own repair, not the original problem. A sign of real care, not a delay.

**Suppression safety**
The rule that decides when something — a notification, a dismissed task, an old alert — is allowed to disappear "for good" versus just "for now." Getting this wrong in either direction causes a real problem: too eager and it hides work that still matters; too weak and something that's genuinely finished keeps coming back to bother you.
*Picture:* a spam filter. Too aggressive and it eats real mail; too weak and spam keeps landing. Suppression safety is getting that balance right, on purpose, in a rule you could actually explain out loud.
*When your agent says it:* it checked both failure directions — "did I hide something I shouldn't have?" *and* "will this keep coming back when it shouldn't?" — not just one of them.

**Scheduler contract** (also: *time-boundary design*)
The exact rule for when something that repeats on its own — a daily reminder, a nightly check — is and isn't allowed to fire, so it doesn't run twice by accident, skip a day, or fire at the wrong moment.
*Picture:* a train timetable. The "contract" is the precise departure rule — not "sometime in the morning" but "8:02am, once, by the local clock, not some other clock." State the rule loosely and you get two trains at once, or none.
*When your agent says it:* it's being precise about a repeating job's exact boundary — which clock it's using, what counts as "already ran today," what happens if it fires a few minutes late.

**Verification-boundary honesty**
Being precise about exactly what an agent actually *confirmed* versus what it's *assuming*. "I watched this work in the real, live system" is a stronger claim than "the automated tests passed" — a careful agent never blurs the two together.
*Picture:* the difference between a chef who tasted the soup themselves and one who only read the recipe and assumes it's right. Both might be telling the truth — but only one actually tasted it, and a good agent always tells you which one it is.
*When your agent says "not yet verified live" or "not confirmed in production":* that is the honest, correct thing to say, not a failure. It means the automatic checks passed, but nobody has watched the real thing work yet. Read it as the agent refusing to guess — exactly what you want.

**Live-proof planning**
Deciding, *before* a change ships, exactly how you're going to go watch the real thing actually work — rather than just trusting that passed checks mean it works.
*Picture:* planning the taste test before you cook, not hoping you'll remember to check afterward.
*When your agent says it:* it's telling you there's a specific, concrete plan for confirming the fix in the real world — not just "the tests are green, ship it and hope."

**Shared-checkout discipline** (also: *high-velocity branch racing*)
The habits that keep multiple agents (or people) working in the same project folder from stepping on each other — especially when the official shared version of the project changes so often that a change can go stale before the safety checks on it even finish.
*Picture:* two chefs sharing one cutting board. If one wipes it clean mid-chop, the other's ingredients go with it. The fix isn't "work faster" — it's "get your own board" (a separate, isolated copy) for anything that matters.
*When your agent says it:* it might be explaining why a merge kept getting rejected and needing a re-sync — "the shared version moved again while the checks were still running." That's not a mistake; it's a busy shared project. The honest fix is either a faster path (turning on auto-merge, so the platform keeps re-syncing on its own) or working in a genuinely separate copy so a concurrent change can't destroy in-progress work.

---

## 8. Domains, keys, and the internet plumbing

The words that turn up once your thing is real and reachable by other people: giving it an address, keeping your keys safe, and the handful of errors everyone meets on the way. This family hits hardest if you are building somewhere like Lovable, Replit, or Bolt, where your project is on the internet from the first day.

**Domain (domain name)**
The address people type to reach your thing — `yourproject.com`.
*Picture:* the street address. Your site is the house; the domain is the number on the door.
*When your agent says it:* "pointing the domain" means connecting the address you bought to the thing you built. Reversible, and nobody sees a broken version while you do it.

**DNS**
The internet's phone book: it turns your domain into the actual location of the machine serving your site.
*Picture:* directory enquiries. You give a name, it gives back a number.
*When your agent says "DNS is propagating":* your change is spreading around the world and is not instant. Minutes usually, up to a day at worst. Waiting is the fix, not a sign something failed.

**HTTPS / SSL certificate**
The padlock in the address bar: proof the site is really yours, and that what visitors send is scrambled on the way.
*Picture:* a tamper-proof seal on a bottle. You can see nobody opened it in transit.
*When your agent says it:* almost always automatic now. If it mentions a certificate problem, visitors may see a scary browser warning, so it is worth fixing before you share the link.

**CORS**
A browser rule that stops one website quietly helping itself to another's data. When it is set up wrong, your own two halves cannot talk to each other.
*Picture:* a bouncer with a guest list who simply has not been told your name yet.
*When your agent says "a CORS error":* routine, and not an attack or a break-in. It is a permissions setting that needs your own address added to a list. Let it fix it.

**404**
Nothing is at the address that was asked for.
*Picture:* knocking on a door that was never built.
*When your agent says it:* usually a wrong link or a page that moved. Cheap to fix, and it means the server is alive and answering — just not with what you wanted.

**500 / server error**
The server tried and fell over. The problem is on your side, not the visitor's.
*Picture:* the kitchen catching fire rather than the customer ordering something off-menu.
*When your agent says it:* more serious than a 404 because it is your code failing, not a missing page. The logs will say why; that is the agent's job, not yours.

**Cache**
A saved copy kept close by so things load fast — which sometimes means you are shown an old version.
*Picture:* leftovers in the fridge. Quick, but not necessarily today's cooking.
*When your agent says "clear the cache" or "it's cached":* you are looking at yesterday's copy of your own site. Nothing is broken; you are just not seeing the newest version yet.

**Webhook**
A way for another service to tap your project on the shoulder the moment something happens, instead of your project constantly asking.
*Picture:* giving the delivery company your doorbell, rather than checking the porch every five minutes.
*When your agent says it:* it is wiring up "when X happens over there, do Y over here" — a payment landing, a form being filled in.

**Rate limit**
A cap on how many times you may ask another service for something in a given stretch of time.
*Picture:* the free-sample stand. Two each, then come back later.
*When your agent says "we're rate limited":* nothing is broken and nothing is your fault. It is being told to slow down and will wait, or spread the requests out.

**OAuth ("sign in with Google")**
Letting people log in using an account they already have, so you never see or store their password.
*Picture:* showing a passport you already own instead of filling in a whole new form.
*When your agent says it:* this is the safe, boring, correct choice. It means one fewer pile of passwords for you to be responsible for.

---

## 9. The shapes you'll see (paths, files, and names)

Not words exactly — shapes. Your agent will write something like `scripts/process-term-suggestion.mjs` and carry on as though that explained itself. It does not, and none of it is difficult once somebody tells you how to read it.

**File path**
Directions to one exact file, with slashes standing for "inside". `scripts/process-term-suggestion.mjs` means: the file named `process-term-suggestion.mjs`, which lives inside the folder named `scripts`.
*Picture:* an address written back to front and squashed together — country, then city, then street, then house.
*When your agent says it:* it is telling you precisely which file it touched, which is a good habit, not a demand on you. If it matters, ask "what did you change in that file?"

**File extension** (also: .js, .mjs, .ts, .json, .md, .yml, .css, .html)
The bit after the last dot, which says what kind of file it is.
*Picture:* the label on a jar. Same shape of jar, completely different contents.
*When your agent says it:* the common ones are worth knowing. `.md` is notes for humans (this file is one). `.json` and `.yml` are settings. `.js`, `.mjs` and `.ts` are instructions the computer runs. `.html` is a page and `.css` is how it looks.

**Dotfile / dotfolder** (also: .env, .github, .claude, .gitignore)
A file or folder whose name starts with a dot. Almost always settings, and hidden by default.
*Picture:* the paperwork drawer rather than the display shelf. Deliberately out of sight, still important.
*When your agent says it:* your computer hides these, which is why you looked and could not find it. `.env` is the one to be careful with — it usually holds your keys and should never be shared or posted.

**Root (of the project)**
The top level of your project folder, where the big settings files sit.
*Picture:* the ground floor of a building. Everything else is upstairs, off it.
*When your agent says "in the project root":* it means the outermost folder, not tucked inside any of the others.

**package.json**
A project's list of ingredients and its list of shortcut commands, in one file.
*Picture:* a recipe card that also notes which shop-bought items you are relying on.
*When your agent says it:* it is usually either adding an outside building block or defining a command like "start" or "test". Worth a glance when it adds something new.

**Script**
A saved command that does a job in one go, so nobody has to remember the long version.
*Picture:* a labelled button rather than a sequence of switches.
*When your agent says "I'll run the build script":* it is triggering a job that was already written down and named, not inventing something new.

**Backticks / monospace**
When your agent puts something in `this typeface`, it means "this is an exact literal name — copy it character for character."
*Picture:* a name printed in block capitals on a form, to signal it is not a description but the actual thing.
*When your agent says it:* no action needed, but it is a useful signal. Prose you can paraphrase; monospace you should copy exactly.

**Line reference**
A file name, a colon, and a number: `index.html:367` means line 367 of that file.
*Picture:* a page-and-line reference in a book, so two people can look at the same sentence.
*When your agent says it:* it is pointing at the exact spot, usually because something went wrong there. Evidence, not homework.

---

## How to use this with your agent

- **When a word stops you, just ask.** "What does *merge* mean, in plain English?" is always a fair question. A good agent will answer it the way this glossary does.
- **You can ask for the plain version of anything.** "Explain that again with no jargon." "What's about to happen, in one sentence?" "Is this reversible?" These are the three most useful questions you can ask a coding agent.
- **Green is good, red means look, 'verified' means it checked, 'not verified' means it's being honest that it didn't.** If you remember nothing else, remember that.
- **Scary-sounding words are usually routine.** Merge conflicts, errors, stack traces, failed builds — these are the ordinary weather of software, and agents handle them all day. The tone to have is curious, not alarmed.

You do not need to become an engineer to build real things. You need a translator. This is it.
