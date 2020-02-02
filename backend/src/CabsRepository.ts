import * as data from "../data.json";
import * as _ from "lodash";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class CabsRepository {

    constructor() {

    }

    public getCabs(location?: string) {

        if (location) {

            return data[location];

        }

        return this.getAllCabs();

    }


    private getAllCabs() {

        return _.flatten(_.values(data));
    }

}