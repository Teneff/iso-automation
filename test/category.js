describe("Category Page", () => {
  beforeAll(async () => {
    return page.goto(
      "http://develop.headless.dev.ecm/c/womens/newarrivals-womens",
      {
        waitUntil: "networkidle0"
      }
    );
  });

  describe("Sorting", () => {
    let dowpdown;
    beforeAll(async () => {
      dowpdown = await page.$x("//div[contains(., 'Best Matches')]");
    });

    describe("clicking on the dropdown", () => {
      beforeAll(async () => {
        await dowpdown.click();
      });

      it("should display the sorting options", () => {
        expect();
      });
    });
  });
});
