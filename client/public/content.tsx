// popover content
export const gatewayContent = {
  heading: 'Short term training or experience required.',
  body: 'Find in-demand jobs that offer benefits, living wage pay and open the door to career advancement. These jobs are also associated with the low cost, short-term credentialing in our SkillUp Training Catalog',
};
export const earnAndLearnContent = {
  heading: 'No training or experience required.',
  body: 'Find entry-level positions that offer benefits, living wage pay and on-the-job training or tuition reimbursement.',
};

interface RIASECobject {
  [key: string]: string | string[],
  opener: string,
  list: string[]
}
interface RIASECcontent {
  [key: string]: RIASECobject,
  Realistic: RIASECobject,
  Investigative: RIASECobject,
  Artistic: RIASECobject,
  Social: RIASECobject,
  Enterprising: RIASECobject,
  Conventional: RIASECobject,
};
export const riasecContent: RIASECcontent = {
  Realistic: {
    opener: 'Realistic people like working with objects, machines, tools, plants or animals, and like to be outdoors or perform athletic activities.',
    list: [
      'Be independent, practical, systematic, self-controlled, and straightforward',
      'Like to work outdoors, be physically active, work on electronic equipment, train animals, and build things',
      'Be able to play a sport, fix things, operate tools and machinery, plant a garden, camp outdoors',
    ]
  },
  Investigative: {
  opener: 'Investigative people like to observe, learn, investigate, analyze, and solve problems.',
    list: [
      'Be logical, curious, thoughtful, observant, and intellectual',
      'Like to work independently, explore ideas, analyze data, explain scientific theories, or perform experiments',
      'Be able to think abstractly, interpret formulas, use a computer or microscope, or solve complex problems',
    ]
  },
  Artistic: {
    opener: 'Artistic people like to work in unstructured situations using their imagination and creativity.',
    list: [
      'Thrive on open-ended tasks and unconventional approaches to problem-solving',
      'Like the process of your work, valuing the journey as much as the final result',
      'Be able to think abstractly, find creative solutions, or have a unique eye for aesthetics',
    ],
  },
  Social: {
    opener: 'Social people like to work with people to inspire, inform, help, train or cure them.',
    list: [
      'Be patient, insightful, responsible, cooperative, outgoing, and skilled with words',
      'Like to work in groups volunteer solve personal problems or serve your community',
      'Be able to teach others, mediate, lead a duscussion, communicate well, or plan and supervise activities',
    ]
  },
  Enterprising: {
    opener: 'Enterprising people like to work with people to influence, persuade and lead them, and to achieve organizational or financial goals.',
    list: [
      'Be assertive, energetic, persuasive, ambitious, or optimistic',
      'Like to make decisions, take on leadership roles, meet influential people, or run campaigns',
      'Be able to initiate projects give speeches, persuade or inspire others, lead a large group, or develop organizational goals',
    ]
  },
  Conventional: {
    opener: 'Conventional people like to work with information, carry out detailed tasks, and have clerical or numerical interests.',
    list: [
      'Be efficient, well-organized, persistent, methodical, or conscientious',
      'Like to follow a plan, organize information, work with numbers, use a computer, or collect data',
    ]
  },
};