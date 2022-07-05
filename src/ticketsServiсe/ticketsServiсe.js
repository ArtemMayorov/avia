export default class ticketsServiсe {
  __baseIp = "https://aviasales-test-api.kata.academy";
  async getSearchId() {
    const res = await fetch(`${this.__baseIp}/search`);
    if (!res.ok) throw new Error(`Could not fetch`);
    return res.json();
  }
  async getTickets(searchId) {
    const res = await fetch(`${this.__baseIp}/tickets?searchId=${searchId}`);
    if (!res.ok) throw new Error(`Could not fetch`);
    return res.json();
  }
}
