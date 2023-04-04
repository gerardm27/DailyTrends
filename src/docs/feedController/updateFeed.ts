export default {
    put: {
        tags: ["Feed Controller"],
        summary: "Update a feed in the database",
        description: "Update a feed in the database",
        operationId: "updateFeed",
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
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Feed",
                    },
                },
            },
        },
        responses: {
            "200": {
                description: "Feed updated successfully",
            },
            "500": {
                description: "Server error",
            },
        },
    },
}