import routes from "./routes";
import basicInfo from "./basicInfo";
import components from "./components";
import tags from "./tags";

export default {
    ...basicInfo,
    ...components,
    ...tags,
    ...routes
};