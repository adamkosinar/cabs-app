import {inject, injectable} from "inversify";
import TYPES from "../types";
import {CabsRepository} from "./CabsRepository";
import "reflect-metadata";


@injectable()
export class CabsController {

    constructor(
        @inject(TYPES.CabsRepository) private repository: CabsRepository
    ) {

    }

    public getCabs(request, response, next) {

        let result = this.repository.getCabs(request.params.location);
        response.send(result);
        next();

    }




}