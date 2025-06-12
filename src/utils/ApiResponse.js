class ApiResponse {
  constructor(data, success = true, statusCode = 200, message = "Success") {
    this.data = data;
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
  }
}
