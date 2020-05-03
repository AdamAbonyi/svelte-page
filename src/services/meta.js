import { metatags } from "@sveltech/routify";

export const setTitle = title => { metatags.title = title }
export const setDescription = description => metatags.description = description

export default (title, description) => { 
  metatags.title = title;
  metatags.description = description;
};
