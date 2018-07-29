import { shallowMount } from "@vue/test-utils";
import Cookies from "../../src/components/Cookie.vue";

describe("Cookies.vue", () => {
    const component = shallowMount(Cookies);

    it("button click should increment the count", () => {
        expect(Cookies.data.name).toBe("Okay");

    });
});