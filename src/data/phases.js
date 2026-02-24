// ─────────────────────────────────────────────────────────────────────────────
// PROCESS IMPROVEMENT GUIDE — PHASE & STEP DATA
//
// HOW TO CUSTOMIZE:
//   1. Replace all "YOUR_WIKI/..." URLs with real links to your internal wiki
//   2. Add, remove, or rename checklist items to match your org's process
//   3. Rename phases or steps to match your team's terminology
//   4. Change wikiLinks labels to match your wiki page titles
// ─────────────────────────────────────────────────────────────────────────────

export const PHASES = [
  // ── 1. UNDERSTAND ────────────────────────────────────────────────────────
  {
    id: 'understand',
    label: 'Understand',
    icon: '🔍',
    color: '#EEF2FF',
    accent: '#4F46E5',
    tagline: 'Clearly understand the problem before jumping to solutions',
    description:
      'Before anything else, deeply understand the situation. What is actually happening, who is affected, and why does it matter? This phase ensures you are solving the right problem.',
    steps: [
      {
        id: 'understand-1',
        title: 'Write a Clear Problem Statement',
        description:
          'Describe the problem in specific, observable terms. A good problem statement explains what is wrong, where it occurs, how often, and what the impact is — without stating causes or solutions.',
        wikiLinks: [
          { label: 'Problem Statement Guidelines', url: 'https://YOUR_WIKI/problem-statement' },
          { label: 'Problem Statement Template', url: 'https://YOUR_WIKI/templates/problem-statement' },
        ],
        checklistItems: [
          'Problem is described in measurable or observable terms',
          'Statement does NOT assign a cause or blame',
          'Statement does NOT propose a solution',
          'Scope is clear — where and when does this problem occur?',
          'Impact on the team, customers, or business is stated',
        ],
      },
      {
        id: 'understand-2',
        title: 'Identify Who Is Affected',
        description:
          'Map out all the people impacted by this problem — employees, customers, partner teams, or leadership. Understanding their perspectives and requirements helps keep the project grounded.',
        wikiLinks: [
          { label: 'Stakeholder Mapping Guide', url: 'https://YOUR_WIKI/stakeholder-mapping' },
          { label: 'How to Gather Requirements', url: 'https://YOUR_WIKI/gathering-requirements' },
        ],
        checklistItems: [
          'All affected groups/teams identified',
          'Key stakeholders and their interests listed',
          'Customer or end-user needs documented',
          'Stakeholders briefed on the project',
        ],
      },
      {
        id: 'understand-3',
        title: 'Define Goals and Success Criteria',
        description:
          'Set a clear, measurable target for the project. What does "success" look like when this project is complete? A good goal is specific enough that you will know unambiguously when you have achieved it.',
        wikiLinks: [
          { label: 'How to Write SMART Goals', url: 'https://YOUR_WIKI/smart-goals' },
          { label: 'Project Charter Template', url: 'https://YOUR_WIKI/templates/project-charter' },
        ],
        checklistItems: [
          'Target outcome is specific and measurable',
          'Baseline (current state) performance is documented',
          'Target (desired state) performance is defined',
          'Timeline and key milestones are set',
          'Project sponsor or champion has approved the goal',
        ],
      },
    ],
  },

  // ── 2. MEASURE ────────────────────────────────────────────────────────────
  {
    id: 'measure',
    label: 'Measure',
    icon: '📏',
    color: '#FFF7ED',
    accent: '#EA580C',
    tagline: 'Collect reliable data to understand the current state',
    description:
      'Good decisions require good data. In this phase you identify what to measure, verify your data is reliable, and collect enough information to understand how the process is currently performing.',
    steps: [
      {
        id: 'measure-1',
        title: 'Map the Current Process',
        description:
          'Draw a flowchart or process map of how work actually flows today — not how it is supposed to flow. Walk through the process with the people who do it. Look for hand-offs, waiting, rework, and workarounds.',
        wikiLinks: [
          { label: 'Process Mapping How-To', url: 'https://YOUR_WIKI/process-mapping' },
          { label: 'Process Map Template', url: 'https://YOUR_WIKI/templates/process-map' },
        ],
        checklistItems: [
          'Process start and end points defined',
          'Every step in the process documented',
          'Hand-offs between people or teams identified',
          'Known pain points, delays, and rework loops noted',
          'Process map reviewed with process participants for accuracy',
        ],
      },
      {
        id: 'measure-2',
        title: 'Decide What to Measure',
        description:
          'Identify the key metrics that tell you whether the problem exists and how bad it is. Focus on output metrics (the result you care about) and any input or process metrics that drive them.',
        wikiLinks: [
          { label: 'Metrics Selection Guide', url: 'https://YOUR_WIKI/selecting-metrics' },
          { label: 'Data Collection Plan Template', url: 'https://YOUR_WIKI/templates/data-collection-plan' },
        ],
        checklistItems: [
          'Primary outcome metric (what you ultimately want to improve) defined',
          'Supporting metrics identified',
          'Clear operational definitions written for each metric',
          'Data sources identified for each metric',
          'Data collection plan documented',
        ],
      },
      {
        id: 'measure-3',
        title: 'Collect Baseline Data',
        description:
          'Gather enough data to characterize how the process is performing today. This becomes your baseline — the "before" picture you will compare your results against after improvement.',
        wikiLinks: [
          { label: 'Data Collection Best Practices', url: 'https://YOUR_WIKI/data-collection' },
          { label: 'How to Check Data Quality', url: 'https://YOUR_WIKI/data-quality' },
        ],
        checklistItems: [
          'Data collected per the data collection plan',
          'Data verified for accuracy and completeness',
          'Baseline metric value(s) calculated',
          'Data summarized visually (chart, table, or graph)',
          'Any obvious data anomalies investigated and explained',
        ],
      },
    ],
  },

  // ── 3. ANALYZE ───────────────────────────────────────────────────────────
  {
    id: 'analyze',
    label: 'Analyze',
    icon: '🧩',
    color: '#FDF4FF',
    accent: '#9333EA',
    tagline: 'Find the root causes — not just the symptoms',
    description:
      'Analysis is where you dig below the surface to find out WHY the problem is occurring. Resist the urge to jump straight to solutions. Validating root causes with data prevents wasted effort on fixes that don\'t stick.',
    steps: [
      {
        id: 'analyze-1',
        title: 'Identify Possible Root Causes',
        description:
          'Brainstorm all the potential reasons the problem is occurring. Use structured tools to organize your thinking. Involve the people who do the work — they often know the causes best.',
        wikiLinks: [
          { label: 'Root Cause Analysis Techniques', url: 'https://YOUR_WIKI/root-cause-analysis' },
          { label: '5 Whys Worksheet', url: 'https://YOUR_WIKI/templates/5-whys' },
          { label: 'Fishbone Diagram Template', url: 'https://YOUR_WIKI/templates/fishbone' },
        ],
        checklistItems: [
          'Team brainstorming session completed',
          'Potential causes organized (e.g., by category: People, Process, Tools, Environment)',
          'At least one structured analysis technique used (5 Whys, fishbone, etc.)',
          'All team members had opportunity to contribute',
        ],
      },
      {
        id: 'analyze-2',
        title: 'Prioritize the Most Likely Causes',
        description:
          'Not all potential causes are equally likely or impactful. Use data or team knowledge to narrow the list down to the vital few causes that explain most of the problem.',
        wikiLinks: [
          { label: 'Prioritization Methods', url: 'https://YOUR_WIKI/prioritization' },
          { label: 'Impact-Effort Matrix Template', url: 'https://YOUR_WIKI/templates/impact-effort-matrix' },
        ],
        checklistItems: [
          'Long list of causes reviewed and narrowed',
          'Top 2–4 likely root causes identified',
          'Prioritization rationale documented (data, team consensus, or both)',
        ],
      },
      {
        id: 'analyze-3',
        title: 'Validate Root Causes',
        description:
          'Confirm your top suspected root causes are real — not just assumptions. Use data, direct observation, or structured testing to verify the cause-and-effect relationship before moving to solutions.',
        wikiLinks: [
          { label: 'How to Validate Root Causes', url: 'https://YOUR_WIKI/validating-root-causes' },
          { label: 'Observation & Gemba Walk Guide', url: 'https://YOUR_WIKI/gemba-walk' },
        ],
        checklistItems: [
          'Each top root cause tested or verified with evidence',
          'Evidence is factual (data or direct observation) — not just opinion',
          'Cause-and-effect relationship is documented',
          'Final root cause summary written and shared with team',
        ],
      },
    ],
  },

  // ── 4. IMPROVE ───────────────────────────────────────────────────────────
  {
    id: 'improve',
    label: 'Improve',
    icon: '🚀',
    color: '#F0FDF4',
    accent: '#16A34A',
    tagline: 'Design, test, and implement the right solution',
    description:
      'Now that you know the true root causes, develop solutions that directly address them. Test before you commit to a full rollout — pilots reduce risk and surface unexpected problems early.',
    steps: [
      {
        id: 'improve-1',
        title: 'Generate Solution Options',
        description:
          'Brainstorm multiple ways to address the root causes. Avoid locking onto the first idea. Generate at least 2–3 options before evaluating, so you can choose the best one rather than just the most obvious one.',
        wikiLinks: [
          { label: 'Solution Brainstorming Facilitation', url: 'https://YOUR_WIKI/solution-brainstorming' },
          { label: 'Solution Selection Criteria Template', url: 'https://YOUR_WIKI/templates/solution-selection' },
        ],
        checklistItems: [
          'Multiple solution options generated (minimum 2–3)',
          'Each solution clearly linked back to a root cause',
          'Solutions evaluated on feasibility, cost, and expected impact',
          'Preferred solution selected with documented reasoning',
          'Sponsor or stakeholders aligned on chosen solution',
        ],
      },
      {
        id: 'improve-2',
        title: 'Pilot the Solution',
        description:
          'Test your solution on a small scale before full rollout. Define clear success criteria beforehand so you can objectively judge whether the pilot worked. Collect data during the pilot.',
        wikiLinks: [
          { label: 'How to Run a Pilot', url: 'https://YOUR_WIKI/running-a-pilot' },
          { label: 'Pilot Plan Template', url: 'https://YOUR_WIKI/templates/pilot-plan' },
        ],
        checklistItems: [
          'Pilot scope, location, and duration defined',
          'Success/fail criteria set in advance',
          'Pilot executed as planned',
          'Data collected during pilot',
          'Pilot results compared to success criteria',
          'Lessons learned captured',
        ],
      },
      {
        id: 'improve-3',
        title: 'Implement Full Solution',
        description:
          'Roll out the solution across the full scope. A clear implementation plan, timely communication, and proper training are what turn a successful pilot into a lasting organizational change.',
        wikiLinks: [
          { label: 'Implementation Planning Guide', url: 'https://YOUR_WIKI/implementation-planning' },
          { label: 'Change Communication Template', url: 'https://YOUR_WIKI/templates/change-communication' },
          { label: 'Training Plan Template', url: 'https://YOUR_WIKI/templates/training-plan' },
        ],
        checklistItems: [
          'Implementation plan created with tasks, owners, and deadlines',
          'Communication sent to all affected staff',
          'Training delivered to everyone who needs it',
          'Solution fully implemented on schedule',
          'Early results monitored and any issues addressed promptly',
        ],
      },
    ],
  },

  // ── 5. SUSTAIN ───────────────────────────────────────────────────────────
  {
    id: 'sustain',
    label: 'Sustain',
    icon: '🛡️',
    color: '#FFF1F2',
    accent: '#DC2626',
    tagline: 'Lock in the gains so improvements stick permanently',
    description:
      'Most improvement projects fail not because the solution was wrong, but because nothing was done to prevent regression. This phase puts systems in place to monitor performance and sustain results over time.',
    steps: [
      {
        id: 'sustain-1',
        title: 'Update Process Documentation',
        description:
          'Formalize the new way of working in your standard operating procedures, runbooks, or process documentation. If the new process isn\'t written down, people will drift back to the old way.',
        wikiLinks: [
          { label: 'SOP Writing Standards', url: 'https://YOUR_WIKI/sop-standards' },
          { label: 'SOP Template', url: 'https://YOUR_WIKI/templates/sop' },
          { label: 'Process Documentation Library', url: 'https://YOUR_WIKI/process-library' },
        ],
        checklistItems: [
          'New process documented in SOPs or runbooks',
          'Old documentation updated or archived',
          'Documentation reviewed and approved by process owner',
          'Documentation accessible to all relevant staff',
        ],
      },
      {
        id: 'sustain-2',
        title: 'Set Up Ongoing Monitoring',
        description:
          'Define how you will know if performance stays improved over time. Set up a simple dashboard, report, or regular check-in. Assign someone responsible for monitoring and taking action if results slip.',
        wikiLinks: [
          { label: 'Metrics Dashboard Setup Guide', url: 'https://YOUR_WIKI/dashboard-setup' },
          { label: 'Monitoring Plan Template', url: 'https://YOUR_WIKI/templates/monitoring-plan' },
        ],
        checklistItems: [
          'Key metric(s) defined for ongoing tracking',
          'Monitoring frequency set (daily, weekly, monthly)',
          'Dashboard or report created and operational',
          'Accountable owner assigned for ongoing monitoring',
          'Threshold defined: at what point will action be taken?',
          'Response plan documented for when metrics slip',
        ],
      },
      {
        id: 'sustain-3',
        title: 'Close Out and Celebrate',
        description:
          'Formally close the project. Quantify the results, document lessons learned, hand off ownership to the process owner, and recognize the team\'s work. Sharing results builds confidence and organizational learning.',
        wikiLinks: [
          { label: 'Project Closeout Checklist', url: 'https://YOUR_WIKI/project-closeout' },
          { label: 'Lessons Learned Template', url: 'https://YOUR_WIKI/templates/lessons-learned' },
          { label: 'Results Reporting Template', url: 'https://YOUR_WIKI/templates/results-report' },
        ],
        checklistItems: [
          'Final results measured and compared to baseline',
          'Business benefit quantified (time, cost, quality, or other)',
          'Lessons learned documented and shared',
          'Ownership formally handed off to process owner',
          'Results presented to sponsor/leadership',
          'Team recognized for contributions',
        ],
      },
    ],
  },
];
