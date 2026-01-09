import { Scale, AlertTriangle, User, Home, MessageCircle, FileText } from "lucide-react"

export const legalTopics = [
  {
    id: 1,
    title: "Constitutional Rights",
    icon: Scale,
    content: [
      {
        title: "Overview",
        description:
          "Constitutional rights are fundamental rights guaranteed by the Indian Constitution to all citizens. These rights ensure equality, freedom, and justice.",
        points: [],
      },
      {
        title: "Key Rights",
        description: "The main constitutional rights include:",
        points: [
          "Right to Equality: Prohibits discrimination based on religion, race, caste, sex, or place of birth.",
          "Right to Freedom: Includes freedom of speech, assembly, and movement.",
          "Right against Exploitation: Prohibits forced labor and child labor.",
          "Right to Freedom of Religion: Ensures freedom to practice, profess, and propagate any religion.",
          "Cultural and Educational Rights: Protects the rights of minorities to conserve their culture and establish educational institutions.",
          "Right to Constitutional Remedies: Allows citizens to move the court for enforcement of their fundamental rights.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Criminal Law",
    icon: AlertTriangle,
    content: [
      {
        title: "Overview",
        description:
          "Criminal law deals with offenses against the state or public, such as theft, assault, and murder. It defines crimes and prescribes punishments.",
        points: [],
      },
      {
        title: "Key Acts",
        description: "The main acts in criminal law include:",
        points: [
          "Indian Penal Code (IPC): Defines various crimes and their punishments.",
          "Code of Criminal Procedure (CrPC): Outlines the procedure for investigation, trial, and punishment.",
          "Indian Evidence Act: Governs the admissibility of evidence in court.",
        ],
      },
      {
        title: "Common Offenses",
        description: "Some common criminal offenses include:",
        points: [
          "Theft: Unlawfully taking someone else's property.",
          "Assault: Causing physical harm or threatening to cause harm.",
          "Murder: Unlawfully killing another person with intent.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Civil Rights",
    icon: User,
    content: [
      {
        title: "Overview",
        description:
          "Civil rights pertain to the rights of individuals to receive equal treatment and protection under the law.",
        points: [],
      },
      {
        title: "Key Areas",
        description: "Important civil rights include:",
        points: [
          "Right to Privacy: Protection against unauthorized intrusion into personal life.",
          "Right to Freedom of Speech: Allows individuals to express their opinions without censorship.",
          "Right to Education: Ensures free and compulsory education for children aged 6 to 14.",
          "Right to Information (RTI): Enables citizens to seek information from public authorities.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Property Law",
    icon: Home,
    content: [
      {
        title: "Overview",
        description: "Property law governs the ownership, transfer, and use of property, including land and buildings.",
        points: [],
      },
      {
        title: "Key Acts",
        description: "Important acts in property law include:",
        points: [
          "Transfer of Property Act: Regulates the transfer of property between parties.",
          "Registration Act: Mandates the registration of certain documents related to property.",
          "Land Acquisition Act: Governs the acquisition of land by the government for public purposes.",
        ],
      },
      {
        title: "Common Issues",
        description: "Frequent property law issues include:",
        points: [
          "Property Disputes: Conflicts over ownership or boundaries.",
          "Lease Agreements: Legal agreements for renting property.",
          "Inheritance: Transfer of property after the owner's death.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Family Law",
    icon: MessageCircle,
    content: [
      {
        title: "Overview",
        description:
          "Family law deals with legal issues related to family relationships, such as marriage, divorce, and child custody.",
        points: [],
      },
      {
        title: "Key Acts",
        description: "Important acts in family law include:",
        points: [
          "Hindu Marriage Act: Governs marriage and divorce among Hindus.",
          "Special Marriage Act: Provides a legal framework for inter-religious marriages.",
          "Guardians and Wards Act: Deals with the appointment of guardians for minors.",
        ],
      },
      {
        title: "Common Issues",
        description: "Frequent family law issues include:",
        points: [
          "Divorce: Legal dissolution of marriage.",
          "Child Custody: Determining the care and control of children after divorce.",
          "Maintenance: Financial support provided by one spouse to another.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Employment Law",
    icon: FileText,
    content: [
      {
        title: "Overview",
        description:
          "Employment law regulates the relationship between employers and employees, ensuring fair treatment and working conditions.",
        points: [],
      },
      {
        title: "Key Acts",
        description: "Important acts in employment law include:",
        points: [
          "Factories Act: Ensures safety and welfare of workers in factories.",
          "Minimum Wages Act: Guarantees minimum wages for workers.",
          "Employees' Provident Fund Act: Provides for the provident fund for employees.",
        ],
      },
      {
        title: "Common Issues",
        description: "Frequent employment law issues include:",
        points: [
          "Unfair Dismissal: Termination of employment without valid reason.",
          "Workplace Harassment: Protection against harassment at the workplace.",
          "Overtime Pay: Compensation for working beyond standard hours.",
        ],
      },
    ],
  },
]

