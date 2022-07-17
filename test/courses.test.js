const coursesModel = require("../src/models/coursesModel")

describe("GET route", () => {
    const course = new coursesModel({
    courseTitle: "teste back-end",
    affirmativePolicies: ["mulheres trans"],
    available: true,
    startDate: "22-06-2022",
    finishDate: "22-09-2022",
    category: ["tecnologia"],
    description: "curso voltado a mulheres",
    institutionID: "62c88976289c610293bc2cd1"
});
    it("Deve chamar o schema e retornar o nome correto do curso", () => {
        expect(course.courseTitle).toBe("teste back-end");
    });
    it("Deve chamar o schema e retornar a politica afirmativa correta", () => {
        expect(course.affirmativePolicies).toStrictEqual(["mulheres trans"]);
    });
    it("Deve chamar o schema e retornar se esta disponivel", () => {
        expect(course.available).toBe(true);
    });
    it("Deve chamar o schema e retornar a data inicial", () => {
        expect(course.startDate).toBe("22-06-2022");
    });
    it("Deve chamar o schema e retornar a data final", () => {
        expect(course.finishDate).toBe("22-09-2022");
    });
    it("Deve chamar o schema e retornar a categoria correta", () => {
        expect(course.category).toStrictEqual(["tecnologia"]);;
    });
    it("Deve chamar o schema e retornar a descrição correta", () => {
        expect(course.description).toBe("curso voltado a mulheres");
    });
    it("Deve chamar o schema e retornar o id da instituição correto", () => {
        expect(JSON.stringify(course.institutionID).substring(1, (JSON.stringify(course.institutionID)).length - 1)).toBe("62c88976289c610293bc2cd1");;
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
    institutionID: "62c88976289c610293bc2cd1"
    });
    it("Deve salvar no banco de dados o novo curso", () => {
        course.save().then((dados) => {
            expect(dados.title).toBe("teste back-end");
        });
        
    });
})


describe("UPDATE route test", () => {
    it("Deve editar o titulo do curso", () => {
    const course = new coursesModel({
    courseTitle: "teste back-end",
    affirmativePolicies: ["mulheres trans"],
    available: true,
    startDate: "22-06-2022",
    finishDate: "22-09-2022",
    category: ["tecnologia"],
    description: "curso voltado a mulheres",
    institutionID: "62c88976289c610293bc2cd1"
        });
        course.title = "novo curso teste"
        course.save().then((dados) => {
            expect(dados.title).toBe("novo curso teste");
        });
        
    });
})

describe("DELETE route test", () => {
    it("Deve excluir o curso", () => {
    const course = new coursesModel({
    courseTitle: "teste back-end",
    affirmativePolicies: ["mulheres trans"],
    available: true,
    startDate: "22-06-2022",
    finishDate: "22-09-2022",
    category: ["tecnologia"],
    description: "curso voltado a mulheres",
    institutionID: "62c88976289c610293bc2cd1"
        });
        course.save().then((dados) => {
            course.delete().then((novosdados) =>{
                expect(dados.title).toBe(null);
            })
        });
        
    });
})