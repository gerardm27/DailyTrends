export default {
    delete: {
        tags: ["Feed Controller"],
        summary: "Delete a feed from the database",
        description: "Delete a feed from the database",
        operationId: "deleteFeed",
        parameters: [
            {
                name: "url",
                in: "path",
                description: "URL of the feed",
                required: true,
                schema: {
                    type: "string",
                    example: "https://elpais.com/sociedad/2023-04-04/las-listas-de-espera-baten-un-nuevo-record-793521-pacientes-aguardan-una-operacion.html"
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