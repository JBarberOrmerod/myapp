import { mount } from "@vue/test-utils";
import { describe, it, expect, test, vi } from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue"
import Customers from "../src/views/CustomerView.vue"

describe("HelloWorld.vue", () => {

    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = mount(HelloWorld, {
          props: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
      });
});

describe("routing", () => {
    it("Routes to a page", () => {
      const wrapper = mount(Customers)
      expect(wrapper.html()).toContain("Customer");
    });
  });