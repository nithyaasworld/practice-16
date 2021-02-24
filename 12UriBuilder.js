class UriBuilder {
   params = {page: 0, language: 'Java Script'};
    constructor(baseURL){
        this.baseURL = baseURL;
    }

   
    build(){
        if(page){
            page++;
        }else {
            this
        }
        return this.baseURL
    }
}
