interface ProjectItem {
    title: string;
    tech_stack: string;
    description: string[];
    project_link: string;
    demo_link?: string;
    live_link?: string;
    alt_name: string;
    logo_path: string;
    status: "Completed" | "In Progress";
    tags?: string[];
    highlight?: string;
    date_created?: string;
  }