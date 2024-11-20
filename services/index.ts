
import type { Response, Request } from "express";
import fines from "./mocks/fines";
import prt from "./mocks/prt";
import totalLoss from "./mocks/totalLoss";

const getFines = (req: Request, res: Response) => {
  const response = fines.filter((m) => m.patente === req.params.license);
  return res.json(response);
};

const getPRT = (req: Request, res: Response) => {
  const response = prt.find((m) => m.patente === req.params.license);
  return res.json(response);
};

const getTotalLoss = (req: Request, res: Response) => {
  const response = totalLoss.find((m) => m.patente === req.params.license);
  return res.json(response);
};

const fakeService = { getFines, getPRT, getTotalLoss };
export default fakeService;
