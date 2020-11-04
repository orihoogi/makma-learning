
import {getAllForRight, getAllForLeft, post} from "../controllers/photo";
import "../services/passport";
import passport from "passport";

const requireAuth = passport.authenticate("jwt", { session: false });

export default app => {
    app.post("/api/photo", requireAuth, post);
    app.get("/api/photo/right", requireAuth, getAllForRight);
    app.get("/api/photo/left", requireAuth, getAllForLeft);
};