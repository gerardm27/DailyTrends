export default {
    delete: {
        tags: ["Feed Controller"],
        summary: "Delete a feed from the database",
        description: "Delete a feed from the database",
        operationId: "deleteFeed",
        parameters: [
            {
                url: {
                    name: "url",
                    in: "path",
                    description: "URL of the feed",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            },
        ],
        responses: {
            "204": {
                description: "Feed deleted successfully",
            },
            "500": {
                description: "Server error",
            },
        },
    }
}