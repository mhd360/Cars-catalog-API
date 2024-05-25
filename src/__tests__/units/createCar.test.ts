import { CarsServices } from "../../services/cars.services";
import { carMock, carCreateBodyDescMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: create car", () => {
    test("should be able to create car", async () => {
        const carsServices = new CarsServices();

        prismaMock.car.create.mockResolvedValue(carMock);

        const data = await carsServices.create(carCreateBodyDescMock);
    }) 
})
