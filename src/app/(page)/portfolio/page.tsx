"use client";
import React, { useState } from "react";

interface Portfolio {
  tittle: string;
  technologies: string[];
  linkWeb?: string;
  imgUrl: string;
  descriptions: string[];
  linkGithub?: string;
  category: string;
}

export default function PortfolioPage() {
  const [isActive, setIsActive] = useState("All");

  const filterCategory = (category: string) => {
    setIsActive(category);
  };

  const portfolios: Portfolio[] = [
    {
      tittle: "BorrowEase Rest API",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Midtrans"],
      imgUrl: "/images/java-api.jpg",
      descriptions: [
        "Developed a RESTful API for loan management, which includes user authentication, loan application, approval, and payment.",
        "Integrated with Midtrans for various payment methods and automatic transaction status updates.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/borrowease-api",
      category: "Backend",
    },
    {
      tittle: "PetAdoption Rest API",
      technologies: ["C#", "ASP.NET Core", "SQL Server"],
      imgUrl: "/images/dotnet.png",
      descriptions: [
        "Developed an API for an online pet adoption store, with several features such as account management, customer handling, store and product management, order processing, and reviews.",
        "Utilized Entity Framework Core for efficient database operations and data management.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/Pet-Adoption-Web-Api-dotnet",
      category: "Backend",
    },
    {
      tittle: "HanaBass Booking Hotel App",
      technologies: ["Nuxt", "Vue", "Tailwind"],
      linkWeb: "https://hana-bass-booking-app.nuxt.dev/",
      imgUrl: "/images/nuxt-booking-app.jpg",
      descriptions: [
        "HanaBass Application is a sample website application for booking hotel rooms.",
        "This application is built using Nuxt 3, and HanaBass Hotel is the sample hotel name used in this application.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/Nuxt-Booking-App",
      category: "Frontend",
    },
    {
      tittle: "Online Shop API",
      technologies: ["Go", "Gocron Scheduler", "Http Router", "JWT", "MySQL"],
      imgUrl: "/images/go-api.jpg",
      descriptions: [
        "This is a RESTful API for an online shop, built with Go.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/online-shop-api",
      category: "Backend",
    },
    {
      tittle: ".Net Employee API",
      technologies: [
        "C#",
        ".Net 6.0",
        "EF Core",
        "SQL Server",
        "Swagger",
        "Bogus",
      ],
      imgUrl: "/images/dotnet.png",
      descriptions: [
        "This project is a simple Employee Management API built with C# and .NET 6.0.",
        "It uses Entity Framework Core as an Object-Relational Mapper (ORM) and SQL Server as the database.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/.Net-Employee-Web-Api",
      category: "Backend",
    },
    {
      tittle: "Laternak API",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Swagger Open API",
        "Midtrans",
      ],
      imgUrl: "/images/java-api.jpg",
      descriptions: [
        "LaTernak is a RESTful API built using Java and Spring Boot.",
        "The project provides a complete backend solution for an online livestock trading platform.",
        "It provides functionality for user authentication, product management, order processing, and payment processing.",
        "The API is secured using JWT tokens and provides different access levels for different types of users (Admin, Customers, and Sellers).",
      ],
      linkGithub: "https://github.com/shodiqbasiru/La-Ternak-API",
      category: "Backend",
    },
    {
      tittle: "Warung Makan Bahari API",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Swagger Open API",
      ],
      imgUrl: "/images/java-api.jpg",
      descriptions: [
        "This API project was created for the Final Project of a Backend Developer from Bootcamp.",
        "The program was developed using Spring Boot.",
        "This API offers CRUD functions and utilizes JWT for authentication.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/Warung-Makan-Bahari-Api",
      category: "Backend",
    },
    {
      tittle: "Point of Sale (POS) cashier application website",
      technologies: ["Laravel", "Vue", "JavaScript", "Bootstrap"],
      imgUrl: "/images/project-5.jpeg",
      descriptions: [
        "Creating a Point of Sale (POS) cashier application using Laravel 9 and Vue.js 3.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/kasir-app",
      category: "Fullstack",
    },
    {
      tittle: "Website The Blues Claws Band",
      technologies: ["Laravel", "JavaScript", "Bootstrap"],
      linkWeb: "https://thebluesclaws.com/",
      imgUrl: "/images/project-4.jpeg",
      descriptions: [
        "Building and designing a multipage website for a band called Blues Claws in Bandung using Laravel 9 and Livewire.",
      ],
      category: "Fullstack",
    },
    {
      tittle: "Landing Page PT Qwords Indonesia",
      technologies: ["Laravel", "Bootstrap", "JavaScript"],
      imgUrl: "/images/project-1.jpeg",
      descriptions: [
        "Created and redesigned websites using the Laravel 8 framework.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/Qwords-Landing-Page",
      category: "Frontend",
    },
    {
      tittle: "Web Portofolio Jannalytics",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      linkWeb: "https://basiruafni.github.io/Jannalytics-Portfolio/",
      imgUrl: "/images/project-2.jpeg",
      descriptions: [
        "I have created a portfolio website using JavaScript, jQuery, Bootstrap, AOS, and FormSubmit.co.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/portofolio-jannalytics",
      category: "Frontend",
    },
    {
      tittle: "Mall Pelayanan Publik KBB",
      technologies: ["Laravel", "HTML", "CSS", "Bootstrap"],
      imgUrl: "/images/project-3.jpeg",
      descriptions: [
        "Create a website interface and implement login and registration features using the Laravel 8 framework.",
      ],
      linkGithub: "https://github.com/shodiqbasiru/MPP-KBB",
      category: "Frontend",
    },
  ];

  const categories:string[] = ["All", "Frontend", "Backend", "Mobile", "Fullstack"]

  return (
    <div className="w-[calc(100%-4rem)]">
      <div className="ms-8 flex w-fit rounded-t-lg bg-slate-800 text-sm font-semibold uppercase tracking-widest shadow-md">
        {categories.map(
          (category) => (
            <span
              key={category}
              onClick={() => filterCategory(category)}
              className={`cursor-pointer rounded p-4 hover:text-amber-500 ${isActive === category ? "bg-amber-500" : ""}`}
            >
              {category}
            </span>
          ),
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-xl bg-slate-800 p-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolios.filter(
          (portfolio) => isActive === "All" || portfolio.category === isActive,
        ).map((portfolio, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg bg-slate-700"
          >
            <img
              src={portfolio.imgUrl}
              alt={portfolio.tittle}
              className="h-48 w-full object-cover"
            />
            <div className="flex-1 p-4">
              <h3 className="text-xl font-bold">{portfolio.tittle}</h3>
              <div className="flex flex-wrap">
            {portfolio.technologies.map((technology, index) => (
              <span
                key={index}
                className="mr-2 rounded bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-400"
              >
                {technology}
              </span>
            ))}
              </div>
              <p className="mt-2 text-slate-400">{portfolio.descriptions[0]}</p>
            </div>
            <div className="flex justify-between p-4 font-semibold text-slate-800">
              {portfolio.linkWeb && (
            <a
              href={portfolio.linkWeb}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-amber-500 px-4 py-2"
            >
              View Website
            </a>
              )}
              {portfolio.linkGithub && (
            <a
              href={portfolio.linkGithub}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-amber-500 px-4 py-2"
            >
              View Code
            </a>
              )}
            </div>
          </div>
        ))}
        {portfolios.filter(
          (portfolio) => isActive === "All" || portfolio.category === isActive,
        ).length === 0 && (
          <div className="text-center text-slate-400 col-span-3">
            No projects available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
