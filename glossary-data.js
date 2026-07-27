// AUTO-GENERATED FILE - do not edit by hand.
// Source of truth: GLOSSARY.md (content) + glossary-tone.json (presentation hints).
// Regenerate with: node scripts/build-glossary-data.mjs
// This also happens automatically via .github/workflows/sync-glossary-data.yml
// whenever GLOSSARY.md or glossary-tone.json change on main.

window.GLOSSARY_DATA = [
  {
    "n": "1",
    "title": "Saving and sharing your work",
    "blurb": "This whole family of words comes from Git — the system almost every software project uses to track changes. Think of Git as a time machine plus a shared filing cabinet for your project. It remembers every version, and it lets more than one person (or agent) work without clobbering each other.",
    "terms": [
      {
        "t": "Repository",
        "m": "Your project's folder — plus its entire history, every version it's ever been.",
        "p": "the filing cabinet itself. One repo = one project.",
        "aka": "repo",
        "note": "\"the repo\" just means \"this project.\" Nothing to do."
      },
      {
        "t": "Commit",
        "m": "A saved snapshot of your work, with a short note saying what changed.",
        "p": "pressing \"save\" in a video game — but it also writes a diary entry: \"reached level 3, got the key.\"",
        "note": "\"I committed the change\" = it saved a checkpoint. Your work is now safely recorded. Good news.",
        "tone": "good"
      },
      {
        "t": "Push",
        "m": "Sending your saved snapshots up from your machine to the shared copy online (usually on GitHub).",
        "p": "uploading your saved game to the cloud so others can see it.",
        "note": "\"I pushed\" = your work is now on the shared server, not just the local machine. This is how it becomes visible to others and to the systems that put it live."
      },
      {
        "t": "Pull",
        "m": "The opposite of push — bringing the latest shared changes down onto your machine.",
        "p": "downloading everyone else's saved progress so you're caught up."
      },
      {
        "t": "Branch",
        "m": "A separate copy of the project where you can try changes safely, without touching the real thing.",
        "p": "a \"sandbox\" universe. You experiment there; if it works, you bring it back; if it doesn't, you throw the whole universe away and nothing was harmed.",
        "note": "\"I made a branch\" = \"I'm working in a safe side-copy, not on the live project.\" This is the responsible thing to do. Relax.",
        "tone": "good"
      },
      {
        "t": "Main",
        "m": "The branch that is the real, official project. The one that counts.",
        "p": "the master copy of the manuscript. The branches are drafts; main is what gets published.",
        "aka": "master",
        "note": "changes on main are the ones that generally go live. That's why agents are careful about it."
      },
      {
        "t": "Merge",
        "m": "Taking the changes from a branch and folding them into another branch (usually into main).",
        "p": "your sandbox experiment worked, so you copy it back into the real project.",
        "note": "\"I'll merge this\" = \"I'm about to make these changes official.\" This is often the moment right before something goes live."
      },
      {
        "t": "Squash-merge",
        "m": "Folding all the little saves from one piece of work into the real project as a single tidy change.",
        "p": "twelve rough drafts of a letter going into the file as one clean final copy. The drafts are not kept; the result is.",
        "note": "\"I'll squash-merge this\" = \"I'm about to make this work official, recorded as one change rather than twenty.\" It is the normal, tidy way to finish a piece of work — and usually the moment right before something goes live."
      },
      {
        "t": "Merge conflict",
        "m": "Git got confused because two people changed the same line two different ways, and it doesn't know which one you want. It stops and asks.",
        "p": "two editors wrote different sentences in the same spot of a document. Someone has to pick.",
        "note": "not a disaster — it's a normal traffic jam. The agent (or you) just decides which version wins. Let the agent resolve it; ask it to explain the choice if the change matters to you.",
        "tone": "look"
      },
      {
        "t": "Pull request",
        "m": "A formal proposal that says: \"here are my changes; please review them before we make them official.\" It's the polite knock on the door before merging.",
        "p": "handing in an edited draft with a cover note, and asking someone to approve it before it goes to print.",
        "aka": "PR, merge request",
        "note": "\"I opened a PR\" = \"the change is ready and waiting for a yes.\" Often you are the one who says yes. It's a checkpoint, on purpose — nothing goes live until the PR is merged."
      },
      {
        "t": "Clone",
        "m": "Making your own full copy of a project onto your machine to work on it.",
        "p": "photocopying the entire filing cabinet to take home."
      },
      {
        "t": "Fork",
        "m": "Your own personal copy of someone else's project, so you can change it without affecting theirs.",
        "p": "photocopying a book so you can scribble in the margins without touching the library's copy."
      },
      {
        "t": "Revert",
        "m": "Undo a specific past change — cleanly, on the record.",
        "p": "\"undo,\" but it also writes a note saying \"we undid that, on purpose, here's why.\"",
        "note": "safe and reversible. This is the calm way to back out of a mistake.",
        "tone": "good"
      },
      {
        "t": "Rollback",
        "m": "Put the live product back to an earlier working version because the new one is causing problems.",
        "p": "the restaurant's new recipe is making people sick — go back to last week's recipe right now, figure out the new one later.",
        "note": "usually said under pressure. It means \"something's wrong live; get back to safety first.\"",
        "tone": "look"
      },
      {
        "t": "Diff",
        "m": "The exact list of what changed — what lines were added, what was removed.",
        "p": "\"track changes\" in a Word document. Red for deleted, green for added.",
        "note": "it's showing you precisely what it touched. If you want to know \"what did you actually change?\", this is the answer."
      },
      {
        "t": "Stash",
        "m": "Temporarily set your half-finished work aside so you can deal with something urgent, then bring it back.",
        "p": "sweeping your in-progress puzzle onto a tray so you can use the table, then sliding it back."
      }
    ]
  },
  {
    "n": "2",
    "title": "Checking the work is actually good",
    "blurb": "Before code goes live, it gets checked — automatically and repeatedly. This family of words is all about \"did we break anything?\" Agents run these checks constantly. When one comes back green, that's good. Red means something needs attention.",
    "terms": [
      {
        "t": "Test",
        "m": "A small piece of code whose only job is to check that another piece of code does what it's supposed to.",
        "p": "a taste-tester who takes one bite and says \"yes, this is soup\" or \"this is not soup.\"",
        "note": "\"the tests pass\" = \"the automatic checkers all say the work is behaving correctly.\" Reassuring.",
        "tone": "good"
      },
      {
        "t": "Test suite",
        "m": "The whole collection of tests, run together.",
        "p": "the full panel of taste-testers, not just one.",
        "note": "every automatic checker approved. This is one of the strongest \"it's fine\" signals there is.",
        "tone": "good"
      },
      {
        "t": "Unit test",
        "m": "A test that checks one tiny piece in isolation.",
        "p": "testing the doorbell by itself, before you check whether the whole house works."
      },
      {
        "t": "Smoke test",
        "m": "A quick, shallow check that the basics work at all — before bothering with the detailed checks.",
        "p": "turning the car key to confirm the engine starts. You haven't tested the air-con or the radio — you've just confirmed it's not dead.",
        "note": "from plumbing and electronics — literally \"turn it on and see if smoke comes out.\" \"smoke test passed\" = \"the obvious this-is-alive checks are fine.\" Basic confidence, not a full guarantee."
      },
      {
        "t": "Regression",
        "m": "A thing that used to work but a new change accidentally broke. A step backward.",
        "p": "you fix the kitchen tap, and now the shower is cold. The shower \"regressed.\"",
        "note": "a regression test is a checker added specifically so that a bug, once fixed, can never quietly come back. Agents write these on purpose — it's a sign of care.",
        "tone": "good"
      },
      {
        "t": "CI",
        "m": "The robot that automatically runs all the checks every time code changes — so nobody has to remember to.",
        "p": "an automatic quality-control line in a factory. Every item that comes off the belt gets inspected, no exceptions.",
        "aka": "continuous integration",
        "note": "it's waiting for (or has received) the robot inspector's all-clear. Green = passed. Red = something failed, look before proceeding."
      },
      {
        "t": "Build",
        "m": "Turning the written code into the actual runnable product.",
        "p": "baking. The code is the recipe and ingredients; the build is the finished cake. \"The build failed\" means something went wrong in the oven — the cake didn't come out.",
        "note": "the product assembled successfully. A failed build means it can't even be put together yet, let alone go live."
      },
      {
        "t": "Lint / linter",
        "m": "An automatic proofreader for code — catches sloppy style and small mistakes.",
        "p": "spellcheck and grammar-check, but for code.",
        "note": "no style complaints. Minor, but tidy."
      },
      {
        "t": "Type check",
        "m": "An automatic check that the pieces of code fit together — that you're not accidentally handing a phone number where a name was expected.",
        "p": "checking that every plug matches its socket before you switch the power on.",
        "aka": "tsc, typecheck",
        "note": "the pieces are wired together correctly. If it fails, two parts don't fit and it would break."
      },
      {
        "t": "Verify / verification",
        "m": "Actually confirming something works — not just assuming it does.",
        "p": "the difference between \"I mailed the invitation\" and \"I called and they said they got it.\"",
        "note": "it checked with its own eyes/tools, rather than guessing. This is the good, careful kind of claim. If it says \"not verified,\" respect that — it's being honest that it didn't confirm.",
        "tone": "good"
      },
      {
        "t": "Flaky test",
        "m": "A checker that sometimes passes and sometimes fails for the same code — usually because of timing or luck, not a real problem.",
        "p": "a smoke alarm that occasionally beeps for no reason. Annoying; not a fire.",
        "note": "it's flagging that a red result might be noise, not a genuine break. Worth a second run to confirm."
      },
      {
        "t": "Green / red",
        "m": "Green = checks passed, all clear. Red = something failed.",
        "p": "",
        "note": "good to go. \"It's red\": stop and look."
      },
      {
        "t": "npm audit",
        "m": "A command that checks your project's dependencies for known security problems and tells you how many it found.",
        "p": "A quick health inspection of every ingredient in your pantry, flagging any that have been recalled.",
        "note": "It's just running a routine check, not fixing or changing anything in your code yet."
      }
    ]
  },
  {
    "n": "3",
    "title": "Putting it live",
    "blurb": "Getting your work in front of real people. This is where the stakes go up — mistakes here are visible to users. Agents slow down and get careful around these words, and so should you.",
    "terms": [
      {
        "t": "Deploy / deployment",
        "m": "Putting your code live where real people can use it.",
        "p": "opening the shop doors. Up to now you were rehearsing inside; deploy is unlocking the front door.",
        "note": "your change is going (or has gone) live. This is the real-consequences moment."
      },
      {
        "t": "Production",
        "m": "The real, live version that actual users touch. The real world.",
        "p": "opening night, full audience — not the dress rehearsal.",
        "aka": "prod",
        "note": "it's talking about the live thing, where mistakes are visible to users. Extra care warranted.",
        "tone": "look"
      },
      {
        "t": "Staging",
        "m": "A private practice copy that looks exactly like the live product, for final rehearsal before going live.",
        "p": "the dress rehearsal on the real stage, but with no audience yet."
      },
      {
        "t": "Environment",
        "m": "Which copy of the world you're in: dev (your private workshop), staging (dress rehearsal), prod (live, real users).",
        "p": "three identical kitchens — one to make a mess in, one to rehearse the final plating, one that actually serves customers.",
        "aka": "dev / staging / prod"
      },
      {
        "t": "Localhost",
        "m": "The version running privately on your own machine only. Nobody else can see it.",
        "p": "cooking in your own kitchen with the curtains drawn. \"It works on localhost\" means \"it works on my machine\" — which is not yet proof it works for everyone."
      },
      {
        "t": "Release",
        "m": "A packaged, named version of the product that you hand to the world.",
        "p": "a book edition. \"Version 2.0\" is a release."
      },
      {
        "t": "Hotfix",
        "m": "An urgent, small repair pushed live fast because something is broken right now.",
        "p": "a plumber coming out at midnight for a burst pipe. Not elegant — necessary and immediate.",
        "note": "something live is broken and it's fixing it quickly. Read the explanation; hotfixes skip some of the usual patience because time matters.",
        "tone": "look"
      },
      {
        "t": "Ship / ship it",
        "m": "Casual slang for \"release it / put it live.\"",
        "p": "the product literally leaving the warehouse on a truck.",
        "note": "the work is done and it's proposing to make it live. Often your cue to say go or wait."
      },
      {
        "t": "Server",
        "m": "A computer, always on, somewhere else, that runs your product for everyone.",
        "p": "the restaurant's kitchen — you don't see it, but it's where the food actually gets made for every table."
      },
      {
        "t": "Endpoint / API",
        "m": "A specific \"door\" your product exposes so other programs can ask it for something.",
        "p": "a drive-through window. You pull up, ask for a specific thing (\"give me the user's orders\"), and get it handed back. An API is the whole set of windows; an endpoint is one particular window."
      },
      {
        "t": "Downtime / outage",
        "m": "A stretch when the live product isn't working for users.",
        "p": "the shop lights are off during opening hours. Bad. The thing agents are trying hard to avoid.",
        "tone": "look"
      }
    ]
  },
  {
    "n": "4",
    "title": "When something breaks",
    "blurb": "Nothing here means the sky is falling. Software breaks constantly — the whole craft is built around finding and fixing breaks calmly. These words are the vocabulary of diagnosis.",
    "terms": [
      {
        "t": "Bug",
        "m": "A mistake in the code that makes it behave wrong.",
        "p": "a typo in a recipe that says \"salt\" where it meant \"sugar.\" The famous origin: a real moth stuck in a computer in 1947."
      },
      {
        "t": "Error / exception",
        "m": "The code hit a problem and stopped, usually with a message explaining what went wrong.",
        "p": "the \"does not compute\" moment — the program throws its hands up and says \"I can't do this.\"",
        "note": "the message is a clue, not a verdict. Agents read these to find the cause. You don't need to decode it yourself."
      },
      {
        "t": "Crash",
        "m": "The program didn't just stumble — it fell over completely and stopped.",
        "p": "the engine cutting out mid-drive, versus just a warning light."
      },
      {
        "t": "Stack trace",
        "m": "The detailed trail showing exactly where in the code things went wrong, step by step backward.",
        "p": "a \"black box\" flight recorder — it shows the sequence that led to the crash, so you can find the cause.",
        "aka": "traceback",
        "note": "it's the evidence, not a demand on you. Let the agent read it. If you're curious, ask \"what does that trace tell you?\""
      },
      {
        "t": "Log / logs",
        "m": "The running diary a program writes about what it's doing — invaluable when hunting a problem.",
        "p": "a ship's logbook. When something goes wrong, you read back through it to see what happened."
      },
      {
        "t": "Root cause",
        "m": "The actual underlying reason something broke — not just the symptom.",
        "p": "the puddle on the floor is the symptom; the leaking pipe behind the wall is the root cause. Mopping the puddle forever doesn't help.",
        "note": "it's refusing to slap on a surface patch and instead finding the real problem. This is exactly what you want — even though it takes a bit longer.",
        "tone": "good"
      },
      {
        "t": "Reproduce",
        "m": "Make the bug happen again on purpose, so it can be studied and fixed.",
        "p": "a doctor trying to trigger the symptom in the office so they can actually see it, instead of taking your word for it.",
        "aka": "repro",
        "note": "good — it can now see the problem directly, which means it can fix it with confidence rather than guessing.",
        "tone": "good"
      },
      {
        "t": "Edge case",
        "m": "A rare, unusual situation the code didn't expect — where things go wrong.",
        "p": "the vending machine works fine, until someone pays entirely in coins from another country. That weird case is the edge."
      },
      {
        "t": "Breaking change",
        "m": "A change that will break things that depend on it, unless they're updated too.",
        "p": "changing the locks on a building — necessary sometimes, but now everyone's old keys stop working and you have to hand out new ones.",
        "note": "it's warning you there's a knock-on cost. Worth pausing to understand what else is affected.",
        "tone": "look"
      },
      {
        "t": "Patch / fix",
        "m": "A repair for a bug.",
        "p": "a patch on a tyre. Small, targeted, gets you rolling again."
      }
    ]
  },
  {
    "n": "5",
    "title": "The building blocks (what things are)",
    "blurb": "The nouns. When your agent mentions one of these, it's naming a part of the machine.",
    "terms": [
      {
        "t": "Code / source code",
        "m": "The written instructions that tell the computer what to do.",
        "p": "the recipe. The computer follows it exactly, literally, with zero improvisation."
      },
      {
        "t": "Function",
        "m": "A named, reusable chunk of instructions that does one job.",
        "p": "a single kitchen appliance — \"the blender.\" You give it inputs, it does its one job, hands back a result. Code is built from thousands of these."
      },
      {
        "t": "Variable",
        "m": "A named container that holds a piece of information, which can change.",
        "p": "a labelled box. The box says customerName on the outside; inside, today it holds \"Amir,\" tomorrow \"Dana.\""
      },
      {
        "t": "Library / package / dependency",
        "m": "Pre-built code written by someone else that your project uses so it doesn't reinvent the wheel.",
        "p": "buying a pre-made pastry base instead of making it from scratch. A dependency is exactly that — your project depends on this outside piece to work.",
        "note": "it wants to pull in an outside building block. Reasonable — but each one is a thing your project now relies on, which is why careful agents ask before adding new ones."
      },
      {
        "t": "Framework",
        "m": "A big, opinionated starter kit that gives your whole project its shape and structure.",
        "p": "a pre-fab house frame — walls, plumbing routes, and wiring already laid out. You build your specific home inside it instead of pouring the foundation yourself."
      },
      {
        "t": "Database",
        "m": "The organized store where your product keeps its information, permanently.",
        "p": "a giant, well-indexed set of spreadsheets that never forgets and can be searched instantly."
      },
      {
        "t": "Schema",
        "m": "The agreed shape of your data — what fields exist and what type each one is.",
        "p": "the blank form's structure: \"Name (text), Age (number), Email (text).\" The schema is the form's design; the data is what people fill in."
      },
      {
        "t": "Migration",
        "m": "A recorded, repeatable change to the shape of your database.",
        "p": "a renovation plan for the filing system — \"add a 'phone number' column to every customer record\" — written down so it can be applied cleanly and, if needed, reversed.",
        "note": "it's carefully changing how data is stored. Careful is the operative word — these are done deliberately because they touch real stored information.",
        "tone": "look"
      },
      {
        "t": "Environment variable / secret / API key / token",
        "m": "A private setting or password your product needs to work — kept out of the code so it can't leak.",
        "p": "the keys to the building and the alarm codes. You don't write them on the front door — you keep them somewhere safe and separate.",
        "note": "treat them like passwords, because they are. Never paste them into a public place. Good agents refuse to print them.",
        "tone": "look"
      },
      {
        "t": "Frontend / backend",
        "m": "Frontend = the part users see and touch (buttons, screens). Backend = the engine behind the scenes (the logic, the database).",
        "p": "a restaurant. Frontend is the dining room and menu; backend is the kitchen and the supply room."
      },
      {
        "t": "Config",
        "m": "The settings that control how your product behaves, without changing the code itself.",
        "p": "the dials and switches on a machine. Same machine, different behavior depending on how the dials are set.",
        "aka": "configuration"
      }
    ]
  },
  {
    "n": "6",
    "title": "Words agents use about how they work",
    "blurb": "These describe the manner of a change or the agent's own process. They come up constantly and mean less than they sound.",
    "terms": [
      {
        "t": "Blocked",
        "m": "The agent has stopped because it needs something from you — an answer, a decision, a key — and cannot go on until it gets it.",
        "p": "a builder standing in your hallway holding two tins of paint, waiting for you to point at one.",
        "note": "nothing is broken and nothing is lost. It is waiting on you. Find the question, answer it, and it carries on."
      },
      {
        "t": "Refactor",
        "m": "Tidying and reorganizing code so it's cleaner — without changing what it does.",
        "p": "reorganizing your closet. Same clothes, better arranged, easier to find. Nothing was thrown out; nothing new was bought.",
        "note": "it's saying \"I cleaned up the structure but the behavior is identical.\" Low-risk by definition — though a careful agent still checks it didn't accidentally change anything."
      },
      {
        "t": "Idempotent",
        "m": "Doing it twice has the same effect as doing it once — running it again does no extra harm.",
        "p": "pressing a lift call button. Pressing it five times doesn't call five lifts. Safe to repeat.",
        "note": "it's reassuring you that re-running something won't double up or cause damage.",
        "tone": "good"
      },
      {
        "t": "Deprecated",
        "m": "Officially on the way out — still works for now, but you're meant to stop using it.",
        "p": "a product being discontinued. Still on the shelf, but don't build new plans around it."
      },
      {
        "t": "Boilerplate",
        "m": "Standard, repetitive setup code that's basically the same in every project.",
        "p": "the \"Dear ___, thank you for your letter\" opening you paste into every reply. Necessary, unoriginal, copy-pasted."
      },
      {
        "t": "Stub / mock",
        "m": "A fake stand-in used during testing, so you can test one thing without needing the real other thing.",
        "p": "a crash-test dummy. Not a real person — but good enough to test the airbag safely."
      },
      {
        "t": "Stack",
        "m": "The whole set of technologies a project is built from, top to bottom.",
        "p": "the full list of ingredients and equipment behind the restaurant — not one dish, the entire operation."
      },
      {
        "t": "Endpoint / route",
        "m": "A specific address inside your product that does a specific thing.",
        "p": "a specific counter at the post office — \"this window handles passport renewals.\""
      }
    ]
  },
  {
    "n": "7",
    "title": "How agents keep themselves honest and out of each other's way",
    "blurb": "As agents do more real work — fixing their own bugs, running things on a schedule, working alongside other agents — a second layer of jargon shows up: not about the code itself, but about the process the agent uses to stay careful. These four ideas come up constantly once an agent is doing real, ongoing work rather than a single one-off task.",
    "terms": [
      {
        "t": "Fix-on-fix review",
        "m": "After an agent fixes a bug, someone — often another agent, deliberately unbiased because it didn't write the fix — reviews the fix itself with fresh eyes, not just the original bug. A repair can introduce its own brand-new problems that the original bug never had.",
        "p": "a surgeon who, after finishing an operation, has a second surgeon check the stitches — not because they doubt the diagnosis, but because a repair is its own new thing that can go wrong in its own new ways.",
        "aka": "adversarial review",
        "note": "\"running a fix-on-fix review\" = it's double-checking its own repair, not the original problem. A sign of real care, not a delay."
      },
      {
        "t": "Suppression safety",
        "m": "The rule that decides when something — a notification, a dismissed task, an old alert — is allowed to disappear \"for good\" versus just \"for now.\" Getting this wrong in either direction causes a real problem: too eager and it hides work that still matters; too weak and something that's genuinely finished keeps coming back to bother you.",
        "p": "a spam filter. Too aggressive and it eats real mail; too weak and spam keeps landing. Suppression safety is getting that balance right, on purpose, in a rule you could actually explain out loud.",
        "note": "it checked both failure directions — \"did I hide something I shouldn't have?\" and \"will this keep coming back when it shouldn't?\" — not just one of them."
      },
      {
        "t": "Scheduler contract",
        "m": "The exact rule for when something that repeats on its own — a daily reminder, a nightly check — is and isn't allowed to fire, so it doesn't run twice by accident, skip a day, or fire at the wrong moment.",
        "p": "a train timetable. The \"contract\" is the precise departure rule — not \"sometime in the morning\" but \"8:02am, once, by the local clock, not some other clock.\" State the rule loosely and you get two trains at once, or none.",
        "aka": "time-boundary design",
        "note": "it's being precise about a repeating job's exact boundary — which clock it's using, what counts as \"already ran today,\" what happens if it fires a few minutes late."
      },
      {
        "t": "Verification-boundary honesty",
        "m": "Being precise about exactly what an agent actually confirmed versus what it's assuming. \"I watched this work in the real, live system\" is a stronger claim than \"the automated tests passed\" — a careful agent never blurs the two together.",
        "p": "the difference between a chef who tasted the soup themselves and one who only read the recipe and assumes it's right. Both might be telling the truth — but only one actually tasted it, and a good agent always tells you which one it is.",
        "note": "that is the honest, correct thing to say, not a failure. It means the automatic checks passed, but nobody has watched the real thing work yet. Read it as the agent refusing to guess — exactly what you want."
      },
      {
        "t": "Live-proof planning",
        "m": "Deciding, before a change ships, exactly how you're going to go watch the real thing actually work — rather than just trusting that passed checks mean it works.",
        "p": "planning the taste test before you cook, not hoping you'll remember to check afterward.",
        "note": "it's telling you there's a specific, concrete plan for confirming the fix in the real world — not just \"the tests are green, ship it and hope.\""
      },
      {
        "t": "Shared-checkout discipline",
        "m": "The habits that keep multiple agents (or people) working in the same project folder from stepping on each other — especially when the official shared version of the project changes so often that a change can go stale before the safety checks on it even finish.",
        "p": "two chefs sharing one cutting board. If one wipes it clean mid-chop, the other's ingredients go with it. The fix isn't \"work faster\" — it's \"get your own board\" (a separate, isolated copy) for anything that matters.",
        "aka": "high-velocity branch racing",
        "note": "it might be explaining why a merge kept getting rejected and needing a re-sync — \"the shared version moved again while the checks were still running.\" That's not a mistake; it's a busy shared project. The honest fix is either a faster path (turning on auto-merge, so the platform keeps re-syncing on its own) or working in a genuinely separate copy so a concurrent change can't destroy in-progress work."
      }
    ]
  },
  {
    "n": "8",
    "title": "Domains, keys, and the internet plumbing",
    "blurb": "The words that turn up once your thing is real and reachable by other people: giving it an address, keeping your keys safe, and the handful of errors everyone meets on the way. This family hits hardest if you are building somewhere like Lovable, Replit, or Bolt, where your project is on the internet from the first day.",
    "terms": [
      {
        "t": "Domain",
        "m": "The address people type to reach your thing — yourproject.com.",
        "p": "the street address. Your site is the house; the domain is the number on the door.",
        "aka": "domain name",
        "note": "\"pointing the domain\" means connecting the address you bought to the thing you built. Reversible, and nobody sees a broken version while you do it."
      },
      {
        "t": "DNS",
        "m": "The internet's phone book: it turns your domain into the actual location of the machine serving your site.",
        "p": "directory enquiries. You give a name, it gives back a number.",
        "note": "your change is spreading around the world and is not instant. Minutes usually, up to a day at worst. Waiting is the fix, not a sign something failed."
      },
      {
        "t": "HTTPS / SSL certificate",
        "m": "The padlock in the address bar: proof the site is really yours, and that what visitors send is scrambled on the way.",
        "p": "a tamper-proof seal on a bottle. You can see nobody opened it in transit.",
        "note": "almost always automatic now. If it mentions a certificate problem, visitors may see a scary browser warning, so it is worth fixing before you share the link."
      },
      {
        "t": "CORS",
        "m": "A browser rule that stops one website quietly helping itself to another's data. When it is set up wrong, your own two halves cannot talk to each other.",
        "p": "a bouncer with a guest list who simply has not been told your name yet.",
        "note": "routine, and not an attack or a break-in. It is a permissions setting that needs your own address added to a list. Let it fix it."
      },
      {
        "t": "404",
        "m": "Nothing is at the address that was asked for.",
        "p": "knocking on a door that was never built.",
        "note": "usually a wrong link or a page that moved. Cheap to fix, and it means the server is alive and answering — just not with what you wanted."
      },
      {
        "t": "500 / server error",
        "m": "The server tried and fell over. The problem is on your side, not the visitor's.",
        "p": "the kitchen catching fire rather than the customer ordering something off-menu.",
        "note": "more serious than a 404 because it is your code failing, not a missing page. The logs will say why; that is the agent's job, not yours."
      },
      {
        "t": "Cache",
        "m": "A saved copy kept close by so things load fast — which sometimes means you are shown an old version.",
        "p": "leftovers in the fridge. Quick, but not necessarily today's cooking.",
        "note": "you are looking at yesterday's copy of your own site. Nothing is broken; you are just not seeing the newest version yet."
      },
      {
        "t": "Webhook",
        "m": "A way for another service to tap your project on the shoulder the moment something happens, instead of your project constantly asking.",
        "p": "giving the delivery company your doorbell, rather than checking the porch every five minutes.",
        "note": "it is wiring up \"when X happens over there, do Y over here\" — a payment landing, a form being filled in."
      },
      {
        "t": "Rate limit",
        "m": "A cap on how many times you may ask another service for something in a given stretch of time.",
        "p": "the free-sample stand. Two each, then come back later.",
        "note": "nothing is broken and nothing is your fault. It is being told to slow down and will wait, or spread the requests out."
      },
      {
        "t": "OAuth",
        "m": "Letting people log in using an account they already have, so you never see or store their password.",
        "p": "showing a passport you already own instead of filling in a whole new form.",
        "aka": "\"sign in with Google\"",
        "note": "this is the safe, boring, correct choice. It means one fewer pile of passwords for you to be responsible for."
      }
    ]
  },
  {
    "n": "9",
    "title": "The shapes you'll see (paths, files, and names)",
    "blurb": "Not words exactly — shapes. Your agent will write something like scripts/process-term-suggestion.mjs and carry on as though that explained itself. It does not, and none of it is difficult once somebody tells you how to read it.",
    "terms": [
      {
        "t": "File path",
        "m": "Directions to one exact file, with slashes standing for \"inside\". scripts/process-term-suggestion.mjs means: the file named process-term-suggestion.mjs, which lives inside the folder named scripts.",
        "p": "an address written back to front and squashed together — country, then city, then street, then house.",
        "note": "it is telling you precisely which file it touched, which is a good habit, not a demand on you. If it matters, ask \"what did you change in that file?\""
      },
      {
        "t": "File extension",
        "m": "The bit after the last dot, which says what kind of file it is.",
        "p": "the label on a jar. Same shape of jar, completely different contents.",
        "aka": ".js, .mjs, .ts, .json, .md, .yml, .css, .html",
        "note": "the common ones are worth knowing. .md is notes for humans (this file is one). .json and .yml are settings. .js, .mjs and .ts are instructions the computer runs. .html is a page and .css is how it looks."
      },
      {
        "t": "Dotfile / dotfolder",
        "m": "A file or folder whose name starts with a dot. Almost always settings, and hidden by default.",
        "p": "the paperwork drawer rather than the display shelf. Deliberately out of sight, still important.",
        "aka": ".env, .github, .claude, .gitignore",
        "note": "your computer hides these, which is why you looked and could not find it. .env is the one to be careful with — it usually holds your keys and should never be shared or posted."
      },
      {
        "t": "Root",
        "m": "The top level of your project folder, where the big settings files sit.",
        "p": "the ground floor of a building. Everything else is upstairs, off it.",
        "aka": "of the project",
        "note": "it means the outermost folder, not tucked inside any of the others."
      },
      {
        "t": "package.json",
        "m": "A project's list of ingredients and its list of shortcut commands, in one file.",
        "p": "a recipe card that also notes which shop-bought items you are relying on.",
        "note": "it is usually either adding an outside building block or defining a command like \"start\" or \"test\". Worth a glance when it adds something new."
      },
      {
        "t": "Script",
        "m": "A saved command that does a job in one go, so nobody has to remember the long version.",
        "p": "a labelled button rather than a sequence of switches.",
        "note": "it is triggering a job that was already written down and named, not inventing something new."
      },
      {
        "t": "Backticks / monospace",
        "m": "When your agent puts something in this typeface, it means \"this is an exact literal name — copy it character for character.\"",
        "p": "a name printed in block capitals on a form, to signal it is not a description but the actual thing.",
        "note": "no action needed, but it is a useful signal. Prose you can paraphrase; monospace you should copy exactly."
      },
      {
        "t": "Line reference",
        "m": "A file name, a colon, and a number: index.html:367 means line 367 of that file.",
        "p": "a page-and-line reference in a book, so two people can look at the same sentence.",
        "note": "it is pointing at the exact spot, usually because something went wrong there. Evidence, not homework."
      }
    ]
  },
  {
    "n": "10",
    "title": "Phrases that mean a decision got made for you",
    "blurb": "Most jargon is only unfamiliar. This lot is different. Every phrase here sounds like a progress update and is really a decision your agent already made on your behalf — usually a sensible one, usually taken to keep moving. They matter because these are the choices that end up inside the thing you ship. A \"for now\" that nobody came back to is how a shortcut becomes permanent. You do not need to ban any of it. You need to be able to hear it go past.",
    "terms": [
      {
        "t": "\"Hardcoded for now\"",
        "m": "A specific value typed straight into the code, instead of being looked up or made changeable.",
        "p": "writing today's date on a sign in permanent marker instead of hanging a clock.",
        "aka": "hard-coded, baked in",
        "note": "it is true today and will quietly stop being true later. Worth asking: \"what breaks when that value needs to change, and who changes it?\""
      },
      {
        "t": "\"I mocked that out\"",
        "m": "It built a stand-in that behaves like the real thing, so the rest of the work could carry on before the real thing was connected. (Stub / mock in section 5 is the same idea as a noun.)",
        "p": "a film-set kitchen. The taps look perfect. No water.",
        "aka": "stubbed it out, placeholder data, dummy data, fake data",
        "note": "what you are looking at is not connected to anything real, however finished it looks. Ask \"is this real data yet?\" before you show it to anyone who matters."
      },
      {
        "t": "\"I'll add tests later\"",
        "m": "It wrote the working code but not the automatic checks that prove the code keeps working.",
        "p": "fitting a smoke alarm and not putting a battery in.",
        "aka": "skipping tests for now, no coverage on that yet",
        "note": "nothing is wrong yet. The cost arrives later, when some future change breaks this and no alarm goes off. A perfectly good answer is \"fine for now — add them before this goes live.\""
      },
      {
        "t": "\"I left a TODO\"",
        "m": "A note it wrote to itself inside the code marking that part as unfinished.",
        "p": "a sticky note on the fridge that only the person who wrote it will ever read.",
        "aka": "FIXME, TODO comment, a note in the code",
        "note": "it has flagged its own loose end honestly, which is good — but nothing will ever remind either of you again. Ask for the list: \"what TODOs are open right now?\""
      },
      {
        "t": "\"I commented it out\"",
        "m": "It turned some code off by marking it as a note, so the computer skips it, rather than deleting it.",
        "p": "not throwing the ingredient away — just leaving it out of the recipe and keeping the jar in the cupboard.",
        "aka": "disabled it, left it in but switched off",
        "note": "something that used to happen no longer happens. One question covers it: \"what stopped working when you did that, and was that on purpose?\""
      },
      {
        "t": "\"It's a workaround\"",
        "m": "Something that works without fixing what actually caused the problem.",
        "p": "a bucket under the leak. The floor stays dry. The roof is still broken.",
        "aka": "a hack, a band-aid, a quick fix, a patch job",
        "note": "it is being straight with you, which is worth encouraging. Ask \"what's the real fix, and how long would it take?\" — then decide. Sometimes the bucket genuinely is the right call."
      },
      {
        "t": "\"I added a package for that\"",
        "m": "Rather than writing the code itself, it borrowed working code written by strangers. (See Library / package / dependency in section 5.)",
        "p": "buying a ready-made part instead of machining one. Faster, and now you depend on whoever makes it.",
        "aka": "pulled in a dependency, installed a library",
        "note": "usually the right call. Occasionally a very large tool has been brought in to do a very small job. Fair question: \"how big is it, and how many people rely on it?\""
      },
      {
        "t": "\"It handles the happy path\"",
        "m": "It works when everything goes as expected, and has not been taught what to do when things don't.",
        "p": "a recipe written on the assumption you will never drop an egg.",
        "aka": "happy path only, works in the normal case",
        "note": "real people find the unhappy paths within a day — empty fields, lost connections, the same button pressed twice. Ask \"what does someone see when it goes wrong?\""
      },
      {
        "t": "\"I'm swallowing the error\"",
        "m": "When something goes wrong at that spot, the code hides the complaint and carries on instead of reporting it.",
        "p": "a smoke alarm unplugged because the beeping was annoying.",
        "aka": "catching and ignoring it, failing silently",
        "note": "this is the shortcut most likely to cost you later, because breakage stops being visible — silence starts meaning nothing at all rather than nothing wrong. Reasonable push-back: \"I'd rather it told us. Can we at least write it down somewhere?\""
      },
      {
        "t": "\"I turned off the check\"",
        "m": "A warning kept appearing, so it switched the warning off rather than resolving what caused it.",
        "p": "the seatbelt chime stops. Nobody put a seatbelt on.",
        "aka": "disabled the linter, added an ignore, silenced the warning, used any",
        "note": "sometimes the tool was wrong and muting it is correct. Sometimes the tool was right. One question separates the two: \"was the warning correct?\" (See also Suppression safety, section 7.)"
      },
      {
        "t": "\"I refactored while I was in there\"",
        "m": "It rearranged code you did not ask it to touch, without changing what that code does.",
        "p": "asking someone to fix the door handle and finding they rearranged the room.",
        "aka": "tidied it up along the way, cleaned a few things up",
        "note": "the intent is good and the risk is real — more changed than you asked for, so more can break. Not a crime. Just say \"keep changes to what I asked for unless you check with me first.\""
      },
      {
        "t": "\"I force-pushed\"",
        "m": "It replaced the saved history of the work with its own version instead of adding to it.",
        "p": "not writing today's diary entry, but tearing out yesterday's page and rewriting it.",
        "aka": "overwrote the history, reset the branch",
        "note": "earlier saved versions may be gone, possibly ones you wanted. Ask immediately: \"did anything get lost, and can you get it back?\" Better still, this is one to catch beforehand — which is exactly what \"is this reversible?\" is for."
      },
      {
        "t": "\"I assumed you wanted\"",
        "m": "It reached a decision, made the decision, and mentioned it afterwards.",
        "p": "a builder who chose the tiles because you weren't answering your phone.",
        "aka": "I went ahead and, I took the liberty of, I figured you'd want",
        "note": "it is showing you a fork in the road you never saw. Nothing rude about walking back to it: \"tell me what you chose and what the other option was.\""
      },
      {
        "t": "\"It's stored in plain text\"",
        "m": "Information saved in a form that anyone who opens the file can simply read.",
        "p": "the alarm code written on the back of the front door.",
        "aka": "unencrypted, in the clear, plaintext",
        "note": "completely fine for a shopping list, not fine for passwords, keys, or anything belonging to someone else. The question that matters: \"would it be bad if a stranger read this?\""
      },
      {
        "t": "\"That should work\"",
        "m": "It has not checked. This is a prediction — often a good one — and it is not a result.",
        "p": "the difference between \"the cake is baked\" and \"the cake should be baked by now.\"",
        "aka": "it ought to be fine, I believe that's fixed",
        "note": "the only follow-up you need is \"did you run it and watch it work?\" A good agent answers honestly, and soon starts volunteering the difference unprompted. (See also Verification-boundary honesty, section 7.)"
      }
    ]
  }
];
