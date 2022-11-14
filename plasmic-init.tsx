import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
        id: "tAejtTcWcRG66Mw9AtwntM",  // ID of a project you are using
        token: "3L5jBB4Xv12ubERWZGa2tDfHSG0tQFan4dNPPn0qFATUx10fV7oXzn4SSPeJxFcRriNZMW7PopiFC1ug6Lj6A"  // API token for that project
      }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})