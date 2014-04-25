var adventure_map = {
      "root": ["make-the-work-visible",
               "limit-wip",
               "manage-flow"],
      "options":[
        {
            "name": "make-the-work-visible",
            "title": "Make the Work Visible",
            "background-color": "lightblue",
            "content": {
              "image": "resources/bits-on-a-disc.jpg"
            },
            "links": ["kanban-board", "story-map", "feedback"],
            "notes": ["Don Reinertsen Quote"]
        },
        {
          "name": "limit-wip",
          "title": "Limit WIP",
          "background-color": "orange",
          "content": {
            "image": "resources/louie.jpg"
          },
          "notes": ["Limiting WIP with explicit WIP limits on a Kanban board is something that took me a couple ",
                    "of years to get to.  I didn't use them at all in my first use of Kanban at YouView, instead ",
                    "using the 'Avatar' method.",
                    "* Who here is using explicit WIP limits?",
                    "* Who isn't?",
                    "They appear to be 'Top Down'",
                    "They are not something you can do on your own BUT you can limit your own WIP",
                    "Stop Starting, Start Finishing has become a mantra for me and one that I apply out of habit",
                    "whenever a context switch looms",
                    "What is the cost of not finishing what I'm doing now?"],
          "links": ["watermelon-in-progress", "individual-responsibility", "habits"]
        },
        {
          "name": "manage-flow",
          "title": "Manage Flow",
          "background-color": "red",
          "content": {
            "image": "resources/airport-queue.jpg"
          },
          "notes": ["**Who** can *tell* _me_ what this is?<br/>  It's an example of a dysfunctional queuing strategy.<br/>",
                    "Why is it disfunctional?<br/>Because an airline employee has to keep expediting by ",
                    "shouting the names of closing flights and pulling people to the front of the queue<br/>",
                    "Why is this a problem?<br/>",
                    " * No one knows when they will get to the head of the queue",
                    " * No one knows whether they will get to the head of the queue in time",
                    " * We don't know the length of the queue",
                    " * These screens aren't doing anything to help either"],
          "links": ["predict-throughput", "limit-queue-sizes", "batch-sizes", "whack-a-mole"]
        },
        {
            "name": "create-options",
            "title": "Create Options",
            "background-color": "lightyellow",
            "notes": ["This is not strictly speaking part of Kanban with a capital K",
                      "But Kanban helps you create options, helps you keep your options",
                      "open for longer by deffering commitment to the last responsible moment"],
            "links": ["oranges", "apples"]
        },
        {
            "name": "batch-sizes",
            "title": "Batch Sizes",
            "links": ["batch-one", "apple-production-method", "apple-juice-feedback"],
            "background-color": "pink",
            "content": {
              "image": "resources/apple-juice-0.jpg"
            },
            "notes": ["Can anyone tell me what this is?",
                      "It's four batches of apple juice."]
        },
        {
            "name": "feedback",
            "title": "Feedback",
            "content": {
              "image": "resources/failing-tests.jpg"
            },
            "notes": ["All software is Proof Of Concept",
                      "TDD enables you to endlessly defer commitment",
                      "It is _soft_ ware after all."],
            "background-color": "lightgreen",
            "links": ["local-optima", "quality"]
        },
        {
            "name": "predict-throughput",
            "title": "Predict Throughput",
            "content": {
              "image": "resources/cumulative-throughput.jpg"
            },
            "notes": ["How quickly are we going to get through this?",
                      ""]
        },
        {
            "name": "story-map",
            "title": "Story Map",
            "content": {
              "image": "resources/backbone-and-skeleton.jpg"
            },
            "links": ["maltese-air-defence", "stateful-story-map"]
        },
        {
            "name": "availability-heuristic",
            "title": "Availability Heuristic",
            "links": ["thinking-fast-and-slow", "durers-rhino", "gantt-chart", "impact-maps", "partial-adoption"]
        },
        {
            "name": "impact-maps",
            "title": "Impact Maps",
            "links": ["forked-impact-map"]
        },
        {
            "name": "durers-rhino",
            "title": "D&uuml;rer's Rhinoceros",
            "content": {
              "image": "resources/rhino.jpg"
            }
        },
        {
            "name": "local-optima",
            "title": "Local Optima",
            "links": ["individual-responsibility", "act-on-the-system"]
        },
        {
            "name": "quality",
            "title": "Quality",
            "links": "keystone-habits"
        },
        {
            "name": "kanban-board",
            "title": "Kanban Board",
            "content": {
              "image": "resources/kanban-adventure-jira.jpg"
            },
            "notes": ["This is not just about the Kanban board",
                      "When work is visible on the Kanban board it becomes more apparent",
                      "what work, or aspects of the work are still invisible",
                      "and the Kanban board is not necessarily the solution for this"]
        },
        {
            "name": "stateful-story-map",
            "title": "Stateful Story Map",
            "links": ["stateful-story-map-2"],
            "content": {
              "image": "resources/stateful-story-map.jpg"
            }
        },
        {
            "name": "stateful-story-map-2",
            "title": "More Features Emerge",
            "links": ["another-stateful-story-map"],
            "content": {
              "image": "resources/stateful-story-map-2.jpg"
            }
        },
        {
            "name": "another-stateful-story-map",
            "title": "Another Stateful Story Map",
            "content": {
              "image": "resources/stateful-map-two.jpg"
            },
            "links": ["multi-maps"]
        },
        {
            "name": "batch-one",
            "title": "A Batch",
            "content": {
              "image": "resources/apple-juice-1.jpg"
            }
        },
        {
            "name": "customer-feedback",
            "title": "Customer Feedback",
            "content": {
              "image": "resources/"
            }
        },
        {
            "name": "apple-production-method",
            "title": "Method",
            "content": {
              "image": "resources/applejuice-production-method.jpg"
            }
        },
        {
            "name": "apple-juice-feedback",
            "title": "Feedback",
            "links": "apples-and-oranges",
            "content": {
              "image": "resources/apple-juice-3.jpg"
            }
        },
        {
            "name": "apples-and-oranges",
            "title": "Shaping Demand",
            "content": {
              "image": "resources/apples-and-oranges.jpg"
            }
        },
        {
            "name": "multi-maps",
            "title": "Map of the World",
            "links": "impact-map",
            "content": {
              "image": "resources/multi-maps.jpg"
            }
        },
        {
            "name": "impact-map",
            "title": "Why are we doing this?",
            "content": {
              "image": "resources/impact-map.jpg"
            }
        },
        {
            "name": "watermelon-in-progress",
            "title": "WIP",
            "content": {
              "image": "resources/watermelon-in-progress.jpg"
            }
        },
        {
            "name": "individual-responsibility",
            "title": "Taking Responsibility",
            "content": {
              "image": "resources/failing-tests.jpg"
            },
            "links": ["act-on-the-system"]
        },
        {
            "name": "act-on-the-system",
            "title": "Act on the System",
            "content": {
              "image": "resources/broken-windows.jpg"
            }
        },
        {
            "name": "limit-queue-sizes",
            "title": "Limit Queue Sizes",
            "content": {
              "image": "resources/manage-queues.jpg"
            }
        }
    ]};