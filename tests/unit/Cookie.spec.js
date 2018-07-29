import Cookies from "../../src/components/Cookie.vue";

describe("Cookies.vue", () => {
  it("button click should increment the count", () => {
    expect(Cookies.data.name).toBe("Okay");
  });
});
