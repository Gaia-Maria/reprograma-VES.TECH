const institutionsModel = require("../src/models/institutionsModel");

describe("GET route", () => {
  const institution = new institutionsModel({
    institution: "nome teste",
    site: "http://localhost:3301/my-documentation/#/",
    email: "http://emailteste@gmail.com",
    description: "instituição de tecnologia",
  });
  it("Must call schema and return correct course name", () => {
    expect(institution.institution).toBe("nome teste");
  });
  it("Must call schema and return correct site", () => {
    expect(institution.site).toBe("http://localhost:3301/my-documentation/#/");
  });
  it("Must call schema and return correct email", () => {
    expect(institution.email).toBe("http://emailteste@gmail.com");
  });
  it("Must call schema and return correct description", () => {
    expect(institution.description).toBe("instituição de tecnologia");
  });
});

describe("CREATE route test", () => {
  const institution = new institutionsModel({
    institution: "nome teste",
    site: "http://localhost:3301/my-documentation/#/",
    email: "http://emailteste@gmail.com",
    description: "instituição de tecnologia",
  });
  it("The new institution must be saved in the database", () => {
    institution.save().then((dados) => {
      expect(dados.title).toBe("nome teste");
    });
  });
});

describe("UPDATE route test", () => {
  it("You must edit the institution's title", () => {
    const institution = new institutionsModel({
      institution: "nome teste",
      site: "http://localhost:3301/my-documentation/#/",
      email: "http://emailteste@gmail.com",
      description: "instituição de tecnologia",
    });
    institution.title = "nova instituição";
    institution.save().then((dados) => {
      expect(dados.title).toBe("nova instituição");
    });
  });
});

describe("DELETE route test", () => {
  it("Must delete institution from database", () => {
    const institution = new institutionsModel({
      institution: "nome teste",
      site: "http://localhost:3301/my-documentation/#/",
      email: "http://emailteste@gmail.com",
      description: "instituição de tecnologia",
    });
    institution.save().then((dados) => {
      institution.delete().then((novosdados) => {
        expect(dados.title).toBe(null);
      });
    });
  });
});
