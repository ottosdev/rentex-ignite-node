import uploadConfig from '../config/upload';
import multer from 'multer'
import { Router } from 'express';

import { UpdateUserAvatarUseController } from './../modules/account/useCase/updateUserAvatar/UpdateUserAvatarUseController';
import { CreaateUserController } from '../modules/account/useCase/createUser/CreateUserController';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

export const userRoutes = Router()
const uploadAvatar  = multer(uploadConfig.upload('./tmp/avatar'))

const createUserController = new CreaateUserController()
const updateUserAvatarController = new UpdateUserAvatarUseController()

userRoutes.post('/', createUserController.handle)
userRoutes.patch('/avatar',ensureAuthenticated ,uploadAvatar.single('avatar') ,updateUserAvatarController.handle )

