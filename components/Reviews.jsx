"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-cards";
import { Star } from "lucide-react";
import HalfStar from "./ui/half-star";
import { Dot } from "./Dot";

export function Reviews() {
  return (
    <div className="relative mb-12 flex h-[45rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased xl:mb-24">
      <h1 className="section-title mb-16"><Dot />What Our Clients Say</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [  
  {
    quote:
      "Am colaborat cu Alexandru pentru crearea site-ului meu și pot spune că experiența a fost fantastică. Site-ul este animat și minimalist, ceea ce îmi pune în valoare lucrările de artă într-un mod foarte profesionist.",
    name: "Madiny",
    title: "https://madinytattoo.ro",
    star: <Star strokeWidth={0.8} fill="#FFDF00" />,
  },
  {
    quote:
      "Am comunicat foarte eficient pe parcursul întregului proces, iar acest lucru s-a reflectat în calitatea finală a site-ului. Nu am întâmpinat probleme tehnice, ceea ce este esențial pentru o prezență online fără griji. Mulțumesc pentru dedicare și profesionalism!",
    name: "Mihai",
    title: "https://tngag.ro",
    star: <Star strokeWidth={0.8} fill="#FFDF00" />,
  },
  {
    quote:
      "Colaborarea cu Alexandru pentru crearea site-ului Montebianco.ro a fost o alegere excelentă, deoarece toate cerințele noastre au fost întâmpinate cu soluții creative și eficiente. Recomand cu căldură serviciile sale tuturor celor care își doresc un site funcțional și atractiv.",
    name: "Monte Bianco",
    title: "https://montebianco.ro",
    star: <HalfStar />,
  },
  {
    quote:
      "Site-ul creat pentru serviciile mele de personal training este exact ceea ce îmi doream. Design-ul este dinamic și inspirațional, exact ca antrenamentele pe care le ofer. Trecerea de la o secțiune la alta este fluidă, iar utilizatorii pot găsi ușor informațiile de care au nevoie. Mulțumesc pentru efortul de a înțelege și de a transpune în realitate viziunea mea!",
    name: "Mihaela",
    title: "https://mbody.vercel.app",
    star: <Star strokeWidth={0.8} fill="#FFDF00" />,
  },
  {
    quote:
      "Ca designer grafic, am nevoie de un site care să-mi pună în valoare lucrările, și exact asta ai realizat. Designul este curat și modern, iar portofoliul meu arată fantastic pe orice dispozitiv. ",
    name: "Diana",
    title: "https://dianazu.vercel.app",
    star: <HalfStar />,
  },
];
