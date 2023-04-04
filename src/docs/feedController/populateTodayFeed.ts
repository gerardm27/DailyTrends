export default {
    get: {
        tags: ["Feed Controller"],
        summary: "Get today's feeds from the Internet",
        description: "Get today's feeds from the Internet",
        operationId: "populateTodayFeed",
        parameters: [],
        responses: {
            "200": {
                description: "Feeds retrieved successfully",
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