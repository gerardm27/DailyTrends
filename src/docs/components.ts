export default {
    components: {
        schemas: {
            Feed: {
                type: "object",
                properties: {
                    url: {
                        type: "string",
                        description: "URL of the feed",
                        example: "https://elpais.com/sociedad/2023-04-04/las-listas-de-espera-baten-un-nuevo-record-793521-pacientes-aguardan-una-operacion.html"
                    },
                    title: {
                        type: "string",
                        description: "Title of the feed",
                        example: "Las listas de espera baten un nuevo récord: 793.521 pacientes aguardan una operación"
                    },
                    date: {
                        type: "string",
                        description: "Date of the feed",
                        example: "2023-01-01"
                    },
                    source: {
                        type: "string",
                        description: "Source of the feed",
                        example: "https://elpais.com/"
                    }
                }
            },
        }
    }
};