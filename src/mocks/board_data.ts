import type { User, Project } from "@/types/board";

export const initialUsers: User[] = [
  {
    userId: "user1",
    username: "Alice Wonderland",
    email: "alice@example.com",
    avatar: "AW",
  },
  {
    userId: "user2",
    username: "Bob The Builder",
    email: "bob@example.com",
    avatar: "BB",
  },
  {
    userId: "user3",
    username: "Charlie Chaplin",
    email: "charlie@example.com",
    avatar: "CC",
  },
  {
    userId: "user4",
    username: "Diana Prince",
    email: "diana@example.com",
    avatar: "DP",
  },
];

export const initialProjects: Project[] = [
  {
    projectId: "proj1",
    projectName: "Website Redesign",
    projectDescription:
      "Complete overhaul of the company website with a modern look and feel.",
    users: ["user1", "user2"],
    tasks: [
      {
        taskId: "task1",
        title: "Design Homepage Mockups",
        description:
          "Create detailed mockups for the new homepage, focusing on UX.",
        status: "inprogress",
        assignedTo: "user1",
        sprintName: "Sprint Alpha",
      },
      {
        taskId: "task2",
        title: "Develop Navigation Component",
        description: "Build the primary navigation menu for the website.",
        status: "todo",
      },
      {
        taskId: "task3",
        title: "User Testing - Phase 1",
        description:
          "Conduct initial user testing sessions for the new design concepts.",
        status: "done",
        assignedTo: "user2",
      },
      {
        taskId: "task101",
        title: "Content Migration Plan",
        description:
          "Outline the strategy for migrating existing content to the new platform.",
        status: "todo",
        assignedTo: "user1",
      },
    ],
    definedSprints: ["Sprint Alpha", "Sprint Beta"],
  },
  {
    projectId: "proj2",
    projectName: "Mobile App Development",
    projectDescription:
      "Develop a new cross-platform mobile application for iOS and Android.",
    users: ["user2", "user3", "user4"],
    tasks: [
      {
        taskId: "task4",
        title: "Feasibility Study & Tech Stack",
        description:
          "Research and finalize the technology stack for the mobile app.",
        status: "done",
        assignedTo: "user3",
      },
      {
        taskId: "task5",
        title: "Implement User Authentication",
        description:
          "Develop the login, registration, and password recovery features.",
        status: "todo",
        assignedTo: "user2",
      },
      {
        taskId: "task6",
        title: "Design User Profile Screen",
        description: "Create UI mockups for the user profile section.",
        status: "inprogress",
        assignedTo: "user4",
        sprintName: "Mobile Sprint 1",
      },
    ],
    definedSprints: ["Mobile Sprint 1", "Mobile Sprint 2"],
  },
  {
    projectId: "proj3",
    projectName: "Marketing Campaign Q3",
    projectDescription:
      "Plan and execute the marketing campaign for the third quarter.",
    users: ["user1", "user3"],
    tasks: [
      {
        taskId: "task7",
        title: "Define Target Audience",
        description:
          "Research and define the primary target audience for the campaign.",
        status: "todo",
        assignedTo: "user1",
      },
      {
        taskId: "task8",
        title: "Create Social Media Content Calendar",
        description: "Plan content for all social media channels for Q3.",
        status: "todo",
      },
    ],
    definedSprints: [],
  },
];
