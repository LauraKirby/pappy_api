import Router from "@koa/router";

export const subdomains = new Router();

subdomains.get("/", (ctx, next) => {
  ctx.body = "this will eventually not be a protected route";
});

subdomains.get("/users", (ctx, next) => {
  ctx.body = "this will eventually be a list of users";
});
