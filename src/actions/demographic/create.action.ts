import { ActionError, defineAction } from "astro:actions";
import axios from "axios";
import { z } from "zod";

export const CreateDemographic = defineAction({
  accept: 'json',
  input: z.object({
    gender: z.enum(["male", "female", "other"]),
    range: z.enum(["<18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"]).optional(),
    membership: z.enum(["classic-card", "pf-black-card", "invite"]),
    contact: z.string().optional(),
  }),
  handler: async ({ gender, range, membership, contact = "" }, { cookies, clientAddress, request }) => {

    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;
    const API_USER = process.env.API_USER;
    const URL_BFF = `${API_URL}/api/feedback/demographic-form`;

    const sedeIdCookie = cookies.get('slug')?.value;
    const sessionId = cookies.get('_a')?.value;
    const userAgent = request.headers.get('User-Agent') || 'Desconocido';

    if (!sedeIdCookie || !sessionId) {
      throw new ActionError({ code: 'UNAUTHORIZED' });
    }

    const userContext = {
      ip: clientAddress,
      session_id: sessionId,
      user_agent: userAgent,
    }

    const hasEmailSignal = /[a-zA-Z@.]/.test(contact);

    const data = {
      gender,
      age_range: range,
      membership,
      contact: {
        phone: hasEmailSignal ? "" : contact,
        email: hasEmailSignal ? contact : "",
      },
    }

    const headers = {
      'user-context': Buffer.from(JSON.stringify(userContext), 'utf-8').toString('base64'),
      'Content-Type': 'application/json',
      'api-key': `${API_USER}${API_KEY}`
    }

    try {
      // TODO: Refactor global controller
      const response = await axios.post(URL_BFF, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
      return {
        error: true
      }
    }
  }
})
