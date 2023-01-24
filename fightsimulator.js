class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  evoluer() {
    ++this.niveau;
    console.log(this.pseudo + " monte au niveau " + this.niveau);
  }

  verifierSante() {
    if (this.sante <= 0) {
      this.sante == 0;
      console.log(this.pseudo + " a perdu le combat");
    }
  }
  get informations() {
    return (
      this.pseudo +
      "(" +
      this.classe +
      " a " +
      this.sante +
      " points de vie et est au niveau " +
      this.niveau +
      "."
    );
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
    // this.classe = classe;
  }
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort " +
        this.attaque +
        "."
    );
    this.evoluer();
    this.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec un coup spécial puissance des arcanes " +
        personnage.pseudo +
        " " +
        this.attaque * 5
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "Guerrier", 350, 90);
  }
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée " +
        this.attaque +
        "."
    );
    this.evoluer();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec un coup spécial haches de guerre " +
        personnage.pseudo +
        " " +
        this.attaque * 5
    );
    this.evoluer();
    personnage.verifierSante();
  }
}
var gandalf = new Magicien("Gandalf");
var thor = new Guerrier("Thor");

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
thor.coupSpecial(gandalf);
