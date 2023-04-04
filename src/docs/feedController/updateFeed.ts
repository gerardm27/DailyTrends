export default {
    put: {
        tags: ["Feed Controller"],
        summary: "Update a feed in the database",
        description: "Update a feed in the database",
        operationId: "updateFeed",
        parameters: [
            {
                name: "url",
                in: "path",
                description: "URL of the feed",
                required: true,
                schema: {
                    type: "string",
                },
                example: "https://elpais.com/sociedad/2023-04-04/las-listas-de-espera-baten-un-nuevo-record-793521-pacientes-aguardan-una-operacion.html"
            },
            {
                name: "Feed",
                in: "body",
                type: "object",
                required: true,
                description: "Feed to update",
                schema: {
                    $ref: "#/components/schemas/Feed",
                },
            },
        ],
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