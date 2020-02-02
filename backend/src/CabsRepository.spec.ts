import {CabsRepository} from "./CabsRepository";
import {expect} from "chai";
import * as data from "../data.json";
import TYPES from "../types";
import {Container} from "inversify";

const container = new Container();
container.bind<CabsRepository>(TYPES.CabsRepository).to(CabsRepository);

const repository = container.get<CabsRepository>(TYPES.CabsRepository);


describe("Cabs Repository", () => {

    describe("When asked to get result by location", () => {

        it("should return the correct results", () => {

            let result = repository.getCabs("London");

            expect(result).to.be.equal(data["London"]);

        });

    });

    describe("When asked to get all results", () => {

        it("should return the correct results", () => {

            let result = repository.getCabs();
            let dataLength = data["London"].length + data["Glasgow"].length + data["Liverpool"].length;

            expect(result.length).to.be.equal(dataLength);

        });

    });


});