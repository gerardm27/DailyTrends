import express, {ErrorRequestHandler, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Feed from "./routes/feed";
import Article from "./routes/article";
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      // Obtener variables de entorno

      // Configurar puerto
      const port = process.env.PORT || 3000;

      // Iniciar servidor con express
      const app = express();

      // Configurar parametros: CORS, JSON, errorHandler
      app.use(cors());
      app.use(bodyParser.json());
      app.use(errorHandler);

      function errorHandler(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
        res.end("Error: " + err);
      }

      // Rutas
      app.use("/api/feed", Feed);
      app.use("/api/article", Article);
      //app.use("/api-docs/", swaggerUI.serve, swaggerUI.setup(docs));
      app.use("/*", (req: Request, res: Response) => res.redirect("/api/feed"));


      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
      });
    })
    .catch((err: Error) => {
      console.log(err);
    });

