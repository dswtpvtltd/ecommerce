const getAllBannerQuery = `
query Banners($slider_id: Int){
  allBanners(slider_id: $slider_id) {
    items {
      banner_id
      name
      slidertitle
      sliderdescription
      order_banner
      slider_id
      click_url
      image
      image_alt
      width
      height
    }
  }
}`;

export default getAllBannerQuery;
