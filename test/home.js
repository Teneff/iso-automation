describe("Home Page", () => {
  beforeAll(async () => {
    return page.goto("http://develop.headless.dev.ecm", {
      waitUntil: "networkidle0"
    });
  });

  it("should have title containing Isobar", async () => {
    expect(await page.title()).toContain("Isobar");
  });

  it("should contain at least 5 links", async () => {
    const links = await page.$$("main a");
    expect(links.length).toBeGreaterThanOrEqual(5);
  });
});
