import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/cars.services";
import { carListMock, carMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get a especific car", () => {
    test("should be able to get a specific car", async () => {
        const carsServices = new CarsServices();

        prismaMock.car.findFirst.mockResolvedValue(carMock);

        const data = await carsServices.getOne(carMock.id);

        expect(data).toBe(carMock);
    }) 
})