import { evaluateDesignStoreCost} from "../libs/billing-lib";

test("A sample billing test", () => {
    const storage = 10;
  
    const cost = 100;
    const expectedCost = evaluateDesignStoreCost(storage);
  
    expect(cost).toEqual(expectedCost);
  });
  