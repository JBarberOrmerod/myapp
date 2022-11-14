import { mount } from "@vue/test-utils";
import { describe, it, expect, test, vi } from "vitest";
import Customers from "../src/views/CustomerView.vue"

describe("routing", () => {
    it("Routes to a page", () => {
        const wrapper = mount(Customers)
        expect(wrapper.html()).toContain("Customer");
    });
});