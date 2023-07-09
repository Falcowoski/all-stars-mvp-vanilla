export class Character {
    /** @private */
    _id;
    /** @private */
    _name;
    /** @private */
    _health;
    /** @private */
    _skills;
    /** @private */
    _mana = 200;

    /**
     * @param {number} id 
     * @param {string} name 
     * @param {number} health 
     * @param {import('./Skill.mjs').Skill[]} skills
     */
    constructor(id, name, health, skills) {
        this._id = id;
        this._name = name;
        this._health = health;
        this._skills = skills;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get health() {
        return this._health;
    }

    get skills() {
        return this._skills;
    }

    get mana() {
        return this._mana;
    }
}