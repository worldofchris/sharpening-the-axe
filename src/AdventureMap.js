var adventure_map = {
    "root": [
        {name: "orig-arch", "x": 202, "y": 278},
        {name: "final-arch", "x": 204, "y": 123},
        {name: "richer-quote", "x": 202, "y": 449},
        {name: "story-map", "x": 434, "y": 282},
        {name: "skype-conversation", "x": 970, "y": 425},
        {name: "video-conference", "x": 809, "y": 579},
        {name: "cfd", "x": 433, "y": 551},
        {name: "aws-impl", "x": 601, "y": 645},
        {name: "soviet-style", "x": 275, "y": 647},
        {name: "bash-container", "x": 360, "y": 646},
        {name: "usage-stats", "x": 1040, "y": 281},
        {name: "screen-shots", "x": 432, "y": 123},
        {name: "bare-bones-screen-shots", "x": 432, "y": 209},
        {name: "wire-frame", "x": 1172, "y": 158},
        {name: "social-feedback", "x": 1032, "y": 367},
        {name: "copy-amends", "x": 1443, "y": 159},
        {name: "two-purples", "x": 897, "y": 654},
        {name: "prototype", "x": 1430, "y": 700},
        {name: "creds", "x": 191, "y": 792}
    ],
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
            "content": {
                "thumbnail": "assets/thumbnails/screenshots.png",
                "image": "assets/fullsize/screenshots.png"
            },
            "position": {"left": "320px", "top": "60px"}
        },
        {
            "name": "bare-bones-screen-shots",
            "title": "Bare Bones Screen Shots",
            "background-color": "orange",
            "content": {
                "thumbnail": "assets/thumbnails/bare-bones-screenshots.png",
                "image": "assets/fullsize/bare-bones-screenshots.png"
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