export default {
    get: {
        tags: ["Feed Controller"],
        summary: "Get today's feeds from the Internet",
        description: "Get today's feeds from the Internet. Returns an empty array if already populated.",
        operationId: "populateTodayFeed",
        parameters: [],
        responses: {
            "200": {
                description: "Feeds retrieved successfully",
            },
            "500": {
                description: "Server error",
            },
        },
    },
}