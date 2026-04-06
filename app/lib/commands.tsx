import { ReactNode } from "react";

type CommandFn = (args: string[]) => ReactNode;

const line = (text: string) => (
  <div className="text-gray-400">{text}</div>
);

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
      {line("frontend developer")}
    </div>
  ),

  about: () => (
    <div>
      {section("about")}

      {line("frontend developer")}
      {line("clean UI")}
      {line("smooth user experience")}

      <br />

      {line("SS&C Hubwise")}
      {line("financial platforms")}
      {line("adviser & investor systems")}
    </div>
  ),

  experience: () => (
    <div>
      {section("experience")}

      {line("financial products across fintech, banking, crypto")}

      <br />

      {title("[ SS&C Hubwise ]")}
      {line("frontend developer")}
      {line("financial platforms")}
      {line("adviser & investor workflows")}
      {line("data-heavy UI")}
      {line("complex user flows")}

      <br />

      {title("[ Kiatnakin Phatra ]")}
      {line("banking systems")}
      {line("internal tools")}
      {line("financial operations")}
      {line("usability")}
      {line("system reliability")}

      <br />

      {title("[ Bitkub ]")}
      {line("crypto exchange platform")}

      <div className="ml-2">
        {line("scalable UI system")}
      </div>

      <div className="ml-2">
        {line("authentication")}
        <span className="text-gray-400"> KYC / OTP / OAuth 2.0</span>
      </div>

      <div className="ml-2">
        {line("real-time data")}
        <span className="text-gray-400"> integration</span>
      </div>

      <div className="ml-2 text-gray-500">
        market page (feature / bug fix / UI)
      </div>
    </div>
  ),

  skills: () => (
    <div>
      {section("skills")}

      {title("frontend")}
      {line("React / Next.js / TypeScript")}

      {title("state")}
      {line("Redux / Zustand")}

      {title("styling")}
      {line("Tailwind / CSS")}

      {title("backend")}
      {line("Node.js / Express")}

      {title("data")}
      {line("GraphQL / PostgreSQL")}

      {title("tools")}
      {line("Git / Docker / Analytics")}
    </div>
  ),

  projects: () => (
    <div>
      {section("projects")}

      {title("Terminal Portfolio")}
      {line("CLI-style portfolio")}
      {line("Next.js + Tailwind")}

      <br />

      {title("Financial Platforms")}
      {line("adviser & investor workflows")}
      {line("data-heavy UI")}

      <br />

      {title("Authentication Systems")}
      {line("OAuth / KYC / OTP / 2FA")}

      <br />

      {title("Real-time Data")}
      {line("WebSocket integration")}
    </div>
  ),

  contact: () => (
    <div>
      {section("contact")}

      {title("email")}
      <div className="text-yellow-300">
        waralak.khamnoi@gmail.com
      </div>

      {title("github")}
      <div className="text-yellow-300">
        github.com/walax31
      </div>

      {title("linkedin")}
      <div className="text-yellow-300">
        linkedin.com/in/waralak-khamnoi
      </div>
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
      {line("let's build something awesome 🚀")}
      <br />
      <div className="text-yellow-300">
        waralak.khamnoi@gmail.com
      </div>
    </div>
  ),
};