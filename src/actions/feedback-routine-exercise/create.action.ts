import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import axios from "axios";

export const CreateFeedbackRoutineExercise = defineAction({
  accept: 'json',
  input: z.object({
    reaction: z.enum(['liked', 'disliked']).nullable(),
    day: z.number(),
    level: z.number(),
    category: z.string(),
    exercise: z.string().nullable(),
    page_path: z.string(),
    query_path: z.string().optional().nullable()
  }),
  handler: async (data_input, { cookies, clientAddress, request }) => {

    console.log(request.headers.get('referer'));

    const sedeIdCookie = cookies.get('slug')?.value;
    const sessionId = cookies.get('_a')?.value;
    const userAgent = request.headers.get('User-Agent') || 'Desconocido';
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;

    if (!sedeIdCookie || !sessionId) {
      throw new ActionError({ code: 'UNAUTHORIZED' });
    }

    const userContext = {
      ip: clientAddress,
      session_id: sessionId,
      user_agent: userAgent,
    }

    const data = {
      value: data_input.reaction,
      routine: data_input.category,
      exercise_id: data_input.exercise,
      level_id: data_input.level,
      day_routine: data_input.day,
      page_path: data_input.page_path,
      query_path: data_input.query_path
    }

    const headers = {
      'user-context': Buffer.from(JSON.stringify(userContext), 'utf-8').toString('base64'),
      'Content-Type': 'application/json',
      'api-key': `${API_USER}${API_KEY}`
    }

    const pathURL = `${API_URL}/api/feedback/routine-or-exercise`;

    try {
      console.log(data);
      // TODO: Refactor global controller
      const response = await axios.post(pathURL, data, { headers });
      return response.data;
    } catch (error) {
      console.log(error);
      return { error: true }
    }
  }
});
