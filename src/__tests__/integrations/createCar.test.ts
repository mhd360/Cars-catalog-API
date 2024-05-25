import { carCreateBodyDescMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: create car", () => {

  test("should be able to create a car", async () => {
    const data = await request
      .post("/cars")
      .send(carCreateBodyDescMock)
      .expect(201)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    expect(data.name).toBe(carCreateBodyDescMock.name);
    expect(data.description).toBe(carCreateBodyDescMock.description);
    expect(data.brand).toBe(carCreateBodyDescMock.brand);
    expect(data.year).toBe(carCreateBodyDescMock.year);
    expect(data.km).toBe(carCreateBodyDescMock.km);
  });
});
