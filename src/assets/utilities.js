const getHigherQualityIcon = (iconUrl) => {
  return iconUrl.replace("64x64", "128x128");
};

export { getHigherQualityIcon };