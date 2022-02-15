const { Pokemon, Type, conn } = require("../../src/db");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "pikachu" });
      });
    });
  });

  // Testing:

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("height", () => {
      it("should throw an error if height is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid height")))
          .catch(() => done());
      });
      it("should work when its a valid height", () => {
        Pokemon.create({ height: 3 });
      });
    });
  });

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("weight", () => {
      it("should throw an error if weight is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid weight")))
          .catch(() => done());
      });
      it("should work when its a valid weight", () => {
        Pokemon.create({ weight: 10 });
      });
    });
  });

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("image", () => {
      it("should throw an error if image is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid link image")))
          .catch(() => done());
      });
      it("should work when its a valid link image", () => {
        Pokemon.create({
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        });
      });
    });
  });
});

describe("Type model", function () {
  beforeEach(async function () {
    await Type.sync({ force: true });
  });
  it("Should not be created without all required fields completed", function (done) {
    Type.create({
      id: "1",
    })
      .then(() => done("Should not have been created, dude!"))
      .catch(() => done());
  });
  it("Name should be a string", function () {
    expect(typeof Type.name).equal("string");
  });
});
