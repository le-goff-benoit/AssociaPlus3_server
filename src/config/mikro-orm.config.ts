import { __prod__ } from "./constants";
import { Post } from "../entities/Post";
import { MikroORM} from "@mikro-orm/core";
import path from "path";

export default {
        migrations: {
          path: path.join(__dirname, './migrations'),
          pattern: /^[\w-]+\d+\.[jt]s$/,
        },
    entities: [Post],
    dbName: 'associaplus3',
    debug: __prod__,
    type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0];