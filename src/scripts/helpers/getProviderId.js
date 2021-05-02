const getProviderId = (name) => {
  switch (name.toLowerCase()) {
    case "sky":
      return 1;
    case "plusnet":
      return 42;
    case "bt":
      return 3;
    case "origin broadband":
      return 116;
    case "ee":
      return 48;
  }
};

export default getProviderId;
