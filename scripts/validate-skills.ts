import { projects } from "../lib/projects";
import { validateProjectTags } from "../lib/validateSkills";

validateProjectTags(projects);
console.log("✓ skillGroups & project tags are consistent");
