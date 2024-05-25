import { prisma } from "../../database/prisma";
import { carCreateBodyDescMock, carMock, invalidCarIdMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: get one car", () => {

  test("should be able to get a specific a car", async () => {
    const car = await prisma.car.create({ data: carCreateBodyDescMock})
    
    const data = await request
      .get(`/cars/${car.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toStrictEqual(carMock.id);
    expect(data.name).toBe(carMock.name);
    expect(data.description).toBe(carMock.description);
    expect(data.brand).toBe(carMock.brand);
    expect(data.year).toBe(carMock.year);
    expect(data.km).toBe(carMock.km);
  });
  
  test("should throw error when car id is invalid", async () => {
    await request.patch(`/cars/${invalidCarIdMock}`).expect(404);
  });
});