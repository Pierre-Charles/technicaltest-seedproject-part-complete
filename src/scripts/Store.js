import Observable from "./Observable";

class Store extends Observable {
  constructor() {
    super();
    this.state = {
      deals: [],
      productFilters: [],
      providerFilter: null,
    };
  }

  get deals() {
    return this.filter();
  }

  filter() {
    const { productFilters, providerFilter } = this.state;
    let deals = [...this.state.deals];

    if (!!productFilters.length) {
      deals = deals.filter(({ productTypes }) => {
        const refinedProducts = productTypes
          .filter((type) => type !== "Phone")
          .map((e) => {
            const product = e.toLowerCase();
            return product.indexOf("broadband") > -1 ? "broadband" : product;
          });
        return (
          refinedProducts.sort().join(",") === productFilters.sort().join(",")
        );
      });
    }

    if (providerFilter) {
      deals = deals.filter(({ provider }) => provider.id === providerFilter);
    }

    return deals;
  }

  setDeals(data) {
    this.state.deals = data;
    this.notify(this.state);
  }

  setProductFilter(value) {
    const filter = value.trim().toLowerCase();
    const index = this.state.productFilters.indexOf(filter);
    if (index === -1) {
      this.state.productFilters.push(filter);
    } else {
      this.state.productFilters.splice(index, 1);
    }
    this.notify(this.state);
  }

  setProviderFilter(value = null) {
    this.state.providerFilter = value;
    this.notify(this.state);
  }
}

export default Store;
