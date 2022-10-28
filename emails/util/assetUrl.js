const assetUrl = (url) => {
  if (process.env.ASSET_URL && url.startsWith("/")) {
    return `${process.env.ASSET_URL}${url}`;
  }
  return url;
};

export default assetUrl;
