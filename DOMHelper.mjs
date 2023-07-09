// @ts-check

export const Type = {
    Player: 'player',
    Enemy: 'enemy',
};

export const Status = {
    Health: 'health',
    Mana: 'mana',
};

/**
 * @param {string} name 
 * @param {typeof Type[keyof typeof Type]} type 
 */
export const setCharacterName = (name, type) => {
    const element = document.querySelector(`.character__name[data-type="${type}"]`);

    if (!element)
        throw new Error(`Unknown element with [data-type="${type}"]`);

    element.innerHTML = name;
};

/**
 * @param {number} value 
 * @param {typeof Type[keyof typeof Type]} type
 * @param {typeof Status[keyof typeof Status]} status
 */
export const setCharacterStatus = (value, type, status) => {
    const element = document.querySelector(`.character__statuses > ul[data-type="${type}"] > li[data-type="${status}"] > span`);

    if (!element)
        throw new Error(`Unknown ul element with [data-type="${type}"] and li [data-type="${status}"]`);

    element.innerHTML = value.toString();
};

/**
 * @param {string} name 
 * @param {typeof Type[keyof typeof Type]} type
 * @param {number} position
 */
export const setSkillName = (name, type, position) => {
    const element = document.querySelectorAll(`.character__skills > ul[data-type="${type}"] > li > button`)[position];
    
    if (!element)
        throw new Error(`Unknown ul element with [data-type="${type}"] and position "${position}"`);

    element.innerHTML = name;
}

/**
 * @param {number} id 
 * @param {typeof Type[keyof typeof Type]} type
 * @param {number} position
 */
export const setSkillId = (id, type, position) => {
    const element = document.querySelectorAll(`.character__skills > ul[data-type="${type}"] > li > button`)[position];
    
    if (!element)
        throw new Error(`Unknown ul element with [data-type="${type}"] and position "${position}"`);

    element.setAttribute('data-id', id.toString());
}

/**
 * @param {boolean} value 
 * @param {typeof Type[keyof typeof Type]} type
 * @param {number} position
 */
export const setSkilDisabled = (value, type, position) => {
    const element = document.querySelectorAll(`.character__skills > ul[data-type="${type}"] > li > button`)[position];
    
    if (!element)
        throw new Error(`Unknown ul element with [data-type="${type}"] and position "${position}"`);

    if (!value)
        element.removeAttribute('disabled');
    
    element.setAttribute('disabled', '');
}