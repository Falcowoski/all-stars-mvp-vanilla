// @ts-check
import { Character } from './Character.mjs';
import { Status, Type, setCharacterName, setCharacterStatus, setSkilDisabled, setSkillId, setSkillName } from './DOMHelper.mjs';
import { Skill } from './Skill.mjs';

// Skills
const Fireball = new Skill(1, 'Fireball', 10, 25, 2);
const Waterball = new Skill(2, 'Waterball', 5, 10, 2);
const IceBeam = new Skill(3, 'Ice Beam', 50, 100, 4);

// Characters
const Player = new Character(1, 'Goku', 100, [Fireball, IceBeam]);
const Enemy = new Character(2, 'Naruto', 100, [Waterball, IceBeam]);

// Player
setCharacterName(Player.name, Type.Player);
setCharacterStatus(Player.health, Type.Player, Status.Health);
setCharacterStatus(Player.mana, Type.Player, Status.Mana);
Player.skills.map((skill, index) => {
    setSkillId(skill.id, Type.Player, index);
    setSkillName(skill.name, Type.Player, index);
})

// Enemy
setCharacterName(Enemy.name, Type.Enemy);
setCharacterStatus(Enemy.health, Type.Enemy, Status.Health);
setCharacterStatus(Enemy.mana, Type.Enemy, Status.Mana);
Player.skills.map((skill, index) => {
    setSkillId(skill.id, Type.Enemy, index);
    setSkillName(skill.name, Type.Enemy, index);
    setSkilDisabled(true, Type.Enemy, index);
})