const KEY='mainonta_content_creator.projects.v1';
export function loadProjects(storage=globalThis.localStorage){try{return JSON.parse(storage.getItem(KEY)||'[]')}catch{return[]}}
export function saveProjects(projects,storage=globalThis.localStorage){storage.setItem(KEY,JSON.stringify(projects));return projects}
export function addProject(project,storage=globalThis.localStorage){return saveProjects([...loadProjects(storage),project],storage)}
export{KEY};
