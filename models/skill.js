const skills = [
  { skill: "Html", done: true },
  { skill: "Css", done: true },
  { skill: "JavaScript", done: true },
  { skill: "Node.js", done: false },
  { skill: "Python", done: false },
  { skill: "react", done: false }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};
function update(id, skill) {
  skills[id] = skill;
}
function deleteOne(id) {
  skills.splice(id, 1);
}

function getAll() {
  return skills;
}
function getOne(id) {
  return skills[id];
}
function create(skill) {
  skills.push(skill);
}
