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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "f3b9a1e8", "name": "Press de hombro", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "c7d2e4f6", "name": "Press de Pecho", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho.mp4", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "/press_de_pecho.jpg" } },
            { "id": "a1b8c3d5", "name": "Curl de Biceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "d5e6f8a9", "name": "Saltos rodillas al pecho", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo", "imgUrl": "/cuadricep_gluteo" }, "zone": "Funcional", "videoUrl": "/sentadilla_con_salto_y_rodillas_al_pecho.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/sentadilla_con_salto_y_rodillas_al_pecho.jpg" } },
            { "id": "b3c7d1e5", "name": "Abdominal crunch", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina adbominal crunch", "imgUrl": "/abdominal_crunch.jpg" } },
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
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
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
            { "id": "a9b1c5d8", "name": "Remo sentado", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/remo_sentado.mp4", "apparatus": { "name": "Máquina de remo", "imgUrl": "/remo_sentado.jpg" } },
            { "id": "d8e2f6a1", "name": "Press de triceps", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "c5d8e1f4", "name": "Extensión de espalda", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Lumbar", "imgUrl": "/lumbar_gluteo" }, "zone": "Peso integrado", "videoUrl": "/extension_de_espalda.mp4", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "/extension_de_espalda.jpg" } },
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "b1c5d8e2", "name": "Tijeras frontales en tapete", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/tijeras_frontales_en_tapete.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/tijeras_frontales_en_tapete.jpg" } },
            { "id": "f4g1h5i2", "name": "Extensión de gemelos", "series": 3, "reps": 10, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "/extension_de_gemelos.mp4", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "/extension_de_gemelos.jpg" } },
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de todo el cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "f3b9a1e8", "name": "Press de hombro", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina de press de hombro", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "c7d2e4f6", "name": "Press de pecho", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho.mp4", "apparatus": { "name": "Máquina de press de pecho", "imgUrl": "/press_de_pecho.jpg" } },
            { "id": "a1b8c3d5", "name": "Curl de biceps", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "e9f2a7b4", "name": "Sentadilla trx con salto", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "d9e1f5a3", "name": "Desplante alternado con salto", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/desplante_alternado_con_salto.mp4", "apparatus": { "name": "Peso corporal", "imgUrl": "/desplante_alternado_con_salto.jpg" } },
            { "id": "b6c8d2e7", "name": "Abdominal crunch", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/abdominal_crunch.jpg" } },
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
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
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
            { "id": "a9b1c5d8", "name": "Remo Sentado", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/remo_sentado.mp4", "apparatus": { "name": "Máquina de remo", "imgUrl": "/remo_sentado.jpg" } },
            { "id": "e2f6a1b8", "name": "Jalón al pecho", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/jalon_al_pecho.mp4", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "/jalon_al_pecho.jpg" } },
            { "id": "c8d2e7f3", "name": "Extensión de triceps", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/extension_de_triceps.jpg" } },
            { "id": "a3b8c1d6", "name": "Sentadillas", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla.mov", "apparatus": { "name": "Peso corporal o barra", "imgUrl": "/sentadilla.png" } },
            { "id": "d6e9f1a4", "name": "Plancha con aperturas de piernas", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_apertura_de_piernas.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_apertura_de_piernas.jpg" } },
            { "id": "b9c3d7e1", "name": "Plancha con rotación de torso", "series": 3, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/plancha_con_rotacion_de_torso.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_rotacion_de_torso.jpg" } },
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "f5a8b3c7", "name": "Hammer Strength Chest Press", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/hammers_trength_chest_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammers_trength_chest_press.jpg" } },
            { "id": "a8b3c7d1", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/hammer_strength_shoulder_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammer_strength_shoulder_press.jpg" } },
            { "id": "a1b8c3d5", "name": "Curl de Biceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "d8e2f6a1", "name": "Press de triceps", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "c1d6e9f2", "name": "Remo en polea", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Polea", "videoUrl": "/remo_en_polea.mp4", "apparatus": { "name": "Máquina de poleas", "imgUrl": "/remo_en_polea.jpg" } },
            { "id": "b3c7d1e5", "name": "Abdominal crunch", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina de crunch", "imgUrl": "/abdominal_crunch.jpg" } },
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio con aparato", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren inferior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte inferior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "e9f2a7b4", "name": "Sentadilla TRX con salto", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx_con_salto.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx_con_salto.jpg" } },
            { "id": "a3b8c1d6", "name": "Sentadillas", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla.mov", "apparatus": { "name": "Peso corporal o barra", "imgUrl": "/sentadilla.png" } },
            { "id": "f2a7b4c8", "name": "Aductor", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Peso integrado", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina de aductores", "imgUrl": "/aductor.jpg" } },
            { "id": "a7b4c8d1", "name": "Abductor", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "/abductor.mp4", "apparatus": { "name": "Máquina de abductores", "imgUrl": "/abductor.jpg" } },
            { "id": "f4g1h5i2", "name": "Extensión de gemelos", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "/extension_de_gemelos.mp4", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "/extension_de_gemelos.jpg" } },
            { "id": "b6c8d2e7", "name": "Abdominal crunch", "series": 4, "reps": 12, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/abdominal_crunch.jpg" } },
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Clase PE@PF",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
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
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "g1h5i2j6", "name": "Hammer Strength Incline Chest Press", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/hammers_trength_incline_chest_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammers_trength_incline_chest_press.jpg" } },
            { "id": "h5i2j6k3", "name": "Hammer strength mts Remo", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Espalda", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/hummer_strength_mts_remo.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hummer_strength_mts_remo.png" } },
            { "id": "a8b3c7d1", "name": "Hammer strength Shoulder Press", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Hombros", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/hammer_strength_shoulder_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammer_strength_shoulder_press.jpg" } },
            { "id": "i2j6k3l7", "name": "Curl de biceps en polea baja", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Poleas", "videoUrl": "/curl_de_biceps_en_polea_baja.mp4", "apparatus": { "name": "Máquina de poleas", "imgUrl": "/curl_de_biceps_en_polea_baja.png" } },
            { "id": "j6k3l7m4", "name": "Extensión de triceps", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/extension_de_triceps.jpg" } },
            { "id": "k3l7m4n8", "name": "Plancha lateral", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/oblicuos" }, "zone": "Funcional", "videoUrl": "/plancha_lateral.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_lateral.jpg" } }
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Mixto",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "e1f5a8b3", "name": "Clase PE@PF a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Elíptica", "imgUrl": "" } }
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Tren inferior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "l7m4n8o5", "name": "Prensa de piernas", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Peso integrado", "videoUrl": "/prensa_de_pierna.mp4", "apparatus": { "name": "Máquina de prensa", "imgUrl": "/prensa_de_pierna.jpg" } },
            { "id": "m4n8o5p9", "name": "Extensión de cuadricep", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_cuadriceps.mp4", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "/extension_de_cuadriceps.jpg" } },
            { "id": "n8o5p9q2", "name": "Curl de piernas sentado", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "/curl_de_pierna_sentado.mp4", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "/curl_de_pierna_sentado.jpg" } },
            { "id": "f2a7b4c8", "name": "Aductor", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Peso integrado", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina de aductores", "imgUrl": "/aductor.jpg" } },
            { "id": "a7b4c8d1", "name": "Abductor", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Glúteos", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "/abductor.mp4", "apparatus": { "name": "Máquina de abductores", "imgUrl": "/abductor.jpg" } },
            { "id": "o5p9q2r6", "name": "Rotación de torso en maquina", "series": 4, "reps": 15, "time": null, "muscle": { "name": "Abdomen (oblicuos)", "imgUrl": "/oblicuos" }, "zone": "Peso integrado", "videoUrl": "/rotacion_de_torso_en_maquina.mp4", "apparatus": { "name": "Máquina de rotación de torso", "imgUrl": "/rotacion_de_torso_en_maquina.jpg" } }
          ]
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Cardio",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": [
            { "id": "f8a9b2c7", "name": "Cardio a elegir", "series": null, "reps": null, "time": { "by": 30, "unit": "min" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Cardio", "videoUrl": "", "apparatus": { "name": "Caminadora", "imgUrl": "" } }
          ]
        }
      ]
    }
  ]
}
