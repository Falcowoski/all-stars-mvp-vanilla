export class Skill {
    /** @private */
    _id;
    /** @private */
    _name;
    /** @private */
    _damage;
    /** @private */
    _cost;
    /** @private */
    _cooldown;
    /** @private */
    _remainingCooldown = 0;

    /**
     * @param {number} id 
     * @param {string} name 
     * @param {number} damage 
     * @param {number} cost 
     * @param {number} cooldown 
     */
    constructor(id, name, damage, cost, cooldown) {
        this._id = id;
        this._name = name;
        this._damage = damage;
        this._cost = cost;
        this._cooldown = cooldown;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get damage() {
        return this._damage;
    }

    get cost() {
        return this._cost;
    }

    get cooldown() {
        return this._cooldown;
    }

    get remainingCooldown() {
        return this._remainingCooldown;
    }
}