export default {
    get: {
        tags: ["Feed Controller"],
        summary: "Get a feed by its URL",
        description: "Get a feed by its URL",
        operationId: "getFeedByURL",
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
    }
}