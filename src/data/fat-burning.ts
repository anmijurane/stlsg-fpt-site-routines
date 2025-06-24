import type { Routine } from "@interfaces/routines";

export const fat_burning: Routine = {
  "id": "fat_burning",
  "name": "Quema de grasa",
  "description": "El entrenamiento enfocado en la quema de grasa ayuda a acelerar el metabolismo, contribuyendo a la pérdida de grasa de forma gradual.",
  "levels": [
    {
      "id": 1,
      "name": "Nivel 1",
      "totalExercises": 6,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Acondicionamiento HIIT Básico",
      "categoriesZone": [
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "e4f1c9a8", "name": "Talones alternados al glúteo", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "d2a4b3e9", "name": "Marcha alternada estático", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "f6e8d2a4", "name": "Sentadillas", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "c9a8b3e9", "name": "Plancha con flexión y extensión de codos", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "b3e9f1c9", "name": "Plancha estatica en Bosú", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Bosu", "imgUrl": "" } },
            { "id": "a4b3e9f1", "name": "Escaladores cruzados", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "e9f1c9a8", "name": "Caminadora o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, etc.", "imgUrl": "" } },
            { "id": "f1c9a8b3", "name": "Escaladora o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Escaladora, etc.", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Circuito express",
          "exercises": [
            { "id": "b3e9f1c9a", "name": "Clase de circuito express", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Mixto",
          "exercises": [
            { "id": "a8b3e9f1c", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "c9a8b3e9f", "name": "Arc-trainer o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Arc Trainer, etc.", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Nivel 2",
      "totalExercises": 6,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Incremento de Intensidad",
      "categoriesZone": [
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Tren inferior y abdomen",
          "exercises": [
            { "id": "b3e9f1c9a8", "name": "Paso joggie", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "a8b3e9f1c9", "name": "Sentadilla en TRX con salto", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "c9a8b3e9f1", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "d1c9a8b3e9", "name": "Sentadilla sobre Bosú", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Bosu", "imgUrl": "" } },
            { "id": "e9f1c9a8b3", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "f1c9a8b3e9", "name": "Cangrejo codo a la rodilla", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "e9f1c9a8b3e", "name": "Éliptica o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica, etc.", "imgUrl": "" } },
            { "id": "e9f1c9a8", "name": "Caminadora o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, etc.", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "a8b3e9f1c", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Mixto",
          "exercises": [
            { "id": "a8b3e9f1c", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "c9a8b3e9f", "name": "Arc-trainer o máquina de cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Arc Trainer, etc.", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Nivel 3",
      "totalExercises": 12,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Resistencia Muscular",
      "categoriesZone": [
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "f1c9a8b3e9f", "name": "Oruga", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "a8b3e9f1c9a", "name": "Plancha con rotacion de torso", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "c9a8b3e9f1c", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "d1c9a8b3e9f", "name": "Sentadilla con salto en TRX", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "e9f1c9a8b3e9", "name": "Azote en cuerda en sentadilla isometrica", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/hombro", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Cuerdas (battle ropes)", "imgUrl": "" } },
            { "id": "f1c9a8b3e9f1", "name": "Desplante alternado con salto", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "e9f1c9a8b3e", "name": "Éliptica o máquina de cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica, etc.", "imgUrl": "" } },
            { "id": "e9f1c9a8", "name": "Caminadora o máquina de cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, etc.", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren superior",
          "exercises": [
            { "id": "a8b3e9f1c9a8", "name": "Curl martillo alternado con mancuerna", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Bicep", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Mancuernas", "imgUrl": "" } },
            { "id": "e9f1c9a8b3", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "b3e9f1c9a8b3", "name": "Plancha lateral", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "c9a8b3e9f1c9", "name": "Lagartijas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "d1c9a8b3e9f1", "name": "Escaladores", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "f1c9a8b3e9", "name": "Cangrejo codo a la rodilla", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Circuito express",
          "exercises": [
            { "id": "b3e9f1c9a", "name": "Clase de circuito express", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Nivel 4",
      "totalExercises": 12,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "HIIT Avanzado",
      "categoriesZone": [
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Tren inferior y abdomen",
          "exercises": [
            { "id": "e9f1c9a8b3e9f", "name": "Sentadilla TRX", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "b3e9f1c9a8", "name": "Paso joggie", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "f1c9a8b3e9f", "name": "Oruga", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "a8b3e9f1c9a8b", "name": "sentadilla con Salto rodillas al pecho", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "d1c9a8b3e9f1", "name": "Escaladores", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "c9a8b3e9f1c", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "c9a8b3e9f", "name": "Arc-trainer o máquina de cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Arc Trainer, etc.", "imgUrl": "" } },
            { "id": "e9f1c9a8", "name": "Caminadora o máquina de cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, etc.", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "a8b3e9f1c9", "name": "Sentadilla TRX con salto", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "b3e9f1c9a8b3e", "name": "azote de cuerda sentadilla isometrica", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/hombro", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Cuerdas (battle ropes)", "imgUrl": "" } },
            { "id": "e9f1c9a8b3", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "a8b3e9f1c9a8", "name": "Curl martillo alternado con mancuerna", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Bicep", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Mancuernas", "imgUrl": "" } },
            { "id": "d2a4b3e9", "name": "Marcha alternada estático", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "a8b3e9f1c9a", "name": "Plancha con rotación de torso", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "a8b3e9f1c", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    }
  ]
}