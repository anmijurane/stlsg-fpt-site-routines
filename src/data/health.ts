import type { Routine } from "@interfaces/routines";

export const health: Routine = {
  "id": "health",
  "name": "Salud",
  "description": "Nuestras rutinas de salud están diseñadas para promover el bienestar físico y mental, ayudándote a mejorar tu resistencia, tonificar tu cuerpo y disfrutar de un descanso más reparador.",
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
          "focus": "Tren superior",
          "exercises": [
            { "id": "h1a8f6e8", "name": "Sentadilla TRX", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx.jpg" } },
            { "id": "h9b3d2a4", "name": "Marcha alternando estático", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/marcha_alternada_estatica.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/marcha_alternada_estatica.jpg" } },
            { "id": "h5c7e8f1", "name": "Curl de biceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "h2d4f1c9", "name": "Press de Triceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "h8a9b3d5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina de crunch", "imgUrl": "/abdominal_crunch.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "h4e6f8a2", "name": "Elíptica", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
            { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
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
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "i7y8z9a1", "name": "Sentadilla trx con salto", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteos/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "ia1b2c3d", "name": "Talones alternados al glúteo", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/talones_alternados_al_gluteo.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/talones_alternados_al_gluteo.png" } },
            { "id": "h5c7e8f1", "name": "Curl de bíceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "id4e5f6g", "name": "Extensión de tricep en polea", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_triceps_en_polea.mp4", "apparatus": { "name": "Máquina de poleas", "imgUrl": "/extension_de_triceps_en_polea.png" } },
            { "id": "ig7h8i9j", "name": "Rotación de torso", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/rotacion_de_torso_en_maquina.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/rotacion_de_torso_en_maquina.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "exercises": [
            { "id": "h4e6f8a2", "name": "Elíptica", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
            { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "by": 15, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Circuito express",
          "exercises": [
            { "id": "ij1k2l3m", "name": "Circuito Express", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Circuito Express", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Cardio",
          "exercises": [
            { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 15, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
            { "id": "hc1a2b38", "name": "Caminadora", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
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
          "focus": "Tren inferior",
          "exercises": [
            { "id": "j1k2l3m4", "name": "Extensión de cuadricep", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_cuadriceps.mp4", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "/extension_de_cuadriceps.jpg" } },
            { "id": "j5n6o7p8", "name": "Curl de pierna sentado", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "/curl_de_pierna_sentado.mp4", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "/curl_de_pierna_sentado.jpg" } },
            { "id": "i7y8z9a1", "name": "Sentadilla TRX con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "j9q1r2s3", "name": "Plancha con flexión y extensión de codos", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_flexion_de_codos.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_flexion_de_codos.jpg" } },
            { "id": "jt4u5v6w", "name": "Plancha con apertura de piernas", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_apertura_de_piernas.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_apertura_de_piernas.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "exercises": [
            { "id": "jx7y8z9a", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "jb1c2d3e", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Cardio",
          "exercises": [
            { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 45, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
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
        "Peso integrado",
        "Cardio"
      ],
      "days": [
        {
          "id": 1,
          "name": "Día 1",
          "focus": "Todo el cuerpo",
          "exercises": [
            { "id": "i7y8z9a1", "name": "Sentadilla TRX con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteos/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "k1l2m3n4", "name": "Desplante alternado con salto", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteos/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/desplante_alternado_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/desplante_alternado_con_salto.jpg" } },
            { "id": "k5o6p7q8", "name": "Press de hombro", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "k9r1s2t3", "name": "Press de pecho", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho.mp4", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "/press_de_pecho.jpg" } },
            { "id": "ku4v5w6x", "name": "Extensión de espalda", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/extension_de_espalda.mp4", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "/extension_de_espalda.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "exercises": [
            { "id": "jx7y8z9a", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "im4n5o6p", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Clase PE@PF",
          "exercises": [
            { "id": "ky7z8a9b", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Glúteo/Abdomen", "imgUrl": "/abdomen_gluteo" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Tren superior",
          "exercises": [
            { "id": "h8a9b3d5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina de crunch", "imgUrl": "/abdominal_crunch.jpg" } },
            { "id": "ku4v5w6x", "name": "Extensión de espalda", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/extension_de_espalda.mp4", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "/extension_de_espalda.jpg" } },
            { "id": "ig7h8i9j", "name": "Rotación de torso", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/rotacion_de_torso_en_maquina.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/rotacion_de_torso_en_maquina.jpg" } }
          ]
        }
      ]
    }
  ]
}
