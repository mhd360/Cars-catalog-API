import { CarsServices } from "../../services/cars.services";
import { carMock } from "../__mocks__/cars.mocks";

describe("Unit test: delete car", () => {
    test("should be able to delete a car", async () => {
        const carsServices = new CarsServices();

        await carsServices.delete(carMock.id);

    }) 
})