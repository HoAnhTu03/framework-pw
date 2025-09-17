import { test } from "@playwright/test";

test.describe("AUTH", () => {
    test("Login pass", {
        tag: ["@LOGIN_01", "@auth"]
    }, async ({ page }) => {
        await test.step("Navigate to Login Page", async () => {
            await page.goto("https://organicmarket.store.net.vn/login");
        });

        await test.step("Fill username and password", async () => {

        });

        await test.step("Click btn Login", async () => {

        });
    });

    test("Login fail", {
        tag: ["@LOGIN_02", "@auth"]
    }, async () => {
        await test.step("Navigate to Login Page", async () => {

        });

        await test.step("Fill username and password invalid", async () => {

        });

        await test.step("Click btn Login", async () => {

        });
    });
});