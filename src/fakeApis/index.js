import { createServer, Model } from "miragejs";

export const setupServer = () => {
  createServer({
    models: {
      recruitmentJob: Model,
      newspaper: Model,
      shareholder: Model,
    },
    //  thử return ra mảng đối tượng sau đó ở file todoList không dùng .todos

    routes() {
      // tuyển dụng
      this.get("/api/recruitmentJobs", (schema) => {
        return schema.recruitmentJobs.all(); // phai là số nhiều
      });

      this.post("/api/recruitmentJobs", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.recruitmentJobs.create(payload);
      });
      // tin tức
      this.get("/api/fetchNews", (schema) => {
        return schema.newspapers.all(); // phai là số nhiều
      });

      this.post("/api/fetchNews", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.newspapers.create(payload);
      });

      // ///////cổ đông
      this.get("/api/ferchShareholders", (schema) => {
        return schema.shareholders.all(); // phai là số nhiều
      });

      this.post("/api/ferchShareholders", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.shareholders.create(payload);
      });
    },
  });
};
