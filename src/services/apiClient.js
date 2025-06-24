export class ApiClient {
  constructor(baseURL = "", defaultHeaders = { "Content-Type": "application/json" }) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  async request(path, { method = "GET", data, headers = {}, ...rest } = {}) {
    const url = this.baseURL ? `${this.baseURL}${path}` : path;
    const options = {
      method,
      headers: { ...this.defaultHeaders, ...headers },
      ...rest,
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorBody || response.statusText}`);
    }
    return response.json();
  }

  get(path, options) {
    return this.request(path, { ...options, method: "GET" });
  }
  post(path, data, options) {
    return this.request(path, { ...options, method: "POST", data });
  }
  put(path, data, options) {
    return this.request(path, { ...options, method: "PUT", data });
  }
  delete(path, options) {
    return this.request(path, { ...options, method: "DELETE" });
  }
} 