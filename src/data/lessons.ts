// CashCurious - Complete Content Database
// Market-Ready Financial Literacy Curriculum
// All content professionally formatted - NO markdown syntax

export interface LessonPoint {
    title: string;
    text: string;
}

export interface Mission {
    id: string;
    title: string;
    shortDesc: string;
    duration: string;
    xpReward: number;
    content: {
        hook: string;
        intro: string;
        points: LessonPoint[];
        summary: string;
        keyTakeaways: string[];
        challenge: string;
        action: string;
        funFact: string;
    };
}

export interface Track {
    id: string;
    title: string;
    ageRange: string;
    color: string;
    tagline: string;
    description: string;
    totalDuration: string;
    totalLessons: number;
    difficulty: string;
    skills: string[];
    missions: Mission[];
}

export const tracks: Track[] = [
    {
        id: "track-6-10",
        title: "The Coin Collectors",
        ageRange: "6-10",
        color: "orange",
        tagline: "Learn how to catch coins and keep them safe!",
        description: "Start your money journey with fun, interactive lessons that teach the fundamentals of saving, spending wisely, and understanding the difference between wants and needs.",
        totalDuration: "8 weeks",
        totalLessons: 8,
        difficulty: "Beginner",
        skills: ["Saving basics", "Needs vs Wants", "Patience", "Goal setting", "Counting money"],
        missions: [
            {
                id: "m1",
                title: "The Magic of Waiting",
                shortDesc: "Why waiting makes you richer.",
                duration: "15 mins",
                xpReward: 100,
                content: {
                    hook: "Would you rather have 1 marshmallow now, or 2 marshmallows in 10 minutes?",
                    intro: "Money works the same way! When you wait instead of spending right away, something magical happens.",
                    points: [
                        {
                            title: "The Patience Power",
                            text: "If you spend $5 on candy today, it's gone forever. But if you save it, that $5 can turn into a Lego set next month!"
                        },
                        {
                            title: "The Marshmallow Experiment",
                            text: "Scientists tested kids with marshmallows. The ones who waited for 2 marshmallows grew up to be more successful, got better grades, and had more money!"
                        },
                        {
                            title: "Your Brain Wants Things Now",
                            text: "Here's a secret: your brain always wants things RIGHT NOW. But smart kids know that waiting equals winning."
                        }
                    ],
                    summary: "Every time you wait instead of spending, you're training your patience muscle to get stronger.",
                    keyTakeaways: [
                        "Saving means waiting for something better",
                        "Patience is a superpower that makes you richer",
                        "Small savings grow into big rewards"
                    ],
                    challenge: "Next time you want a toy, wait 3 days. If you still want it after 3 days, ask for a job to earn it! Track your waiting days on a calendar.",
                    action: "I will wait 3 days",
                    funFact: "The famous Marshmallow Test was done at Stanford University in 1972. Kids who waited ended up earning more money as adults!"
                }
            },
            {
                id: "m2",
                title: "Needs vs. Wants",
                shortDesc: "Don't get tricked by your brain!",
                duration: "20 mins",
                xpReward: 150,
                content: {
                    hook: "Your brain tries to trick you. It screams 'I NEED that video game!' But is that really true?",
                    intro: "Let's learn the difference between things you truly need and things you just want.",
                    points: [
                        {
                            title: "The Four True Needs",
                            text: "There are only 4 things humans actually NEED to survive: shelter (a home), food and water, clothes to keep warm, and medicine when sick."
                        },
                        {
                            title: "Everything Else is a Want",
                            text: "Video games, toys, candy, the newest phone—all wants! Wants aren't bad. They make life fun. But smart money bosses buy needs first."
                        },
                        {
                            title: "The Smart Order",
                            text: "Always pay for NEEDS first, then save for WANTS. If you buy all your wants first, you might not have money for needs—and that's a problem!"
                        }
                    ],
                    summary: "Knowing the difference between needs and wants is your first money superpower.",
                    keyTakeaways: [
                        "Needs = survival essentials like food, shelter, and clothes",
                        "Wants = fun stuff like toys, games, and treats",
                        "Always pay for needs before wants"
                    ],
                    challenge: "Walk around your room. Point to 3 things you NEED and 3 things you WANT. Can you spot the difference?",
                    action: "I can spot the difference",
                    funFact: "The average kid asks for 54 toys per year, but only plays with about 20 of them regularly. That's a lot of forgotten wants!"
                }
            },
            {
                id: "m3",
                title: "The Three Jars System",
                shortDesc: "Split your money like a pro!",
                duration: "25 mins",
                xpReward: 200,
                content: {
                    hook: "What if I told you that having THREE piggy banks is better than having ONE?",
                    intro: "Meet the Three Jars System—the secret weapon of money-smart kids everywhere!",
                    points: [
                        {
                            title: "Jar 1: SAVE (40%)",
                            text: "This jar is for big dreams. A new bike? A gaming console? Put money here and watch it grow over time!"
                        },
                        {
                            title: "Jar 2: SPEND (50%)",
                            text: "This is your fun money. Candy, small toys, stickers—you can spend this however you want without feeling guilty!"
                        },
                        {
                            title: "Jar 3: SHARE (10%)",
                            text: "This is your kindness jar. Give to people who need help, buy a gift for a friend, or donate to animal shelters."
                        }
                    ],
                    summary: "When you get $10, put $4 in Save, $5 in Spend, and $1 in Share. Simple and powerful!",
                    keyTakeaways: [
                        "40% goes to long-term savings for big goals",
                        "50% is for everyday spending and fun",
                        "10% is for sharing and helping others"
                    ],
                    challenge: "Find 3 jars or containers at home. Label them SAVE, SPEND, and SHARE. Start splitting your next allowance or gift money!",
                    action: "I'll set up my jars",
                    funFact: "Warren Buffett, one of the richest people ever, started saving money at age 6. He bought his first stock at age 11!"
                }
            },
            {
                id: "m4",
                title: "Money Doesn't Grow on Trees",
                shortDesc: "Where does money actually come from?",
                duration: "20 mins",
                xpReward: 150,
                content: {
                    hook: "Has anyone ever told you 'Money doesn't grow on trees'? But then... where DOES it come from?",
                    intro: "Money comes from WORK! Let's follow the journey of how money flows.",
                    points: [
                        {
                            title: "The Money Flow",
                            text: "People work using their time and skills → Companies pay them → Workers buy things → Stores pay their workers → And the cycle continues!"
                        },
                        {
                            title: "Why Parents Say No",
                            text: "When your parents say no to buying something, it's not because they don't love you. It's because they had to WORK many hours to earn that money."
                        },
                        {
                            title: "The Real Cost",
                            text: "A $60 video game might cost your parent 4-6 hours of work! This is why earning your own money feels SO good. When you work for it, you truly appreciate it."
                        }
                    ],
                    summary: "Every dollar in your pocket took someone's time and effort to earn. Treat it with respect!",
                    keyTakeaways: [
                        "Money is earned through work and effort",
                        "Every dollar took someone's time to earn",
                        "Appreciating money comes from earning it yourself"
                    ],
                    challenge: "Ask a parent: 'How many hours would you need to work to buy the thing I want?' Write down the answer!",
                    action: "I'll ask my parents",
                    funFact: "The average American works about 90,000 hours in their lifetime—that's 10 years of non-stop work!"
                }
            },
            {
                id: "m5",
                title: "The Goal Getter",
                shortDesc: "Dream it, plan it, get it!",
                duration: "25 mins",
                xpReward: 200,
                content: {
                    hook: "What if you could get almost ANYTHING you want? The secret is simple: set a GOAL!",
                    intro: "A goal without a plan is just a wish. Here's how Goal Getters actually make things happen.",
                    points: [
                        {
                            title: "Step 1: Pick Your Prize",
                            text: "What do you REALLY want? Not just 'kind of want'—REALLY want. Write it down and make it specific."
                        },
                        {
                            title: "Step 2: Do The Math",
                            text: "Find the price. If you save $5/week, how many weeks until you reach your goal? A $50 toy divided by $5/week equals 10 weeks!"
                        },
                        {
                            title: "Step 3: Track and Celebrate",
                            text: "Make a chart. Color in a box every time you save. When you reach your goal, you'll feel like a CHAMPION because YOU earned it!"
                        }
                    ],
                    summary: "The difference between dreamers and achievers? Achievers write down their goals and track their progress.",
                    keyTakeaways: [
                        "Goals need specific targets and deadlines",
                        "Break big goals into small weekly savings",
                        "Tracking progress keeps you motivated"
                    ],
                    challenge: "Pick something you want that costs $20-50. Calculate how many weeks of saving it will take. Make a tracking chart!",
                    action: "I'll set my first goal",
                    funFact: "People who write down their goals are 42% more likely to achieve them. Get that paper and pen!"
                }
            },
            {
                id: "m6",
                title: "Smart Shopping Detective",
                shortDesc: "Find the best deals like a pro!",
                duration: "20 mins",
                xpReward: 150,
                content: {
                    hook: "Did you know the SAME toy can cost different prices at different stores? Time to become a detective!",
                    intro: "Smart shoppers don't just buy the first thing they see. They investigate like detectives!",
                    points: [
                        {
                            title: "Compare Prices",
                            text: "Check 3 different stores or websites before buying. Prices can differ by 20-50%! That's huge savings."
                        },
                        {
                            title: "Wait for Sales",
                            text: "Toys are cheaper after Christmas. School supplies are cheap in September. Patience pays big time!"
                        },
                        {
                            title: "Watch for Tricks",
                            text: "Stores use bright colors, fun music, and candy at checkout to make you want things. Don't fall for these tricks!"
                        }
                    ],
                    summary: "Taking a few extra minutes to compare prices can save you enough for a whole extra toy!",
                    keyTakeaways: [
                        "Always compare prices at multiple stores",
                        "Sales and seasons affect prices significantly",
                        "Stores use tricks to make you spend more"
                    ],
                    challenge: "Next time you're at a store with a parent, compare prices of one item at 2 different places. Which is cheaper?",
                    action: "I'll compare prices",
                    funFact: "Stores put expensive items at eye level and cheap items on bottom shelves. Now you know their secrets!"
                }
            },
            {
                id: "m7",
                title: "The Giving Game",
                shortDesc: "Why sharing makes YOU richer!",
                duration: "15 mins",
                xpReward: 100,
                content: {
                    hook: "Wait... GIVING money away makes you richer? That sounds backwards! Let me explain...",
                    intro: "When you give, amazing things happen—both for others AND for you.",
                    points: [
                        {
                            title: "You Feel Amazing",
                            text: "Scientists found that giving money makes your brain happier than spending on yourself! It's true—generosity triggers happiness chemicals."
                        },
                        {
                            title: "You Build Connections",
                            text: "People remember kindness. Givers make more friends and get more help when they need it. What goes around comes around!"
                        },
                        {
                            title: "You Learn Gratitude",
                            text: "When you help others who have less, you appreciate what you have more. Your SHARE jar isn't just for others—it's for you too."
                        }
                    ],
                    summary: "The most respected people in history were generous. They built schools, hospitals, and helped communities.",
                    keyTakeaways: [
                        "Giving activates happiness in your brain",
                        "Generous people build stronger relationships",
                        "Small acts of kindness create big impacts"
                    ],
                    challenge: "Use some money from your SHARE jar to do something kind. Buy a treat for a friend, donate to an animal shelter, or give to someone who needs it.",
                    action: "I'll share with someone",
                    funFact: "Studies show that kids who learn to give early grow up to be happier adults. Generosity is a happiness superpower!"
                }
            },
            {
                id: "m8",
                title: "Bank Basics",
                shortDesc: "What happens to money at the bank?",
                duration: "25 mins",
                xpReward: 250,
                content: {
                    hook: "Banks look like boring buildings... but inside, something MAGICAL happens to your money!",
                    intro: "When you put money in a bank, it doesn't just sit there. The bank actually PAYS YOU for keeping it safe!",
                    points: [
                        {
                            title: "The Magic of Interest",
                            text: "You deposit $100 in a savings account. The bank pays you about 4% interest per year. After 1 year, you have $104! Your money grew by itself!"
                        },
                        {
                            title: "Why Banks Pay You",
                            text: "Banks use your money to help other people buy houses and start businesses. Those people pay the bank back with extra money. The bank shares some with you!"
                        },
                        {
                            title: "Your First Account",
                            text: "Many kids can open a savings account with a parent's help. Some banks even have special accounts just for kids with fun features and higher interest!"
                        }
                    ],
                    summary: "Starting a bank account early means your money has more time to grow. Time is your secret weapon!",
                    keyTakeaways: [
                        "Banks pay you interest for keeping money with them",
                        "Savings accounts help your money grow automatically",
                        "Starting early gives your money more time to grow"
                    ],
                    challenge: "Ask a parent to help you look up 'kids savings accounts' and find one that pays the highest interest rate!",
                    action: "I'll research bank accounts",
                    funFact: "If you save $5/week from age 10 to 18, you'll have over $2,000! And with interest, even more!"
                }
            }
        ]
    },
    {
        id: "track-11-15",
        title: "The Side-Hustlers",
        ageRange: "11-15",
        color: "purple",
        tagline: "Turn your skills into your first $100.",
        description: "Level up from saving to earning! Learn how to calculate true costs, avoid money traps, start earning your own income, and set serious financial goals.",
        totalDuration: "12 weeks",
        totalLessons: 8,
        difficulty: "Intermediate",
        skills: ["Earning money", "Budgeting", "True cost analysis", "Entrepreneurship", "Avoiding traps"],
        missions: [
            {
                id: "m9",
                title: "The $100 Sneaker Math",
                shortDesc: "How much do those shoes REALLY cost?",
                duration: "25 mins",
                xpReward: 200,
                content: {
                    hook: "You see sneakers for $100. You have $100. You think you can buy them. But here's what nobody tells you...",
                    intro: "Smart money people think in TIME, not dollars. This changes everything.",
                    points: [
                        {
                            title: "The Time Cost Formula",
                            text: "If you earn $10/hour walking dogs, $100 sneakers cost you 10 HOURS of work. That's 2.5 days of picking up poop! Are the shoes worth it?"
                        },
                        {
                            title: "Different Jobs, Different Costs",
                            text: "Earning $15/hour babysitting? Those same sneakers cost 6.7 hours. The formula is simple: Price divided by your hourly rate equals real cost."
                        },
                        {
                            title: "How Wealthy People Think",
                            text: "Rich people don't ask 'Can I afford this?' They ask 'Is this worth my time?' Now you're making REAL decisions, not emotional ones."
                        }
                    ],
                    summary: "Before any purchase, calculate the time cost. It's the difference between smart spending and regret.",
                    keyTakeaways: [
                        "Calculate cost in hours worked, not just dollars",
                        "Time is your most valuable resource at any age",
                        "This mindset prevents impulse purchases"
                    ],
                    challenge: "Calculate the 'Time Cost' of the next 3 things you want to buy. Write down: Item, Price, Your Hourly Rate, and Hours Required.",
                    action: "Calculate Time Cost",
                    funFact: "Billionaires like Jeff Bezos 'earn' about $150,000 per MINUTE. But he still applies time-cost thinking to every decision!"
                }
            },
            {
                id: "m10",
                title: "The Subscription Trap",
                shortDesc: "How companies steal $10/month forever.",
                duration: "30 mins",
                xpReward: 250,
                content: {
                    hook: "It's only $9.99/month! That sounds cheap, right? WRONG. Let me show you the trap...",
                    intro: "Subscriptions are designed to be 'invisible' so you forget about them. But the math is brutal.",
                    points: [
                        {
                            title: "The Hidden Math",
                            text: "That $9.99/month equals $120 per year. Over 5 years, that's $600—gone! That's a PS5 console just for watching TV shows."
                        },
                        {
                            title: "The Average Person's Waste",
                            text: "The average American has 12 subscriptions they don't even use, wasting $200+ per month. That's $2,400 per year vanishing into thin air!"
                        },
                        {
                            title: "Common Traps to Avoid",
                            text: "Free trials that auto-renew, 'premium' versions you don't need, apps you used once and forgot—these are all designed to drain your wallet slowly."
                        }
                    ],
                    summary: "Rich people audit their subscriptions MONTHLY. If they don't use it, they cancel it. No mercy, no excuses.",
                    keyTakeaways: [
                        "Small monthly fees add up to huge yearly costs",
                        "Free trials are designed to trap you into paying",
                        "Audit subscriptions monthly and cancel unused ones"
                    ],
                    challenge: "Check your phone and any accounts. Find at least 1 subscription you're not using and cancel it RIGHT NOW.",
                    action: "Audit my subscriptions",
                    funFact: "Companies make BILLIONS from 'subscription creep.' Netflix, Spotify, and Disney+ together cost about $40/month—that's $480/year!"
                }
            },
            {
                id: "m11",
                title: "Your First Side Hustle",
                shortDesc: "Start earning real money TODAY.",
                duration: "35 mins",
                xpReward: 300,
                content: {
                    hook: "You don't need to wait until you're 18 to make money. You can start TODAY. Here's exactly how.",
                    intro: "Every millionaire started somewhere. Many started as teenagers with simple side hustles just like these.",
                    points: [
                        {
                            title: "Top 10 Teen Side Hustles",
                            text: "Dog Walking ($10-20/walk), Lawn Mowing ($20-50/lawn), Babysitting ($10-20/hour), Car Washing ($15-30/car), Tutoring ($15-25/hour), Tech Help ($10-25/hour), Pet Sitting ($20-40/day)."
                        },
                        {
                            title: "How to Start Today",
                            text: "Pick ONE thing you're good at. Tell 10 people you know about your service. Charge less at first to get reviews. Then raise prices as you get better."
                        },
                        {
                            title: "The Real Secret",
                            text: "The hardest part is STARTING. Most people never do—they just keep thinking about it. That reluctance is your advantage. Just begin."
                        }
                    ],
                    summary: "Your first customer is waiting. They just don't know you offer a service yet. Go tell them!",
                    keyTakeaways: [
                        "You can start earning money at any age with the right hustle",
                        "Pick something you're already good at doing",
                        "Start small, get reviews, then raise your prices"
                    ],
                    challenge: "Pick ONE side hustle from the list. Tell 3 people (family, neighbors, friends' parents) that you offer this service. Get your first customer this week!",
                    action: "Pick my side hustle",
                    funFact: "Mark Cuban sold garbage bags door-to-door as a kid. Sara Blakely sold fax machines. Your hustle could lead anywhere!"
                }
            },
            {
                id: "m12",
                title: "The 50/30/20 Budget Rule",
                shortDesc: "The simple formula rich people use.",
                duration: "30 mins",
                xpReward: 250,
                content: {
                    hook: "Budgeting sounds boring. But what if there's ONE simple rule that works for everyone, at any income level?",
                    intro: "The 50/30/20 rule is used by financial advisors, millionaires, and now—YOU!",
                    points: [
                        {
                            title: "50% for Needs",
                            text: "Half your money goes to stuff you must pay for: food, phone, transportation, school supplies. These are non-negotiable expenses."
                        },
                        {
                            title: "30% for Wants",
                            text: "Almost a third goes to fun stuff: games, clothes, entertainment, eating out with friends. Yes, you're ALLOWED to enjoy life!"
                        },
                        {
                            title: "20% for Future You",
                            text: "This is YOUR wealth-building fund. Pay yourself FIRST, not last. Most people spend 80% on wants and 0% on savings. That's why most people are broke."
                        }
                    ],
                    summary: "You're not most people. Try to save 30% or more if you can. Every extra 10% saved now is THOUSANDS more later.",
                    keyTakeaways: [
                        "50% needs, 30% wants, 20% savings—simple and effective",
                        "Pay yourself first—save before spending on fun",
                        "This simple rule works at any income level"
                    ],
                    challenge: "Track all your money for 1 week. Then categorize each purchase as Need, Want, or Savings. Does it match 50/30/20?",
                    action: "Track my spending",
                    funFact: "Senator Elizabeth Warren popularized this rule in her book. It works whether you earn $100 or $100,000!"
                }
            },
            {
                id: "m13",
                title: "The Power of No",
                shortDesc: "Why saying no makes you rich.",
                duration: "25 mins",
                xpReward: 200,
                content: {
                    hook: "Your friends want to go to the movies. Again. That's $15 with snacks. Can you say NO without feeling weird?",
                    intro: "Here's an uncomfortable truth: peer pressure costs money. A lot of money.",
                    points: [
                        {
                            title: "The Hidden Cost of Fitting In",
                            text: "Everyone has the new iPhone ($1,000+), everyone wears brand name clothes, everyone goes out every weekend... but 'everyone' is also broke."
                        },
                        {
                            title: "The Monthly Drain",
                            text: "4 movie nights/month = $60. Fast food hangouts = $40. Random group activities = $50. That's $150/month or $1,800/year just on social pressure!"
                        },
                        {
                            title: "How to Say No Like a Pro",
                            text: "Try these: 'I'm saving for something big' or 'Let's do something free instead' or 'I'm working on my goals right now.' Real friends will respect it."
                        }
                    ],
                    summary: "Your real friends won't care about your budget. They'll respect your goals. If they don't? They're not real friends.",
                    keyTakeaways: [
                        "Social pressure is one of the biggest money drains",
                        "Saying no is a legitimate financial superpower",
                        "Real friends respect your money goals"
                    ],
                    challenge: "This week, say NO to one social spending situation. Replace it with something free: a park, video call, or home hangout.",
                    action: "Practice saying no",
                    funFact: "Warren Buffett says 'The difference between successful people and really successful people is that really successful people say no to almost everything.'"
                }
            },
            {
                id: "m14",
                title: "Sale Psychology Hacks",
                shortDesc: "How stores manipulate you (and how to fight back).",
                duration: "30 mins",
                xpReward: 250,
                content: {
                    hook: "'70% OFF! TODAY ONLY! LIMITED STOCK!' Quick, buy it! ...Wait. Let's think about this first.",
                    intro: "Companies spend BILLIONS studying how to make you buy. Here are their secrets—and your defenses.",
                    points: [
                        {
                            title: "The Anchoring Trick",
                            text: "'Was $100, NOW $40!' But was it ever really $100? Often, no. They set a fake high price to make the 'sale' price feel like a steal."
                        },
                        {
                            title: "The Urgency Scam",
                            text: "'Only 3 left!' 'Sale ends tonight!' They want you to panic-buy without thinking. Real deals don't disappear in 24 hours."
                        },
                        {
                            title: "Your Best Defense",
                            text: "Wait 24-48 hours before any purchase over $20. If you still want it tomorrow, it's real desire. If you forget about it, you just saved money."
                        }
                    ],
                    summary: "Stores have PhD psychologists designing their sales tactics. Now you know their playbook.",
                    keyTakeaways: [
                        "Companies use psychology to trigger impulse buys",
                        "Urgency and fake discounts are manipulation tactics",
                        "The 24-48 hour rule kills impulse purchases"
                    ],
                    challenge: "Next time you see a 'SALE!' wait 48 hours before buying. Write down how many 'urgent' deals you forgot about.",
                    action: "Use the 48-hour rule",
                    funFact: "Retailers tested pricing at $34, $39, and $44. The $39 price sold the most—even though it's the middle option. Psychology is powerful!"
                }
            },
            {
                id: "m15",
                title: "Building Your Money Network",
                shortDesc: "Your network determines your net worth.",
                duration: "25 mins",
                xpReward: 200,
                content: {
                    hook: "Want to know the #1 predictor of future wealth? It's not grades. It's not luck. It's WHO YOU KNOW.",
                    intro: "Here's a secret adults rarely share: connections matter more than credentials.",
                    points: [
                        {
                            title: "The Job Market Reality",
                            text: "85% of jobs come through people you know, not job postings. Business ideas come from conversations. Mentors show you shortcuts others miss."
                        },
                        {
                            title: "The Help-First Strategy",
                            text: "Don't ask 'what can you do for me?' Instead, ask 'how can I help you?' Share interesting stuff, congratulate achievements, make introductions."
                        },
                        {
                            title: "Start Building Now",
                            text: "The kids who build relationships at 14 have a MASSIVE advantage at 24. Every genuine connection compounds over time like interest."
                        }
                    ],
                    summary: "Be genuinely curious about people. Ask about their work, hobbies, and goals. People remember those who show real interest.",
                    keyTakeaways: [
                        "85% of jobs come through personal connections, not applications",
                        "Building relationships now pays massive dividends later",
                        "Give value to others before asking for anything"
                    ],
                    challenge: "Reach out to someone you admire (older student, parent's friend, local business owner). Ask them ONE question about how they got where they are.",
                    action: "Reach out to someone",
                    funFact: "LinkedIn founder Reid Hoffman says 'Your network is your net worth.' He built a $4 billion company on connections!"
                }
            },
            {
                id: "m16",
                title: "Emergency Fund 101",
                shortDesc: "The money that saves your butt.",
                duration: "25 mins",
                xpReward: 250,
                content: {
                    hook: "Your phone screen cracks. Your bike breaks. Life happens. Without an emergency fund, you're STUCK.",
                    intro: "An emergency fund is your financial safety net. It's boring until you desperately need it.",
                    points: [
                        {
                            title: "Without Emergency Savings",
                            text: "You have to borrow from friends (awkward), ask parents for emergency money (limiting), stress about unexpected costs, and miss opportunities."
                        },
                        {
                            title: "With Emergency Savings",
                            text: "Problems become minor inconveniences. You feel confident and in control. You can even help OTHERS in emergencies. Peace of mind is priceless."
                        },
                        {
                            title: "How Much to Save",
                            text: "Start with $100-200 as a teen. Keep it in a separate savings account labeled 'EMERGENCY ONLY.' Don't touch it unless it's a REAL emergency."
                        }
                    ],
                    summary: "New shoes on sale? Not an emergency. Concert tickets? Not an emergency. Broken essentials? That's what this fund is for.",
                    keyTakeaways: [
                        "Emergency funds prevent debt and financial stress",
                        "Start with $100-200 and grow from there",
                        "Keep it separate and only touch for real emergencies"
                    ],
                    challenge: "Open a separate savings account (or jar) labeled 'EMERGENCY.' Put your first $20 in it this week.",
                    action: "Start my emergency fund",
                    funFact: "40% of Americans can't cover a $400 emergency. Having even $500 saved puts you ahead of most adults!"
                }
            }
        ]
    },
    {
        id: "track-15-18",
        title: "The Future Founders",
        ageRange: "15-18",
        color: "teal",
        tagline: "Escape the rat race before you even enter it.",
        description: "Advanced financial concepts for ambitious teens. Learn about investing, compound interest, credit management, and building real wealth before adulthood.",
        totalDuration: "16 weeks",
        totalLessons: 8,
        difficulty: "Advanced",
        skills: ["Investing basics", "Compound interest", "Credit management", "Tax awareness", "Wealth building"],
        missions: [
            {
                id: "m17",
                title: "Compound Interest: The 8th Wonder",
                shortDesc: "Make money while you literally sleep.",
                duration: "35 mins",
                xpReward: 300,
                content: {
                    hook: "Albert Einstein called it 'the 8th wonder of the world.' If you save $100/month starting at 18, you'll have $180,000 MORE than someone who starts at 25.",
                    intro: "Compound interest means your interest earns interest. Let me show you why this matters so much.",
                    points: [
                        {
                            title: "Start at 18: The Magic Scenario",
                            text: "Invest $100/month at 7% return. Stop at 25 (only 7 years). Never add another dollar. At 65, you'll have $186,000."
                        },
                        {
                            title: "Start at 25: The Catch-Up Struggle",
                            text: "Invest $100/month at 7%. Continue until 65 (40 years!). You invested 6x more in total. At 65, you'll have $264,000. Only $78,000 more despite 6x the effort!"
                        },
                        {
                            title: "The Brutal Lesson",
                            text: "Time beats money. Every. Single. Time. You can't outwork someone who started earlier. But YOU can be the one who started earlier."
                        }
                    ],
                    summary: "Every dollar you invest today is worth $10+ in 'Future Dollars.' Start now, not later.",
                    keyTakeaways: [
                        "Starting early beats investing more money later",
                        "Time is your most valuable investment asset right now",
                        "Even small amounts grow massive over decades"
                    ],
                    challenge: "Go to a compound interest calculator online. Enter $50/month for 40 years at 7%. Look at the final number. Now try just 10 years. Feel the difference.",
                    action: "Run the numbers",
                    funFact: "If you invested $1 in the S&P 500 in 1926, it would be worth over $10,000 today. That's compound interest over 97 years!"
                }
            },
            {
                id: "m18",
                title: "Credit Card Jujitsu",
                shortDesc: "Use them like a weapon, not a trap.",
                duration: "40 mins",
                xpReward: 350,
                content: {
                    hook: "Credit cards aren't free money. They are FIRE. Fire can cook your food... or burn your house down.",
                    intro: "Credit cards offer two superpowers AND one massive trap. Learn to use the powers while avoiding the trap.",
                    points: [
                        {
                            title: "The Two Superpowers",
                            text: "First: Build your credit score (your financial reputation). Second: Earn rewards like free cashback, points, and perks just for spending."
                        },
                        {
                            title: "The Deadly Trap",
                            text: "Average credit card interest is 24% APR. If you owe $1,000 and pay only the minimum, it takes 5+ years to pay off. You'd pay over $600 in interest alone!"
                        },
                        {
                            title: "The Four Rules of Credit Jujitsu",
                            text: "1) Never spend money you don't have in your bank RIGHT NOW. 2) Set up auto-pay for the FULL balance. 3) Never carry a balance month-to-month. 4) Treat it like a debit card with rewards."
                        }
                    ],
                    summary: "Memorize this mantra: 'If I can't pay cash for it TWICE, I can't afford it on credit ONCE.'",
                    keyTakeaways: [
                        "Credit cards build your financial reputation when used right",
                        "24% interest destroys wealth if you carry a balance",
                        "Pay the FULL balance every month without exception"
                    ],
                    challenge: "Memorize this: 'If I can't pay cash for it twice, I can't afford it on credit once.' Say it 10 times. Mean it.",
                    action: "I understand the rules",
                    funFact: "The average American has $6,000 in credit card debt. At 24% interest, that costs $1,440/year—just in interest!"
                }
            },
            {
                id: "m19",
                title: "Your First Investment",
                shortDesc: "Buy a tiny piece of Apple, Google, or Tesla.",
                duration: "45 mins",
                xpReward: 400,
                content: {
                    hook: "What if you could own a piece of Apple, Google, Amazon, and Tesla—all for $100? You can. Right now.",
                    intro: "Welcome to the Stock Market. When you buy a stock, you own a tiny piece of that company. If the company grows, your piece grows too!",
                    points: [
                        {
                            title: "Option 1: Individual Stocks",
                            text: "Buy shares of specific companies. Higher risk, higher potential reward. Requires research and monitoring. Not recommended for beginners."
                        },
                        {
                            title: "Option 2: Index Funds (Recommended)",
                            text: "Buy a basket of hundreds of companies at once. The S&P 500 includes the top 500 US companies. One purchase gives you instant diversification with 10% average returns over 100 years."
                        },
                        {
                            title: "How to Start as a Teen",
                            text: "Open a custodial brokerage account with a parent using Fidelity, Schwab, or Acorns. Start with $50-100. Buy an S&P 500 index fund like VOO or SPY. Keep adding monthly."
                        }
                    ],
                    summary: "Never invest money you need in the next 5 years. The market goes up AND down. Time smooths out the bumps.",
                    keyTakeaways: [
                        "Index funds let you own hundreds of companies at once",
                        "S&P 500 has averaged 10% returns over the past 100 years",
                        "Start with small amounts from a custodial account"
                    ],
                    challenge: "Research custodial brokerage accounts with a parent. Compare Fidelity, Schwab, and Acorns. Which one looks best for your situation?",
                    action: "Research brokerage accounts",
                    funFact: "If you invested $10,000 in Amazon's IPO in 1997, it would be worth over $20 MILLION today!"
                }
            },
            {
                id: "m20",
                title: "The Tax Game",
                shortDesc: "What nobody teaches you (but everyone pays).",
                duration: "35 mins",
                xpReward: 300,
                content: {
                    hook: "You get your first job. Your paycheck says $1,000. But you only receive $780. WHERE DID $220 GO?!",
                    intro: "Welcome to TAXES—the thing nobody teaches in school but everyone pays. Let's decode it.",
                    points: [
                        {
                            title: "What Gets Taken",
                            text: "Federal Income Tax (10-37%), State Income Tax (0-13% depending on state), Social Security (6.2%), and Medicare (1.45%) all come out automatically."
                        },
                        {
                            title: "Real Example",
                            text: "From a $1,000 paycheck: Federal tax ~$100, State tax ~$50, Social Security ~$62, Medicare ~$15. Take-home: ~$773. When someone offers $50,000/year, you actually get $38,000-42,000."
                        },
                        {
                            title: "The Good News",
                            text: "Tax-advantaged accounts like Roth IRA and 401k let you pay LESS tax. A Roth IRA is taxed NOW but grows TAX-FREE forever. You can start one as soon as you have earned income!"
                        }
                    ],
                    summary: "Understanding taxes means keeping more of your money. It's boring but profitable knowledge.",
                    keyTakeaways: [
                        "20-30% of your paycheck goes to various taxes",
                        "Gross pay does NOT equal take-home pay",
                        "Roth IRA means tax-free growth forever"
                    ],
                    challenge: "Look up your state's income tax rate. Calculate how much you'd actually take home from a $1,000 paycheck.",
                    action: "Learn my tax rate",
                    funFact: "The average American pays about $14,000 in federal income tax per year. Strategic tax planning can legally reduce that significantly!"
                }
            },
            {
                id: "m21",
                title: "College: The $100K Decision",
                shortDesc: "Is it worth it? The REAL math.",
                duration: "40 mins",
                xpReward: 350,
                content: {
                    hook: "Average student loan debt: $37,000. Average time to pay off: 20 years. Is college worth it? Let's do the actual math.",
                    intro: "College is an INVESTMENT, not just an expense. Calculate your Return on Investment before signing any loans.",
                    points: [
                        {
                            title: "The ROI Formula",
                            text: "Salary WITH degree minus salary WITHOUT, times years working, minus total cost of degree. Example: Engineering degree costs $100,000 but adds $40,000/year in salary. Over 40 years, that's $1.5 million ROI."
                        },
                        {
                            title: "Smart Strategies",
                            text: "Community college first saves 50%+. State schools usually beat private schools in ROI. Chase scholarships aggressively. Work during school. Graduate in 4 years or less."
                        },
                        {
                            title: "Valid Alternatives",
                            text: "Trade schools: electricians earn $60k+ with no debt. Coding bootcamps: 3 months to tech jobs. Some companies hire without degrees. Starting a business requires skills, not diplomas."
                        }
                    ],
                    summary: "The question isn't 'Should I go to college?' It's 'What's the ROI of THIS specific path versus alternatives?'",
                    keyTakeaways: [
                        "Calculate ROI before choosing any school or major",
                        "Community college plus state school saves thousands",
                        "Trade schools and alternatives can be excellent paths"
                    ],
                    challenge: "Research the average salary for 3 careers you're interested in. Compare to the cost of the required education. What's the ROI for each?",
                    action: "Calculate career ROI",
                    funFact: "Plumbers, electricians, and HVAC technicians often earn $60,000-100,000+ with zero student debt. College isn't the only path to success!"
                }
            },
            {
                id: "m22",
                title: "The Lifestyle Creep Monster",
                shortDesc: "Why raises don't make you richer.",
                duration: "30 mins",
                xpReward: 250,
                content: {
                    hook: "You get a raise! More money equals richer, right? WRONG. Meet your enemy: Lifestyle Creep.",
                    intro: "Lifestyle Creep happens when your spending increases to match your income. It's silent and deadly.",
                    points: [
                        {
                            title: "How It Happens",
                            text: "You earn $40,000 and save $5,000/year. You get a raise to $60,000. You upgrade your car, apartment, clothes, dinners... Now you earn $60,000 but STILL save $5,000/year."
                        },
                        {
                            title: "The Math Is Brutal",
                            text: "You made 50% MORE income but saved the SAME amount! The extra $20,000 just... disappeared. Most people experience this their entire careers."
                        },
                        {
                            title: "The Wealthy Secret",
                            text: "Every time income goes up, savings rate goes up MORE. Get a 10% raise? Increase savings by 5% first. Keep living like you made the old salary. Bank the difference."
                        }
                    ],
                    summary: "After 10 raises using this method, you could be saving 50%+ of your income while your peers are 'broke' making the same money.",
                    keyTakeaways: [
                        "Lifestyle creep erases the benefit of every raise",
                        "Increase savings rate with every income increase",
                        "Living below your means is the true wealth secret"
                    ],
                    challenge: "Make a promise to yourself: 'If my income goes up by $1, my savings will go up by $0.50.' Write it down and sign it.",
                    action: "Make the promise",
                    funFact: "The average millionaire drives a 4-year-old car and lives well below their means. They beat lifestyle creep!"
                }
            },
            {
                id: "m23",
                title: "Your Credit Score Explained",
                shortDesc: "The 3-digit number that controls your life.",
                duration: "35 mins",
                xpReward: 300,
                content: {
                    hook: "A 3-digit number determines if you can buy a house, get a car loan, or even rent an apartment. What is this number?",
                    intro: "Your Credit Score (FICO Score) ranges from 300-850 and shows how trustworthy you are with borrowed money.",
                    points: [
                        {
                            title: "The Score Ranges",
                            text: "800-850 is Exceptional. 740-799 is Very Good. 670-739 is Good. 580-669 is Fair. Below 580 is Poor. Aim for at least 740."
                        },
                        {
                            title: "What Affects Your Score",
                            text: "Payment History (35%): Pay on time, always. Credit Utilization (30%): Use less than 30% of your limit. Credit Age (15%): Older accounts are better. Credit Mix (10%). New Credit (10%)."
                        },
                        {
                            title: "Why It Matters",
                            text: "Good credit means lower interest rates. Lower rates mean paying less over time. Bad credit on a $300,000 house could cost you $100,000+ more in interest over the loan's life!"
                        }
                    ],
                    summary: "To build credit as a teen: become an authorized user on a parent's card, get a secured credit card at 18, pay everything on time, and keep balances low.",
                    keyTakeaways: [
                        "Credit scores range from 300-850, aim for 740+",
                        "Payment history and utilization are the two biggest factors",
                        "Start building credit early for the best rates later"
                    ],
                    challenge: "Ask a parent to check their credit score (many banks show it for free). Discuss what factors affect it and how you can start building yours.",
                    action: "Learn about credit",
                    funFact: "A 100-point difference in credit score can mean $40,000+ in extra mortgage interest over 30 years!"
                }
            },
            {
                id: "m24",
                title: "Multiple Income Streams",
                shortDesc: "Don't put all eggs in one basket.",
                duration: "45 mins",
                xpReward: 400,
                content: {
                    hook: "The average millionaire has 7 income streams. You probably have 1 (or 0). Let's change that.",
                    intro: "Job security is a myth. Layoffs, pandemics, and recessions happen. Multiple income streams provide true financial security.",
                    points: [
                        {
                            title: "The 7 Types of Income",
                            text: "Earned Income (job), Business Income (owning), Investment Income (stocks/bonds), Rental Income (property), Royalty Income (creative work), Interest Income (bank), Dividend Income (company profits)."
                        },
                        {
                            title: "What You Can Start Now",
                            text: "Earned: Part-time job or side hustle. Investment: Open a brokerage account. Interest: High-yield savings account. Royalty: Create content on YouTube, write an ebook, or build an app."
                        },
                        {
                            title: "The Ultimate Goal",
                            text: "Build enough passive income that working becomes OPTIONAL. It takes years, but it starts with your first non-job dollar earned."
                        }
                    ],
                    summary: "Every millionaire started with income stream #1, then #2, then #3. The journey of a thousand miles begins with a single step.",
                    keyTakeaways: [
                        "Millionaires average 7 different income streams",
                        "Passive income beats trading time for money long-term",
                        "Start building multiple streams while you're young"
                    ],
                    challenge: "Identify 3 income streams you could realistically start within the next year. Write a simple plan for each one.",
                    action: "Plan my income streams",
                    funFact: "Jeff Bezos' annual salary from Amazon was only $81,840. His real wealth came from Amazon stock—that's investment income!"
                }
            }
        ]
    }
];
