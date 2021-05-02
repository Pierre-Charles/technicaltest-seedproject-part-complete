import Store from "../Store";
import mockData from "../../../public/db.json";
import getProviderId from "../helpers/getProviderId";

describe("filter", () => {
  let store;

  beforeEach(() => {
    // Arrange
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

  it("should return the 1 deal for Sky only when filtering by Sky", () => {
    // Arrange
    store.setProviderFilter(getProviderId("sky"));
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(1);
  });

  it("should return the 2 deals for BT with broadband and TV only when filtering by BT, broadband and TV", () => {
    // Act
    store.setProviderFilter(getProviderId("bt"));
    store.setProductFilter("Broadband");
    store.setProductFilter("Tv");
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(2);
  });

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

  it("should return only 3 deals for Plusnet when filtering by Plusnet", () => {
    // Act
    store.setProviderFilter(getProviderId("plusnet"));
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(3);
  });

  it("should return the 1 deal for EE only when filtering by EE", () => {
    // Act
    store.setProviderFilter(getProviderId("ee"));
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(1);
  });

  it("should return 5 deals for BT only when filtering by BT", () => {
    // Act
    store.setProviderFilter(getProviderId("bt"));
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(5);
  });

  it("should return the 1 deal for Origin Broadband only when filtering by Origin Broadband", () => {
    // Arrange
    store.setProviderFilter(getProviderId("origin broadband"));
    const { deals } = store;

    // Assert
    expect(deals).toHaveLength(1);
  });
});
