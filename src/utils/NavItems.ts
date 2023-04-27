
const newId="menu-dropdown"
export const navItems = [
  {
    id: 1,
    name: "Product",
    children: [
      {
        id: `${newId}-1`,
        title: "Client Management",
        headings: ["CRM", "Schedulling", "Proposals", "Contracts", "Forms"],
      },
      {
        id: `${newId}-2`,
        title: "Project Management",
        headings: [
          "Timetracking",
          "Tasks",
          "File sharing",
          "Client portal",
          "Collaboration",
        ],
      },
      {
        id: `${newId}-3`,
        title: "Financial Management",
        headings: ["Invoicing", "Payments", "Accounting", "Taxes", "Banking"],
      },
      {
        id: `${newId}-4`,
        title: "What's new",
        content: {
          image:
            "https://elements-cover-images-0.imgix.net/39841f0f-5174-499f-b890-e2e6d9886a57?auto=compress%2Cformat&fit=max&w=900&s=8aacda75f92551b480fbaf15cdb1d7c6",
          desc: "Branded scheduling portal",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Industries",
    children: [
      {
        id: `${newId}-21`,
        title: "Business Services",
        headings: ["Consulting", "Marketing", "Recruting", "Virtual Assistant"],
      },
      {
        id: `${newId}-22`,
        title: "Creative and Digital",
        headings: ["Design", "Photgraphy", "Software Development", "Writing"],
      },
      {
        id: `${newId}-23`,
        title: "Professional Services",
        headings: ["Coaching", "Architecture", "Accounting", "Legal"],
      },
      {
        id: `${newId}-24`,
        title: "Other Services",
        headings: ["Event Planning", "Interior Design", "Real-Estate"],
      },
    ],
  },
];
