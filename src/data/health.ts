export const health = {
  "routine": {
    "id": "555bf8344ca0caf09b42f55e185526d8",
    "name": "Salud",
    "description": "Un plan de 4 niveles enfocado en el aumento de masa muscular, combinando entrenamiento de fuerza, cardio y clases funcionales.",
    "levels": [
      {
        "id": 1,
        "name": "Nivel 1",
        "totalExercises": 5,
        "frequency": {
          "total": 2,
          "label": "días por semana"
        },
        "generalFocus": "Acondicionamiento General",
        "categoriesZone": [
          "Funcional",
          "Peso integrado",
          "Cardio"
        ],
        "days": [
          {
            "id": 1,
            "name": "Día 1",
            "focus": "Fuerza - Cuerpo Completo",
            "exercises": [
              { "id": "h1a8f6e8", "name": "Sentadilla TRX", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
              { "id": "h9b3d2a4", "name": "Marcha alternando estático", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
              { "id": "h5c7e8f1", "name": "Curl de biceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
              { "id": "h2d4f1c9", "name": "Press de Triceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
              { "id": "h8a9b3d5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } }
            ]
          },
          {
            "id": 2,
            "name": "Día 2",
            "focus": "Cardiovascular",
            "exercises": [
              { "id": "h4e6f8a2", "name": "Elíptica", "series": null, "reps": 1, "time": { "value": 20, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
              { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "value": 20, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Nivel 2",
        "totalExercises": 5,
        "frequency": {
          "total": 4,
          "label": "días por semana"
        },
        "generalFocus": "Fuerza y Resistencia",
        "categoriesZone": [
          "Funcional",
          "Peso integrado",
          "Cardio",
          "Circuito Express"
        ],
        "days": [
          {
            "id": 1,
            "name": "Día 1",
            "focus": "Fuerza - Cuerpo Completo",
            "exercises": [
              { "id": "i7y8z9a1", "name": "Sentadilla trx con salto", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Piernas/glúteos/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
              { "id": "ia1b2c3d", "name": "Talones alternados al glúteo", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
              { "id": "h5c7e8f1", "name": "Curl de bíceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
              { "id": "id4e5f6g", "name": "Extensión de tricep en polea", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de poleas", "imgUrl": "" } },
              { "id": "ig7h8i9j", "name": "Rotación de torso", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } }
            ]
          },
          {
            "id": 2,
            "name": "Día 2",
            "focus": "Cardiovascular",
            "exercises": [
              { "id": "h4e6f8a2", "name": "Elíptica", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
              { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "value": 15, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
            ]
          },
          {
            "id": 3,
            "name": "Día 3",
            "focus": "Clase Grupal",
            "exercises": [
              { "id": "ij1k2l3m", "name": "Clase de circuito express", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Circuito Express", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
            ]
          },
          {
            "id": 4,
            "name": "Día 4",
            "focus": "Cardiovascular",
            "exercises": [
              { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "value": 15, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, elíptica, etc.", "imgUrl": "" } },
              { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Nivel 3",
        "totalExercises": 5,
        "frequency": {
          "total": 4,
          "label": "días por semana"
        },
        "generalFocus": "Hipertrofia y Resistencia",
        "categoriesZone": [
          "Peso integrado",
          "Funcional",
          "Cardio"
        ],
        "days": [
          {
            "id": 1,
            "name": "Día 1",
            "focus": "Fuerza - Pierna y Core",
            "exercises": [
              { "id": "j1k2l3m4", "name": "Extensión de cuadricep", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "" } },
              { "id": "j5n6o7p8", "name": "Curl de pierna sentado", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "" } },
              { "id": "i7y8z9a1", "name": "Sentadilla TRX con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
              { "id": "j9q1r2s3", "name": "Plancha con flexión y extensión de codos", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
              { "id": "jt4u5v6w", "name": "Plancha con apertura de piernas", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
            ]
          },
          {
            "id": 2,
            "name": "Día 2",
            "focus": "Mixto",
            "exercises": [
              { "id": "jx7y8z9a", "name": "Clase de PE&PF", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
              { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, elíptica, etc.", "imgUrl": "" } }
            ]
          },
          {
            "id": 3,
            "name": "Día 3",
            "focus": "Clase Grupal",
            "exercises": [
              { "id": "jb1c2d3e", "name": "Clase PE&PF", "series": null, "reps": 1, "time": { "value": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
            ]
          },
          {
            "id": 4,
            "name": "Día 4",
            "focus": "Cardiovascular",
            "exercises": [
              { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "value": 45, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, elíptica, etc.", "imgUrl": "" } }
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Nivel 4",
        "totalExercises": 8,
        "frequency": {
          "total": 4,
          "label": "días por semana"
        },
        "generalFocus": "Fuerza y Potencia",
        "categoriesZone": [
          "Funcional",
          "Funcional (TRX)",
          "Peso integrado",
          "Cardio"
        ],
        "days": [
          {
            "id": 1,
            "name": "Día 1",
            "focus": "Fuerza - Torso",
            "exercises": [
              { "id": "i7y8z9a1", "name": "Sentadilla TRX con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Piernas/glúteos/femoral", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
              { "id": "k1l2m3n4", "name": "Desplante alternado con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Piernas/glúteos/femoral", "imgUrl": "" }, "zone": "Funcional (TRX)", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
              { "id": "k5o6p7q8", "name": "Press de hombro", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "" } },
              { "id": "k9r1s2t3", "name": "Press de pecho", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "" } },
              { "id": "ku4v5w6x", "name": "Extensión de espalda", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "" } }
            ]
          },
          {
            "id": 2,
            "name": "Día 2",
            "focus": "Mixto",
            "exercises": [
              { "id": "jx7y8z9a", "name": "Clase de PE&PF a elegir", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
              { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "value": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora, elíptica, etc.", "imgUrl": "" } }
            ]
          },
          {
            "id": 3,
            "name": "Día 3",
            "focus": "Clase Grupal",
            "exercises": [
              { "id": "ky7z8a9b", "name": "Clase PE@PF de glúteo y abdomen", "series": null, "reps": 1, "time": { "value": 0, "unit": "Libre" }, "muscle": { "name": "Glúteo/Abdomen", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
            ]
          },
          {
            "id": 4,
            "name": "Día 4",
            "focus": "Fuerza - Core y Espalda",
            "exercises": [
              { "id": "h8a9b3d5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } },
              { "id": "ku4v5w6x", "name": "Extensión de espalda", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "" } },
              { "id": "ig7h8i9j", "name": "Rotación de torso", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "" } }
            ]
          }
        ]
      }
    ]
  }
}
