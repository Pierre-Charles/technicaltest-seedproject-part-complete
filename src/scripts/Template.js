class Template {
  constructor() {
    this.deal = document.getElementById("template-deal").innerHTML;
    this.listItem = document.getElementById("template-list-item").innerHTML;
    this.icon = document.getElementById("template-icon").innerHTML;
    this.currencyFormatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    });
  }

  buildDeal(data) {
    return this.deal
      .replace("{{ image }}", this.getImage(data.provider.id))
      .replace("{{ title }}", data.title)
      .replace("{{ provider }}", data.provider.name)
      .replace(
        "{{ upfrontCost }}",
        data.cost.upfrontCost > 0
          ? this.currencyFormatter.format(data.cost.upfrontCost)
          : "No"
      )
      .replace(
        "{{ totalCost }}",
        this.currencyFormatter.format(data.cost.totalContractCost)
      )
      .replace("{{ contractLength }}", data.contractLength + " months")
      .replace(
        "{{ monthlyCost }}",
        this.currencyFormatter.format(
          this.calculateMonthlyCost(
            data.cost.totalContractCost,
            data.contractLength
          )
        )
      )
      .replace("{{ ctaProviderSite }}", this.getProviderSite(data.provider.id))
      .replace(
        "{{ productList }}",
        this.buildProductIconList(data.productTypes)
      );
  }

  buildListItem(content) {
    return this.listItem.replace("{{ content }}", content);
  }

  buildDealList(list) {
    return list.reduce((result, deal) => {
      const dealHtml = this.buildDeal(deal);
      return (result += this.buildListItem(dealHtml));
    }, "");
  }

  buildProductIconList(list) {
    return list.reduce((result, product) => {
      if (product === "Phone") {
        return result;
      }
      const iconId = this.getIconId(product);
      const iconHtml = this.buildIcon(iconId);
      return (result += this.buildListItem(iconHtml));
    }, "");
  }

  buildIcon(id) {
    return this.icon.replace("{{ iconId }}", id);
  }

  getIconId(name) {
    let id;
    switch (name) {
      case "TV":
        id = "tv";
        break;
      case "Broadband":
      case "Fibre Broadband":
        id = "wifi";
        break;
      case "Mobile":
        id = "mobile";
        break;
    }
    return `#icon-${id}`;
  }

  getImage(id) {
    let name;
    switch (id) {
      case 1:
        name = "sky";
        break;
      case 42:
        name = "plusnet";
        break;
      case 3:
        name = "bt";
        break;
      case 116:
        name = "origin";
        break;
      case 48:
        name = "ee";
        break;
    }
    return `<img src='/logos/${name}.png'>`;
  }

  calculateMonthlyCost(totalCost, contractLength) {
    return totalCost / contractLength;
  }

  getProviderSite(id) {
    let link;
    switch (id) {
      case 1:
        link = "https://www.sky.com/broadband";
        break;
      case 42:
        link = "https://www.plus.net/broadband/";
        break;
      case 3:
        link = "https://www.bt.com/broadband/";
        break;
      case 116:
        link = "https://www.originbroadband.com/broadband";
        break;
      case 47:
        link = "https://shop.ee.co.uk/broadband";
        break;
    }
    return `<a href=${link} target='_blank' rel='noopener'>Grab this deal!</a>`;
  }
}

export default Template;
