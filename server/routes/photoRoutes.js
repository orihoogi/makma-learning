
import {getAllForRight, getAllForLeft, post} from "../controllers/photo";

export default app => {
    app.post("/api/photo", post);
    app.get("/api/photo/right", getAllForRight);
    app.get("/api/photo/left", getAllForLeft);
};