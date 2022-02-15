/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Bulbasaur",
  urlImg:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  id: 1,
  height: 7,
  weight: 69,
  hp: 45,
  attack: 49,
  defense: 49,
  speed: 45,
  createInDb: false,
};

describe("Pokemons routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Can't reach DataBase", err);
    })
  );

  describe("/pokemons", function () {
    it("GET respons with status 200", function () {
      return agent.get("/pokemons").expect(function (res) {
        expect(res.status).equal(200);
      });
    }).timeout(10000);
    it("Elements received are Object type", function () {
      return agent.get("/pokemons").expect(function (res) {
        expect(typeof res.body[0]).equal("object");
      });
    }).timeout(10000);
  });

  describe("/pokemons?name=", function () {
    it("GET receives a body length larger if there is query coincidences", function () {
      return agent.get("/pokemons?name=bulbasaur").expect(function (res) {
        expect(Object.keys(res.body).length).equal(13);
      });
    }).timeout(3000);
  });

  describe("/pokemon/:id", function () {
    it("GET responses with status 200 if a pokemon is found", function () {
      return agent.get("/pokemon/1").expect(function (res) {
        expect(res.status).equal(200);
      });
    }).timeout(10000);
  });
});
