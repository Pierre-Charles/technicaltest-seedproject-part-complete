import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {
  let store;
  beforeEach(() => {
    store = new Store();
    store.setDeals(mockData.deals);
  });

  // Tests that meet filter criteria

  it("should return all deals when no filters applied", () => {
    // Act
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(11);
    expect(deals).toEqual(mockData.deals);
  });

  it("should return the 4 deals for broadband only when filtering by broadband", () => {
    // Act
    store.setProductFilter("Broadband");
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(4);
  });

  it("should return the 4 deals for broadband and TV only when filtering by broadband and TV", () => {
    // Act
    store.setProductFilter("Broadband");
    store.setProductFilter("Tv");
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(4);
  });

  it("should return the 1 deal for broadband and mobile when filtering by broadband and movile", () => {
    // Act
    store.setProductFilter("Broadband");
    store.setProductFilter("Mobile");
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(1);
  });

  it("should return the 1 deal for Sky only when filtering by Sky", () => {});

  it("should return the 2 deals for BT with broadband and TV only when filtering by BT, broadband and TV", () => {});

  // Extra tests
  it("should return nothing when filtering by mobile only", () => {
    // Act
    store.setProductFilter("Mobile");
    const { deals } = store;

    // Assert
    expect(deals).toEqual([]);
  });

  it("should return nothing when filtering by TV only", () => {
    // Act
    store.setProductFilter("Tv");
    const { deals } = store;

    // Assert
    expect(deals).toEqual([]);
  });

  it("should return nothing when filtering by mobile and TV only", () => {
    // Act
    store.setProductFilter("Mobile");
    store.setProductFilter("Tv");
    const { deals } = store;

    // Assert
    expect(deals).toEqual([]);
  });

  it("should return only 3 deals for Plusnet when filtering by Plusnet", () => {});

  it("should return the 1 deal for EE only when filtering by EE", () => {});

  it("should return 5 deals for BT only when filtering by BT", () => {});

  it("should return the 1 deal for Origin Broadband only when filtering by Origin Broadband", () => {});
});
