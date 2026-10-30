export const JOB_STATES=Object.freeze(['QUEUED','ANALYZING','PROCESSING','DONE','FAILED','CANCELLED']);
export function createPhotoProject(name,now=new Date().toISOString()){return{id:crypto.randomUUID(),type:'photography',name,createdAt:now,updatedAt:now,assets:[],jobs:[]}}
export function createJob(projectId,kind,now=new Date().toISOString()){return{id:crypto.randomUUID(),projectId,kind,state:'QUEUED',progress:0,createdAt:now,updatedAt:now,error:null}}
