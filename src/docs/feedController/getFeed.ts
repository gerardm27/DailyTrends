export default {
    get: {
        tags: ["Feed Controller"],
        summary: "Get a feed from the database",
        description: "Get a feed from the database",
        operationId: "getFeed",
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
            "200": {
                description: "Feed retrieved successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Feed",
                        },
                    },
                },
            },
            "500": {
                description: "Server error",
            },
        },
    },
}