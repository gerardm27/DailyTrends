export default {
    components: {
        schemas: {
            Feed: {
                type: "object",
                properties: {
                    url: {
                        type: "string",
                        description: "URL of the feed"
                    },
                    title: {
                        type: "string",
                        description: "Title of the feed"
                    },
                    date: {
                        type: "string",
                        description: "Date of the feed"
                    },
                    source: {
                        type: "string",
                        description: "Source of the feed"
                    }
                }
            },
        }
    }
};