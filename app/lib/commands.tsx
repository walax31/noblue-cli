import { ReactNode } from "react";

type CommandFn = (args: string[]) => ReactNode;

const line = (text: string) => <div className="text-gray-400">{text}</div>;

const title = (text: string) => (
  <div className="text-gray-200 font-medium mt-2">{text}</div>
);

const section = (text: string) => (
  <div className="text-blue-400 mt-3">{text}</div>
);

const highlight = (text: string) => (
  <span className="text-yellow-300">{text}</span>
);

export const commands: Record<string, CommandFn> = {
  help: () => (
    <div>
      {section("available commands")}

      <div className="grid grid-cols-2 gap-x-10 mt-2 text-gray-400">
        <div>about</div>
        <div>experience</div>
        <div>skills</div>
        <div>projects</div>
        <div>contact</div>
        <div>whoami</div>
        <div>availability</div>
        <div>location</div>
        <div>joke</div>
        <div>hire</div>
        <div>clear</div>
      </div>
    </div>
  ),

  whoami: () => (
    <div>
      {section("whoami")}
      {line("noblue (waralak)")}
      {line("frontend engineer")}
      {line("building scalable and data-driven web applications")}
    </div>
  ),

  about: () => (
    <div>
      {section("about")}

      {line("frontend engineer focused on")}
      {line("clean architecture and scalable UI")}
      {line("smooth and high-quality user experiences")}

      <br />

      {line("currently at SS&C Hubwise")}
      {line("building financial platforms")}
      {line("for advisers and investors")}

      <br />

      {line("experienced in")}
      {line("complex workflows and data-heavy interfaces")}
    </div>
  ),

  experience: () => (
    <div>
      {section("experience")}

      {line("financial products across fintech, banking, and crypto")}

      <br />

      {title("[ SS&C Hubwise ]")}
      {line("frontend engineer")}

      <div className="ml-2">
        {highlight("financial platforms")}
        <span className="text-gray-400"> for advisers and investors</span>
      </div>

      <div className="ml-2">{highlight("data-heavy UI")}</div>

      <div className="ml-2">{highlight("complex workflows")}</div>

      <div className="ml-2 text-gray-500">
        improved usability and performance across key journeys
      </div>

      <br />

      {title("[ Kiatnakin Phatra ]")}
      {line("banking systems")}

      <div className="ml-2">
        {highlight("internal tools")}
        <span className="text-gray-400"> for financial operations</span>
      </div>

      <div className="ml-2">{highlight("usability and reliability")}</div>

      <div className="ml-2 text-gray-500">
        supported critical business workflows
      </div>

      <br />

      {title("[ Bitkub ]")}
      {line("crypto exchange platform")}

      <div className="ml-2">{highlight("scalable UI system")}</div>

      <div className="ml-2">
        {highlight("shared component library")}
        <span className="text-gray-400"> (Tailwind / MUI / Storybook)</span>
      </div>

      <div className="ml-2">
        {highlight("authentication system")}
        <span className="text-gray-400">
          {" "}
          KYC / OTP / login / register / OAuth 2.0
        </span>
      </div>

      <div className="ml-2">{highlight("real-time data integration")}</div>

      <div className="ml-2 text-gray-500">
        market page (feature / bug fix / UI improvements)
      </div>
    </div>
  ),

  skills: () => (
    <div>
      {section("skills")}

      {title("frontend")}
      {line("React / Next.js / TypeScript")}

      {title("architecture")}
      {line("scalable UI / component systems")}

      {title("state")}
      {line("Redux / Zustand")}

      {title("styling")}
      {line("Tailwind / CSS")}

      {title("backend integration")}
      {line("REST API / GraphQL")}

      {title("data")}
      {line("PostgreSQL")}

      {title("tools")}
      {line("Git / Docker / Storybook")}
    </div>
  ),

  projects: () => (
    <div>
      {section("projects")}

      {title("Terminal Portfolio")}
      {line("interactive CLI-style portfolio")}
      {line("built with Next.js and Tailwind")}

      <br />

      {title("E-commerce Platform")}
      {line("full product browsing and shopping flow")}
      {line("state management with Zustand")}
      {line("cart, favorites, and UI interactions")}

      <br />

      {title("Financial Platforms")}
      {line("adviser and investor workflows")}
      {line("complex and data-heavy interfaces")}

      <br />

      {title("Authentication Systems")}
      {line("secure flows")}
      {line("KYC / OTP / OAuth 2.0")}

      <br />

      {title("Real-time Data")}
      {line("WebSocket integration")}
      {line("live data handling")}
    </div>
  ),

  contact: () => (
    <div>
      {section("contact")}

      {title("email")}
      <div className="text-yellow-300">waralak.khamnoi@gmail.com</div>

      {title("github")}
      <div className="text-yellow-300">github.com/walax31</div>

      {title("linkedin")}
      <div className="text-yellow-300">linkedin.com/in/waralak-khamnoi</div>
    </div>
  ),

  availability: () => (
    <div>
      {section("availability")}
      {line("freelance")}
      {line("full-time")}
    </div>
  ),

  location: () => (
    <div>
      {section("location")}
      {line("Bangkok, Thailand")}
      {line("remote friendly")}
    </div>
  ),

  joke: () => (
    <div>
      {section("joke")}
      {line("why do developers prefer dark mode?")}
      <br />
      {line("because light attracts bugs 🐛")}
    </div>
  ),

  hire: () => (
    <div>
      {section("hire")}
      {line("let's build something impactful 🚀")}
      {line("open for frontend roles and opportunities")}

      <br />

      <div className="text-yellow-300">waralak.khamnoi@gmail.com</div>
    </div>
  ),
  github: () => (
    <div>
      {section("github")}

      <a
        href="https://github.com/walax31/noblue-cli"
        target="_blank"
        className="text-yellow-300 underline"
      >
        github.com/walax31/noblue-cli
      </a>

      <div className="text-gray-500 mt-1">open source project</div>
    </div>
  ),
};
