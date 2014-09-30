var adventure_map = {
      "root": ["orig-arch",
               "final-arch",
               "story-map",
               "richer-quote",
               "skype-conversation",
               "video-conference",
               "cfd",
               "aws-impl",
               "soviet-style",
               "bash-container",
               "usage-stats",
               "screen-shots",
               "bare-bones-screen-shots",
               "wire-frame",
               "social-feedback",
               "copy-amends",
               "two-purples",
               "prototype",
               "creds"],
      "options":[
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
            "position": {"left": "10px", "top": "250px"},
            "links": ["batch-slicing", "littles-law", "unacknowledge-fear"]
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
            "position": {"left": "320px", "top": "60px"}
        },
        {
            "name": "bare-bones-screen-shots",
            "title": "Bare Bones Screen Shots",
            "background-color": "orange",
            "position": {"left": "320px", "top": "120px"}
        },
        {
            "name": "wire-frame",
            "title": "Wire Frame",
            "background-color": "orange",
            "position": {"left": "420px", "top": "40px"}
        },
        {
            "name": "social-feedback",
            "title": "Social Feedback",
            "background-color": "pink",
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