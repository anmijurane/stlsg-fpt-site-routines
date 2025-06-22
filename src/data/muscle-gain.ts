import type { Routine } from "@interfaces/routines";

export const muscle_gain: Routine = {
  "id": "muscle_gain",
  "name": "Ganancia muscular",
  "description": "Estás iniciando un entrenamiento enfocado en la ganancia muscular, también conocido como entrenamiento de hipertrofia. Esta rutina se basa en una serie de factores diseñados específicamente para estimular y maximizar el crecimiento de la masa muscular.",
  "levels": [
    {
      "id": 1,
      "name": "Nivel 1",
      "totalExercises": 12,
      "frequency": {
        "total": 3,
        "label": "días por semana"
      },
      "generalFocus": "Fuerza General - Torso/Pierna",
      "categoriesZone": [
        "Peso integrado",
        "Funcional"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Fuerza - Torso",
          "exercises": [
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Hombro (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "" } },
            { "id": "e5f6g7h8", "name": "Press de Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o barra", "imgUrl": "" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "q8r9s1t2", "name": "Remo sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de remo", "imgUrl": "" } },
            { "id": "u3v4w5x6", "name": "Abdominal crunch", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Descanso",
          "exercises": []
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Fuerza - Pierna",
          "exercises": [
            { "id": "y7z8a9b1", "name": "Sentadilla TRX", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "c2d3e4f5", "name": "Extensión de cuadriceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "" } },
            { "id": "g6h7i8j9", "name": "Curl de Piernas Sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } },
            { "id": "o5p6q7r8", "name": "Abductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase Grupal",
          "exercises": [
            { "id": "w4x5y6z7", "name": "Clase PE&PF", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Nivel 2",
      "totalExercises": 13,
      "frequency": {
        "total": 2,
        "label": "días por semana"
      },
      "generalFocus": "Volumen y Aislamiento",
      "categoriesZone": [
        "Peso integrado",
        "Funcional"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Fuerza - Torso",
          "exercises": [
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Hombro (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "" } },
            { "id": "e5f6g7h8", "name": "Press de Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o barra", "imgUrl": "" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "" } },
            { "id": "u3v4w5x6", "name": "Abdominal crunch", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Descanso",
          "exercises": []
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Fuerza - Pierna",
          "exercises": [
            { "id": "d3e4f5g6", "name": "Desplante TRX", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de prensa", "imgUrl": "" } },
            { "id": "g6h7i8j9", "name": "Curl de Pierna Sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } },
            { "id": "l2m3n4o5", "name": "Glúteo", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } },
            { "id": "p6q7r8s9", "name": "Extensión de Espalda", "series": 3, "reps": 15, "time": null, "muscle": { "name": "lumbar", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "" } },
            { "id": "w4x5y6z7", "name": "Clase PE&PF", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Nivel 3",
      "totalExercises": 18,
      "frequency": {
        "total": 3,
        "label": "días por semana"
      },
      "generalFocus": "Alta Intensidad - Torso/Pierna",
      "categoriesZone": [
        "Peso integrado",
        "Funcional"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Fuerza - Torso",
          "exercises": [
            { "id": "a1b2c3d4", "name": "Press de hombro", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "" } },
            { "id": "t2u3v4w5", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "x6y7z8a9", "name": "Hammer Strength Chest Press", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "b1c2d3e4", "name": "Hammer Strength incline Chest", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pectoral (superior)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "f5g6h7i8", "name": "Curl de Biceps (predicador)", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Banco predicador", "imgUrl": "" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Fuerza - Pierna",
          "exercises": [
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de prensa", "imgUrl": "" } },
            { "id": "l2m3n4o5", "name": "Glúteo", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de glúteos", "imgUrl": "" } },
            { "id": "c2d3e4f5", "name": "Extensión de Cuadricep", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Aductores", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } },
            { "id": "g6h7i8j9", "name": "Curl de pierna Sentado", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Descanso",
          "exercises": []
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Fuerza - Torso y Core",
          "exercises": [
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "" } },
            { "id": "j3k4l5m6", "name": "Remo en Polea", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de poleas", "imgUrl": "" } },
            { "id": "p6q7r8s9", "name": "Extensión de espalda", "series": 4, "reps": 10, "time": null, "muscle": { "name": "lumbar", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "" } },
            { "id": "m4n5o6p7", "name": "Press de triceps", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "n5o6p7q8", "name": "Extensión de Tricep en Polea", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de poleas", "imgUrl": "" } },
            { "id": "r9s1t2u3", "name": "Plancha con flexión y extensión de codos", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Nivel 4",
      "totalExercises": 18,
      "frequency": {
        "total": 3,
        "label": "días por semana"
      },
      "generalFocus": "Máxima Fuerza",
      "categoriesZone": [
        "Peso integrado",
        "Funcional"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Fuerza - Torso",
          "exercises": [
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "" } },
            { "id": "t2u3v4w5", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "x6y7z8a9", "name": "Hammer Strength Chest Press", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "b1c2d3e4", "name": "Hammer Strength incline Chest", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pectoral (superior)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "f5g6h7i8", "name": "Curl de Bicep (predicador)", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Banco predicador", "imgUrl": "" } },
            { "id": "i9j1k2l3", "name": "Curl de Bicep", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Fuerza - Pierna",
          "exercises": [
            { "id": "d3e4f5g6", "name": "Desplante en TRX", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de prensa", "imgUrl": "" } },
            { "id": "c2d3e4f5", "name": "Extensión de Cuádricep", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Aductores", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de aductores", "imgUrl": "" } },
            { "id": "o5p6q7r8", "name": "Abductor", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de abductores", "imgUrl": "" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Descanso",
          "exercises": []
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Fuerza - Torso",
          "exercises": [
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "" } },
            { "id": "q8r9s1t2", "name": "Remo Sentado", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de remo", "imgUrl": "" } },
            { "id": "v3w4x5y6", "name": "Hammer Strength mts remo", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "z7a8b9c1", "name": "Hammer Strength Mts front Pulld", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "d2e3f4g5", "name": "Extensión de triceps", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } }
          ]
        }
      ]
    }
  ]
}
