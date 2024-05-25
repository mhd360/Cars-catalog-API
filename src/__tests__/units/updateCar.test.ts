import { CarsServices } from "../../services/cars.services"
import { carMock, carUpdateBodyMock } from "../__mocks__/cars.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("unit test: update car", () => {
    test("should be able to update a car", async () => {
        const carsServices = new CarsServices();

        const updatedCar = { ...carMock, ...carUpdateBodyMock};

        prismaMock.car.update.mockResolvedValue(updatedCar);

        const data = await carsServices.patch(carMock.id, carUpdateBodyMock);

        expect(data).toStrictEqual(updatedCar);
    })
})