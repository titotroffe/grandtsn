"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, X } from "lucide-react"

// Jugadores reales de la Liga Nicoleña de Fútbol basados en los datos proporcionados
const mockPlayers = [
  // Argentino Oeste
  {
    id: 1,
    name: "Jonas Rosales",
    team: "Argentino Oeste",
    position: "POR",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Ezequiel Roldan",
    team: "Argentino Oeste",
    position: "DEF",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Nicolas Aquino",
    team: "Argentino Oeste",
    position: "DEF",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Matias Acosta",
    team: "Argentino Oeste",
    position: "MED",
    value: 9000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Julian Rivero",
    team: "Argentino Oeste",
    position: "DEF",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Benjamin Farias",
    team: "Argentino Oeste",
    position: "DEF",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    name: "Dario Oviedo",
    team: "Argentino Oeste",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    name: "Luis Mota",
    team: "Argentino Oeste",
    position: "MED",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    name: "Daniel Mendoza",
    team: "Argentino Oeste",
    position: "DEL",
    value: 12000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    name: "Facundo Luque",
    team: "Argentino Oeste",
    position: "DEL",
    value: 13500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 11,
    name: "Alan Franco",
    team: "Argentino Oeste",
    position: "DEF",
    value: 7600000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 12,
    name: "Ariel Alegre",
    team: "Argentino Oeste",
    position: "DEL",
    value: 11000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Social
  {
    id: 13,
    name: "Danilo Malet",
    team: "Social",
    position: "POR",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 14,
    name: "Juan Romero",
    team: "Social",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 15,
    name: "Ivan Rodriguez",
    team: "Social",
    position: "DEF",
    value: 6200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 16,
    name: "Elias Martinez",
    team: "Social",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 17,
    name: "Benjamin Marini",
    team: "Social",
    position: "MED",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 18,
    name: "Rodrigo Olivero",
    team: "Social",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 19,
    name: "Lautaro Roldan",
    team: "Social",
    position: "MED",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 20,
    name: "Guido Reynoso",
    team: "Social",
    position: "DEL",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Matienzo
  {
    id: 21,
    name: "Leopoldo Gomez",
    team: "Matienzo",
    position: "POR",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 22,
    name: "Gaston Diaz",
    team: "Matienzo",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 23,
    name: "Joan Yacuzzi",
    team: "Matienzo",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 24,
    name: "Juan Brucelaria",
    team: "Matienzo",
    position: "MED",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 25,
    name: "Avelino Gomez",
    team: "Matienzo",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 26,
    name: "Gian Gonzalez",
    team: "Matienzo",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 27,
    name: "Alan Demetrio",
    team: "Matienzo",
    position: "DEL",
    value: 9000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 28,
    name: "Facundo Roma",
    team: "Matienzo",
    position: "DEL",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Regatas
  {
    id: 29,
    name: "Nicolas Dorsmich",
    team: "Regatas",
    position: "POR",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 30,
    name: "Andres Ferrari",
    team: "Regatas",
    position: "DEF",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 31,
    name: "Agustin Malin",
    team: "Regatas",
    position: "DEF",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 32,
    name: "Mauro Ressi",
    team: "Regatas",
    position: "MED",
    value: 9200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 33,
    name: "Agustin Mazzeo",
    team: "Regatas",
    position: "MED",
    value: 8800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 34,
    name: "Walter Serrano",
    team: "Regatas",
    position: "MED",
    value: 9000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 35,
    name: "Jonatan Rodriguez",
    team: "Regatas",
    position: "DEL",
    value: 11500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 36,
    name: "Eduardo Pucheta",
    team: "Regatas",
    position: "DEL",
    value: 12000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Somisa
  {
    id: 37,
    name: "Thaiel Ponte",
    team: "Somisa",
    position: "POR",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 38,
    name: "Mateo Pucheta",
    team: "Somisa",
    position: "DEF",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 39,
    name: "Alejandro Slavin",
    team: "Somisa",
    position: "DEF",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 40,
    name: "Agustin Fuma",
    team: "Somisa",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 41,
    name: "Juan Cruz Levato",
    team: "Somisa",
    position: "MED",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 42,
    name: "Lautaro Reyes",
    team: "Somisa",
    position: "DEL",
    value: 11000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 43,
    name: "Cristian Frontini",
    team: "Somisa",
    position: "DEL",
    value: 12500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 44,
    name: "Nicanor Sawicz",
    team: "Somisa",
    position: "DEL",
    value: 13000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Los Andes
  {
    id: 45,
    name: "Lorenzo Bordi",
    team: "Los Andes",
    position: "POR",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 46,
    name: "Gustavo Amarillo",
    team: "Los Andes",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 47,
    name: "Carlos Rivas",
    team: "Los Andes",
    position: "DEF",
    value: 6200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 48,
    name: "Alfonso Corpus",
    team: "Los Andes",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 49,
    name: "Alexander Rosa",
    team: "Los Andes",
    position: "MED",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 50,
    name: "Agustin Dentone",
    team: "Los Andes",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 51,
    name: "Marcos Solis",
    team: "Los Andes",
    position: "DEL",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 52,
    name: "Nahuel Ponce de Leon",
    team: "Los Andes",
    position: "DEL",
    value: 10000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Defensores de Belgrano
  {
    id: 53,
    name: "Juan Santia",
    team: "Defensores de Belgrano",
    position: "POR",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 54,
    name: "Sebastian Martinez",
    team: "Defensores de Belgrano",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 55,
    name: "Luca Moreschini",
    team: "Defensores de Belgrano",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 56,
    name: "Uriel Cabrera",
    team: "Defensores de Belgrano",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 57,
    name: "Mateo Ramos",
    team: "Defensores de Belgrano",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 58,
    name: "Tomas Gonzalez",
    team: "Defensores de Belgrano",
    position: "MED",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 59,
    name: "Gaspar Pahuasi",
    team: "Defensores de Belgrano",
    position: "DEL",
    value: 10500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 60,
    name: "Julian Rodriguez",
    team: "Defensores de Belgrano",
    position: "DEL",
    value: 9800000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // La Emilia
  {
    id: 61,
    name: "Alejo Roldan",
    team: "La Emilia",
    position: "POR",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 62,
    name: "Kerly Merello",
    team: "La Emilia",
    position: "DEF",
    value: 6200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 63,
    name: "Diego Brizuela",
    team: "La Emilia",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 64,
    name: "Lorenzo Cuello",
    team: "La Emilia",
    position: "MED",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 65,
    name: "Agustin Chavez",
    team: "La Emilia",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 66,
    name: "Fernando Godoy",
    team: "La Emilia",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 67,
    name: "Lautaro Chavez",
    team: "La Emilia",
    position: "DEL",
    value: 9200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 68,
    name: "Santiago Britos",
    team: "La Emilia",
    position: "DEL",
    value: 9800000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Belgrano
  {
    id: 69,
    name: "Luca Toledo",
    team: "Belgrano",
    position: "POR",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 70,
    name: "Matias Alfeiran",
    team: "Belgrano",
    position: "DEF",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 71,
    name: "Leonardo Luna",
    team: "Belgrano",
    position: "DEF",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 72,
    name: "Bruno Lopez",
    team: "Belgrano",
    position: "MED",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 73,
    name: "Roque Contigiani",
    team: "Belgrano",
    position: "MED",
    value: 9200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 74,
    name: "Enzo Garayalde",
    team: "Belgrano",
    position: "MED",
    value: 9800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 75,
    name: "Franco Monestes",
    team: "Belgrano",
    position: "DEL",
    value: 12000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 76,
    name: "Marcelo Ocanto",
    team: "Belgrano",
    position: "DEL",
    value: 13500000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // El Fortín
  {
    id: 77,
    name: "Maximiliano Mathieu",
    team: "El Fortín",
    position: "POR",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 78,
    name: "Ciro Tambutto",
    team: "El Fortín",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 79,
    name: "Enzo Caceres",
    team: "El Fortín",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 80,
    name: "Gonzalo Barbacia",
    team: "El Fortín",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 81,
    name: "Jonathan Tarragona",
    team: "El Fortín",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 82,
    name: "Angel Acosta",
    team: "El Fortín",
    position: "MED",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 83,
    name: "Gonzalo Barrera",
    team: "El Fortín",
    position: "DEL",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 84,
    name: "Thiago Aquino",
    team: "El Fortín",
    position: "DEL",
    value: 10000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Fútbol San Nicolás
  {
    id: 85,
    name: "Daniel Artiolo",
    team: "Fútbol San Nicolás",
    position: "POR",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 86,
    name: "Nicolas Luna",
    team: "Fútbol San Nicolás",
    position: "DEF",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 87,
    name: "Kevin Nicastro",
    team: "Fútbol San Nicolás",
    position: "DEF",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 88,
    name: "Matias Acevedo",
    team: "Fútbol San Nicolás",
    position: "MED",
    value: 8800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 89,
    name: "Ezequiel Gomez",
    team: "Fútbol San Nicolás",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 90,
    name: "Fernando Gutierrez",
    team: "Fútbol San Nicolás",
    position: "MED",
    value: 9000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 91,
    name: "Enzo Veron",
    team: "Fútbol San Nicolás",
    position: "DEL",
    value: 11500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 92,
    name: "Nahuel Maidana",
    team: "Fútbol San Nicolás",
    position: "DEL",
    value: 12000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Conesa
  {
    id: 93,
    name: "Pablo Castelli",
    team: "Conesa",
    position: "POR",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 94,
    name: "Alejandro Concha Martinez",
    team: "Conesa",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 95,
    name: "Joaquin Gamarra",
    team: "Conesa",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 96,
    name: "Bautista Cabral",
    team: "Conesa",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 97,
    name: "Abraham Osorio",
    team: "Conesa",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 98,
    name: "Gino Conti",
    team: "Conesa",
    position: "MED",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 99,
    name: "Gonzalo Crespo",
    team: "Conesa",
    position: "DEL",
    value: 9800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 100,
    name: "Joaquin Leide",
    team: "Conesa",
    position: "DEL",
    value: 10200000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // General Rojo
  {
    id: 101,
    name: "Camilo Maldonado",
    team: "General Rojo",
    position: "POR",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 102,
    name: "Ricardo Sabedra",
    team: "General Rojo",
    position: "DEF",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 103,
    name: "Mirko Lenahrdt",
    team: "General Rojo",
    position: "DEF",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 104,
    name: "Lionel Decima",
    team: "General Rojo",
    position: "MED",
    value: 8800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 105,
    name: "Luciano Bersano",
    team: "General Rojo",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 106,
    name: "Nestor Tilli",
    team: "General Rojo",
    position: "MED",
    value: 9000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 107,
    name: "Imanol Gomez",
    team: "General Rojo",
    position: "DEL",
    value: 12000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 108,
    name: "Fabricio Villar",
    team: "General Rojo",
    position: "DEL",
    value: 11500000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // General San Martín
  {
    id: 109,
    name: "Tomas Mastroiani",
    team: "General San Martín",
    position: "POR",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 110,
    name: "Robertino Stocafiso",
    team: "General San Martín",
    position: "DEF",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 111,
    name: "Hernan Ansaloni",
    team: "General San Martín",
    position: "DEF",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 112,
    name: "Milton Bengochea",
    team: "General San Martín",
    position: "MED",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 113,
    name: "Rodrigo Perez",
    team: "General San Martín",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 114,
    name: "Carlos Mendez",
    team: "General San Martín",
    position: "MED",
    value: 8800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 115,
    name: "Juan Ceballos",
    team: "General San Martín",
    position: "DEL",
    value: 10500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 116,
    name: "Maximiliano Fornari",
    team: "General San Martín",
    position: "DEL",
    value: 11000000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // Paraná
  {
    id: 117,
    name: "Valentin Gonzalez",
    team: "Paraná",
    position: "POR",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 118,
    name: "Valentin Troilo",
    team: "Paraná",
    position: "DEF",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 119,
    name: "Santiago Calaggio",
    team: "Paraná",
    position: "DEF",
    value: 7200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 120,
    name: "Leonardo Ruiz",
    team: "Paraná",
    position: "MED",
    value: 8500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 121,
    name: "Diego Molina",
    team: "Paraná",
    position: "MED",
    value: 8200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 122,
    name: "Federico Suarez",
    team: "Paraná",
    position: "MED",
    value: 8800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 123,
    name: "Brian Chavez",
    team: "Paraná",
    position: "DEL",
    value: 10200000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 124,
    name: "Kevin Frutos",
    team: "Paraná",
    position: "DEL",
    value: 11800000,
    image: "/placeholder.svg?height=40&width=40",
  },

  // 12 de Octubre
  {
    id: 125,
    name: "Roman Molina",
    team: "12 de Octubre",
    position: "POR",
    value: 7000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 126,
    name: "Blas Ferrari",
    team: "12 de Octubre",
    position: "DEF",
    value: 6800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 127,
    name: "Juan Lanchiotti",
    team: "12 de Octubre",
    position: "DEF",
    value: 6500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 128,
    name: "Lucas Jaureguizar",
    team: "12 de Octubre",
    position: "MED",
    value: 7800000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 129,
    name: "Diego Vilchez",
    team: "12 de Octubre",
    position: "MED",
    value: 7500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 130,
    name: "Alan Cabral",
    team: "12 de Octubre",
    position: "MED",
    value: 8000000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 131,
    name: "Maximiliano Caballero",
    team: "12 de Octubre",
    position: "DEL",
    value: 9500000,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 132,
    name: "Eric Escobar",
    team: "12 de Octubre",
    position: "DEL",
    value: 10000000,
    image: "/placeholder.svg?height=40&width=40",
  },
]

type Player = {
  id: number
  name: string
  team: string
  position: string
  value: number
  image: string
}

export default function CreateTeam() {
  const router = useRouter()
  const [teamName, setTeamName] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])
  const [substitutes, setSubstitutes] = useState<Player[]>([])
  const [error, setError] = useState("")

  const totalBudget = 100000000
  const usedBudget =
    selectedPlayers.reduce((sum, player) => sum + player.value, 0) +
    substitutes.reduce((sum, player) => sum + player.value, 0)
  const remainingBudget = totalBudget - usedBudget
  const budgetPercentage = (usedBudget / totalBudget) * 100

  const filteredPlayers = mockPlayers.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddPlayer = (player: Player) => {
    // Verificar si el jugador ya está seleccionado
    if (selectedPlayers.some((p) => p.id === player.id) || substitutes.some((p) => p.id === player.id)) {
      setError("Este jugador ya está en tu equipo")
      return
    }

    // Verificar si añadir este jugador excedería el presupuesto
    if (usedBudget + player.value > totalBudget) {
      setError("Añadir este jugador excedería tu presupuesto")
      return
    }

    // Verificar límite de equipo (máx 3 jugadores por equipo)
    const teamCount =
      selectedPlayers.filter((p) => p.team === player.team).length +
      substitutes.filter((p) => p.team === player.team).length
    if (teamCount >= 3) {
      setError(`Solo puedes seleccionar hasta 3 jugadores del ${player.team}`)
      return
    }

    // Verificar si es un titular o suplente
    if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player])
    } else if (substitutes.length < 3) {
      setSubstitutes([...substitutes, player])
    } else {
      setError("Ya has seleccionado 11 titulares y 3 suplentes")
      return
    }

    setError("")
  }

  const handleRemovePlayer = (playerId: number, isSubstitute = false) => {
    if (isSubstitute) {
      setSubstitutes(substitutes.filter((player) => player.id !== playerId))
    } else {
      setSelectedPlayers(selectedPlayers.filter((player) => player.id !== playerId))
    }
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!teamName) {
      setError("Por favor ingresa un nombre de equipo")
      return
    }

    if (selectedPlayers.length < 11) {
      setError("Tu equipo debe tener al menos 11 jugadores titulares")
      return
    }

    // Aquí normalmente llamarías a una API para guardar el equipo
    console.log("Equipo creado:", {
      name: teamName,
      players: selectedPlayers,
      substitutes: substitutes,
    })

    // Redirigir al panel
    router.push("/dashboard")
  }

  return (
    <div className="container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Crea Tu Equipo de Fantasía</h1>
        <p className="text-muted-foreground">Gran DT Nicoleño - Liga Nicoleña de Fútbol - Temporada 2025</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Seleccionar Jugadores</CardTitle>
              <CardDescription>Elige jugadores reales de la Liga Nicoleña para tu equipo de fantasía</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar jugadores por nombre, equipo o posición..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{player.team}</span>
                          <span>•</span>
                          <span>{player.position}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">${(player.value / 1000000).toFixed(1)}M</p>
                      <Button
                        size="sm"
                        onClick={() => handleAddPlayer(player)}
                        disabled={
                          selectedPlayers.some((p) => p.id === player.id) || substitutes.some((p) => p.id === player.id)
                        }
                      >
                        Añadir
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Tu Equipo</CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex justify-between text-sm">
                    <span>Presupuesto Usado:</span>
                    <span className={remainingBudget < 0 ? "text-red-500 font-medium" : ""}>
                      ${(usedBudget / 1000000).toFixed(1)}M / ${(totalBudget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <Progress value={budgetPercentage} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Restante:</span>
                    <span className={remainingBudget < 0 ? "text-red-500 font-medium" : ""}>
                      ${(remainingBudget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="teamName">Nombre del Equipo</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Ingresa el nombre de tu equipo"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Titulares ({selectedPlayers.length}/11)</Label>
                  {selectedPlayers.length === 0 ? (
                    <div className="text-center p-4 border border-dashed rounded-lg text-muted-foreground">
                      Aún no has seleccionado jugadores titulares
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                      {selectedPlayers.map((player) => (
                        <div key={player.id} className="flex items-center justify-between p-2 border rounded-lg">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                              <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{player.name}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs h-5">
                                  {player.position}
                                </Badge>
                                <span>{player.team}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">${(player.value / 1000000).toFixed(1)}M</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleRemovePlayer(player.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Suplentes ({substitutes.length}/3)</Label>
                  {substitutes.length === 0 ? (
                    <div className="text-center p-4 border border-dashed rounded-lg text-muted-foreground">
                      Aún no has seleccionado jugadores suplentes
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                      {substitutes.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-2 border rounded-lg bg-muted/50"
                        >
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                              <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{player.name}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Badge variant="outline" className="text-xs h-5">
                                  {player.position}
                                </Badge>
                                <span>{player.team}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">${(player.value / 1000000).toFixed(1)}M</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleRemovePlayer(player.id, true)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Crear Equipo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
