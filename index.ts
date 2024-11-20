import express from "express";
import get_data from "./controllers/wrong_controller";
import fakeServices from "./services";
import getVehicleInfo from "./controllers/correct_controller";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.json("Hello world!"));

// Endpoint principal a corregir.
app.get("/get_vehicle_info/:license", get_data);
app.get("/vehicle-info/:license", getVehicleInfo);


// Endpoints falsos para obtener información vehícular.
app.get("/prt/:license", fakeServices.getPRT);
app.get("/total-loss/:license", fakeServices.getTotalLoss);
app.get("/fines/:license", fakeServices.getFines);




app.listen(port, () => console.log(`Server running on port ${port}`));
