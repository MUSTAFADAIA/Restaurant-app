class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }
  filter() {
    //1(Fltering
    const queryStringObj = { ...this.queryString };
    const excludesFields = ["page", "sort", "limit", "fileds"];
    excludesFields.forEach((field) => delete queryStringObj[field]);
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(get|gt|lte|lt)\b/g, (match) => "$${match}");

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));

    return this;
  }

  // page(req){
  //   let query = {};
  //   const page= req.query.page*1||1
  //   const limit = req.query.limit*1||10

  //   const skip=(page -1)*limit
  //   query=query.skip(skip).limit(limit)
  // }



  limitFields() {
    //4) Fields Limiting
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }

 



  search(moduleName) {
    //5) Search
    if (this.queryString.keyWord) {
      let query = {};
      if (moduleName == "") {
        query.$or = [
          { title: { $regex: this.queryString.keyWord, $options: "i" } },
          { content: { $regex: this.queryString.keyWord, $options: "i" } },
          //  { tag: { $regex: this.queryString.keyWord, $options: "i" } },

        ];
        
      } else {
        query = { content: { $regex: this.queryString.keyWord, $options: "i" } };
      }
      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  readMoreUrl(){
  const readMoreUrl = `http://localhost:3000/api/posts/${module.id}`;
  
    // Create the response object
    const response = {
      title: module.title,
      content: module.content,
      read_more: readMoreUrl,
    };
    return response
  }

  paginate(countDocuments) {
    //2) pagination
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 50;
    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    // Pagination result
    const pagination = {};
    pagination.currentPage = page;
    pagination.limit = limit;
    pagination.numberOfPages = Math.ceil(countDocuments / limit);

    // next page
    if (endIndex < countDocuments) {
      pagination.next = page + 1;
    }
    if (skip > 0) {
      pagination.prev = page - 1;
    }
    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    this.paginationResult = pagination;
    return this;
  }

  
}



module.exports = ApiFeatures;

