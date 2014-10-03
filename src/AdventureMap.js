var adventure_map = {
    "root": [{"name":"finbar","x":557,"y":742},{"name":"bdd-tests","x":887,"y":679},{"name":"beanstalk","x":112,"y":21},{"name":"node-lunch","x":714,"y":615},{"name":"skype-conversation-2","x":414,"y":634},{"name":"agile-manifesto","x":988,"y":46},{"name":"orig-arch","x":198,"y":146},{"name":"final-arch","x":72,"y":147},{"name":"richer-quote","x":99,"y":247},{"name":"story-map","x":328,"y":283},{"name":"skype-conversation","x":858,"y":456},{"name":"video-conference","x":557,"y":615},{"name":"cfd","x":330,"y":549},{"name":"aws-impl","x":557,"y":551},{"name":"soviet-style","x":1112,"y":486},{"name":"bash-container","x":1113,"y":611},{"name":"usage-stats","x":859,"y":282},{"name":"screen-shots","x":326,"y":65},{"name":"bare-bones-screen-shots","x":326,"y":169},{"name":"social-feedback","x":857,"y":361},{"name":"two-purples","x":988,"y":534},{"name":"prototype","x":793,"y":149},{"name":"creds","x":336,"y":634}],
      "options":[
        {
            "name": "finbar",
            "content": {
                "thumbnail": "assets/thumbnails/finbar.jpg",
                "image": "assets/fullsize/finbar.jpg"
            },
        },
        {
            "name": "agile-manifesto",
            "content": {
                "thumbnail": "assets/thumbnails/agile-manifesto.jpg",
                "image": "assets/fullsize/agile-manifesto.jpg"
            },
        },
        {
            "name": "skype-conversation-2",
            "content": {
                "thumbnail": "assets/thumbnails/skype-conversation-2.jpg",
                "image": "assets/fullsize/skype-conversation-2.jpg"
            },
        },
        {
            "name": "node-lunch",
            "content": {
                "thumbnail": "assets/thumbnails/node-lunch.jpg",
                "image": "assets/fullsize/node-lunch.jpg"
            },
        },
        {
            "name": "bdd-tests",
            "content": {
                "thumbnail": "assets/thumbnails/bdd-tests.jpg",
                "image": "assets/fullsize/bdd-tests.jpg"
            },
        },
        {
            "name": "beanstalk",
            "content": {
                "thumbnail": "assets/thumbnails/beanstalk.jpg",
                "image": "assets/fullsize/beanstalk.jpg"
            },
        },
        {
            "name": "fullsize",
            "title": "fullsize guide",
            "background-color": "lightgrey",
            "content": {
                "thumbnail": "assets/thumbnails/actual-size.jpg",
                "image": "assets/fullsize/fullsize.jpg"
            },
            "position": {"left": "10px", "top": "10px"}
        },
        {
            "name": "orig-arch",
            "title": "Original Architecture",
            "background-color": "lightgrey",
            "content": {
                "thumbnail": "assets/thumbnails/original-architecture.png",
                "image": "assets/fullsize/original-architecture.png"
            },
            "position": {"left": "10px", "top": "10px"}
        },
        {
            "name": "final-arch",
            "title": "Final Architecture",
            "background-color": "lightgrey",
            "content": {
                "thumbnail": "assets/thumbnails/architecture.png",
                "image": "assets/fullsize/architecture.png"
            },
            "position": {"left": "160px", "top": "10px"}
        },
        {
            "name": "richer-quote",
            "title": "Richer Quote",
            "background-color": "yellow",
            "content": {
                "thumbnail": "assets/thumbnails/richer.jpg",
                "image": "assets/fullsize/richer.jpg"
            },
            "position": {"left": "180px", "top": "60px"}
        },
        {
            "name": "story-map",
            "title": "Story Map",
            "background-color": "white",
            "position": {"left": "20px", "top": "150px"},
            "content": {
                "thumbnail": "assets/thumbnails/story-map.png",
                "image": "assets/fullsize/story-map.png"
            },
            "links": ["discovery-session"]
        },
        {
            "name": "skype-conversation",
            "title": "Skype Conversations",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/skype-conversation.png",
                "image": "assets/fullsize/skype-conversation.png"
            },
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
            "position": {"left": "60px", "top": "250px"}
        },
        {
            "name": "cfd",
            "title": "Cumulative Flow Diagram",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/cumulative-flow.png",
                "image": "assets/fullsize/cumulative-flow.png"
            },
            "position": {"left": "10px", "top": "250px"}
        },
        {
            "name": "aws-impl",
            "title": "AWS Implementation",
            "background-color": "yellow",
            "position": {"left": "120px", "top": "310px"},
            "content": {
                "thumbnail": "assets/thumbnails/aws.jpg",
                "image": "assets/fullsize/aws.jpg"
            },
        },
        {
            "name": "soviet-style",
            "title": "Soviet Style",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/soviet-style.jpg",
                "image": "assets/fullsize/soviet-style.jpg"
            },
            "links": ["project-sluts"],
            "position": {"left": "20px", "top": "410px"}
        },
        {
            "name": "bash-container",
            "title": "Bash Container",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/bash-container.jpg",
                "image": "assets/fullsize/bash-container.jpg"
            },
            "position": {"left": "20px", "top": "310px"}
        },
        {
            "name": "usage-stats",
            "title": "Usage Stats",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/video-count.png",
                "image": "assets/fullsize/video-count.png"
            },
            "position": {"left": "220px", "top": "110px"}
        },
        {
            "name": "screen-shots",
            "title": "Screen Shots",
            "background-color": "lightgreen",
            "content": {
                "thumbnail": "assets/thumbnails/screenshots.jpg",
                "image": "assets/fullsize/screenshots.jpg"
            },
            "position": {"left": "320px", "top": "60px"}
        },
        {
            "name": "bare-bones-screen-shots",
            "title": "Bare Bones Screen Shots",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/bare-bones-screenshots.jpg",
                "image": "assets/fullsize/bare-bones-screenshots.jpg"
            },
            "position": {"left": "320px", "top": "120px"}
        },
        {
            "name": "wire-frame",
            "title": "Wire Frame",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/wire-frame.png",
                "image": "assets/fullsize/wire-frame.png"
            },
            "position": {"left": "420px", "top": "40px"}
        },
        {
            "name": "social-feedback",
            "title": "Social Feedback",
            "background-color": "pink",
            "content": {
                "thumbnail": "assets/thumbnails/social-feedback.png",
                "image": "assets/fullsize/social-feedback.png"
            },
            "position": {"left": "520px", "top": "40px"}
        },
        {
            "name": "copy-amends",
            "title": "Copy Amends",
            "background-color": "lightblue",
            "position": {"left": "640px", "top": "20px"}
        },
        {
            "name": "two-purples",
            "title": "Two Purples",
            "background-color": "lightblue",
            "position": {"left": "440px", "top": "320px"},
            "content": {
                "thumbnail": "assets/thumbnails/two-purples.jpg",
                "image": "assets/fullsize/two-purples.jpg"
            }
        },
        {
            "name": "prototype",
            "title": "Prototype",
            "background-color": "lightblue",
            "position": {"left": "540px", "top": "320px"},
            "content": {
                "thumbnail": "assets/thumbnails/prototype-informs-ux.jpg",
                "image": "assets/fullsize/prototype-informs-ux.jpg"
            },
            "links": ["discovery-session", "look-mum-no-tests", "system-boundary"],
            "notes": ["Optimised for discovery, used to help explain the system boundary, zone of control"]
        },
        {
            "name": "system-boundary",
            "title": "System Boundary",
            "content": {
                "thumbnail": "assets/thumbnails/system-boundary.jpg",
                "image": "assets/fullsize/system-boundary.jpg"
            }
        },
        {
            "name": "creds",
            "title": "Credentials",
            "background-color": "#FF0000",
            "content": {
                "thumbnail": "assets/thumbnails/creds.png",
                "image": "assets/fullsize/creds.png"
            },
            "position": {"left": "280px", "top": "320px"}
        },
        {
            "name": "discovery-session",
            "title": "Discovery Session",
            "content": {
                "thumbnail": "assets/thumbnails/discovery-session.jpg",
                "image": "assets/fullsize/discovery-session.jpg"
            }
        }
    ]};