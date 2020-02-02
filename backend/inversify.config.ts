import { Container } from "inversify";
import TYPES from "./types";
import {CabsController} from "./src/CabsController";
import {CabsRepository} from "./src/CabsRepository";


let container = new Container();
container.bind<CabsController>(TYPES.CabsController).to(CabsController);
container.bind<CabsRepository>(TYPES.CabsRepository).to(CabsRepository);

export default container;