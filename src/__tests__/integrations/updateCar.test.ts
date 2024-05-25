import { prisma } from "../../database/prisma";
import { carCreateBodyDescMock, carUpdateBodyMock, invalidCarIdMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: update car", () => {

  test("should be able to update a car", async () => {
    const car = await prisma.car.create({ data: carCreateBodyDescMock})

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(carUpdateBodyMock)
      .expect(200)
      .then((response) => response.body);

    const updatedCar = { ...car, ...carUpdateBodyMock };

    expect(data).toStrictEqual(updatedCar);
  });

  test("should throw error when car id is invalid", async () => {
    await request.patch(`/cars/${invalidCarIdMock}`).expect(404);
  });
});