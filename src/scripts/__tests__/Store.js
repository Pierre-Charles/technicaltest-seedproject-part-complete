import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {
  let store;
  beforeEach(() => {
    store = new Store();
    store.setDeals(mockData);
  });

  // Tests that meet filter criteria

  it("should return all deals when no filters applied", () => {
    // Arrange
    const sut = new Store();
    sut.setDeals(mockData.deals);

    // Act
    const result = sut.deals;

    // Assert
    expect(result).toEqual(mockData.deals);
  });

  it("should return the 4 deals for broadband only when filtering by broadband", () => {});

  it("should return the 4 deals for broadband and TV only when filtering by broadband and TV", () => {});

  it("should return the 1 deal for broadband and mobile when filtering by broadband and movile", () => {});

  it("should return the 1 deal for Sky only when filtering by Sky", () => {});

  it("should return the 2 deals for BT with broadband and TV only when filtering by BT, broadband and TV", () => {});

  // Extra tests
  it("should return nothing when filtering by mobile only", () => {});

  it("should return nothing when filtering by TV only", () => {});

  it("should return nothing when filtering by mobile and TV only", () => {});

  it("should return only 3 deals for Plusnet when filtering by Plusnet", () => {});

  it("should return the 1 deal for EE only when filtering by EE", () => {});

  it("should return 5 deals for BT only when filtering by BT", () => {});

  it("should return the 1 deal for Origin Broadband only when filtering by Origin Broadband", () => {});
});
