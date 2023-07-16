import express from "express";
import { Bookroutes } from "../model/book/book.route";
import { WishListroutes } from "../model/wishlist/wishlist.route";

const router = express.Router();
const routerModule = [
  {
    path: "/",
    route: Bookroutes,
  },
  {
    path: "/wishList",
    route: WishListroutes,
  },
];

routerModule.forEach((route) => router.use(route.path, route.route));
export default router;
