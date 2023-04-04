export default {
    post: {
        tags: ["Feed Controller"],
        summary: "Add a feed to the database",
        description: "Add a feed to the database",
        operationId: "addToFeed",
        parameters: [
            {
                name: "Feed",
                in: "body",
                type: "object",
                required: true,
                description: "Feed to add",
                schema: {
                    $ref: "#/components/schemas/Feed",
                },

            },

        ],
        responses: {
            "200": {
                description: "Feed added successfully",
            },
            "500": {
                description: "Server error",
            },
        },
    },
}