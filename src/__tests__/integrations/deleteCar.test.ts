import { prisma } from "../../database/prisma";
import { carCreateBodyDescMock, invalidCarIdMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {

  test("should be able to delete a car", async () => {
    const car = await prisma.car.create({ data: carCreateBodyDescMock })

    await request
      .delete(`/cars/${car.id}`)
      .expect(204)

  });

  test("should throw error when car id is invalid", async () => {
    await request.delete(`/cars/${invalidCarIdMock}`).expect(404);
  });
});