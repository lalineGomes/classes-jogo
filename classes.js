class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;

    //validação de tipos
    const validTypes = ["mago", "guerreiro", "monge", "ninja"];
    if (!validTypes.includes(this.type)) {
      throw new Error(`Tipo de herói inválido: ${this.type}`);
    }
  }

  attack() {
    const attackTypes = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };

    const attackType = attackTypes[this.type];

    return `O ${this.type} atacou usando ${attackType}`;
  }
}

const mainHero = new Hero("Laline", 29, "mago");
console.log(mainHero);
console.log(mainHero.attack());
