import { CarsServices } from "../../services/cars.services";
import { carListMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get all the cars", () => {
    test("should be able to get all the cars", async () => {
        const carsServices = new CarsServices();

        prismaMock.car.findMany.mockResolvedValue(carListMock);

        const data = await carsServices.getMany();

        expect(data).toHaveLength(2);
        expect(data[0]).toStrictEqual(carListMock[0]);
        expect(data[1]).toStrictEqual(carListMock[1]);
    }) 
})