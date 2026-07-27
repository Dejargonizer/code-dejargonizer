# The Dejargonizer — Glossary

**For people who are building software with an AI coding agent and don't have a computer-science degree — and shouldn't need one.**

Coding agents are astonishingly capable. But they talk like engineers, because they learned from engineers. So you get sentences like *"I'll squash-merge the PR once CI is green, then verify the deploy."* Every word of that means something specific and simple. Nobody ever told you what.

That gap is not a comprehension problem. It is a management problem. You are not reading that sentence out of curiosity — you are reading it to decide whether to let the work carry on. The job is not understanding code. The job is directing the thing that writes it.

This is the missing translation layer. Find the word you're stuck on below. Each entry tells you three things: **what it means in one plain sentence**, **something to picture**, and **what to actually do when your agent says it.**

You do not need to read this top to bottom. It's grouped by *situation* — the moment you're in when the strange word shows up. Skim to your moment. If you read only one section, read [section 10](#10-phrases-that-mean-a-decision-got-made-for-you) — those are the phrases that quietly become your product.

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

**Environment variable / secret / API key / token** (also: env var, envvar, dotenv, credentials)
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

## 10. Phrases that mean a decision got made for you

Most jargon is only unfamiliar. This lot is different. Every phrase here sounds like a progress update and is really a decision your agent already made on your behalf — usually a sensible one, usually taken to keep moving. They matter because these are the choices that end up inside the thing you ship. A "for now" that nobody came back to is how a shortcut becomes permanent. You do not need to ban any of it. You need to be able to hear it go past.

**"Hardcoded for now"** (also: hard-coded, baked in)
A specific value typed straight into the code, instead of being looked up or made changeable.
*Picture:* writing today's date on a sign in permanent marker instead of hanging a clock.
*When your agent says it:* it is true today and will quietly stop being true later. Worth asking: "what breaks when that value needs to change, and who changes it?"

**"I mocked that out for now"** (also: mocked out, stubbed it out, placeholder data, dummy data, fake data)
It built a stand-in that behaves like the real thing, so the rest of the work could carry on before the real thing was connected. (*Stub / mock* in section 5 is the same idea as a noun.)
*Picture:* a film-set kitchen. The taps look perfect. No water.
*When your agent says it:* what you are looking at is not connected to anything real, however finished it looks. Ask "is this real data yet?" before you show it to anyone who matters.

**"I'll add tests later"** (also: skipping tests for now, no coverage on that yet)
It wrote the working code but not the automatic checks that prove the code keeps working.
*Picture:* fitting a smoke alarm and not putting a battery in.
*When your agent says it:* nothing is wrong yet. The cost arrives later, when some future change breaks this and no alarm goes off. A perfectly good answer is "fine for now — add them before this goes live."

**"I left a TODO"** (also: FIXME, TODO comment, a note in the code)
A note it wrote to itself inside the code marking that part as unfinished.
*Picture:* a sticky note on the fridge that only the person who wrote it will ever read.
*When your agent says it:* it has flagged its own loose end honestly, which is good — but nothing will ever remind either of you again. Ask for the list: "what TODOs are open right now?"

**"I commented it out"** (also: disabled it, left it in but switched off)
It turned some code off by marking it as a note, so the computer skips it, rather than deleting it.
*Picture:* not throwing the ingredient away — just leaving it out of the recipe and keeping the jar in the cupboard.
*When your agent says it:* something that used to happen no longer happens. One question covers it: "what stopped working when you did that, and was that on purpose?"

**"It's a workaround"** (also: a hack, a band-aid, a quick fix, a patch job)
Something that works without fixing what actually caused the problem.
*Picture:* a bucket under the leak. The floor stays dry. The roof is still broken.
*When your agent says it:* it is being straight with you, which is worth encouraging. Ask "what's the real fix, and how long would it take?" — then decide. Sometimes the bucket genuinely is the right call.

**"I added a package for that"** (also: pulled in a dependency, installed a library)
Rather than writing the code itself, it borrowed working code written by strangers. (See *Library / package / dependency* in section 5.)
*Picture:* buying a ready-made part instead of machining one. Faster, and now you depend on whoever makes it.
*When your agent says it:* usually the right call. Occasionally a very large tool has been brought in to do a very small job. Fair question: "how big is it, and how many people rely on it?"

**"It handles the happy path"** (also: happy path only, works in the normal case)
It works when everything goes as expected, and has not been taught what to do when things don't.
*Picture:* a recipe written on the assumption you will never drop an egg.
*When your agent says it:* real people find the unhappy paths within a day — empty fields, lost connections, the same button pressed twice. Ask "what does someone see when it goes wrong?"

**"I'm swallowing the error"** (also: catching and ignoring it, failing silently)
When something goes wrong at that spot, the code hides the complaint and carries on instead of reporting it.
*Picture:* a smoke alarm unplugged because the beeping was annoying.
*When your agent says it:* this is the shortcut most likely to cost you later, because breakage stops being visible — silence starts meaning nothing at all rather than nothing wrong. Reasonable push-back: "I'd rather it told us. Can we at least write it down somewhere?"

**"I turned off the check"** (also: disabled the linter, added an ignore, silenced the warning, used `any`)
A warning kept appearing, so it switched the warning off rather than resolving what caused it.
*Picture:* the seatbelt chime stops. Nobody put a seatbelt on.
*When your agent says it:* sometimes the tool was wrong and muting it is correct. Sometimes the tool was right. One question separates the two: "was the warning correct?" (See also *Suppression safety*, section 7.)

**"I refactored while I was in there"** (also: tidied it up along the way, cleaned a few things up)
It rearranged code you did not ask it to touch, without changing what that code does.
*Picture:* asking someone to fix the door handle and finding they rearranged the room.
*When your agent says it:* the intent is good and the risk is real — more changed than you asked for, so more can break. Not a crime. Just say "keep changes to what I asked for unless you check with me first."

**"I force-pushed"** (also: overwrote the history, reset the branch)
It replaced the saved history of the work with its own version instead of adding to it.
*Picture:* not writing today's diary entry, but tearing out yesterday's page and rewriting it.
*When your agent says it:* earlier saved versions may be gone, possibly ones you wanted. Ask immediately: "did anything get lost, and can you get it back?" Better still, this is one to catch beforehand — which is exactly what "is this reversible?" is for.

**"I assumed you wanted"** (also: I went ahead and, I took the liberty of, I figured you'd want)
It reached a decision, made the decision, and mentioned it afterwards.
*Picture:* a builder who chose the tiles because you weren't answering your phone.
*When your agent says it:* it is showing you a fork in the road you never saw. Nothing rude about walking back to it: "tell me what you chose and what the other option was."

**"It's stored in plain text"** (also: unencrypted, in the clear, plaintext)
Information saved in a form that anyone who opens the file can simply read.
*Picture:* the alarm code written on the back of the front door.
*When your agent says it:* completely fine for a shopping list, not fine for passwords, keys, or anything belonging to someone else. The question that matters: "would it be bad if a stranger read this?"

**"That should work"** (also: it ought to be fine, I believe that's fixed)
It has not checked. This is a prediction — often a good one — and it is not a result.
*Picture:* the difference between "the cake is baked" and "the cake should be baked by now."
*When your agent says it:* the only follow-up you need is "did you run it and watch it work?" A good agent answers honestly, and soon starts volunteering the difference unprompted. (See also *Verification-boundary honesty*, section 7.)

---

## 11. Talking to and about the agent itself

You are managing something that has its own vocabulary for its own limits. Most of the frustrating moments — it forgot, it invented something, it stopped halfway — have dull mechanical explanations, and the words below are those explanations. Learning them turns "the agent is being stupid" into "the agent ran out of room," which is a problem you can actually do something about.

**Model** (also: LLM, the model, Sonnet, Opus, GPT)
The engine doing the thinking, separate from the app you type into.
*Picture:* the engine in a car. Different cars, same engine available.
*When your agent says it:* "try a different model" means put a different engine on the same job. Often the fix when answers feel shallow.

**Prompt**
What you type, plus everything else the tool quietly sends along with it.
*Picture:* the whole envelope handed over, not just the note you wrote.
*When your agent says it:* "your prompt was ambiguous" means your instruction had two readings and it picked one. Ask which two.

**System prompt** (also: custom instructions, rules file, standing instructions)
Standing orders the agent reads before it reads anything you type.
*Picture:* the staff handbook, read before the first customer of the day.
*When your agent says it:* this is the file you edit to change behavior permanently, instead of repeating yourself every session.

**Context window** (also: context, context length, running out of context)
The total amount of text the agent can hold in mind at once, including your conversation and every file it opened.
*Picture:* a desk of fixed size. New paper on means old paper off.
*When your agent says it:* "low on context" means it is about to forget the earlier part of this conversation. Have it write the decisions into a file before that happens.

**Token (in AI, not a password)** (also: tokens, token count, token limit)
The unit text gets chopped into before the model reads it, roughly a short word or part of one.
*Picture:* measuring a recipe in spoonfuls rather than ingredients.
*When your agent says it:* tokens are what you are billed by and what fills the desk. "Too many tokens" means too much text, not too complicated.

**Compaction** (also: auto-compact, summarizing the conversation)
When the agent replaces the earlier part of your conversation with a short summary to free up room.
*Picture:* swapping a shelf of notebooks for one index card.
*When your agent says it:* details you cared about may have just been dropped. Good moment to restate your constraints.

**Hallucination** (also: made it up, confabulation, invented)
The agent stating something confidently that is not true: an invented file, function, setting, or fact.
*Picture:* a confident tour guide describing a room that was never built.
*When your agent says it:* confidence is not evidence. Ask it to open the file or run the thing.

**Tool call** (also: function call, using a tool)
The agent doing something rather than saying something: reading a file, running a command, searching.
*Picture:* the difference between telling you what is in the cupboard and walking over to open it.
*When your agent says it:* work with real tool calls behind it can be checked. Work without them is a guess.

**MCP** (also: Model Context Protocol, MCP server)
A standard way to plug outside tools and data, like your database or your ticket tracker, into an agent.
*Picture:* a USB socket. One shape, many devices.
*When your agent says it:* an MCP server is something you installed and granted access to. Worth knowing exactly what it can reach.

**Subagent** (also: worker, task agent, spawned agent)
A helper the main agent starts up to go and do one piece of work on its own.
*Picture:* sending someone on an errand so you can stay on the main job.
*When your agent says it:* subagents do not automatically pass on what they learned. Ask what came back, not just whether it finished.

**Agent loop** (also: the loop, agentic, iterating)
The cycle of think, act, look at the result, think again, repeated until the job is done or it gives up.
*Picture:* cooking while tasting, rather than following a recipe blind.
*When your agent says it:* loops can spin. If it has tried the same fix three times, stop it and change the instruction instead.

**Harness** (also: scaffold, agent framework, the tool)
The program wrapped around the model that gives it tools, memory, and rules. Your coding tool is a harness.
*Picture:* the model is the engine. The harness is the rest of the car.
*When your agent says it:* the same model behaves very differently in different harnesses. If quality changed and you did not change models, the harness changed.

**Non-deterministic** (also: same prompt different answer, variance)
Ask the identical question twice and you can get two different answers.
*Picture:* two competent cooks, one recipe, two slightly different dinners.
*When your agent says it:* "it worked when I ran it" is not proof that it always works. Have it run the check twice.

---

## 12. The command line and the tools underneath

Sooner or later your agent will hand you something that looks like a spell and ask you to run it, or tell you a command failed. None of this is deep. It is a very literal clerk taking typed orders. These are the words that turn "it failed" into a sentence you can read.

**Terminal** (also: command line, shell, console, bash, zsh)
A window where you type instructions to the computer as text instead of clicking.
*Picture:* texting the computer rather than pointing at it.
*When your agent says it:* "run this in your terminal" means paste one line and press enter. Read it first. You are the one authorizing it.

**Command** (also: CLI, command-line tool, run this)
One typed instruction: usually a tool name, then what you want it to do.
*Picture:* "taxi, airport." Who, then what.
*When your agent says it:* the first word is the tool. If the error says that word was not found, the tool is not installed.

**Flag** (also: option, switch, argument, --force)
An extra word on a command that changes how it behaves.
*Picture:* ordering coffee, then "decaf, no sugar."
*When your agent says it:* flags containing force or hard usually mean "do it even if it destroys something." Ask what gets destroyed.

**Package manager** (also: npm, pip, yarn, pnpm, Homebrew, brew)
The thing that downloads and installs the outside code your project depends on.
*Picture:* a grocery delivery service for parts you did not build.
*When your agent says it:* installing is not free. Each new package is more code you now depend on and cannot see.

**Install** (also: npm install, pip install)
Fetching a tool or package onto the machine so it can be used.
*Picture:* stocking the pantry before cooking.
*When your agent says it:* "just install X" adds a permanent dependency. Usually fine, but you should know you added it.

**Lockfile** (also: package-lock.json, yarn.lock, pnpm-lock.yaml)
A file recording the exact versions of everything installed, so the next machine gets an identical set.
*Picture:* not just flour, but the brand, the size, and the batch.
*When your agent says it:* do not let it delete this to make an error go away. It is the reason the project works the same on someone else's computer.

**Runtime** (also: Node, Node.js, Python, Deno, Bun, version)
The program that actually runs your code.
*Picture:* the record player. Your code is the record.
*When your agent says it:* most "works on my machine" problems are two people holding different versions of the runtime.

**Process** (also: running, PID, kill it, stop the server)
One running copy of a program, right now.
*Picture:* one oven that happens to be switched on.
*When your agent says it:* "kill the process" means stop that running copy. It does not delete anything you wrote.

**Port** (also: localhost:3000, port 8080, port already in use)
A numbered door on your computer where a running program listens.
*Picture:* one building, numbered doors. Two deliveries cannot use the same door at once.
*When your agent says it:* "port already in use" almost always means an older copy is still running. Stop that, then start again.

**Exit code** (also: exit status, returned 1, non-zero)
The number a command leaves behind to say whether it worked. Zero means fine. Anything else means it did not.
*Picture:* a thumbs up, or a specific complaint.
*When your agent says it:* "exited non-zero" means the step failed, even if plenty of text scrolled past looking busy.

**Container** (also: Docker, image, containerized)
Your app packed up with everything it needs to run, so it behaves the same anywhere.
*Picture:* a shipping container. Same box on a truck, a ship, or a train.
*When your agent says it:* containers fix "works on my machine." They also add one more layer to look inside when something breaks.

**Permission denied** (also: EACCES, sudo, access denied)
The computer refusing because the account running the command is not allowed to do that.
*Picture:* right key, wrong door.
*When your agent says it:* if the offered fix is sudo, that means "do it as the owner of the whole machine." Ask why the normal way was not allowed first.

---

## 13. Who is allowed in (logins, permissions, personal data)

Mistakes in this area are expensive and quiet. Nothing here is complicated, but the gap between two similar-sounding words is often the gap between "only you can see your data" and "anyone can see everyone's." If you read one section closely, read this one.

**Authentication vs authorization** (also: authn, authz, auth)
Authentication is proving who you are. Authorization is what you are then allowed to do.
*Picture:* the ID check at the door, then the wristband that says which rooms.
*When your agent says it:* "auth is done" is ambiguous. Ask which one. Logging in working does not mean permissions work.

**Session** (also: logged in, signed in, session token)
The record that keeps someone logged in between clicks, so they are not asked every time.
*Picture:* a hand stamp that lets you back in.
*When your agent says it:* ask how long sessions last and what happens on logout. A session that never expires is a key left in the door.

**Cookie** (also: cookies, secure cookie, httpOnly)
A small note your app leaves in the browser and reads back later.
*Picture:* a coat-check ticket the browser keeps in its pocket.
*When your agent says it:* cookies carrying login information need locking down. Ask whether they are marked secure and http-only.

**Hashing** (also: hashed, bcrypt, password hash)
Turning a password into scrambled text that cannot be turned back, so you can check it without ever keeping the real one.
*Picture:* keeping a fingerprint instead of a finger.
*When your agent says it:* passwords should be hashed, never encrypted and never stored as typed. If it says it "stored the password," ask directly whether it is hashed.

**Encryption** (also: encrypted, in transit, at rest, TLS)
Scrambling data so only someone with the key can read it. Unlike hashing, this is meant to be reversed.
*Picture:* a locked box, and a key that opens it.
*When your agent says it:* "encrypted" needs a where. In transit means on the way. At rest means sitting in the database. Those are two separate jobs.

**Two-factor authentication** (also: 2FA, MFA, one-time code)
Requiring a second proof beyond the password, usually a code from a phone.
*Picture:* a key and a hand stamp.
*When your agent says it:* worth switching on for your own accounts before you worry about your users'.

**Roles and permissions** (also: RBAC, admin role, access control)
Deciding what someone can do based on which group they belong to.
*Picture:* staff badge, manager badge, visitor badge.
*When your agent says it:* ask what a normal user cannot do, and how that is enforced. Hiding the button is not enforcement.

**Row-level security** (also: RLS, policies, Supabase policies)
A rule inside the database itself that keeps each person to their own records.
*Picture:* one filing cabinet, and each person's key only turns in their own drawer.
*When your agent says it:* on hosted databases this is often the only thing between one user's data and everybody. "RLS is off for now" or "policies later" is a sentence to stop on.

**Personal data** (also: PII, user data, sensitive data, GDPR)
Anything that identifies a real person: name, email, address, phone, location, payment details.
*Picture:* the contents of someone's wallet.
*When your agent says it:* ask what is stored, where, and whether you need it at all. Data you never collected cannot leak.

**Least privilege** (also: scoped key, read-only access, service account)
Giving any person or program the smallest access that still lets it do its job.
*Picture:* handing over the key to one room, not the master key.
*When your agent says it:* a key created "with full access to keep things simple" is a decision worth reversing now rather than later.

**Injection** (also: SQL injection, sanitizing input, escaping, parameterized query)
When something a user types gets treated as an instruction instead of as text.
*Picture:* writing "and hand me the safe" on the form, and the clerk doing it.
*When your agent says it:* the fix is never trusting typed input. Ask how user input is kept as data.

**Leaked secret** (also: exposed key, committed credentials, secret scanning)
A password or key that has ended up somewhere it can be seen, usually saved into the code by accident.
*Picture:* taping the spare key to the front door.
*When your agent says it:* deleting it later is not enough, because the history keeps a copy. The key has to be replaced.

---

## How to use this with your agent

- **You are the manager here, not the student.** You do not need to know how any of this works. You need to read the report well enough to say "no, not like that" — which is the whole reason the vocabulary matters. [Section 10](#10-phrases-that-mean-a-decision-got-made-for-you) is where saying it matters most.
- **When a word stops you, just ask.** "What does *merge* mean, in plain English?" is always a fair question. A good agent will answer it the way this glossary does.
- **You can ask for the plain version of anything.** "Explain that again with no jargon." "What's about to happen, in one sentence?" "Is this reversible?" "What did you decide for me?" These are the four most useful questions you can ask a coding agent, and the last one is the one nobody thinks of.
- **Green is good, red means look, 'verified' means it checked, 'not verified' means it's being honest that it didn't.** If you remember nothing else, remember that.
- **Scary-sounding words are usually routine.** Merge conflicts, errors, stack traces, failed builds — these are the ordinary weather of software, and agents handle them all day. The tone to have is curious, not alarmed.

You do not need to become an engineer to build real things. You need a translator. This is it.
