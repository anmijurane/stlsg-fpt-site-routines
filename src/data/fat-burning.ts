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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "ia1b2c3d", "name": "Talones alternados al glúteo", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/talones_alternados_al_gluteo.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/talones_alternados_al_gluteo.png" } },
            { "id": "d2a4b3e9", "name": "Marcha alternada estático", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/marcha_alternada_estatica.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/marcha_alternada_estatica.jpg" } },
            { "id": "a3b8c1d6", "name": "Sentadillas", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla.mov", "apparatus": { "name": "Peso corporal", "imgUrl": "/sentadilla.png" } },
            { "id": "r9s1t2u3", "name": "Plancha con flexión y extensión de codos", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_flexion_de_codos.jpg", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_flexion_de_codos.jpg" } },
            { "id": "b3e9f1c9", "name": "Plancha estatica en Bosú", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_estatica_en_bosu.mp4", "apparatus": { "name": "Bosu", "imgUrl": "/plancha_estatica_en_bosu.jpg" } },
            { "id": "a4b3e9f1", "name": "Escaladores cruzados", "series": null, "reps": null, "time": null, "active": { "by": 20, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/escaladores.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/escaladores.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "indicationsPreRoutine": {
            "heating": "string",
            "cooling": "string",
          },
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Escaladora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Circuito express",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "a7b3c6d9", "name": "Clase de circuito express", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Mixto",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "w4x5y6z7", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Remadora", "imgUrl": "" } }
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "b3e9f1c9a8", "name": "Paso joggie", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/paso_joggie.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/paso_joggie.png" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "jt4u5v6w", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_apertura_de_piernas.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_apertura_de_piernas.jpg" } },
            { "id": "d1c9a8b3e9", "name": "Sentadilla sobre Bosú", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_sobre_bosu.mp4", "apparatus": { "name": "Bosu", "imgUrl": "/sentadilla_sobre_bosu.jpg" } },
            { "id": "b1c5d8e2", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/tijeras_frontales_en_tapete.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/tijeras_frontales_en_tapete.jpg" } },
            { "id": "f1c9a8b3e9", "name": "Cangrejo codo a la rodilla", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 30, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/cangrejo_codo_a_rodilla.jpg", "apparatus": { "name": "Tapete", "imgUrl": "/cangrejo_codo_a_rodilla.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 20, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Clase PE@PF",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "w4x5y6z7", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Mixto",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "w4x5y6z7", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Remadora", "imgUrl": "" } }
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "f1c9a8b3e9f", "name": "Oruga", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/oruga.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/oruga.jpg" } },
            { "id": "b9c3d7e1", "name": "Plancha con rotación de torso", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/plancha_con_rotacion_de_torso.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_rotacion_de_torso.jpg" } },
            { "id": "jt4u5v6w", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_apertura_de_piernas.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_apertura_de_piernas.jpg" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "e9f1c9a8b3e9", "name": "Azote en cuerda en sentadilla isometrica", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/hombro", "imgUrl": "/cuadricep_gluteo_hombro" }, "zone": "Funcional", "videoUrl": "/azote_de_cuerda_sentadilla_isometrica.mp4", "apparatus": { "name": "Cuerdas (battle ropes)", "imgUrl": "/azote_de_cuerda_sentadilla_isometrica.jpg" } },
            { "id": "d9e1f5a3", "name": "Desplante alternado con salto", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/desplante_alternado_con_salto.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/desplante_alternado_con_salto.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren superior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "a8b3e9f1c9a8", "name": "Curl martillo alternado con mancuerna", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Bicep", "imgUrl": "/biceps" }, "zone": "Funcional", "videoUrl": "/curl_martillo_alternado_con_mancuerna.mp4", "apparatus": { "name": "Mancuernas", "imgUrl": "/curl_martillo_alternado_con_mancuerna.png" } },
            { "id": "b1c5d8e2", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/tijeras_frontales_en_tapete.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/tijeras_frontales_en_tapete.jpg" } },
            { "id": "k3l7m4n8", "name": "Plancha lateral", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/plancha_lateral.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_lateral.jpg" } },
            { "id": "c9a8b3e9f1c9", "name": "Lagartijas", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Funcional", "videoUrl": "/lagartijas.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/lagartijas.jpg" } },
            { "id": "d1c9a8b3e9f1", "name": "Escaladores", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/escaladores.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/escaladores.jpg" } },
            { "id": "f1c9a8b3e9", "name": "Cangrejo codo a la rodilla", "series": null, "reps": null, "time": null, "active": { "by": 30, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/cangrejo_codo_a_rodilla.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/cangrejo_codo_a_rodilla.jpg" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Circuito express",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "a7b3c6d9", "name": "Clase de circuito express", "series": null, "reps": 1, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Circuito Express", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "y7z8a9b1", "name": "Sentadilla TRX", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx.jpg" } },
            { "id": "b3e9f1c9a8", "name": "Paso joggie", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/paso_joggie.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/paso_joggie.png" } },
            { "id": "f1c9a8b3e9f", "name": "Oruga", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/oruga.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/oruga.jpg" } },
            { "id": "a8b3e9f1c9a8b", "name": "Sentadilla con Salto rodillas al pecho", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/sentadilla_con_salto_y_rodillas_al_pecho.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/sentadilla_con_salto_y_rodillas_al_pecho.jpg" } },
            { "id": "d1c9a8b3e9f1", "name": "Escaladores", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/escaladores.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/escaladores.jpg" } },
            { "id": "jt4u5v6w", "name": "Plancha con apertura de piernas", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_apertura_de_piernas.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_apertura_de_piernas.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Cardio",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Remadora", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Todo el cuerpo",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "e9f1c9a8b3e9", "name": "Azote de cuerda sentadilla isometrica", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo/hombro", "imgUrl": "/cuadricep_gluteo_hombro" }, "zone": "Funcional", "videoUrl": "/azote_de_cuerda_sentadilla.mp4", "apparatus": { "name": "Cuerdas (battle ropes)", "imgUrl": "/azote_de_cuerda_sentadilla_isometrica.jpg" } },
            { "id": "b1c5d8e2", "name": "Tijeras frontales en tapete", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/tijeras_frontales_en_tapete.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/tijeras_frontales_en_tapete.jpg" } },
            { "id": "a8b3e9f1c9a8", "name": "Curl martillo alternado con mancuerna", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Bicep", "imgUrl": "/biceps" }, "zone": "Funcional", "videoUrl": "curl_martillo_alternado_con_mancuerna.mp4", "apparatus": { "name": "Mancuernas", "imgUrl": "/curl_martillo_alternado_con_mancuerna.png" } },
            { "id": "d2a4b3e9", "name": "Marcha alternada estático", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/marcha_alternada_estatica.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/marcha_alternada_estatica.jpg" } },
            { "id": "b9c3d7e1", "name": "Plancha con rotación de torso", "series": null, "reps": null, "time": null, "active": { "by": 40, "unit": "seg" }, "rest": { "by": 20, "unit": "seg" }, "rounds": 3, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/plancha_con_rotacion_de_torso.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_rotacion_de_torso.jpg" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": ""
          },
          "exercises": [
            { "id": "w4x5y6z7", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "active": null, "rest": null, "rounds": null, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    }
  ]
}
