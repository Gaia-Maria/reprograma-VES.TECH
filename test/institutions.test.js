const institutionsModel = require("../src/models/institutionsModel")

describe("GET route", () => {
    const institution = new institutionsModel({
    institution: "nome teste",
    site: "http://localhost:3301/my-documentation/#/",
    email: "http://emailteste@gmail.com",
    description: "instituição de tecnologia"
});
    it("Deve chamar o schema e retornar o nome correto do curso", () => {
        expect(institution.institution).toBe("nome teste");
    });
    it("Deve chamar o schema e retornar o site", () => {
        expect(institution.site).toBe("http://localhost:3301/my-documentation/#/");
    });
    it("Deve chamar o schema e retornar o email", () => {
        expect(institution.email).toBe("http://emailteste@gmail.com");
    });
    it("Deve chamar o schema e retornar a descrição correta", () => {
        expect(institution.description).toBe("instituição de tecnologia");
    });
});

describe("CREATE route test", () => {
    const institution = new institutionsModel({
        institution: "nome teste",
        site: "http://localhost:3301/my-documentation/#/",
        email: "http://emailteste@gmail.com",
        description: "instituição de tecnologia"
    });
    it("Deve salvar no banco de dados a nova instituição", () => {
        institution.save().then((dados) => {
            expect(dados.title).toBe("nome teste");
        });
        
    });
})


describe("UPDATE route test", () => {
    it("Deve editar o titulo da instituição", () => {
        const institution = new institutionsModel({
            institution: "nome teste",
            site: "http://localhost:3301/my-documentation/#/",
            email: "http://emailteste@gmail.com",
            description: "instituição de tecnologia"
        });
        institution.title = "nova instituição"
        institution.save().then((dados) => {
            expect(dados.title).toBe("nova instituição");
        });
        
    });
})

describe("DELETE route test", () => {
    it("Deve excluir a instituição", () => {
        const institution = new institutionsModel({
            institution: "nome teste",
            site: "http://localhost:3301/my-documentation/#/",
            email: "http://emailteste@gmail.com",
            description: "instituição de tecnologia"
        });
        institution.save().then((dados) => {
            institution.delete().then((novosdados) =>{
                expect(dados.title).toBe(null);
            })
        });
        
    });
})