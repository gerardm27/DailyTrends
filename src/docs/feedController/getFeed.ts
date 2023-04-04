export default {
    get: {
        tags: ["Feed Controller"],
        summary: "Get all feeds from the database",
        description: "Get all feeds from the database",
        operationId: "getFeed",
        parameters: [],
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