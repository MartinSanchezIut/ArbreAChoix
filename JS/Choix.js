class Choix {

    /*
    Constructeur de choix
    FatherID = id du père
    Qtext = texte en tant que question
    rText = texte en tant que réponse
    childs = liste des fils
     */
    constructor(fatherID, Qtext, Rtext, childs) {
        this.fatherID = fatherID;
        this.Qtext = Qtext;
        this.Rtext = Rtext;
        this.childs = childs;
    }

    // Getters
    getFather() {
        return this.fatherID;
    }
    getQtext() {
        return this.Qtext;
    }
    getRtext() {
        return this.Rtext;
    }
    getChilds() {
        return this.childs;
    }
}