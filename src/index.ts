import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroConfig from "./config/mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
}

main().catch(err => {
    console.log(err)
});