import React from "react";

interface Skill {
  title: string;
  iconUrl: string;
  level: string;
}

export default function SkillComponent() {
  const data: Skill[] = [
    {
      title: "Java",
      iconUrl: "/icons/java.svg",
      level: "Advanced",
    },
    {
      title: "C#",
      iconUrl: "/icons/csharp.svg",
      level: "Advanced",
    },
    {
      title: "Javascript",
      iconUrl: "/icons/javascript.svg",
      level: "Advanced",
    },
    {
      title: "Golang",
      iconUrl: "/icons/go.svg",
      level: "Intermediate",
    },
    {
      title: "PHP",
      iconUrl: "/icons/php.svg",
      level: "Intermediate",
    },
    {
      title: "Spring Boot",
      iconUrl: "/icons/springboot.svg",
      level: "Advanced",
    },
    {
      title: ".NET",
      iconUrl: "/icons/dotnet.svg",
      level: "Intermediate",
    },
    {
      title: "Laravel",
      iconUrl: "/icons/laravel.svg",
      level: "Intermediate",
    },
    {
      title: "React",
      iconUrl: "/icons/react.svg",
      level: "Advanced",
    },
    {
      title: "React Native",
      iconUrl: "/icons/react-native.svg",
      level: "Intermediate",
    },
    {
      title: "Vue",
      iconUrl: "/icons/vue.svg",
      level: "Intermediate",
    },
    {
      title: "Nuxt",
      iconUrl: "/icons/nuxt.svg",
      level: "Intermediate",
    },
    {
      title: "MySQL",
      iconUrl: "/icons/mysql.svg",
      level: "Advanced",
    },
    {
      title: "PostgresSQL",
      iconUrl: "/icons/postgresql.svg",
      level: "Advanced",
    },
    {
      title: "SQL Server",
      iconUrl: "/icons/sql-server.svg",
      level: "Advanced",
    },
    {
      title: "HTML",
      iconUrl: "/icons/html.svg",
      level: "Advanced",
    },
    {
      title: "CSS",
      iconUrl: "/icons/css.svg",
      level: "Advanced",
    },
    {
      title: "Bootstrap",
      iconUrl: "/icons/bootstrap.svg",
      level: "Advanced",
    },
    {
      title: "Tailwind CSS",
      iconUrl: "/icons/tailwindcss.svg",
      level: "Advanced",
    },
  ];

  return (
    <div className="mb-16 w-[calc(100%-4rem)]">
      <h2 className="mb-4 text-3xl font-bold">Skills</h2>

      <div className="grid grid-cols-4 gap-4">
        {data.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
          >
            <img src={skill.iconUrl} alt={skill.title} className="h-12 w-12" />
            <div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-slate-400">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
