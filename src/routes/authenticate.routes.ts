import { Router } from "express";
import { AuthenticateUserController } from "../modules/account/useCase/authenticaticateUser/AuthenticateUserController";

export const authRoutes = Router();
const authenticateController = new AuthenticateUserController()
authRoutes.post('/', authenticateController.handle);



