module.exports = {
  formatToIcon: (extension) => {
    switch (extension) {
      case "jpg":
        return "/assets/icons/png/099-picture-2.png";
      case "md":
        return "/assets/icons/png/191-file-7.png";
      case "dir":
        return "/assets/icons/png/136-folder-21.png";
      default:
        return "/assets/icons/png/126-file-39.png";
    }
  },
};
