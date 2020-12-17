class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.APIRequest = axios.create({
      baseURL: this.baseUrl
    })
  }

  async getAllCities() {
    try {
      const { data: allCities } = await this.APIRequest.get('/cities');
      // console.log('response :>> ', allCities);
      return allCities;
    } catch (error) {
      console.log(error);
      
    }
  }
}