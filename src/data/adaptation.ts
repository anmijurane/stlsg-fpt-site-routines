import type { Routine } from "@interfaces/routines";

export const adaptation: Routine = {
  "id": "adaptation",
  "name": "Adaptación",
  "description": "Con esta rutina comenzarás a desarrollar fuerza, resistencia, flexibilidad y acondicionamiento aeróbico. Además, incrementarás la quema de calorías y mejorarás tu bienestar general.",
  "levels": [
    {
      "id": 1,
      "name": "Nivel 1",
      "totalExercises": 12,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Cuerpo Completo - Fase de Acumulación",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "f3b9a1e8", "name": "Press de hombro", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "" } },
            { "id": "c7d2e4f6", "name": "Press de Pecho", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "" } },
            { "id": "a1b8c3d5", "name": "Curl de Biceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "d5e6f8a9", "name": "Saltos rodillas al pecho", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "b3c7d1e5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "a9b1c5d8", "name": "Remo sentado", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de remo", "imgUrl": "" } },
            { "id": "d8e2f6a1", "name": "Press de triceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "c5d8e1f4", "name": "Extensión de espalda", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Lumbar", "imgUrl": "/lumbar_gluteo" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "b1c5d8e2", "name": "Tijeras frontales en tapete", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "f4g1h5i2", "name": "Extensión de gemelos", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Circuito express",
          "exercises": [
            { "id": "a7b3c6d9", "name": "Clase de circuito express", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Circuito Express", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Nivel 2",
      "totalExercises": 12,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Cuerpo Completo - Fase de Intensificación",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "f3b9a1e8", "name": "Press de hombro", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "" } },
            { "id": "c7d2e4f6", "name": "Press de pecho", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "" } },
            { "id": "a1b8c3d5", "name": "Curl de biceps", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
            { "id": "e9f2a7b4", "name": "Sentadilla trx con salto", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "d9e1f5a3", "name": "Desplante alternado con salto", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal", "imgUrl": "" } },
            { "id": "b6c8d2e7", "name": "Abdominal crunch", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "a9b1c5d8", "name": "Remo Sentado", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de remo", "imgUrl": "" } },
            { "id": "e2f6a1b8", "name": "Jalón al pecho", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "" } },
            { "id": "c8d2e7f3", "name": "Extensión de triceps", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "a3b8c1d6", "name": "Sentadillas", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal o barra", "imgUrl": "" } },
            { "id": "d6e9f1a4", "name": "Plancha con aperturas de piernas", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } },
            { "id": "b9c3d7e1", "name": "Plancha con rotación de torso", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
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
      "generalFocus": "División Torso/Pierna - Fase de Volumen",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Tren superior",
          "exercises": [
            { "id": "f5a8b3c7", "name": "Hammer Strength Chest Press", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "a8b3c7d1", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "a1b8c3d5", "name": "Curl de Biceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "" } },
            { "id": "d8e2f6a1", "name": "Press de triceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "c1d6e9f2", "name": "Remo en polea", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Polea", "videoUrl": "", "apparatus": { "name": "Máquina de poleas", "imgUrl": "" } },
            { "id": "b3c7d1e5", "name": "Abdominal crunch", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de crunch", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio con aparato", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren inferior",
          "exercises": [
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "TRX", "imgUrl": "" } },
            { "id": "a3b8c1d6", "name": "Sentadillas", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Peso corporal o barra", "imgUrl": "" } },
            { "id": "f2a7b4c8", "name": "Aductor", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de aductores", "imgUrl": "" } },
            { "id": "a7b4c8d1", "name": "Abductor", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de abductores", "imgUrl": "" } },
            { "id": "f4g1h5i2", "name": "Extensión de gemelos", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "" } },
            { "id": "b6c8d2e7", "name": "Abdominal crunch", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
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
      "generalFocus": "División Torso/Pierna - Fase de Resistencia",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Tren superior",
          "exercises": [
            { "id": "g1h5i2j6", "name": "Hammer strength incline chest press", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "h5i2j6k3", "name": "Hammer strength mts Remo", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "a8b3c7d1", "name": "Hammer strength Shoulder Press", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Hammer Strength", "imgUrl": "" } },
            { "id": "i2j6k3l7", "name": "Curl de biceps en polea baja", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Poleas", "videoUrl": "", "apparatus": { "name": "Máquina de poleas", "imgUrl": "" } },
            { "id": "j6k3l7m4", "name": "Extensiones de triceps", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina o polea", "imgUrl": "" } },
            { "id": "k3l7m4n8", "name": "Plancha lateral", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Tapete", "imgUrl": "" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren inferior",
          "exercises": [
            { "id": "l7m4n8o5", "name": "Prensa de piernas", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de prensa", "imgUrl": "" } },
            { "id": "m4n8o5p9", "name": "Extensión de cuadricep", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "" } },
            { "id": "n8o5p9q2", "name": "Curl de piernas sentado", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "" } },
            { "id": "f2a7b4c8", "name": "Aductor", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de aductores", "imgUrl": "" } },
            { "id": "a7b4c8d1", "name": "Abductor", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Glúteos", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de abductores", "imgUrl": "" } },
            { "id": "o5p9q2r6", "name": "Rotación de torso en maquina", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Peso integrado", "videoUrl": "", "apparatus": { "name": "Máquina de rotación de torso", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Cardio",
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        }
      ]
    }
  ]
}
