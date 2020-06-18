class Choix {

    constructor(fatherID, Qtext, Rtext, childs) {
        this.fatherID = fatherID;
        this.Qtext = Qtext;
        this.Rtext = Rtext;
        this.childs = childs;
    }

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