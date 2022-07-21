const coursesModel = require("../src/models/coursesModel");

describe("GET route", () => {
  const course = new coursesModel({
    courseTitle: "teste back-end",
    affirmativePolicies: ["mulheres trans"],
    available: true,
    startDate: "22-06-2022",
    finishDate: "22-09-2022",
    category: ["tecnologia"],
    description: "curso voltado a mulheres",
    institutionID: "62c88976289c610293bc2cd1",
  });
  it("Must call schema and return correct course name", () => {
    expect(course.courseTitle).toBe("teste back-end");
  });
  it("Must call the schema and return the correct affirmative policy", () => {
    expect(course.affirmativePolicies).toStrictEqual(["mulheres trans"]);
  });
  it("It must call the schema and return if it is available", () => {
    expect(course.available).toBe(true);
  });
  it("Must call the schema and return the start date", () => {
    expect(course.startDate).toBe("22-06-2022");
  });
  it("Must call the schema and return the end date", () => {
    expect(course.finishDate).toBe("22-09-2022");
  });
  it("Must call schema and return correct category", () => {
    expect(course.category).toStrictEqual(["tecnologia"]);
  });
  it("Must call schema and return correct description", () => {
    expect(course.description).toBe("curso voltado a mulheres");
  });
  it("Must call the schema and return the correct institution id", () => {
    expect(
      JSON.stringify(course.institutionID).substring(
        1,
        JSON.stringify(course.institutionID).length - 1
      )
    ).toBe("62c88976289c610293bc2cd1");
  });
});

describe("CREATE route test", () => {
  const course = new coursesModel({
    courseTitle: "teste back-end",
    affirmativePolicies: ["mulheres trans"],
    available: true,
    startDate: "22-06-2022",
    finishDate: "22-09-2022",
    category: ["tecnologia"],
    description: "curso voltado a mulheres",
    institutionID: "62c88976289c610293bc2cd1",
  });
  it("Must save the new course in the database", () => {
    course.save().then((dados) => {
      expect(dados.title).toBe("teste back-end");
    });
  });
});

describe("UPDATE route test", () => {
  it("Must edit course title", () => {
    const course = new coursesModel({
      courseTitle: "teste back-end",
      affirmativePolicies: ["mulheres trans"],
      available: true,
      startDate: "22-06-2022",
      finishDate: "22-09-2022",
      category: ["tecnologia"],
      description: "curso voltado a mulheres",
      institutionID: "62c88976289c610293bc2cd1",
    });
    course.title = "novo curso teste";
    course.save().then((dados) => {
      expect(dados.title).toBe("novo curso teste");
    });
  });
});

describe("DELETE route test", () => {
  it("Must delete course", () => {
    const course = new coursesModel({
      courseTitle: "teste back-end",
      affirmativePolicies: ["mulheres trans"],
      available: true,
      startDate: "22-06-2022",
      finishDate: "22-09-2022",
      category: ["tecnologia"],
      description: "curso voltado a mulheres",
      institutionID: "62c88976289c610293bc2cd1",
    });
    course.save().then((dados) => {
      course.delete().then((novosdados) => {
        expect(dados.title).toBe(null);
      });
    });
  });
});
