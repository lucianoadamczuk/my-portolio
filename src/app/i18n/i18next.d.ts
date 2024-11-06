import metadata from "./locales/en/metadata.json";
import routes from "./locales/en/routes.json";
import pageHome from "./locales/en/pageHome.json";
import pageAboutMe from "./locales/en/pageAboutMe.json";
import pageProjects from "./locales/en/pageProjects.json";
import projects from "./locales/en/projects.json";
import pageContact from "./locales/en/pageContact.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      metadata: typeof metadata;
      routes: typeof routes;
      pageHome: typeof pageHome;
      pageAboutMe: typeof pageAboutMe;
      pageProjects: typeof pageProjects;
      projects: typeof projects;
      pageContact: typeof pageContact;
    };
  }
}
