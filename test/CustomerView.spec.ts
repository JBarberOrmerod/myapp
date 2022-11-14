import { mount } from "@vue/test-utils";
import { describe, it, expect, test, vi } from "vitest";
import methods from "../src/views/CustomerView.vue"

describe("calling methods", () => {
    it("calls getEmail", async () => {
        const exportedMethods = methods.methods
        const emailSpy = vi.spyOn(exportedMethods, "getEmail")
        exportedMethods.getEmail()
        expect(emailSpy).toHaveBeenCalled()
    });

    it("calls getCustomers", async () => {
        const exportedMethods = methods.methods
        const customersSpy = vi.spyOn(exportedMethods, "getCustomers")
        exportedMethods.getCustomers()
        expect(customersSpy).toHaveBeenCalled()
    });
});