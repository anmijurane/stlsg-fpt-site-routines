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
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Fuerza General - Torso/Pierna",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio",
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
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Hombro (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "e5f6g7h8", "name": "Press de Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho.mp4", "apparatus": { "name": "Máquina o barra", "imgUrl": "/press_de_pecho.jpg" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "q8r9s1t2", "name": "Remo sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/remo_sentado.mp4", "apparatus": { "name": "Máquina de remo", "imgUrl": "/remo_sentado.jpg" } },
            { "id": "u3v4w5x6", "name": "Abdominal crunch", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina de crunch", "imgUrl": "/abdominal_crunch.jpg" } },
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Descanso",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": []
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
            { "id": "y7z8a9b1", "name": "Sentadilla TRX", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/sentadilla_trx.mp4", "apparatus": { "name": "TRX", "imgUrl": "/sentadilla_trx.jpg" } },
            { "id": "c2d3e4f5", "name": "Extensión de cuadriceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_cuadriceps.mp4", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "/extension_de_cuadriceps.jpg" } },
            { "id": "g6h7i8j9", "name": "Curl de Piernas Sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "/curl_de_pierna_sentado.mp4", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "/curl_de_pierna_sentado.jpg" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Funcional", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/aductor.jpg" } },
            { "id": "o5p6q7r8", "name": "Abductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Funcional", "videoUrl": "/abductor.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/abductor.jpg" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "/extension_de_gemelos.mp4", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "/extension_de_gemelos.jpg" } },
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
            { "id": "w4x5y6z7", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
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
      "generalFocus": "Volumen y Aislamiento",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio",
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
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Hombro (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "e5f6g7h8", "name": "Press de Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho.mp4", "apparatus": { "name": "Máquina o barra", "imgUrl": "/press_de_pecho.jpg" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/jalon_al_pecho.mp4", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "/jalon_al_pecho.jpg" } },
            { "id": "u3v4w5x6", "name": "Abdominal crunch", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Peso integrado", "videoUrl": "/abdominal_crunch.mp4", "apparatus": { "name": "Máquina de crunch", "imgUrl": "/abdominal_crunch.jpg" } },
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Descanso",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": []
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
            { "id": "d3e4f5g6", "name": "Desplante TRX", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/desplante_trx.mp4", "apparatus": { "name": "TRX", "imgUrl": "/desplante_trx.png" } },
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Peso integrado", "videoUrl": "/prensa_de_pierna.mp4", "apparatus": { "name": "Máquina de prensa", "imgUrl": "/prensa_de_pierna.jpg" } },
            { "id": "g6h7i8j9", "name": "Curl de Pierna Sentado", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "/curl_de_pierna_sentado.mp4", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "/curl_de_pierna_sentado.jpg" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Funcional", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/aductor.jpg" } },
            { "id": "l2m3n4o5", "name": "Glúteo", "series": 3, "reps": 15, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Funcional", "videoUrl": "gluteo.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/gluteo.jpg" } },
            { "id": "p6q7r8s9", "name": "Extensión de Espalda", "series": 3, "reps": 15, "time": null, "muscle": { "name": "lumbar", "imgUrl": "/lumbar" }, "zone": "Peso integrado", "videoUrl": "/extension_de_espalda.mp4", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "/extension_de_espalda.jpg" } },
            { "id": "w4x5y6z7", "name": "Clase PE@PF", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "Funcional", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } },
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
            { "id": "w4x5y6z7", "name": "Clase PE@PF a elegir", "series": null, "reps": 1, "time": { "by": 0, "unit": "Libre" }, "muscle": { "name": "Todo el cuerpo", "imgUrl": "/whole_body" }, "zone": "PE@PF", "videoUrl": "", "apparatus": { "name": "Clase grupal", "imgUrl": "" } }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Nivel 3",
      "totalExercises": 18,
      "frequency": {
        "total": 4,
        "label": "días por semana"
      },
      "generalFocus": "Alta Intensidad - Torso/Pierna",
      "categoriesZone": [
        "Peso integrado",
        "Funcional",
        "Cardio",
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
            { "id": "a1b2c3d4", "name": "Press de hombro", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "t2u3v4w5", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/hammer_strength_shoulder_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammer_strength_shoulder_press.png" } },
            { "id": "x6y7z8a9", "name": "Hammer Strength Chest Press", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/hammers_trength_chest_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammers_trength_chest_press.jpg" } },
            { "id": "b1c2d3e4", "name": "Hammer Strength incline Chest", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/press_de_pecho_en_maquina.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/press_de_pecho_en_maquina.png" } },
            { "id": "f5g6h7i8", "name": "Curl de Biceps (predicador)", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_bicep_predicador.mp4", "apparatus": { "name": "Banco predicador", "imgUrl": "/curl_de_bicep_predicador.jpg" } },
            { "id": "i9j1k2l3", "name": "Curl de Biceps", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Tren inferior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte inferior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Peso integrado", "videoUrl": "/prensa_de_pierna.mp4", "apparatus": { "name": "Máquina de prensa", "imgUrl": "/prensa_de_pierna.jpg" } },
            { "id": "l2m3n4o5", "name": "Glúteo", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "/gluteo.mp4", "apparatus": { "name": "Máquina de glúteos", "imgUrl": "/gluteo.jpg" } },
            { "id": "c2d3e4f5", "name": "Extensión de Cuadricep", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_cuadriceps.mp4", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "/extension_de_cuadriceps.jpg" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Funcional", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina o peso corporal", "imgUrl": "/aductor.jpg" } },
            { "id": "g6h7i8j9", "name": "Curl de pierna Sentado", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Femoral", "imgUrl": "/femoral" }, "zone": "Peso integrado", "videoUrl": "/curl_de_pierna_sentado.mp4", "apparatus": { "name": "Máquina de curl femoral", "imgUrl": "/curl_de_pierna_sentado.jpg" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "/extension_de_gemelos.mp4", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "/extension_de_gemelos.jpg" } },
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Descanso",
          "indicationsPreRoutine": {
            "heating": "",
            "cooling": "",
          },
          "exercises": []
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Tren superior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/jalon_al_pecho.mp4", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "/jalon_al_pecho.jpg" } },
            { "id": "j3k4l5m6", "name": "Remo en Polea", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/remo_en_polea.mp4", "apparatus": { "name": "Máquina de poleas", "imgUrl": "/remo_en_polea.jpg" } },
            { "id": "p6q7r8s9", "name": "Extensión de espalda", "series": 4, "reps": 10, "time": null, "muscle": { "name": "lumbar", "imgUrl": "/lumbar" }, "zone": "Peso integrado", "videoUrl": "/extension_de_espalda.mp4", "apparatus": { "name": "Máquina de extensión lumbar", "imgUrl": "/extension_de_espalda.jpg" } },
            { "id": "m4n5o6p7", "name": "Press de triceps", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "n5o6p7q8", "name": "Extensión de Tricep en Polea", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_triceps_en_polea.mp4", "apparatus": { "name": "Máquina de poleas", "imgUrl": "/extension_de_triceps_en_polea.png" } },
            { "id": "r9s1t2u3", "name": "Plancha con flexión y extensión de codos", "series": 4, "reps": 10, "time": null, "muscle": { "name": "Abdomen", "imgUrl": "/abdomen" }, "zone": "Funcional", "videoUrl": "/plancha_con_flexion_de_codos.mp4", "apparatus": { "name": "Tapete", "imgUrl": "/plancha_con_flexion_de_codos.jpg" } },
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Nivel 4",
      "totalExercises": 18,
      "frequency": {
        "total": 4,
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
          "focus": "Tren superior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "a1b2c3d4", "name": "Press de Hombro", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/press_de_hombro.mp4", "apparatus": { "name": "Máquina o mancuernas", "imgUrl": "/press_de_hombro.jpg" } },
            { "id": "t2u3v4w5", "name": "Hammer Strength Shoulder Press", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Hombros (frontal y lateral)", "imgUrl": "/hombros_frontal_lateral" }, "zone": "Peso integrado", "videoUrl": "/hammer_strength_shoulder_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammer_strength_shoulder_press.png" } },
            { "id": "x6y7z8a9", "name": "Hammer Strength Chest Press", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/hammers_trength_chest_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammers_trength_chest_press.jpg" } },
            { "id": "b1c2d3e4", "name": "Hammer Strength incline Chest", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pectoral", "imgUrl": "/pectoral" }, "zone": "Peso integrado", "videoUrl": "/hammers_trength_incline_chest_press.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammers_trength_incline_chest_press.jpg" } },
            { "id": "f5g6h7i8", "name": "Curl de Bicep Predicador", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_bicep_predicador.mp4", "apparatus": { "name": "Banco predicador", "imgUrl": "/curl_de_bicep_predicador.jpg" } },
            { "id": "i9j1k2l3", "name": "Curl de Bicep", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Biceps", "imgUrl": "/biceps" }, "zone": "Peso integrado", "videoUrl": "/curl_de_biceps.mp4", "apparatus": { "name": "Mancuernas o máquina", "imgUrl": "/curl_de_biceps.jpg" } },
          ]
        },
        {
          "id": 2,
          "name": "Día 2",
          "focus": "Tren inferior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte inferior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "d3e4f5g6", "name": "Desplante en TRX", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Funcional", "videoUrl": "/desplante_trx.mp4", "apparatus": { "name": "TRX", "imgUrl": "/desplante_trx.png" } },
            { "id": "h7i8j9k1", "name": "Prensa de Pierna", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps/glúteo/femoral", "imgUrl": "/cuadricep_gluteo_femoral" }, "zone": "Peso integrado", "videoUrl": "/prensa_de_pierna.mp4", "apparatus": { "name": "Máquina de prensa", "imgUrl": "/prensa_de_pierna.jpg" } },
            { "id": "c2d3e4f5", "name": "Extensión de Cuádricep", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Cuádriceps", "imgUrl": "/cuadriceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_cuadriceps.mp4", "apparatus": { "name": "Máquina de extensiones", "imgUrl": "/extension_de_cuadriceps.jpg" } },
            { "id": "k1l2m3n4", "name": "Aductor", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Aductores", "imgUrl": "/aductores" }, "zone": "Peso integrado", "videoUrl": "/aductor.mp4", "apparatus": { "name": "Máquina de aductores", "imgUrl": "/aductor.jpg" } },
            { "id": "o5p6q7r8", "name": "Abductor", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Glúteo", "imgUrl": "/gluteo" }, "zone": "Peso integrado", "videoUrl": "abductor.mp4", "apparatus": { "name": "Máquina de abductores", "imgUrl": "/abductor.jpg" } },
            { "id": "s9t1u2v3", "name": "Extensión de Gemelos", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Pantorrilla", "imgUrl": "/pantorrilla" }, "zone": "Peso integrado", "videoUrl": "/extension_de_gemelos.mp4", "apparatus": { "name": "Máquina para pantorrillas", "imgUrl": "/extension_de_gemelos.jpg" } },
          ]
        },
        {
          "id": 3,
          "name": "Día 3",
          "focus": "Descanso",
          "indicationsPreRoutine": {
            "heating": "string",
            "cooling": "string",
          },
          "exercises": []
        },
        {
          "id": 4,
          "name": "Día 4",
          "focus": "Tren superior",
          "indicationsPreRoutine": {
            "heating": "Estiramientos de la parte superior del cuerpo.",
            "cooling": "Usa la máquina elíptica u otro aparato del área de cardio.",
          },
          "exercises": [
            { "id": "z8a9b1c2", "name": "Jalón al Pecho", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/jalon_al_pecho.mp4", "apparatus": { "name": "Máquina de jalón al pecho", "imgUrl": "/jalon_al_pecho.jpg" } },
            { "id": "q8r9s1t2", "name": "Remo Sentado", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/remo_sentado.mp4", "apparatus": { "name": "Máquina de remo", "imgUrl": "/remo_sentado.jpg" } },
            { "id": "v3w4x5y6", "name": "Hammer Strength mts remo", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/hummer_strength_mts_remo.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hummer_strength_mts_remo.png" } },
            { "id": "z7a8b9c1", "name": "Hammer Strength Mts front Pulldown", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Espalda (sin lumbar)", "imgUrl": "/espalda" }, "zone": "Peso integrado", "videoUrl": "/hammer_strength_mts_front_pulldown.mp4", "apparatus": { "name": "Hammer Strength", "imgUrl": "/hammer_strength_mts_front_pulldown.png" } },
            { "id": "m4n5o6p7", "name": "Press de Triceps", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/press_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/press_de_triceps.jpg" } },
            { "id": "d2e3f4g5", "name": "Extensión de triceps", "series": 4, "reps": 8, "time": null, "muscle": { "name": "Triceps", "imgUrl": "/triceps" }, "zone": "Peso integrado", "videoUrl": "/extension_de_triceps.mp4", "apparatus": { "name": "Máquina o polea", "imgUrl": "/extension_de_triceps.jpg" } },
          ]
        }
      ]
    }
  ]
}
