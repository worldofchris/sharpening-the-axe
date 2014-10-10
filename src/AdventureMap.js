var adventure_map = {
    "root_header": "<h1>Down to the Wire - <a href='https://twitter.com/worldofchris'>@worldofchris</a> <a href='https://twitter.com/search?q=%23agilecam'>#agilecam</a></h1>" +
                    "<p>This is the online version of the <a href='http://agilecambridge.net/ac2014/sessions/index.php?session=36'>Mega Poster Talk</a> I gave at Agile Cambridge 2014. " +
                    "It tells the story of a project to build a 'video postcard' maker through the artifacts created and " +
                    "pinned to the <a href='#/node/project-wall'>Project Wall</a> during the two weeks of this fixed date, fixed cost project." +
                    "<p>In the spirit of the Agile Manifesto " +
                    "valuing working software over comprehensive documentation, you can try the resulting software out at " +
                    "<a href='http://agilecam.worldofchris.com'>agilecam.worldofchris.com</a>. and then read about how it was made by exploring the " +
                    "artifacts below.",
    "root": [{"name": "finbar","x":557,"y":742},{"name":"bdd-tests","x":887,"y":679},{"name":"beanstalk","x":112,"y":21},{"name":"node-lunch","x":714,"y":615},{"name":"skype-conversation-2","x":414,"y":634},{"name":"agile-manifesto","x":988,"y":46},{"name":"orig-arch","x":198,"y":146},{"name":"final-arch","x":72,"y":147},{"name":"richer-quote","x":99,"y":247},{"name":"story-map","x":328,"y":283},{"name":"skype-conversation","x":858,"y":456},{"name":"video-conference","x":557,"y":615},{"name":"cfd","x":330,"y":549},{"name":"aws-impl","x":557,"y":551},{"name":"soviet-style","x":1112,"y":486},{"name":"bash-container","x":1113,"y":611},{"name":"usage-stats","x":859,"y":282},{"name":"screen-shots","x":326,"y":65},{"name":"bare-bones-screen-shots","x":326,"y":169},{"name":"social-feedback","x":857,"y":361},{"name":"two-purples","x":988,"y":534},{"name":"prototype","x":793,"y":149},{"name":"creds","x":336,"y":634}],
      "options":[
        {
            "name": "brompton",
            "title": "Brompton",
            "content": {
                "thumbnail": "assets/thumbnails/brompton.png"
            },
        },
        {
            "name": "project-wall",
            "title": "Project Wall",
            "content": {
                "image": "assets/project-wall.jpg"
            },
        },
        {
            "name": "finbar",
            "title": "Finbar",
            "content": {
                "thumbnail": "assets/thumbnails/finbar.jpg",
                "image": "assets/fullsize/finbar.jpg"
            },
            "notes": ['As told in the story behind the big blob of green on the <a href="#/node/cfd">CFD</a> the project suffered from alack of formal peer review.' +
                      'That is not to say there was no review at all, it just was&#39;nt part of the formal flow of the work. ' +
                      'Throughout the project there was an ongoing conversation with Finbar, a Front End Developer at Friday, who took an interest in the project.' +
                      'This confirmed my suspicion that Node.js is a great way of getting Front End and Back End Developers working and talking together. '],
            "links": ["cfd", "node-lunch", "review-by-ops"]
        },
        {
            "name": "review-by-ops",
            "title": "Review by Ops",
            "notes": "Git comments on code."
        },
        {
            "name": "agile-manifesto",
            "title": "Agile Manifesto",
            "content": {
                "thumbnail": "assets/thumbnails/agile-manifesto.jpg",
                "image": "assets/fullsize/agile-manifesto.jpg"
            },
            "notes": ['<p>We didn&#39;t actually have the Agile Manifesto on the wall during the project, it was added for the talk ' +
                      'to see what points of the Manifesto the project reflected.</p>' +
                      '<p><b>Individuals and Interactions over Processes and Tools</b> - ' +
                      'The tools were there to enable interactions between individuals.  Matthew talked about this in his talk.  Git enables collaboration.</p>' +
                      'Working Software over Comprehensive Documentation' +
                      'We dark launched on Elastic Beanstalk at the start of the project and pushed iterative revisions to the software several times a day.' +
                      'Customer Collaboration over Contract Negotiation' +
                      'There was an &#39;Always On&#39; Skype channel between us and the customer and daily video conference calls' +
                      'Responding to Change over Following a Plan' +
                      'The two purples, the change to the length of the end frame']
        },
        {
            "name": "skype-conversation-2",
            "title": "Ready to launch",
            "content": {
                "thumbnail": "assets/thumbnails/skype-conversation-2.jpg",
                "image": "assets/fullsize/skype-conversation-2.jpg"
            },
            "notes": ["This Skype message was a major milestone for me.  It was Ops saying we were good to go. " +
                      "We were not out of the woods yet as those cosmetic changes needed to happen; without them we'd be looking at Soviet Style."],
            "links": ["soviet-style"]
        },
        {
            "name": "node-lunch",
            "title": "Pub Consultancy",
            "content": {
                "thumbnail": "assets/thumbnails/node-lunch.jpg",
                "image": "assets/fullsize/node-lunch.jpg"
            },
        },
        {
            "name": "bdd-tests",
            "title": "BDD Tests",
            "content": {
                "thumbnail": "assets/thumbnails/bdd-tests.jpg",
                "image": "assets/fullsize/bdd-tests.jpg"
            },
            "notes": ["Before going live to the public, the application was shared with a smaller group of end users.  The immediate feedback was that there " +
                      "was a problem with people's names and usernames getting truncated.  Something had to be done.  We agreed a truncation policy with the customer, " +
                      "wrote tests for this and then made the changes to the code.  We shared the test code with the customer over Skype to show them what we were " +
                      "doing.  This is an example of how rather than being an overhead, tests are an enabler of speed and agility.  By fixing this problem quickly " +
                      "we avoided a Soviet Style outcome and created something that delighted our end users, something borne out in the Social Feedback."],
            "links": ["soviet-style", "richer-quote", "social-feedback"]
        },
        {
            "name": "beanstalk",
            "title": "Elastic Beanstalk",
            "content": {
                "thumbnail": "assets/thumbnails/beanstalk.jpg",
                "image": "assets/fullsize/beanstalk.jpg"
            },
            "notes": ["<p>Early in the project we decided to go with AWS Elastic Beanstalk.  This effectively took care of provisioning, deployment, scaling and monitoring for us.</p>" +
                      "<p>We did have an issue with the Elastic Beanstalk SQSD daemon which lead us to revise the Systems Architecture but this aside beanstalk was a huge " +
                      "facilitator of speed and agility.</p>"],
            "links": ["final-arch"]
        },
        {
            "name": "orig-arch",
            "title": "Original Architecture",
            "background-color": "lightgrey",
            "content": {
                "thumbnail": "assets/thumbnails/original-architecture.png",
                "image": "assets/fullsize/original-architecture.png"
            },
            "position": {"left": "10px", "top": "10px"},
            "notes": ['This is the original Systems Architecture which was presented to the Customer Ops team at the start of the project ' +
                      'We decided on Node.js because... ' +
                      'Since the processing work required to create the video would be blocking, time consuming and not instantly available ' +
                      'we put a queue between the Web Tier and the Processing Tier.'],
            "links": ["discovery-session", "prototype"]
        },
        {
            "name": "final-arch",
            "title": "Final Architecture",
            "background-color": "lightgrey",
            "content": {
                "thumbnail": "assets/thumbnails/architecture.png",
                "image": "assets/fullsize/architecture.png"
            },
            "position": {"left": "160px", "top": "10px"},
            "notes": ['As we developed the application we evolved the Systems Architecture to deal with problems we discovered when using the ' +
                      'Elastic Beanstalk SQS Daemon.  This problem was discovered because Ops were rigourously testing the code from Dev on a daily basis.'],
            "links": ["beanstalk", "orig-arch"]
        },
        {
            "name": "richer-quote",
            "title": "Richer Quote",
            "background-color": "yellow",
            "content": {
                "thumbnail": "assets/thumbnails/richer.jpg",
                "image": "assets/fullsize/richer.jpg"
            },
            "position": {"left": "180px", "top": "60px"},
            "notes": ['This quote from Julian Richer jibes with the idea of <a href="#/node/soviet-style">&#39;Soviet Style&#39;</a>. ' +
                      'We wanted to build something that customers would want to use'],
            "links": ["social-feedback", "soviet-style"]
        },
        {
            "name": "story-map",
            "title": "Story Map",
            "background-color": "white",
            "position": {"left": "20px", "top": "150px"},
            "content": {
                "thumbnail": "assets/thumbnails/story-map.jpg",
                "image": "assets/fullsize/story-map.jpg"
            },
            "links": ["discovery-session"],
            "notes": ["The Story Map was used to define the scope and priority of the features that made up the application. "]
        },
        {
            "name": "skype-conversation",
            "title": "Skype Conversations",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/skype-conversation.png",
                "image": "assets/fullsize/skype-conversation.png"
            },
            "notes": ["There was a permanently open Skype channel between Dev and Ops.  An ongoing conversation.  Once we were live, there was " +
                      "bit of Skype High Fiving."],
            "links": ["social-feedback"],
            "position": {"left": "120px", "top": "150px"}
        },
        {
            "name": "video-conference",
            "title": "Video Conference",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/video-conference.jpg",
                "image": "assets/fullsize/video-conference.jpg"
            },
            "position": {"left": "60px", "top": "250px"},
            "notes": ["We never met the Ops team face to face.  Some of them were in the US, others elsewhere in the UK but we were on Skype all the time " + 
                      "and checked in every day with a Video Conference."],
            "links": ["skype-conversation"]
        },
        {
            "name": "cfd",
            "title": "Cumulative Flow Diagram",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/cumulative-flow.png",
                "image": "assets/fullsize/cumulative-flow.png"
            },
            "position": {"left": "10px", "top": "250px"},
            "notes": ['<p>This Cumulative Flow Diagram is an accurate reflection of the flow of the work through the system but it doesn&#39;t tell the whole story. ' +
                      'The big green blob of Peer Review Queue bloat is there because we did not have any resource allocated to peer review.</p>' +
                      '<p>That does not mean that the code had no review; it got it from the Ops team testing the life out of it on a daily basis and from socialising the ' +
                      'code with a couple of interested parties.</p> ' +
                      '<p>Despite this I wanted to track the fact that we were not achieving our normal levels of review.</p>' +
                      '<p>The other point of interest is the step change in state at the point we went live.  The CFD suggests that code went into production all ' +
                      'at once.  In fact it was dark launched and deployed iteratively.  Going forward I think I&#39;d update the Jira workflow to reflect this.'],
            "links": ["finbar", "node-lunch", "skype-conversation-2"]
        },
        {
            "name": "aws-impl",
            "title": "Environment Readiness",
            "background-color": "yellow",
            "position": {"left": "120px", "top": "310px"},
            "content": {
                "thumbnail": "assets/thumbnails/aws.jpg",
                "image": "assets/fullsize/aws.jpg"
            },
            "notes": ["A priority on the project was to get the Development, Test, Staging and Production environments built out. " +
                      "These traffic light stickers indicate which of the environments were in place.  Using Elastic Beanstalk saved us a lot of time."],
            "links": ["beanstalk"]
        },
        {
            "name": "soviet-style",
            "title": "Soviet Style",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/soviet-style.jpg",
                "image": "assets/fullsize/soviet-style.jpg"
            },
            "links": ["richer-quote", "social-feedback", "two-purples", "bash-container"],
            "position": {"left": "20px", "top": "410px"},
            "notes": ["<p>This Anti Pattern, taken from the book <a href='http://www.amazon.co.uk/Adrenaline-Junkies-Template-Zombies-Understanding/dp/0932633676'>" +
                      "Adrenaline Junkies and Template Zombies: Understanding Patterns of Project Behavior</a> by Tom De Marco at al. sums up a tension at the " +
                      "heart of the project.  Time and Cost were fixed and getting the 'spine' of functionality done in the time was going to go down to the wire. " +
                      "If in doing this we produced something which ticked all the functional boxes yet was unloved by our customers then no one would have used " +
                      "it and we would have failed.</p>" +
                      "<p>Getting things like the colour transitions and timings for the end frame right were not merely cosmetic.  They were critical to " +
                      "customer satisfaction and so the success of the project.</p>"]
        },
        {
            "name": "bash-container",
            "title": "Bash Container",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/bash-container.jpg",
                "image": "assets/fullsize/bash-container.jpg"
            },
            "position": {"left": "20px", "top": "310px"},
            "links": ["soviet-style"],
            "notes": ["At the eleventh hour we realised that the length of time the end frame was shown for too short. " +
                      "I was reluctant to make changes to the code base so close to go live for fear of introducing regressions. " +
                      "At about 3:00am the night before go live I woke up and realised that the problem could be fixed in a low risk way " +
                      "by modifying the bash script that wrapped ffmpeg to create the endframe. Having this factored out into a simple " +
                      "bash script meant that by adding a crude hard coding rule the problem could be fixed with no change to the more " +
                      "complicated Node.js code.  I presented this change as an option to the Customer Ops team who assessed the risk " +
                      "and decided it was okay to go with.  This kind of down to the wire change is made possible by having a " +
                      "trusting, collaborative relationship between Dev and Ops."]
        },
        {
            "name": "usage-stats",
            "title": "Usage Stats",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/video-count.png",
                "image": "assets/fullsize/video-count.png"
            },
            "position": {"left": "220px", "top": "110px"},
            "notes": ['<p>We built usage metrics into the application both for operational support and so we could measure the level of engagement we were getting from customers.</p>' +
                      '<p>One of Don Reinertsen&#39;s tests of a good metric is that it is self generating. ' +
                      'This graph shows the number of people who used the application.  It was auto generated from ' +
                      'Metadata placed into S3 every time a video was generated.</p>'],
            "links": ['social-feedback']
        },
        {
            "name": "screen-shots",
            "title": "Screen Shots",
            "background-color": "lightgreen",
            "content": {
                "thumbnail": "assets/thumbnails/screenshots.jpg",
                "image": "assets/fullsize/screenshots.jpg"
            },
            "position": {"left": "320px", "top": "60px"},
            "notes": ["As we added the designs to the application we put screenshots up on the wall to show our progress."],
            "links": ["bare-bones-screen-shots"]
        },
        {
            "name": "bare-bones-screen-shots",
            "title": "Bare Bones Screen Shots",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/bare-bones-screenshots.jpg",
                "image": "assets/fullsize/bare-bones-screenshots.jpg"
            },
            "position": {"left": "320px", "top": "120px"},
            "notes": ["As the application was developed we stuck screenshots up on the wall to show people where we had got to. " +
                      "The first version was a Walking Skeleton with no design treatment."],
            "links": ['screen-shots']
        },
        {
            "name": "wire-frame",
            "title": "Wire Frame",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/wire-frame.png",
                "image": "assets/fullsize/wire-frame.png"
            },
            "position": {"left": "420px", "top": "40px"},
            "notes": ['After the <a href="#/node/discovery-session">Discovery Session</a> our UX designer mapped out the User Journies through the applicaion.']
        },
        {
            "name": "social-feedback",
            "title": "Social Feedback",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/social-feedback.png",
                "image": "assets/fullsize/social-feedback.png"
            },
            "position": {"left": "520px", "top": "40px"},
            "notes": ['A hashtag designed to promote the advertisement and the micro site gave us a means of searching Twitter to see what people where saying about it. ' +
                      'To our delight we saw overwhelmingly positive comments.'],
            "links": ["bdd-tests"]
        },
        {
            "name": "two-purples",
            "title": "Two Purples",
            "background-color": "lightblue",
            "position": {"left": "440px", "top": "320px"},
            "content": {
                "thumbnail": "assets/thumbnails/two-purples.jpg",
                "image": "assets/fullsize/two-purples.jpg"
            },
            "notes": ["RGB to YUV colour conversion"],
            "links": ["soviet-style"]
        },
        {
            "name": "prototype",
            "title": "Technology Prototype",
            "background-color": "lightblue",
            "position": {"left": "540px", "top": "320px"},
            "content": {
                "thumbnail": "assets/thumbnails/prototype-informs-ux.jpg",
                "image": "assets/fullsize/prototype-informs-ux.jpg"
            },
            "links": ["discovery-session", "system-boundary"],
            "notes": ["Optimised for discovery, used to help explain the system boundary, zone of control"]
        },
        {
            "name": "system-boundary",
            "title": "System Boundary",
            "content": {
                "thumbnail": "assets/thumbnails/system-boundary.jpg",
                "image": "assets/fullsize/system-boundary.jpg"
            },
            "notes": ['The Technology Prototype gave us a way of demonstrating where the system boundary was.  By running the prototype ' +
                      'tech could show UX and design how during the OAuth dance, a user leaves the prototype and uses the customer website ' +
                      'which sits outside the System Boundary'],
            "links": ["prototype"]
        },
        {
            "name": "creds",
            "title": "Credentials",
            "background-color": "#FF0000",
            "content": {
                "thumbnail": "assets/thumbnails/creds.png",
                "image": "assets/fullsize/creds.png"
            },
            "position": {"left": "280px", "top": "320px"},
            "notes": ["We Are Friday are..."]
        },
        {
            "name": "discovery-session",
            "title": "Discovery Session",
            "content": {
                "thumbnail": "assets/thumbnails/discovery-session.jpg",
                "image": "assets/fullsize/discovery-session.jpg"
            },
            "notes": ['After the initial conversation that kicked the project off, we built a Technology Prototype which ' +
                      'was was presented back to the customer in a Discovery Session.  Having demonstrated that the project ' +
                      'was feasible from a technology point of view we presented our proposed <a href="#/node/orig-arch">Systems Architecture</a> ' +
                      'and <a href="#/node/story-map">Story Mapped</a> the proposed experience.'],
            "links": ["story-map", "prototype"]
        }
    ]};