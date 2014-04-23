var adventure_map = {"options":[
        {
          "name": "queueing-strategies",
          "title": "Queueing Strategies",
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
                    " * These screens aren't doing anything to help either"].join('<br/>'),
          "links": ["predict-throughput", "limit-queue-sizes", "make-the-work-visible", "feedback"]
        },
        {
            "title": "Limit WIP",
            "background-color": "orange"
        },
        {
            "title": "Make the Work Visible",
            "background-color": "lightblue"
        },
        {
            "title": "Create Options",
            "background-color": "lightyellow"
        },
        {
            "title": "Batch Sizes",
            "background-color": "pink"
        },
        {
            "title": "Feedback",
            "background-color": "lightgreen"
        }
    ]};